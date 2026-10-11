import { Fragment, useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

import "../styles/md3-tokens.css";
import "../styles/md3-base.css";
import "../styles/Hero.css";

const INITIALS = "LR";
const AVATAR_SRC = "/avatarMio.webp";

const CONTACT_ROWS = [
  {
    icon: Mail,
    titleKey: "hero.email-title",
    contentKey: "hero.email-content",
    toHref: (value) => `mailto:${value}`,
  },
  {
    icon: Phone,
    titleKey: "hero.phone-title",
    contentKey: "hero.phone-content-2",
    toHref: (value) => `tel:${value.replace(/[^\d+]/g, "")}`,
  },
  { icon: MapPin, titleKey: "hero.location-title", contentKey: "hero.location-content" },
];

const SOCIAL_LINKS = [
  {
    icon: Linkedin,
    name: "LinkedIn",
    href: "https://linkedin.com/in/luisrocharonq",
    label: "LinkedIn de Luis Rocha",
  },
  {
    icon: Github,
    name: "GitHub",
    href: "https://github.com/luisrocha021231",
    label: "GitHub de Luis Rocha",
  },
  {
    icon: MessageCircle,
    name: "WhatsApp",
    href: "https://wa.me/525664073124",
    label: "WhatsApp de Luis Rocha",
  },
];

function HeroMedia({ alt }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="md3-hero-media flex shrink-0 items-center justify-center">
      <span
        className="md3-hero-media__fallback md3-headline-small-emphasized flex items-center justify-center"
        aria-hidden="true"
      >
        {INITIALS}
      </span>

      {!failed && (
        <img
          src={AVATAR_SRC}
          alt={alt}
          decoding="async"
          className="md3-hero-media__image"
          onError={() => setFailed(true)}
        />
      )}

      {/* <span className="md3-presence" aria-hidden="true" /> */}
    </div>
  );
}

function withBreakHints(text) {
  return text.split(/(?=@)/).map((part, i) => (
    <Fragment key={i}>
      {i > 0 && <wbr />}
      {part}
    </Fragment>
  ));
}

function ContactItem({ icon: Icon, title, content, href }) {
  const body = (
    <>
      <span className="md3-list-item__leading" aria-hidden="true">
        <Icon size={20} strokeWidth={1.75} />
      </span>
      <span className="flex min-w-0 flex-col">
        <span className="md3-list-item__overline md3-label-small">{title}</span>
        <span className="md3-list-item__headline md3-body-large">{withBreakHints(content)}</span>
      </span>
    </>
  );

  return (
    <li>
      {href ? (
        <a href={href} className="md3-list-item md3-state">
          {body}
        </a>
      ) : (
        <div className="md3-list-item">{body}</div>
      )}
    </li>
  );
}

export default function Hero() {
  const { t } = useTranslation();
  const name = t("hero.name");

  return (
    <section
      id="inicio"
      aria-labelledby="hero-name"
      className="md3-hero flex min-h-[100svh] flex-col items-center justify-center px-4 sm:px-6"
    >
      <div className="md3-hero-card w-full max-w-3xl">
        <div className="flex flex-col gap-2 sm:flex-row">
          <HeroMedia alt={t("hero.photo-alt", { defaultValue: "Foto de {{name}}", name })} />

          {/* Columna de información */}
          <div className="flex min-w-0 flex-1 flex-col justify-center py-4 sm:px-2 sm:py-6">
            <div className="px-4">
              <h1 id="hero-name" className="md3-hero__name">
                {name}
              </h1>
              <p className="md3-hero__role md3-title-medium mt-1">{t("hero.desc")}</p>
            </div>

            <ul className="mt-4 flex flex-col">
              {CONTACT_ROWS.map(({ icon, titleKey, contentKey, toHref }) => {
                const content = t(contentKey);
                return (
                  <ContactItem
                    key={titleKey}
                    icon={icon}
                    title={t(titleKey)}
                    content={content}
                    href={toHref?.(content)}
                  />
                );
              })}
            </ul>
          </div>
        </div>

        {/* Acciones */}
        <hr className="md3-divider mx-4 mt-3" />
        <ul className="flex justify-center gap-1 pt-3">
          {SOCIAL_LINKS.map(({ icon: Icon, name: network, href, label }) => (
            <li key={network}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                data-md3-tooltip={network}
                className="md3-icon-button md3-icon-button--tonal md3-state"
              >
                <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}