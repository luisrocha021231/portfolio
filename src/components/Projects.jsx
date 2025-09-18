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
                    className="group relative px-4 py-2 rounded-lg bg-gradient-to-r from-sky-400 to-green-400 text-black font-medium shadow transition overflow-hidden"
                  >
                    {/* Texto que cambia a degradado en hover */}
                    <span className="relative z-10 group-hover:bg-gradient-to-r group-hover:from-sky-400 group-hover:to-green-400 group-hover:bg-clip-text group-hover:text-transparent">
                      {t(`projects.items.${p.key}.button`)}
                    </span>

                    {/* Fondo blanco en hover */}
                    <span className="absolute inset-0 rounded-lg bg-[#2a2a2b] opacity-0 group-hover:opacity-100 transition"></span>
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
