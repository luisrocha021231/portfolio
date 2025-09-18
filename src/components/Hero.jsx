import { Mail, Phone, MapPin, Linkedin, Github, MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import BugBanner from "./BugBanner";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="inicio"
      className="relative h-screen flex flex-col justify-center items-center bg-[#121212] text-white px-4"
    >
      {/* Banner de bugs flotando arriba del card */}
      <div className="mb-6 w-full max-w-md">
        <BugBanner />
      </div>

      {/* Card central */}
      <div className="bg-[#1e1e1f] rounded-2xl shadow-lg p-8 w-full max-w-md text-center">
        
        {/* Avatar */}
        <div className="relative w-32 h-32 mx-auto mb-4">
          <img src="/Avatar.png" alt="Perfil" className="rounded-2xl shadow-lg" />
          <span className="absolute bottom-2 right-2 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#37f712] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-[#37f712]"></span>
          </span>
        </div>

        {/* Nombre y rol */}
        <h1 className="text-2xl font-bold">{t("hero.name")}</h1>
        <p className="bg-gradient-to-r from-sky-400 to-green-400 bg-clip-text text-transparent text-sm px-3 py-1 rounded-lg inline-block mt-2">
          {t("hero.desc")}
        </p>

        <hr className="my-6 border-gray-700" />

        {/* Info de contacto */}
        <div className="space-y-4 text-left">
          <div className="flex items-center space-x-3">
            <div className="bg-gray-700 p-2 rounded-lg">
              <Mail className="w-5 h-5 text-green-400" />
            </div>
            <div>
              <p className="text-xs text-gray-400">{t("hero.email-title")}</p>
              <p className="text-sm">{t("hero.email-content")}</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="bg-gray-700 p-2 rounded-lg">
              <Phone className="w-5 h-5 text-green-400" />
            </div>
            <div>
              <p className="text-xs text-gray-400">{t("hero.phone-title")}</p>
              <p className="text-sm">{t("hero.phone-content")}</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="bg-gray-700 p-2 rounded-lg">
              <MapPin className="w-5 h-5 text-green-400" />
            </div>
            <div>
              <p className="text-xs text-gray-400">{t("hero.location-title")}</p>
              <p className="text-sm">{t("hero.location-content")}</p>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-700" />

        {/* Redes sociales */}
        <div className="flex justify-center space-x-4 text-gray-400">
          <a href="https://linkedin.com/in/luisrocharonq" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6 hover:text-sky-400" />
          </a>
          <a href="https://github.com/luisrocha021231" target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6 hover:text-sky-400" />
          </a>
          <a href="https://wa.me/527122109471" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-6 h-6 hover:text-sky-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
