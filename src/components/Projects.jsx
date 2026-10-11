import { useTranslation } from "react-i18next";
import { Github, Play, FolderPlus } from "lucide-react";

import "../styles/md3-tokens.css";
import "../styles/md3-base.css";
import "../styles/Projects.css";

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

const HAS_FREE_SLOT = PROJECTS.length % 2 === 1;

function ProjectCard({ project, t }) {
  const { key, img, link, linkDemo } = project;
  const title = t(`projects.items.${key}.title`);

  return (
    <li className="md3-card md3-project flex flex-col">
      {img && (
        // Decorativa
        <img
          src={img}
          alt=""
          className="md3-card__media"
          loading="lazy"
          decoding="async"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      )}

      {/* Contenido */}
      <div className="flex-1 px-6 pt-6">
        <h3 className="md3-title-large-emphasized">{title}</h3>
        <p className="md3-card__supporting md3-body-medium mt-2">
          {t(`projects.items.${key}.desc`)}
        </p>
      </div>

      {/* Acciones */}
      <div className="md3-project__actions flex flex-wrap justify-end gap-2 p-6">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${t(`projects.items.${key}.button`)}: ${title}`}
          className="md3-button md3-button--icon md3-button--outlined md3-state"
        >
          <Github size={18} strokeWidth={1.75} aria-hidden="true" />
          {t(`projects.items.${key}.button`)}
        </a>

        {linkDemo && (
          <a
            href={linkDemo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${t(`projects.items.${key}.demostration`)}: ${title}`}
            className="md3-button md3-button--icon md3-button--tonal md3-state"
          >
            <Play size={18} strokeWidth={1.75} aria-hidden="true" />
            {t(`projects.items.${key}.demostration`)}
          </a>
        )}
      </div>
    </li>
  );
}

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section id="proyectos" aria-labelledby="projects-title" className="md3-section py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 id="projects-title" className="md3-section__title md3-headline-medium-emphasized">
          {t("projects.title")}
        </h2>

        {/* Grid de proyectos */}
        <ul className="mt-8 grid gap-4 md:grid-cols-2 md:gap-6">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.key} project={project} t={t} />
          ))}

          {/* Más proyectos pronto */}
          <li
            className={`md3-card md3-card--outlined md3-projects__more flex flex-col items-center justify-center gap-3 ${
              HAS_FREE_SLOT ? "" : "md3-projects__more--wide"
            }`}
          >
            <span className="md3-projects__more-icon" aria-hidden="true">
              <FolderPlus size={24} strokeWidth={1.75} />
            </span>
            <p className="md3-body-large">
              {t("projects.more")}
              <span className="motion-safe:animate-pulse" aria-hidden="true">
                ...
              </span>
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}