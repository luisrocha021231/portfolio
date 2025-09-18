import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { X } from "lucide-react";

export default function BugBanner() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(true);
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // obtenemos los bugs desde el archivo i18n (array)
  const bugs = t("bugs.list", { returnObjects: true });

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % bugs.length);
        setFade(true);
      }, 300);
    }, 4000);
    return () => clearInterval(interval);
  }, [bugs.length]);

  if (!visible) return null;

  return (
    <div className="w-full">
      <div className="flex items-center justify-between bg-[#1e1e1f] border border-sky-400 px-4 py-2 rounded-lg shadow-lg transition-all duration-300">
        <span
          className={`text-sm text-gray-200 transition-opacity duration-300 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
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
