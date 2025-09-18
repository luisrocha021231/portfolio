import { useTranslation } from "react-i18next";
import { Github } from "lucide-react";

export default function Footer() {
  const { t } = useTranslation();
  const commitHash = import.meta.env.VITE_COMMIT_HASH?.slice(0, 7) || "dev";

  return (
    <footer className="bg-[#151515] shadow py-6 px-6 text-white">
      <div className="flex flex-col md:flex-row md:items-center md:justify-center relative">
        
        {/* Sección principal */}
        <div className="text-center mb-4 md:mb-0">
          <div className="flex justify-center items-center gap-4 mb-3">
            <span className="text-sm bg-gradient-to-r from-sky-400 to-green-400 bg-clip-text text-transparent">
              {t("footer.title")}
            </span>
            <div className="flex items-center gap-2 px-3 py-1 rounded-lg">
              <img src="/logos/React.svg" alt="React" className="h-5 w-5" />
              <img src="/logos/Tailwind CSS.svg" alt="Tailwind CSS" className="h-5 w-5" />
            </div>
          </div>
          <p className="text-sm">
            © {new Date().getFullYear()} {t("footer.final")}
          </p>

          {/* Versión y build */}
          <p className="text-xs text-white mt-1">
            v1.0.0 • Build {commitHash}
          </p>
        </div>

        {/* Tarjeta del repositorio */}
        <div className="flex justify-center md:justify-end md:absolute md:right-6">
          <a
            href="https://github.com/luisrocha021231/tu-repo-del-portafolio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#1e1e1f] border border-sky-400 px-4 py-2 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition"
          >
            <Github className="w-5 h-5 text-sky-400" />
            <span className="text-sm font-semibold bg-gradient-to-r from-sky-400 to-green-400 bg-clip-text text-transparent">
              {t("footer.repo")}
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
