import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="bg-[#1e1e1f] shadow fixed w-full top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Título */}
        <h1 className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-green-400 bg-clip-text text-transparent">
          {t("navbar.title")}
        </h1>

        {/* Botón hamburguesa en móvil */}
        <button
          className="md:hidden text-sky-400 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Links en escritorio */}
        <ul className="hidden md:flex space-x-6 items-center">
          <li><a href="#inicio" className="font-bold bg-gradient-to-r from-sky-400 to-green-400 bg-clip-text text-transparent hover:text-white">{t("navbar.home")}</a></li>
          <li><a href="#sobremi" className="font-bold bg-gradient-to-r from-sky-400 to-green-400 bg-clip-text text-transparent hover:text-white">{t("navbar.about")}</a></li>
          <li><a href="#skills" className="font-bold bg-gradient-to-r from-sky-400 to-green-400 bg-clip-text text-transparent hover:text-white">{t("navbar.skills")}</a></li>
          <li><a href="#proyectos" className="font-bold bg-gradient-to-r from-sky-400 to-green-400 bg-clip-text text-transparent hover:text-white">{t("navbar.projects")}</a></li>
          <li><a href="#resume" className="font-bold bg-gradient-to-r from-sky-400 to-green-400 bg-clip-text text-transparent hover:text-white">{t("navbar.resume")}</a></li>
          <li><a href="#contacto" className="font-bold bg-gradient-to-r from-sky-400 to-green-400 bg-clip-text text-transparent hover:text-white">{t("navbar.contact")}</a></li>
          
          {/* Selector idioma */}
          <li>
            <div className="flex items-center gap-2 bg-[#2a2a2b] rounded-lg p-1">
              <button
                onClick={() => changeLanguage("es")}
                className={`px-3 py-1 text-sm font-semibold rounded-md transition
                  ${i18n.language === "es"
                    ? "bg-gradient-to-r from-sky-400 to-green-400 text-black shadow"
                    : "bg-gradient-to-r from-sky-400 to-green-400 bg-clip-text text-transparent hover:text-white"
                  }`}
              >
                ES
              </button>
              <button
                onClick={() => changeLanguage("en")}
                className={`px-3 py-1 text-sm font-semibold rounded-md transition
                  ${i18n.language === "en"
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

      {/* Links en móvil */}
      {isOpen && (
        <div className="md:hidden bg-[#1e1e1f] px-6 pb-4">
          <ul className="flex flex-col space-y-4">
            <li><a href="#inicio" onClick={() => setIsOpen(false)} className="font-bold bg-gradient-to-r from-sky-400 to-green-400 bg-clip-text text-transparent hover:text-white">{t("navbar.home")}</a></li>
            <li><a href="#sobremi" onClick={() => setIsOpen(false)} className="font-bold bg-gradient-to-r from-sky-400 to-green-400 bg-clip-text text-transparent hover:text-white">{t("navbar.about")}</a></li>
            <li><a href="#skills" onClick={() => setIsOpen(false)} className="font-bold bg-gradient-to-r from-sky-400 to-green-400 bg-clip-text text-transparent hover:text-white">{t("navbar.skills")}</a></li>
            <li><a href="#proyectos" onClick={() => setIsOpen(false)} className="font-bold bg-gradient-to-r from-sky-400 to-green-400 bg-clip-text text-transparent hover:text-white">{t("navbar.projects")}</a></li>
            <li><a href="#resume" onClick={() => setIsOpen(false)} className="font-bold bg-gradient-to-r from-sky-400 to-green-400 bg-clip-text text-transparent hover:text-white">{t("navbar.resume")}</a></li>
            <li><a href="#contacto" onClick={() => setIsOpen(false)} className="font-bold bg-gradient-to-r from-sky-400 to-green-400 bg-clip-text text-transparent hover:text-white">{t("navbar.contact")}</a></li>

            {/* Idiomas en móvil */}
            <li>
              <div className="flex items-center gap-2 bg-[#2a2a2b] rounded-lg p-1 w-fit">
                <button
                  onClick={() => changeLanguage("es")}
                  className={`px-3 py-1 text-sm font-semibold rounded-md transition
                    ${i18n.language === "es"
                      ? "bg-gradient-to-r from-sky-400 to-green-400 text-black shadow"
                      : "bg-gradient-to-r from-sky-400 to-green-400 bg-clip-text text-transparent hover:text-white"
                    }`}
                >
                  ES
                </button>
                <button
                  onClick={() => changeLanguage("en")}
                  className={`px-3 py-1 text-sm font-semibold rounded-md transition
                    ${i18n.language === "en"
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
      )}
    </nav>
  );
}
