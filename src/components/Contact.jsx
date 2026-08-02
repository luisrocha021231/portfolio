import { useTranslation } from "react-i18next";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const { t } = useTranslation();

  const CONTACT_LINKS = [
    {
      icon: Mail,
      label: t("contact.email-content"),
      href: `mailto:${t("contact.email-content")}`,
    },
    {
      icon: Phone,
      label: t("contact.phone-content"),
      href: `tel:${t("contact.phone-content")}`,
    },
    {
      icon: MapPin,
      label: t("contact.location-content"),
      href: "https://www.google.com/maps?q=Toluca,+México",
    },
    {
      icon: Send,
      label: t("contact.send-message"),
      href: `https://wa.me/${t("contact.phone-link")}`,
    },
  ];

  return (
    <section
      id="contacto"
      className="py-24 bg-[#12141c] text-[#f5f5f7]"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-[#ec4b6a]">{t("contact.title")}</h2>

        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          {/* Tarjeta con info */}
          <div className="rounded-2xl p-7 flex flex-col justify-center gap-5 bg-[#171922] border border-white/[0.08]">
            {CONTACT_LINKS.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4"
              >
                <div className="w-11 h-11 rounded-lg bg-[#1c1f29] flex items-center justify-center shrink-0 group-hover:bg-[#242833] transition-colors duration-200">
                  <Icon className="w-5 h-5 text-[#9a9aa5] group-hover:text-[#ec4b6a] transition-colors duration-200" strokeWidth={1.75} />
                </div>
                <span className="text-[15px] font-medium text-[#f5f5f7] group-hover:text-[#ec4b6a] transition-colors duration-200">
                  {label}
                </span>
              </a>
            ))}
          </div>

          {/* Mapa */}
          <div className="rounded-2xl overflow-hidden bg-[#171922] border border-white/[0.08] min-h-[280px]">
            <iframe
              title="Mapa Toluca"
              src="https://www.google.com/maps?q=19.2826,-99.6557&z=13&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "280px" }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}