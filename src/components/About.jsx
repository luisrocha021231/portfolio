import { useTranslation } from "react-i18next";
import { LaptopMinimal, Database, Cloud, Server } from "lucide-react";

import "../styles/md3-tokens.css";
import "../styles/md3-base.css";
import "../styles/About.css";

const SERVICES = [
  { key: "mobile", icon: Server },
  { key: "web", icon: Database },
  { key: "uiux", icon: Cloud },
  { key: "backend", icon: LaptopMinimal },
];

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="sobremi" aria-labelledby="about-title" className="md3-section py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 id="about-title" className="md3-section__title md3-headline-medium-emphasized">
          {t("about.title")}
        </h2>

        {/* Texto sobre mí */}
        <p className="md3-section__lead md3-body-large mt-4 max-w-[70ch]">{t("about.content")}</p>

        {/* Grid de cards */}
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {SERVICES.map(({ key, icon: Icon }) => (
            <li key={key} className="md3-card flex items-start gap-4 p-6">
              <span className="md3-about__icon" aria-hidden="true">
                <Icon size={24} strokeWidth={1.75} />
              </span>
              <div className="min-w-0">
                <h3 className="md3-title-medium">{t(`about.cards.${key}.title`)}</h3>
                <p className="md3-card__supporting md3-body-medium mt-1">
                  {t(`about.cards.${key}.desc`)}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}