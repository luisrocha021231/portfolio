import { useState } from "react";
import { useTranslation } from "react-i18next";

import "../styles/md3-tokens.css";
import "../styles/md3-base.css";
import "../styles/Skills.css";

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

function SkillTile({ name, logo }) {
  const [failed, setFailed] = useState(false);

  return (
    <li className="md3-card md3-skill-tile">
      <span className="md3-skill-tile__logo" aria-hidden="true">
        {failed ? (
          name.charAt(0)
        ) : (
          <img
            src={logo}
            alt=""
            width={28}
            height={28}
            loading="lazy"
            decoding="async"
            onError={() => setFailed(true)}
          />
        )}
      </span>
      <span className="md3-skill-tile__name md3-label-large">{name}</span>
    </li>
  );
}

export default function Skills() {
  const { t } = useTranslation();

  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="md3-section flex min-h-[100svh] flex-col justify-center py-16 sm:py-24"
    >
      {/* w-full */}
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <h2 id="skills-title" className="md3-section__title md3-headline-medium-emphasized">
          {t("skills.title")}
        </h2>

        <ul className="md3-skill-grid mt-8">
          {SKILLS.map((skill) => (
            <SkillTile key={skill.name} {...skill} />
          ))}
        </ul>
      </div>
    </section>
  );
}