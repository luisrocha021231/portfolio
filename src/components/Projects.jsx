import { useTranslation } from "react-i18next";
import { Github } from "lucide-react";

const projects = [
  {
    key: "translator",
    img: "/Banner2.png",
    link: "https://github.com/luisrocha021231/compiladoresproject",
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
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div
              key={p.key}
              className="bg-[#2a2a2b] rounded-lg shadow-lg overflow-hidden hover:scale-105 transition"
            >
              {p.img && (
                <img
                  src={p.img}
                  alt={t(`projects.items.${p.key}.title`)}
                  className="w-full h-40 object-cover bg-[#232324]"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              )}
              <div className="p-6">
                <h3 className="font-bold text-xl">
                  {t(`projects.items.${p.key}.title`)}
                </h3>
                <p className="text-gray-400 mt-2">
                  {t(`projects.items.${p.key}.desc`)}
                </p>

                {/* Botón centrado */}
                <div className="mt-4 flex justify-center">
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-[#1e1e1f] border border-sky-400 px-6 py-3 rounded-lg shadow-lg 
                              hover:shadow-xl hover:scale-105 transition font-semibold"
                  >
                    <Github className="w-5 h-5 text-sky-400" />
                    <span className="text-sm font-semibold bg-gradient-to-r from-sky-400 to-green-400 bg-clip-text text-transparent">
                      {t(`projects.items.${p.key}.button`)}
                    </span>
                  </a>
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
