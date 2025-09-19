import { useState, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { X } from "lucide-react";

export default function BugBanner() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(true);
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // Memoriza el array de bugs para que no cambie en cada render
  const bugs = useMemo(() => t("bugs.list", { returnObjects: true }), [t]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        // Ahora toma un bug aleatorio sin bucle infinito
        const randomIndex = Math.floor(Math.random() * bugs.length);
        setIndex(randomIndex);
        setFade(true);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, [bugs.length]); // ahora solo depende del length

  if (!visible) return null;

  return (
    <div className="w-full max-w-md mx-auto px-2 sm:px-0">
      <div className="flex items-center justify-between bg-[#1e1e1f] border border-sky-400 px-3 sm:px-4 py-2 rounded-lg shadow-lg transition-all duration-300 text-xs sm:text-sm">
        <span
          className={`transition-opacity duration-300 ${
            fade ? "opacity-100" : "opacity-0"
          } text-gray-200`}
        >
          {bugs[index]}
        </span>
        <button onClick={() => setVisible(false)}>
          <X className="w-4 h-4 text-gray-400 hover:text-green-400" />
        </button>
      </div>
    </div>
  );
}
