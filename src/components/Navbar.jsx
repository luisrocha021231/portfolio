import { useState, useEffect, useRef, useId } from "react";
import { useTranslation } from "react-i18next";
import {Menu, X, Check, Languages, ChevronDown, Home, User, Layers, FolderOpen, FileText, Mail,} from "lucide-react";

import "../styles/md3-tokens.css";
import "../styles/md3-base.css";
import "../styles/Navbar.css";

const INITIALS = "LR";

const NAV_ITEMS = [
  { key: "navbar.home", href: "#inicio", icon: Home },
  { key: "navbar.about", href: "#sobremi", icon: User },
  { key: "navbar.skills", href: "#skills", icon: Layers },
  { key: "navbar.projects", href: "#proyectos", icon: FolderOpen },
  { key: "navbar.resume", href: "#resume", icon: FileText },
  { key: "navbar.contact", href: "#contacto", icon: Mail },
];

const NAV_HREFS = NAV_ITEMS.map((item) => item.href);

const LANGUAGES = [
  { code: "es", label: "Español" },
  { code: "en", label: "English" },
  // { code: "pt", label: "Português" },
  // { code: "fr", label: "Français" },
];

const DESKTOP_QUERY = "(min-width: 1024px)";

/** Sección activa */
function useActiveSection(hrefs, fallback) {
  const [active, setActive] = useState(fallback);

  useEffect(() => {
    const syncHash = () => {
      const { hash } = window.location;
      if (hrefs.includes(hash)) setActive(hash);
    };
    syncHash();
    window.addEventListener("hashchange", syncHash);

    const sections = hrefs
      .map((href) => document.getElementById(href.slice(1)))
      .filter(Boolean);

    const compute = () => {
      if (!sections.length) return;
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      const line = Math.min(window.innerHeight * 0.45, 200);
      let current = sections[0];
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= line) current = section;
      }
      if (atBottom) current = sections[sections.length - 1];
      setActive(`#${current.id}`);
    };

    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        compute();
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("hashchange", syncHash);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [hrefs]);

  return active;
}

function useScrolled() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return scrolled;
}

function Brand({ title }) {
  return (
    <a
      href="#inicio"
      className="md3-brand md3-focus flex min-w-0 items-center gap-3 select-none"
    >
      <span className="md3-avatar md3-label-large flex shrink-0 items-center justify-center">
        {INITIALS}
        {/* <img src="/image.jpg" alt="" className="h-full w-full rounded-full object-cover" /> */}
      </span>
      <span className="md3-title-medium truncate">{title}</span>
      {/* <span className="md3-badge flex shrink-0 items-center justify-center" aria-hidden="true">
        <Check size={11} strokeWidth={3} />
      </span> */}
    </a>
  );
}

