import { useTranslation } from "react-i18next";
import { LaptopMinimal, Database, Cloud, Server } from "lucide-react";

const SERVICES = [
  { key: "mobile", icon: Server },
  { key: "web", icon: Database },
  { key: "uiux", icon: Cloud },
  { key: "backend", icon: LaptopMinimal },
];

export default function About() {
  const { t } = useTranslation();

  return (
    <section
      id="sobremi"
      className="py-24 bg-[#12141c] text-[#f5f5f7]"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Título */}
        <h2 className="text-3xl font-bold mb-6 text-[#ec4b6a]">{t("about.title")}</h2>

        {/* Texto sobre mí */}
        <p className="max-w-3xl text-[#9a9aa5] text-[15px] leading-relaxed mb-14">
          {t("about.content")}
        </p>

        {/* Grid de cartas */}
        <div className="grid sm:grid-cols-2 gap-4">
          {SERVICES.map(({ key, icon: Icon }) => (
            <div
              key={key}
              className="group rounded-2xl p-6 flex items-start gap-4 bg-[#171922] border border-white/[0.08] hover:border-[#ec4b6a]/40 transition-colors duration-200"
            >
              <div className="w-11 h-11 rounded-lg bg-[#1c1f29] flex items-center justify-center shrink-0">
                <Icon
                  className="w-5 h-5 text-[#9a9aa5] group-hover:text-[#ec4b6a] transition-colors duration-200"
                  strokeWidth={1.75}
                />
              </div>
              <div className="text-left min-w-0">
                <h3 className="font-bold text-[16px]">{t(`about.cards.${key}.title`)}</h3>
                <p className="text-[#9a9aa5] text-[14px] mt-2 leading-relaxed">
                  {t(`about.cards.${key}.desc`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}