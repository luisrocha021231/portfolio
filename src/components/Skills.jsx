import { useTranslation } from "react-i18next";

const skills = [
  { name: "React", logo: "/logos/React.svg" },
  { name: "Spring Boot", logo: "/logos/Spring.svg" },
  { name: "Docker", logo: "/logos/Docker.svg" },
  { name: "PostgreSQL", logo: "/logos/PostgresSQL.svg" },
  { name: "Jenkins", logo: "/logos/Jenkins.svg" },
  { name: "AWS", logo: "/logos/AWS.svg" }
];

export default function Skills() {

  const { t } = useTranslation();

  return (
    <section id="skills" className="py-20 bg-[#121212] text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="mb-12">
          <span className="text-3xl bg-gradient-to-r from-sky-400 to-green-400 bg-clip-text text-transparent font-bold">{t("skills.title")}</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div 
              key={skill.name} 
              className="p-6 bg-[#1e1e1f] rounded-xl shadow flex flex-col items-center hover:scale-105 transition"
            >
              {/* Fondo de cuadro estilo macOS */}
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-3 shadow-inner">
                <img src={skill.logo} alt={skill.name} className="w-10 h-10" />
              </div>
              <h3 className="font-semibold text-lg text-white">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
