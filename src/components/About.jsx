import { useTranslation } from "react-i18next";
import { Smartphone, Code2, PenTool, Server } from "lucide-react"; // íconos

export default function About() {
  const { t } = useTranslation();

  const services = [
    {
      title: t("about.cards.mobile.title"),
      desc: t("about.cards.mobile.desc"),
      icon: <Smartphone className="w-8 h-8 text-green-400" />
    },
    {
      title: t("about.cards.web.title"),
      desc: t("about.cards.web.desc"),
      icon: <Code2 className="w-8 h-8 text-green-400" />
    },
    {
      title: t("about.cards.uiux.title"),
      desc: t("about.cards.uiux.desc"),
      icon: <PenTool className="w-8 h-8 text-green-400" />
    },
    {
      title: t("about.cards.backend.title"),
      desc: t("about.cards.backend.desc"),
      icon: <Server className="w-8 h-8 text-green-400" />
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
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-[#121212] rounded-2xl p-6 flex items-start space-x-4 shadow-lg 
                         hover:scale-105 hover:shadow-2xl transition"
            >
              <div className="bg-[#1e1e1f] p-3 rounded-lg">
                {service.icon}
              </div>
              <div className="text-left">
                <h3 className="font-bold text-lg">{service.title}</h3>
                <p className="text-gray-300 text-sm mt-2">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
