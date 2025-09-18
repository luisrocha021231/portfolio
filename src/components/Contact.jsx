import { useTranslation } from "react-i18next";
import { Mail, Phone, MapPin, Send } from "lucide-react";

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
            className="bg-[#2a2a2b] rounded-xl shadow-lg p-6 flex flex-col justify-center h-full 
                  transition transform hover:scale-[1.02] hover:shadow-2xl"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-green-400" />
                <a
                  href={`mailto:${t("contact.email-content")}`}
                  className="text-lg text-white transition 
                     hover:bg-gradient-to-r hover:from-sky-400 hover:to-green-400 
                     hover:bg-clip-text hover:text-transparent"
                >
                  {t("contact.email-content")}
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-sky-400" />
                <span className="text-lg">{t("contact.phone-content")}</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-green-400" />
                <span className="text-lg">{t("contact.location-content")}</span>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <Send className="w-6 h-6 text-sky-400" />
                <a
                  href={`https://wa.me/${t("contact.phone-link")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-white transition 
                     hover:bg-gradient-to-r hover:from-green-400 hover:to-sky-400 
                     hover:bg-clip-text hover:text-transparent"
                >
                  {t("contact.send-message")}
                </a>
              </div>
            </div>
          </div>

          {/* Mapa embebido */}
          <div
            className="rounded-xl overflow-hidden shadow-lg h-full 
                  transition transform hover:scale-[1.02] hover:shadow-2xl"
          >
            <iframe
              title="Ubicación"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.691264080028!2d-99.6556657!3d19.2826099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d27627c72a1c73%3A0x4b7c2a395f07a0e4!2sToluca%2C%20M%C3%A9xico!5e0!3m2!1ses!2smx!4v1679500472340!5m2!1ses!2smx"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
