import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X, Check, Languages, ChevronDown } from "lucide-react";

const INITIALS = "LR";

const NAV_ITEMS = [
  { key: "navbar.home", href: "#inicio" },
  { key: "navbar.about", href: "#sobremi" },
  { key: "navbar.skills", href: "#skills" },
  { key: "navbar.projects", href: "#proyectos" },
  { key: "navbar.resume", href: "#resume" },
  { key: "navbar.contact", href: "#contacto" },
];

const LANGUAGES = [
  { code: "es", label: "Español" },
  { code: "en", label: "English" },
  // { code: "pt", label: "Português" },
  // { code: "fr", label: "Français" },
];

function AvatarCircle() {
  return (
    <div className="w-9 h-9 rounded-full bg-[#e8e6df] flex items-center justify-center shrink-0">
      <span
        className="text-[13px] font-bold text-[#12141c]"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        {INITIALS}
      </span>
      {/*
      <img src="/image.jpg" alt="" className="w-full h-full rounded-full object-cover" /> */}
    </div>
  );
}

function LanguageSelector({ i18n, variant = "desktop" }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const current = LANGUAGES.find((l) => l.code === i18n.language) || LANGUAGES[0];

  useEffect(() => {
    const onClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onEscape = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onEscape);
    };
  }, []);

  const select = (code) => {
    i18n.changeLanguage(code);
    setOpen(false);
  };

  if (variant === "mobile") {
    return (
      <div className="flex flex-wrap gap-2">
        {LANGUAGES.map((lng) => (
          <button
            key={lng.code}
            onClick={() => select(lng.code)}
            className={`px-3 py-1.5 rounded-full text-[13px] transition-colors duration-200 ${
              lng.code === i18n.language
                ? "bg-[#ec4b6a] text-[#12141c] font-bold"
                : "bg-[#1c1f29] text-[#9a9aa5] hover:text-[#f5f5f7]"
            }`}
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {lng.label}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="h-10 pl-3 pr-2.5 rounded-full bg-[#1c1f29] hover:bg-[#242833] flex items-center gap-1.5 transition-colors duration-200"
      >
        <Languages size={16} strokeWidth={1.75} className="text-[#f5f5f7]" />
        <span
          className="text-[12px] font-bold text-[#f5f5f7]"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {current.code.toUpperCase()}
        </span>
        <ChevronDown
          size={14}
          strokeWidth={2}
          className={`text-[#9a9aa5] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <div
        role="listbox"
        className={`absolute right-0 top-full mt-2 min-w-[160px] rounded-xl bg-[#1c1f29] border border-white/[0.08] py-1.5 shadow-xl origin-top-right transition-all duration-150 ${
          open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {LANGUAGES.map((lng) => {
          const active = lng.code === i18n.language;
          return (
            <button
              key={lng.code}
              role="option"
              aria-selected={active}
              onClick={() => select(lng.code)}
              className="w-full flex items-center justify-between gap-3 px-3.5 py-2 hover:bg-white/[0.05] transition-colors duration-150"
            >
              <span
                className={`text-[13px] ${active ? "text-[#f5f5f7]" : "text-[#9a9aa5]"}`}
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {lng.label}
              </span>
              {active && <Check size={14} strokeWidth={2.5} className="text-[#ec4b6a]" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#inicio");

  useEffect(() => {
    const syncHash = () => {
      setActiveHash(window.location.hash || "#inicio");
      setIsOpen(false);
    };
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-[#12141c] border-b border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="h-20 flex items-center justify-between">
          {/* Avatar + nombre */}
          <a href="#inicio" className="flex items-center gap-3 select-none">
            <AvatarCircle />
            <span
              className="text-[15px] font-bold text-[#f5f5f7]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {t("navbar.title")}
            </span>
            <span className="w-4 h-4 rounded-full bg-[#ec4b6a] flex items-center justify-center">
              <Check size={11} strokeWidth={3} className="text-[#12141c]" />
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-7">
              {NAV_ITEMS.map((item) => {
                const active = activeHash === item.href;
                return (
                  <li key={item.key}>
                    <a href={item.href} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      <span
                        className={`text-[14px] pb-1 border-b-2 ${
                          active
                            ? "text-[#f5f5f7] border-[#ec4b6a]"
                            : "text-[#9a9aa5] border-transparent hover:text-[#f5f5f7]"
                        } transition-colors duration-200`}
                      >
                        {t(item.key)}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>

            <LanguageSelector i18n={i18n} variant="desktop" />
          </div>

          {/* Botón menú móvil */}
          <button
            className="lg:hidden text-[#f5f5f7] p-2 -mr-2"
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((v) => !v)}
          >
            {isOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Panel móvil */}
      <div
        className={`lg:hidden absolute inset-x-0 top-20 origin-top transition-all duration-200
          ${isOpen ? "opacity-100 scale-y-100" : "pointer-events-none opacity-0 scale-y-95"}`}
      >
        <div className="bg-[#12141c] border-b border-white/[0.06]">
          <ul className="flex flex-col px-6 py-4">
            {NAV_ITEMS.map((item, i) => {
              const active = activeHash === item.href;
              return (
                <li key={item.key} className={i !== 0 ? "border-t border-white/[0.06]" : ""}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-4"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    <span className={`text-[15px] ${active ? "text-[#f5f5f7]" : "text-[#9a9aa5]"}`}>
                      {t(item.key)}
                    </span>
                  </a>
                </li>
              );
            })}
            <li className="border-t border-white/[0.06] pt-4">
              <LanguageSelector i18n={i18n} variant="mobile" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}