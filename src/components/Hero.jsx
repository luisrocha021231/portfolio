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
      <div className="mb-6 w-full px-2 sm:px-0">
        <BugBanner />
      </div>

      {/* Card central con glow */}
      <div
        className="relative w-full max-w-md rounded-2xl p-8 text-center
          bg-gradient-to-br from-[#1e1e1f]/80 to-[#2a2a2b]/80
          backdrop-blur-lg border border-sky-400/40 shadow-xl
          transition hover:border-sky-400/80 hover:shadow-sky-400/30"
      >
        {/* Glow decorativo */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-sky-400/10 to-green-400/10 blur-2xl opacity-40 pointer-events-none"></div>

        {/* Avatar */}
        <div className="relative w-32 h-32 mx-auto mb-4 z-10">
          <img src="/Avatar.png" alt="Perfil" className="rounded-2xl shadow-lg" />
          <span className="absolute bottom-2 right-2 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#37f712] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-[#37f712]"></span>
          </span>
        </div>

        {/* Nombre y rol */}
        <h1 className="text-2xl font-bold relative z-10">{t("hero.name")}</h1>
        <p className="bg-gradient-to-r from-sky-400 to-green-400 bg-clip-text text-transparent text-sm px-3 py-1 rounded-lg inline-block mt-2 relative z-10">
          {t("hero.desc")}
        </p>

        <hr className="my-6 border-gray-700 relative z-10" />

        {/* Info de contacto */}
        <div className="space-y-4 text-left relative z-10">
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

        <hr className="my-6 border-gray-700 relative z-10" />

        {/* Redes sociales */}
        <div className="flex justify-center space-x-4 text-green-400 relative z-10">
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
