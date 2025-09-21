import { useTranslation } from "react-i18next";
import { LaptopMinimal, Database, Cloud, Server } from "lucide-react"; // íconos

export default function About() {
  const { t } = useTranslation();

  const services = [
    {
      title: t("about.cards.mobile.title"),
      desc: t("about.cards.mobile.desc"),
      icon: <Server className="w-8 h-8 text-green-400" />,
      color: "green"
    },
    {
      title: t("about.cards.web.title"),
      desc: t("about.cards.web.desc"),
      icon: <Database className="w-8 h-8 text-sky-400" />,
      color: "sky"
    },
    {
      title: t("about.cards.uiux.title"),
      desc: t("about.cards.uiux.desc"),
      icon: <Cloud className="w-8 h-8 text-green-400" />,
      color: "green"
    },
    {
      title: t("about.cards.backend.title"),
      desc: t("about.cards.backend.desc"),
      icon: <LaptopMinimal className="w-8 h-8 text-sky-400" />,
      color: "sky"
    }
  ];
  return (
    <section id="sobremi" className="py-20 bg-[#1e1e1f] text-white">
      <div className="container mx-auto px-6 text-center">
        {/* Título */}
        <h2 className="mb-12">
          <span className="text-3xl bg-gradient-to-r from-sky-400 to-green-400 bg-clip-text text-transparent font-bold">
            {t("about.title")}
          </span>
        </h2>

        {/* Texto sobre mí */}
        <p className="max-w-3xl mx-auto text-gray-300 mb-12 text-lg leading-relaxed">
          {t("about.content")}
        </p>

        {/* Grid de cartas */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => {
            const borderColor = service.color === "sky" ? "border-sky-400/40 hover:border-sky-400/80 hover:shadow-sky-400/30" : "border-green-400/40 hover:border-green-400/80 hover:shadow-green-400/30";
            const glow = service.color === "sky" 
              ? "from-sky-400/20 to-sky-400/5" 
              : "from-green-400/20 to-green-400/5";

            return (
              <div
                key={idx}
                className={`relative rounded-2xl p-6 flex items-start space-x-4
                  bg-gradient-to-br from-[#121212]/80 to-[#1e1e1f]/80
                  backdrop-blur-lg border ${borderColor} shadow-xl 
                  transition transform hover:scale-[1.05]`}
              >
                {/* Glow dinámico */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${glow} blur-2xl opacity-40 pointer-events-none`}></div>

                {/* Contenido */}
                <div className="relative z-10 bg-[#1e1e1f]/60 p-3 rounded-lg">
                  {service.icon}
                </div>
                <div className="text-left relative z-10">
                  <h3 className="font-bold text-lg">{service.title}</h3>
                  <p className="text-gray-300 text-sm mt-2">{service.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
