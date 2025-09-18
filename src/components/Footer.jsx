import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#151515] shadow py-6 text-center text-white">
      {/* Sección "Diseñado con" */}
      <div className="flex justify-center items-center gap-4 mb-3">
        <span className="text-sm bg-gradient-to-r from-sky-400 to-green-400 bg-clip-text text-transparent">{t("footer.title")}</span>

        {/* Grupo React + Tailwind */}
        <div className="flex items-center gap-2 bg-[#151515] px-3 py-1 rounded-lg shadow-sm">
          <img src="/logos/React.svg" alt="React" className="h-5 w-5" />
          <img src="/logos/Tailwind CSS.svg" alt="Tailwind CSS" className="h-5 w-5" />
        </div>
      </div>

      {/* Texto principal */}
      <p className="text-sm">
        © {new Date().getFullYear()} {t("footer.final")}
      </p>
    </footer>
  );
}
