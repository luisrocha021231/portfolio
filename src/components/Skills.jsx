import { useTranslation } from "react-i18next";

const SKILLS = [
  { name: "Java", logo: "/logos/java.svg" },
  { name: "Spring Boot", logo: "/logos/Spring.svg" },
  { name: "React", logo: "/logos/React.svg" },
  { name: "PostgreSQL", logo: "/logos/PostgresSQL.svg" },
  { name: "Docker", logo: "/logos/Docker.svg" },
  { name: "Postman", logo: "/logos/Postman.svg" },
  { name: "Swagger", logo: "/logos/Swagger.svg" },
  { name: "Git", logo: "/logos/git.svg" },
  { name: "GitHub", logo: "/logos/GitHub.svg" },
  { name: "Heroku", logo: "/logos/Heroku.svg" },
  { name: "AWS", logo: "/logos/AWS.svg" },
  { name: "Cloudflare", logo: "/logos/Cloudflare.svg" },
  { name: "Dokploy", logo: "/logos/dokploy.png" },
];

export default function Skills() {
  const { t } = useTranslation();

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center py-24 bg-[#12141c] text-[#f5f5f7] scroll-mt-20"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-[#ec4b6a]">{t("skills.title")}</h2>

        <div className="flex flex-wrap gap-3">
          {SKILLS.map((skill) => (
            <div
              key={skill.name}
              className="group flex items-center gap-2.5 pl-2.5 pr-4 py-2 rounded-full bg-[#171922] border border-white/[0.08] hover:border-[#ec4b6a]/40 transition-colors duration-200"
            >
              <div className="w-7 h-7 rounded-full bg-[#e8e6df] flex items-center justify-center shrink-0">
                <img
                  src={skill.logo}
                  alt=""
                  width={16}
                  height={16}
                  loading="lazy"
                  decoding="async"
                  className="w-4 h-4 object-contain"
                />
              </div>
              <span className="text-[13px] font-medium text-[#e5e4de] group-hover:text-[#f5f5f7] transition-colors duration-200">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}