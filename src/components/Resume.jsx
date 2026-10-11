import { useTranslation } from "react-i18next";
import { BookOpen, Briefcase, Download } from "lucide-react";

import "../styles/md3-tokens.css";
import "../styles/md3-base.css";
import "../styles/Resume.css";

function PaneHeader({ icon: Icon, children }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className="md3-resume__icon" aria-hidden="true">
        <Icon size={20} strokeWidth={1.75} />
      </span>
      <h3 className="md3-title-large-emphasized">{children}</h3>
    </div>
  );
}

/** Fecha arriba */
function TimelineItem({ overline, title, supporting, children }) {
  return (
    <li className="md3-timeline__item">
      <p className="md3-timeline__overline md3-label-medium">{overline}</p>
      <h4 className="md3-title-medium mt-1">{title}</h4>
      <p className="md3-timeline__supporting md3-body-medium">{supporting}</p>
      {children}
    </li>
  );
}

export default function Resume() {
  const { t, i18n } = useTranslation();

  const list = (key) => {
    const value = t(key, { returnObjects: true });
    return Array.isArray(value) ? value : [];
  };
  const education = list("resume.educationItems");
  const experience = list("resume.experienceItems");

  // "es-MX" debe resolver a "es".
  const language = (i18n.resolvedLanguage || i18n.language || "").split("-")[0];
  const cvFile =
    language === "es"
      ? "/files/luisrocharonquillo_cv.pdf"
      : "/files/luisrocharonquillo_cv_en.pdf";

  return (
    <section id="resume" aria-labelledby="resume-title" className="md3-section py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Cabecera */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 id="resume-title" className="md3-section__title md3-headline-medium-emphasized">
            {t("resume.title")}
          </h2>

          <a
            href={cvFile}
            download
            className="md3-button md3-button--icon md3-button--filled md3-state"
          >
            <Download size={18} strokeWidth={1.75} aria-hidden="true" />
            {t("resume.download")}
          </a>
        </div>

        <div className="md3-resume__panes mt-8">
          {/* Educación */}
          <div className="md3-card md3-resume__pane--supporting p-6">
            <PaneHeader icon={BookOpen}>{t("resume.education")}</PaneHeader>
            <ol className="md3-timeline">
              {education.map((edu, idx) => (
                <TimelineItem
                  key={idx}
                  overline={edu.period}
                  title={edu.school}
                  supporting={edu.degree}
                />
              ))}
            </ol>
          </div>

          {/* Experiencia */}
          <div className="md3-card p-6">
            <PaneHeader icon={Briefcase}>{t("resume.experience")}</PaneHeader>
            <ol className="md3-timeline">
              {experience.map((exp, idx) => (
                <TimelineItem
                  key={idx}
                  overline={`${exp.period} • ${exp.location}`}
                  title={exp.role}
                  supporting={exp.company}
                >
                  <ul className="md3-timeline__tasks md3-body-medium">
                    {(exp.tasks ?? []).map((task, i) => (
                      <li key={i}>{task}</li>
                    ))}
                  </ul>
                </TimelineItem>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}