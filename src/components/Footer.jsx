import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Github, Linkedin, MessageCircle, Instagram } from "lucide-react";

const SOCIAL_LINKS = [
  { icon: Github, href: "https://github.com/luisrocha021231", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/luisrocharonq", label: "LinkedIn" },
  { icon: MessageCircle, href: "https://wa.me/527122109471", label: "WhatsApp" },
  { icon: Instagram, href: "https://www.instagram.com/luisrocharo", label: "Instagram" },
];

const APP_VERSION = `v${__APP_VERSION__}`;

const FALLBACK_SCORES = { performance: 98, accessibility: 100, bestPractices: 100, seo: 100 };

function ScoreBadge({ label, value }) {
  return (
    <div className="flex flex-col items-center gap-1.5" title={label}>
      <div className="w-11 h-11 rounded-full border border-[#ec4b6a]/40 flex items-center justify-center">
        <span className="text-[12px] font-bold text-[#ec4b6a]">{value}</span>
      </div>
      <span className="text-[10px] text-[#6f6e78] whitespace-nowrap">{label}</span>
    </div>
  );
}

export default function Footer() {
  const { t } = useTranslation();
  const repo = "luisrocha021231/portfolio";
  const year = new Date().getFullYear();

  const [scores, setScores] = useState(FALLBACK_SCORES);

  useEffect(() => {
    fetch("/performance.json")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data?.scores) setScores(data.scores);
      })
      .catch(() => {
        
      });
  }, []);

  const PERFORMANCE_SCORES = [
    { label: t("footer.lighthouse"), value: scores.performance },
    { label: t("footer.a11y"), value: scores.accessibility },
    { label: t("footer.best-practices"), value: scores.bestPractices },
    { label: t("footer.seo"), value: scores.seo },
  ];

  return (
    <footer
      className="bg-[#12141c] border-t border-white/[0.08] py-12 px-6"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      <div
        className="max-w-5xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8"
        style={{ maxWidth: "1024px" }}
      >
        {/* Izquierda: copyright + social */}
        <div className="flex flex-wrap items-center gap-x-10 gap-y-6">
          <div className="flex items-center gap-2">
            <p className="text-[13px] text-[#9a9aa5]">© {year} Luis Angel Rocha Ronquillo</p>
            <span className="text-[#3d3d3a]">•</span>
            <span className="text-[12px] text-[#6f6e78]">{APP_VERSION}</span>
          </div>

          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-[#9a9aa5] hover:text-[#ec4b6a] transition-colors duration-200"
              >
                <Icon className="w-[18px] h-[18px]" strokeWidth={1.75} />
              </a>
            ))}
          </div>
        </div>

        {/* Derecha: métricas + repo */}
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-3">
            {PERFORMANCE_SCORES.map((s) => (
              <ScoreBadge key={s.label} {...s} />
            ))}
          </div>

          <a
            href={`https://github.com/${repo}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver repositorio en GitHub"
            className="w-11 h-11 rounded-full bg-[#1c1f29] hover:bg-[#242833] flex items-center justify-center transition-colors duration-200 shrink-0"
          >
            <Github className="w-[18px] h-[18px] text-[#f5f5f7]" strokeWidth={1.75} />
          </a>
        </div>
      </div>
    </footer>
  );
}