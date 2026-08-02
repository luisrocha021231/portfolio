import { useTranslation } from "react-i18next";
import { Github, Play } from "lucide-react";

const PROJECTS = [
  {
    key: "horizonapi",
    img: "/BannerHorizonAPI.webp",
    link: "https://github.com/luisrocha021231/horizonapi",
    linkDemo: "https://horizonapi.luisrocharo.com",
  },
  {
    key: "translator",
    img: "/BannerIACodeTranslator.webp",
    link: "https://github.com/luisrocha021231/compiladoresproject",
    linkDemo: "https://iacodetranslator.luisrocharo.com/",
  },
  {
    key: "ovenproject",
    img: "/Banner1.webp",
    link: "https://github.com/luisrocha021231/computingproject",
  },
];

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section
      id="proyectos"
      className="py-24 bg-[#12141c] text-[#f5f5f7]"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-[#ec4b6a]">{t("projects.title")}</h2>

        {/* Grid de proyectos */}
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p) => (
            <div
              key={p.key}
              className="rounded-2xl overflow-hidden bg-[#171922] border border-white/[0.08] hover:border-[#ec4b6a]/40 transition-colors duration-200 flex flex-col h-full"
            >
              {p.img && (
                <img
                  src={p.img}
                  alt={t(`projects.items.${p.key}.title`)}
                  className="w-full h-44 object-cover shrink-0"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              )}

              {/* Contenido: crece para empujar el footer hacia abajo */}
              <div className="p-6 flex-1">
                <h3 className="font-bold text-lg">{t(`projects.items.${p.key}.title`)}</h3>
                <p className="text-[#9a9aa5] text-[14px] mt-2 leading-relaxed">
                  {t(`projects.items.${p.key}.desc`)}
                </p>
              </div>

              {/* Footer: siempre en la misma posición relativa, sin importar el largo del texto */}
              <div className="flex gap-3 px-6 pb-6 pt-1">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#1c1f29] hover:bg-[#242833] px-4 py-2.5 rounded-lg text-[13px] font-semibold transition-colors duration-200"
                >
                  <Github className="w-4 h-4" strokeWidth={1.75} />
                  {t(`projects.items.${p.key}.button`)}
                </a>

                {p.linkDemo && (
                  <a
                    href={p.linkDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-[#ec4b6a]/10 hover:bg-[#ec4b6a]/20 text-[#ec4b6a] px-4 py-2.5 rounded-lg text-[13px] font-semibold transition-colors duration-200"
                  >
                    <Play className="w-4 h-4" strokeWidth={1.75} />
                    {t(`projects.items.${p.key}.demostration`)}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Más proyectos pronto */}
        <p className="mt-12 text-center text-[#9a9aa5] text-[15px]">
          {t("projects.more")}
          <span className="animate-pulse">...</span>
        </p>
      </div>
    </section>
  );
}