/** Menú */
function LanguageMenu({ i18n, label }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const triggerRef = useRef(null);
  const itemRefs = useRef([]);
  const menuId = useId();

  // "es-MX" debe resolver "es".
  const activeCode = (i18n.resolvedLanguage || i18n.language || "").split("-")[0];
  const currentIndex = Math.max(
    0,
    LANGUAGES.findIndex((lng) => lng.code === activeCode)
  );
  const current = LANGUAGES[currentIndex];

  useEffect(() => {
    if (!open) return undefined;

    itemRefs.current[currentIndex]?.focus();

    const onPointerDown = (e) => {
      if (!rootRef.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open, currentIndex]);

  const close = ({ restoreFocus = true } = {}) => {
    setOpen(false);
    if (restoreFocus) triggerRef.current?.focus();
  };

  const select = (code) => {
    i18n.changeLanguage(code);
    close();
  };

  const onTriggerKeyDown = (e) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      setOpen(true);
    }
  };

  const onMenuKeyDown = (e) => {
    const items = itemRefs.current.filter(Boolean);
    const index = items.indexOf(document.activeElement);
    const focusAt = (i) => items[(i + items.length) % items.length]?.focus();

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        focusAt(index + 1);
        break;
      case "ArrowUp":
        e.preventDefault();
        focusAt(index - 1);
        break;
      case "Home":
        e.preventDefault();
        focusAt(0);
        break;
      case "End":
        e.preventDefault();
        focusAt(items.length - 1);
        break;
      case "Escape":
        e.preventDefault();
        close();
        break;
      case "Tab":
        close({ restoreFocus: false });
        break;
      default:
    }
  };

  return (
    <div className="relative shrink-0" ref={rootRef}>
      <button
        ref={triggerRef}
        type="button"
        className="md3-outlined-button md3-state md3-label-large"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={`${label}: ${current.label}`}
        onClick={() => setOpen((v) => !v)}
        onKeyDown={onTriggerKeyDown}
      >
        <Languages size={18} strokeWidth={1.75} className="md3-outlined-button__icon" aria-hidden="true" />
        <span aria-hidden="true">{current.code.toUpperCase()}</span>
        <ChevronDown
          size={18}
          strokeWidth={1.75}
          className="md3-outlined-button__icon md3-outlined-button__chevron"
          aria-hidden="true"
        />
      </button>

      <div
        id={menuId}
        role="menu"
        aria-label={label}
        data-open={open}
        className="md3-menu"
        onKeyDown={onMenuKeyDown}
      >
        {LANGUAGES.map((lng, i) => {
          const checked = lng.code === current.code;
          return (
            <button
              key={lng.code}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              type="button"
              role="menuitemradio"
              aria-checked={checked}
              tabIndex={-1}
              lang={lng.code}
              className="md3-menu-item md3-state md3-label-large"
              onClick={() => select(lng.code)}
            >
              <span className="md3-menu-item__check" aria-hidden="true">
                {checked && <Check size={20} strokeWidth={2} />}
              </span>
              {lng.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/** Navigation drawer modal */
function NavigationDrawer({ open, onClose, title, activeHash, t }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      className="md3-drawer"
      aria-label={t("navbar.menu", "Menú de navegación")}
      onClose={onClose}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="md3-drawer__sheet">
        <div className="md3-drawer__header flex items-center justify-between gap-2">
          <span className="md3-title-small truncate">{title}</span>
          <button
            type="button"
            className="md3-icon-button md3-state shrink-0"
            aria-label={t("navbar.closeMenu", "Cerrar menú")}
            onClick={onClose}
          >
            <X size={24} strokeWidth={1.75} aria-hidden="true" />
          </button>
        </div>

        <nav aria-label={t("navbar.primary", "Principal")}>
          <ul className="flex flex-col">
            {NAV_ITEMS.map(({ key, href, icon: Icon }) => (
              <li key={key}>
                <a
                  href={href}
                  aria-current={activeHash === href ? "location" : undefined}
                  className="md3-drawer-item md3-state md3-label-large"
                  onClick={onClose}
                >
                  <Icon size={24} strokeWidth={1.75} aria-hidden="true" />
                  {t(key)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </dialog>
  );
}

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const activeHash = useActiveSection(NAV_HREFS, "#inicio");
  const scrolled = useScrolled();
  const title = t("navbar.title");

  useEffect(() => {
    const close = () => setIsOpen(false);
    const desktop = window.matchMedia(DESKTOP_QUERY);
    window.addEventListener("hashchange", close);
    desktop.addEventListener("change", close);
    return () => {
      window.removeEventListener("hashchange", close);
      desktop.removeEventListener("change", close);
    };
  }, []);

  return (
    <header
      className="md3-top-app-bar fixed inset-x-0 top-0 z-50"
      data-scrolled={scrolled}
    >
      <div className="md3-top-app-bar__row mx-auto flex max-w-7xl items-center gap-1 pl-1 pr-4 lg:gap-6 lg:px-10">
        {/* Icono de navegación */}
        <div className="shrink-0 lg:hidden">
          <button
            type="button"
            className="md3-icon-button md3-state"
            aria-label={t("navbar.openMenu", "Abrir menú")}
            aria-haspopup="dialog"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(true)}
          >
            <Menu size={24} strokeWidth={1.75} aria-hidden="true" />
          </button>
        </div>

        <Brand title={title} />

        {/* Destinos */}
        <nav
          aria-label={t("navbar.primary", "Principal")}
          className="ml-auto hidden lg:block"
        >
          <ul className="flex items-center gap-1">
            {NAV_ITEMS.map(({ key, href }) => (
              <li key={key}>
                <a
                  href={href}
                  aria-current={activeHash === href ? "location" : undefined}
                  className="md3-nav-item md3-state md3-label-large"
                >
                  {t(key)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Acciones */}
        <div className="ml-auto flex items-center lg:ml-0">
          <LanguageMenu i18n={i18n} label={t("navbar.language", "Idioma")} />
        </div>
      </div>

      <NavigationDrawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        title={title}
        activeHash={activeHash}
        t={t}
      />
    </header>
  );
}