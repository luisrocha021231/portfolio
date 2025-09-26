import { useTranslation } from "react-i18next";
import { BookOpen, Briefcase, Download } from "lucide-react";

export default function Resume() {
  const { t, i18n } = useTranslation();

  const education = t("resume.educationItems", { returnObjects: true });
  const experience = t("resume.experienceItems", { returnObjects: true });

  const cvFile = i18n.language === "es" ? "/files/luisrocharonquillo_cv.pdf" : "/files/luisrocharonquillo_en_cv.pdf";

  return (
    <section id="resume" className="py-20 bg-[#121212] text-white">
      <div className="container mx-auto px-6">
        <h2 className="mb-12 text-center">
          <span className="text-3xl bg-gradient-to-r from-sky-400 to-green-400 bg-clip-text text-transparent font-bold">
            {t("resume.title")}
          </span>
        </h2>

        {/* Educación */}
        <div className="mb-12">
          <div className="flex items-center space-x-2 mb-6">
            <BookOpen className="text-sky-400 w-6 h-6" />
            <h3 className="text-2xl font-semibold">{t("resume.education")}</h3>
          </div>
          <div className="space-y-6">
            {education.map((edu, idx) => (
              <div key={idx} className="border-l-2 border-green-400 pl-6">
                <h4 className="font-bold">{edu.school}</h4>
                <p className="text-gray-400">{edu.degree}</p>
                <span className="text-sm text-gray-500">{edu.period}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Experiencia */}
        <div>
          <div className="flex items-center space-x-2 mb-6">
            <Briefcase className="text-sky-400 w-6 h-6" />
            <h3 className="text-2xl font-semibold">{t("resume.experience")}</h3>
          </div>
          <div className="space-y-8">
            {experience.map((exp, idx) => (
              <div key={idx} className="border-l-2 border-green-400 pl-6">
                <h4 className="font-bold">{exp.role}</h4>
                <p className="text-gray-400">{exp.company}</p>
                <span className="text-sm text-gray-500 block">
                  {exp.period} • {exp.location}
                </span>
                <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                  {exp.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Botón de descarga */}
        <div className="mt-12 flex justify-center">
          <a
            href={cvFile}
            download
            className="flex items-center gap-3 bg-[#1e1e1f] border border-sky-400 px-6 py-3 rounded-lg shadow-lg 
                          hover:shadow-xl hover:scale-105 transition font-semibold"
          >
            <Download className="w-5 h-5 text-sky-400" />
            <span className="text-sm font-semibold bg-gradient-to-r from-sky-400 to-green-400 bg-clip-text text-transparent">
              {t("resume.download")}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
