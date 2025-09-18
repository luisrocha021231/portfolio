import { useTranslation } from "react-i18next";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import MapboxMap from "./MapboxMap";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contacto" className="py-20 bg-[#1e1e1f] text-white">
      <div className="container mx-auto px-6">
        {/* Título */}
        <h2 className="mb-12 text-center">
          <span className="text-3xl bg-gradient-to-r from-sky-400 to-green-400 bg-clip-text text-transparent font-bold">
            {t("contact.title")}
          </span>
        </h2>

        {/* Grid: Información y Mapa */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Tarjeta con info */}
          <div
            className="relative rounded-2xl p-6 flex flex-col justify-center h-full
    bg-gradient-to-br from-[#1e1e1f]/80 to-[#2a2a2b]/80
    backdrop-blur-lg border border-sky-400/30 shadow-xl
    transition transform hover:scale-[1.03] hover:shadow-sky-400/20 hover:border-sky-400/60"
          >
            {/* Glow decorativo */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-sky-400/10 to-green-400/10 blur-2xl opacity-40 pointer-events-none"></div>

            <div className="relative space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4 group">
                <Mail className="w-7 h-7 text-sky-400 group-hover:scale-110 transition-transform" />
                <a
                  href={`mailto:${t("contact.email-content")}`}
                  className="text-lg font-medium text-white transition 
          hover:bg-gradient-to-r hover:from-sky-400 hover:to-green-400 
          hover:bg-clip-text hover:text-transparent"
                >
                  {t("contact.email-content")}
                </a>
              </div>

              {/* Teléfono */}
              <div className="flex items-center gap-4 group">
                <Phone className="w-7 h-7 text-green-400 group-hover:scale-110 transition-transform" />
                <a
                  href={`tel:${t("contact.phone-content")}`}
                  className="text-lg font-medium text-white transition 
          hover:bg-gradient-to-r hover:from-green-400 hover:to-sky-400 
          hover:bg-clip-text hover:text-transparent"
                >
                  {t("contact.phone-content")}
                </a>
              </div>

              {/* Ubicación */}
              <div className="flex items-center gap-4 group">
                <MapPin className="w-7 h-7 text-sky-400 group-hover:scale-110 transition-transform" />
                <a
                  href="https://www.google.com/maps?q=Toluca,+México"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium text-white transition 
          hover:bg-gradient-to-r hover:from-sky-400 hover:to-green-400 
          hover:bg-clip-text hover:text-transparent"
                >
                  {t("contact.location-content")}
                </a>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-4 group mt-4">
                <Send className="w-7 h-7 text-green-400 group-hover:scale-110 transition-transform" />
                <a
                  href={`https://wa.me/${t("contact.phone-link")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium text-white transition 
          hover:bg-gradient-to-r hover:from-green-400 hover:to-sky-400 
          hover:bg-clip-text hover:text-transparent"
                >
                  {t("contact.send-message")}
                </a>
              </div>
            </div>
          </div>

          {/* Mapa embebido */}
          {/* Mapa con Mapbox */}
<div
  className="relative rounded-2xl overflow-hidden h-full
  bg-gradient-to-br from-[#1e1e1f]/80 to-[#2a2a2b]/80
  backdrop-blur-lg border border-green-400/30 shadow-xl
  transition transform hover:scale-[1.03] hover:shadow-green-400/20 hover:border-green-400/60"
>
  {/* Glow decorativo */}
  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400/10 to-sky-400/10 blur-2xl opacity-40 pointer-events-none"></div>

  <MapboxMap />
</div>

        </div>
      </div>
    </section>
  );
}
