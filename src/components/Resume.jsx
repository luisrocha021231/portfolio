import { useTranslation } from "react-i18next";
import { BookOpen, Briefcase, Download } from "lucide-react";

function TimelineItem({ children }) {
  return (
    <div className="relative pl-6 border-l border-white/[0.08]">
      <span className="absolute -left-[3.5px] top-1.5 w-[7px] h-[7px] rounded-full bg-[#ec4b6a]" />
      {children}
    </div>
  );
}

export default function Resume() {
  const { t, i18n } = useTranslation();

  const education = t("resume.educationItems", { returnObjects: true });
  const experience = t("resume.experienceItems", { returnObjects: true });

  const cvFile =
    i18n.language === "es"
      ? "/files/luisrocharonquillo_cv.pdf"
      : "/files/luisrocharonquillo_cv_en.pdf";

  return (
    <section
      id="resume"
      className="py-24 bg-[#12141c] text-[#f5f5f7]"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-14 text-[#ec4b6a]">{t("resume.title")}</h2>

        {/* Educación */}
        <div className="mb-14">
          <div className="flex items-center gap-2.5 mb-7">
            <BookOpen className="w-5 h-5 text-[#ec4b6a]" strokeWidth={1.75} />
            <h3 className="text-xl font-bold">{t("resume.education")}</h3>
          </div>
          <div className="space-y-6">
            {education.map((edu, idx) => (
              <TimelineItem key={idx}>
                <h4 className="font-bold text-[15px]">{edu.school}</h4>
                <p className="text-[#9a9aa5] text-[14px] mt-0.5">{edu.degree}</p>
                <span className="text-[12px] text-[#6f6e78]">{edu.period}</span>
              </TimelineItem>
            ))}
          </div>
        </div>

        {/* Experiencia */}
        <div>
          <div className="flex items-center gap-2.5 mb-7">
            <Briefcase className="w-5 h-5 text-[#ec4b6a]" strokeWidth={1.75} />
            <h3 className="text-xl font-bold">{t("resume.experience")}</h3>
          </div>
          <div className="space-y-8">
            {experience.map((exp, idx) => (
              <TimelineItem key={idx}>
                <h4 className="font-bold text-[15px]">{exp.role}</h4>
                <p className="text-[#9a9aa5] text-[14px] mt-0.5">{exp.company}</p>
                <span className="text-[12px] text-[#6f6e78] block mt-0.5">
                  {exp.period} • {exp.location}
                </span>
                <ul className="mt-3 space-y-1.5">
                  {exp.tasks.map((task, i) => (
                    <li key={i} className="text-[#9a9aa5] text-[14px] leading-relaxed flex gap-2">
                      <span className="text-[#ec4b6a] shrink-0">–</span>
                      {task}
                    </li>
                  ))}
                </ul>
              </TimelineItem>
            ))}
          </div>
        </div>

        {/* Botón de descarga */}
        <div className="mt-14 flex justify-center">
          <a
            href={cvFile}
            download
            className="flex items-center gap-2.5 bg-[#ec4b6a]/10 hover:bg-[#ec4b6a]/20 text-[#ec4b6a] px-6 py-3 rounded-lg text-[14px] font-semibold transition-colors duration-200"
          >
            <Download className="w-[18px] h-[18px]" strokeWidth={1.75} />
            {t("resume.download")}
          </a>
        </div>
      </div>
    </section>
  );
}