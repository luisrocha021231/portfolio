import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng) => i18n.changeLanguage(lng);

  // Cerrar menú en mobile al cambiar de sección
  useEffect(() => {
    const close = () => setIsOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-[#1e1e1f]/95 backdrop-blur border-b border-white/10">
      {/* Barra principal */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Título */}
          <h1 className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-green-400 bg-clip-text text-transparent select-none">
            {t("navbar.title")}
          </h1>

          {/* Desktop: links (solo en ≥1024px) */}
          <ul className="hidden lg:flex items-center gap-6">
            <li><a href="#inicio" className="font-bold bg-gradient-to-r from-sky-400 to-green-400 bg-clip-text text-transparent hover:text-white">{t("navbar.home")}</a></li>
            <li><a href="#sobremi" className="font-bold bg-gradient-to-r from-sky-400 to-green-400 bg-clip-text text-transparent hover:text-white">{t("navbar.about")}</a></li>
            <li><a href="#favorites" className="font-bold bg-gradient-to-r from-sky-400 to-green-400 bg-clip-text text-transparent hover:text-white">{t("navbar.favorites")}</a></li>
            <li><a href="#skills" className="font-bold bg-gradient-to-r from-sky-400 to-green-400 bg-clip-text text-transparent hover:text-white">{t("navbar.skills")}</a></li>
            <li><a href="#proyectos" className="font-bold bg-gradient-to-r from-sky-400 to-green-400 bg-clip-text text-transparent hover:text-white">{t("navbar.projects")}</a></li>
            <li><a href="#resume" className="font-bold bg-gradient-to-r from-sky-400 to-green-400 bg-clip-text text-transparent hover:text-white">{t("navbar.resume")}</a></li>
            <li><a href="#contacto" className="font-bold bg-gradient-to-r from-sky-400 to-green-400 bg-clip-text text-transparent hover:text-white">{t("navbar.contact")}</a></li>

            {/* Idiomas */}
            <li>
              <div className="flex items-center gap-2 bg-[#2a2a2b] rounded-lg p-1">
                <button
                  onClick={() => changeLanguage("es")}
                  className={`px-3 py-1 text-sm font-semibold rounded-md transition ${
                    i18n.language === "es"
                      ? "bg-gradient-to-r from-sky-400 to-green-400 text-black shadow"
                      : "bg-gradient-to-r from-sky-400 to-green-400 bg-clip-text text-transparent hover:text-white"
                  }`}
                >
                  ES
                </button>
                <button
                  onClick={() => changeLanguage("en")}
                  className={`px-3 py-1 text-sm font-semibold rounded-md transition ${
                    i18n.language === "en"
                      ? "bg-gradient-to-r from-sky-400 to-green-400 text-black shadow"
                      : "bg-gradient-to-r from-sky-400 to-green-400 bg-clip-text text-transparent hover:text-white"
                  }`}
                >
                  EN
                </button>
              </div>
            </li>
          </ul>

          {/* Botón hamburguesa en móvil / tablet */}
          <button
            className="lg:hidden text-sky-400 p-2 -mr-2"
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((v) => !v)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Panel móvil (visible en <1024px) */}
      <div
        className={`lg:hidden absolute inset-x-0 top-16 origin-top transition-all duration-200
          ${isOpen ? "opacity-100 scale-y-100" : "pointer-events-none opacity-0 scale-y-95"}`}
      >
        <div className="bg-[#1e1e1f] border-b border-white/10 shadow-xl">
          <ul className="flex flex-col gap-4 px-7 py-5">
            <li><a href="#inicio" onClick={() => setIsOpen(false)} className="block font-bold bg-gradient-to-r from-sky-400 to-green-400 bg-clip-text text-transparent hover:text-white">{t("navbar.home")}</a></li>
            <li><a href="#sobremi" onClick={() => setIsOpen(false)} className="block font-bold bg-gradient-to-r from-sky-400 to-green-400 bg-clip-text text-transparent hover:text-white">{t("navbar.about")}</a></li>
            <li><a href="#favorites" onClick={() => setIsOpen(false)} className="block font-bold bg-gradient-to-r from-sky-400 to-green-400 bg-clip-text text-transparent hover:text-white">{t("navbar.favorites")}</a></li>
            <li><a href="#skills" onClick={() => setIsOpen(false)} className="block font-bold bg-gradient-to-r from-sky-400 to-green-400 bg-clip-text text-transparent hover:text-white">{t("navbar.skills")}</a></li>
            <li><a href="#proyectos" onClick={() => setIsOpen(false)} className="block font-bold bg-gradient-to-r from-sky-400 to-green-400 bg-clip-text text-transparent hover:text-white">{t("navbar.projects")}</a></li>
            <li><a href="#resume" onClick={() => setIsOpen(false)} className="block font-bold bg-gradient-to-r from-sky-400 to-green-400 bg-clip-text text-transparent hover:text-white">{t("navbar.resume")}</a></li>
            <li><a href="#contacto" onClick={() => setIsOpen(false)} className="block font-bold bg-gradient-to-r from-sky-400 to-green-400 bg-clip-text text-transparent hover:text-white">{t("navbar.contact")}</a></li>

            {/* Idiomas en móvil */}
            <li>
              <div className="flex items-center gap-2 bg-[#2a2a2b] rounded-lg p-1 w-fit">
                <button
                  onClick={() => changeLanguage("es")}
                  className={`px-3 py-1 text-sm font-semibold rounded-md transition ${
                    i18n.language === "es"
                      ? "bg-gradient-to-r from-sky-400 to-green-400 text-black shadow"
                      : "bg-gradient-to-r from-sky-400 to-green-400 bg-clip-text text-transparent hover:text-white"
                  }`}
                >
                  ES
                </button>
                <button
                  onClick={() => changeLanguage("en")}
                  className={`px-3 py-1 text-sm font-semibold rounded-md transition ${
                    i18n.language === "en"
                      ? "bg-gradient-to-r from-sky-400 to-green-400 text-black shadow"
                      : "bg-gradient-to-r from-sky-400 to-green-400 bg-clip-text text-transparent hover:text-white"
                  }`}
                >
                  EN
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
