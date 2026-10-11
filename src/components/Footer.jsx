import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Github, Linkedin, MessageCircle, Instagram } from "lucide-react";

import "../styles/md3-tokens.css";
import "../styles/md3-base.css";
import "../styles/Footer.css";

const SOCIAL_LINKS = [
  { icon: Github, href: "https://github.com/luisrocha021231", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/luisrocharonq", label: "LinkedIn" },
  { icon: MessageCircle, href: "https://wa.me/525664073124", label: "WhatsApp" },
  { icon: Instagram, href: "https://www.instagram.com/luisrocharo", label: "Instagram" },
];

const REPO = "luisrocha021231/portfolio";

const APP_VERSION = `v${__APP_VERSION__}`;

const FALLBACK_SCORES = { performance: 98, accessibility: 100, bestPractices: 100, seo: 100 };

/** Puntuación */
function ScoreRing({ label, value }) {
  const score = Math.min(100, Math.max(0, Number(value) || 0));

  return (
    <li className="md3-score">
      <span className="md3-score__ring">
        {/* pathLength=100 */}
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <circle className="md3-score__track" cx="24" cy="24" r="20" />
          {score > 0 && (
            <circle
              className="md3-score__indicator"
              cx="24"
              cy="24"
              r="20"
              pathLength="100"
              strokeDasharray="100"
              strokeDashoffset={100 - score}
            />
          )}
        </svg>
        <span className="md3-score__value md3-label-large">{score}</span>
      </span>
      <span className="md3-label-small">{label}</span>
    </li>
  );
}

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  const [scores, setScores] = useState(FALLBACK_SCORES);

  useEffect(() => {
    const controller = new AbortController();

    fetch("/performance.json", { signal: controller.signal })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data?.scores) setScores({ ...FALLBACK_SCORES, ...data.scores });
      })
      .catch(() => {
        // Sin archivo se quedan los valores por defecto.
      });

    return () => controller.abort();
  }, []);

  const PERFORMANCE_SCORES = [
    { label: t("footer.lighthouse"), value: scores.performance },
    { label: t("footer.a11y"), value: scores.accessibility },
    { label: t("footer.best-practices"), value: scores.bestPractices },
    { label: t("footer.seo"), value: scores.seo },
  ];

  return (
    <footer className="md3-footer">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10">
        {/* Sobre este sitio */}
        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-6">
          <ul
            className="md3-scores"
            aria-label={t("footer.scores-label", "Puntuaciones de Lighthouse")}
          >
            {PERFORMANCE_SCORES.map((score) => (
              <ScoreRing key={score.label} {...score} />
            ))}
          </ul>

          <a
            href={`https://github.com/${REPO}`}
            target="_blank"
            rel="noopener noreferrer"
            className="md3-button md3-button--icon md3-button--outlined md3-state"
          >
            <Github size={18} strokeWidth={1.75} aria-hidden="true" />
            {t("footer.repo", "Ver repositorio")}
          </a>
        </div>

        <hr className="md3-divider my-6" />

        {/* Copyright + redes de contacto */}
        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-2">
          <p className="md3-body-medium">
            © {year} Luis Angel Rocha Ronquillo
            <span className="md3-footer__separator mx-2" aria-hidden="true">
              •
            </span>
            <span className="md3-label-medium">{APP_VERSION}</span>
          </p>

          <ul className="-mx-3 flex items-center">
            {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  data-md3-tooltip={label}
                  className="md3-icon-button md3-state"
                >
                  <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}