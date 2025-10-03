import { useTranslation } from "react-i18next";
import { Github, Play } from "lucide-react";

const projects = [
  {
    key: "translator",
    img: "/public/BannerIACodeTranslator.png",
    link: "https://github.com/luisrocha021231/compiladoresproject",
    linkDemo: "https://iacodetranslator.luisrocharo.com/",
  },
  {
    key: "ovenproject",
    img: "/Banner1.png",
    link: "https://github.com/luisrocha021231/computingproject",
  },
];

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section id="proyectos" className="py-20 bg-[#1e1e1f] text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="mb-12">
          <span className="text-3xl bg-gradient-to-r from-sky-400 to-green-400 bg-clip-text text-transparent font-bold">
            {t("projects.title")}
          </span>
        </h2>

        {/* Grid de proyectos */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <div
              key={p.key}
              className="relative rounded-2xl overflow-hidden
                bg-gradient-to-br from-[#1e1e1f]/80 to-[#2a2a2b]/80
                backdrop-blur-lg border border-sky-400/30 shadow-xl
                transition transform hover:scale-[1.03] hover:shadow-sky-400/20 hover:border-sky-400/60"
            >
              {/* Glow decorativo */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-sky-400/10 to-green-400/10 blur-2xl opacity-40 pointer-events-none"></div>

              {p.img && (
                <img
                  src={p.img}
                  alt={t(`projects.items.${p.key}.title`)}
                  className="w-full h-40 object-cover relative z-10"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              )}

              <div className="p-6 relative z-10">
                <h3 className="font-bold text-xl">
                  {t(`projects.items.${p.key}.title`)}
                </h3>
                <p className="text-gray-400 mt-2">
                  {t(`projects.items.${p.key}.desc`)}
                </p>

                {/* Botones centrados */}
                <div className="mt-4 flex justify-center gap-4">
                  {/* Botón GitHub */}
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#1e1e1f]/80 border border-sky-400 px-5 py-2 rounded-lg shadow-lg 
                              hover:shadow-xl hover:scale-105 transition font-semibold relative z-10"
                  >
                    <Github className="w-5 h-5 text-sky-400" />
                    <span className="text-sm font-semibold bg-gradient-to-r from-sky-400 to-green-400 bg-clip-text text-transparent">
                      {t(`projects.items.${p.key}.button`)}
                    </span>
                  </a>

                  {/* Botón Demo (solo si existe linkDemo) */}
                  {p.linkDemo && (
                    <a
                      href={p.linkDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-[#1e1e1f]/80 border border-green-400 px-5 py-2 rounded-lg shadow-lg 
                                hover:shadow-xl hover:scale-105 transition font-semibold relative z-10"
                    >
                      <Play className="w-5 h-5 text-green-400" />
                      <span className="text-sm font-semibold bg-gradient-to-r from-green-400 to-sky-400 bg-clip-text text-transparent">
                        {t(`projects.items.${p.key}.demostration`)}
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 🔥 Texto animado de "Más proyectos pronto" */}
        <div className="mt-12 text-center">
          <p className="text-white text-lg font-medium">
            {t("projects.more")}
            <span className="animate-pulse">...</span>
          </p>
        </div>
      </div>
    </section>
  );
}
