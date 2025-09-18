import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

export default function MapboxMap() {
  const mapContainer = useRef(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/luisrocharo/cmfpxjk8k00e201r82pl0fv4w", // tu estilo
      center: [-99.6556, 19.2826], // Toluca, México (lng, lat)
      zoom: 13, // ajusta el nivel de zoom
    });

    return () => map.remove();
  }, []);

  return <div ref={mapContainer} className="w-full h-[300px] rounded-2xl" />;
}
