import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { Mail, Phone, MapPin, Send, ArrowUpRight } from "lucide-react";

import "../styles/md3-tokens.css";
import "../styles/md3-base.css";
import "../styles/Contact.css";

const MAPS_URL = `https://www.google.com/maps?q=${encodeURIComponent("Toluca, México")}`;
const MAP_EMBED_URL = "https://www.google.com/maps?q=19.2826,-99.6557&z=13&output=embed";

function withBreakHints(text) {
  return text.split(/(?=@)/).map((part, i) => (
    <Fragment key={i}>
      {i > 0 && <wbr />}
      {part}
    </Fragment>
  ));
}

export default function Contact() {
  const { t } = useTranslation();

  const email = t("contact.email-content");
  const phone = t("contact.phone-content");

  // Datos de contacto
  const CONTACT_LINKS = [
    { icon: Mail, label: email, href: `mailto:${email}` },
    // tel
    { icon: Phone, label: phone, href: `tel:${phone.replace(/[^\d+]/g, "")}` },
    { icon: MapPin, label: t("contact.location-content"), href: MAPS_URL, external: true },
  ];

  return (
    <section id="contacto" aria-labelledby="contact-title" className="md3-section py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 id="contact-title" className="md3-section__title md3-headline-medium-emphasized">
          {t("contact.title")}
        </h2>

        <div className="mt-8 grid items-stretch gap-4 md:grid-cols-2 md:gap-6">
          {/* Card con la información */}
          <div className="md3-card flex flex-col p-2">
            <ul className="flex flex-1 flex-col justify-center">
              {CONTACT_LINKS.map(({ icon: Icon, label, href, external }) => (
                <li key={href}>
                  <a
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="md3-list-item md3-list-item--one-line md3-state"
                  >
                    <span className="md3-list-item__leading" aria-hidden="true">
                      <Icon size={20} strokeWidth={1.75} />
                    </span>
                    <span className="md3-list-item__headline md3-body-large">
                      {withBreakHints(label)}
                    </span>
                    {external && (
                      <ArrowUpRight
                        size={20}
                        strokeWidth={1.75}
                        className="md3-list-item__trailing"
                        aria-hidden="true"
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>

            {/* Acción principal de la sección */}
            <div className="flex p-2 pt-3">
              <a
                href={`https://wa.me/${t("contact.phone-link")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="md3-button md3-button--icon md3-button--filled md3-state flex-1"
              >
                <Send size={18} strokeWidth={1.75} aria-hidden="true" />
                {t("contact.send-message")}
              </a>
            </div>
          </div>

          {/* Mapa */}
          <div className="md3-card md3-contact__map">
            <iframe
              title={t("contact.map-title", "Mapa de Toluca")}
              src={MAP_EMBED_URL}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}