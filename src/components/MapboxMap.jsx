import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import { useTranslation } from "react-i18next";

// Usa tu variable de entorno en producción
mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

export default function MapboxMap() {
  const mapContainer = useRef(null);
  const [showOverlay, setShowOverlay] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (!mapContainer.current) return;

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/luisrocharo/cmfpxjk8k00e201r82pl0fv4w",
      center: [-99.6556, 19.2826], // Toluca
      zoom: 13,
    });

    // Configuración inicial
    map.dragPan.disable();
    map.touchZoomRotate.enable(); // pinch-zoom en móvil
    map.scrollZoom.disable(); // desactivamos scroll libre

    // 📱 Detectar si es móvil
    setIsMobile(/Mobi|Android/i.test(navigator.userAgent));

    // 🖥️ Desktop → drag y scroll requieren Ctrl/⌘
    const handleKeyChange = (e) => {
      if (e.ctrlKey || e.metaKey) {
        map.dragPan.enable();
        map.scrollZoom.enable({ around: "center" });
      } else {
        map.dragPan.disable();
        map.scrollZoom.disable();
      }
    };

    window.addEventListener("keydown", handleKeyChange);
    window.addEventListener("keyup", handleKeyChange);

    // 🔹 Ocultar overlay al primer uso
    const hideOverlay = () => setShowOverlay(false);
    map.on("dragstart", hideOverlay);
    map.on("zoomstart", hideOverlay);

    return () => {
      map.remove();
      window.removeEventListener("keydown", handleKeyChange);
      window.removeEventListener("keyup", handleKeyChange);
    };
  }, []);

  return (
    <div className="relative w-full h-[300px] rounded-2xl overflow-hidden">
      {/* Contenedor del mapa */}
      <div ref={mapContainer} className="w-full h-full" />

      {/* Overlay tipo aviso */}
      {showOverlay && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white text-sm md:text-base font-medium select-none pointer-events-none">
          <span>
            {isMobile
              ? t("mapbox.map-overlay-mobile")
              : t("mapbox.map-overlay-desktop")}
          </span>
        </div>
      )}
    </div>
  );
}
