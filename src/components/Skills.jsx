import { useTranslation } from "react-i18next";

const skills = [
  { name: "Java", logo: "/logos/java.svg" },
  { name: "Spring Boot", logo: "/logos/Spring.svg" },
  { name: "React", logo: "/logos/React.svg" },
  { name: "PostgreSQL", logo: "/logos/PostgresSQL.svg" },
  { name: "Docker", logo: "/logos/Docker.svg" },
  { name: "Jenkins", logo: "/logos/Jenkins.svg" },
  { name: "Postman", logo: "/logos/Postman.svg" },
  { name: "Swagger", logo: "/logos/Swagger.svg" },
  { name: "Git", logo: "/logos/git.svg" },
  { name: "GitHub", logo: "/logos/GitHub.svg" },
  { name: "AWS", logo: "/logos/AWS.svg" },
  { name: "Cloudflare Workers", logo: "/logos/Cloudflare.svg" }
];

export default function Skills() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="py-20 bg-[#121212] text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="mb-12">
          <span className="text-3xl bg-gradient-to-r from-sky-400 to-green-400 bg-clip-text text-transparent font-bold">
            {t("skills.title")}
          </span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => {
            const borderColor = index % 2 === 0 ? "sky-400" : "green-400";
            const glowFrom = index % 2 === 0 ? "from-sky-400/20" : "from-green-400/20";
            const glowTo = index % 2 === 0 ? "to-sky-400/5" : "to-green-400/5";

            return (
              <div
                key={skill.name}
                className={`relative p-6 rounded-2xl shadow-xl backdrop-blur-lg 
                  bg-gradient-to-br from-[#1e1e1f]/80 to-[#2a2a2b]/80 
                  border border-${borderColor} transition transform 
                  hover:scale-[1.05] hover:shadow-${borderColor}/30`}
              >
                {/* Glow dinámico */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${glowFrom} ${glowTo} blur-2xl opacity-40 pointer-events-none`}
                ></div>

                {/* Contenido */}
                <div className="relative flex flex-col items-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-3 shadow-inner">
                    <img src={skill.logo} alt={skill.name} className="w-10 h-10" />
                  </div>
                  <h3 className="font-semibold text-lg text-white">{skill.name}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
