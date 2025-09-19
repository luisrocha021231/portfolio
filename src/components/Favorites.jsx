import { useTranslation } from "react-i18next";

export default function Favorites() {
  const { t } = useTranslation();

  const games = [
    { name: "Resident Evil Saga", logo: "/Resident-Evil.png" },
    { name: "Horizon Saga", logo: "/horizon-zd.webp" },
    { name: "Mario Kart", logo: "/mariokart.png" },
    { name: "Final Fantasy VII", logo: "/final-fantasy.jpg" },
    { name: "EA FC", logo: "/ea-fc.jpg" },
    { name: "Spider Man Saga", logo: "/spiderman.jpg" },
  ];

  return (
    <section id="favorites" className="py-20 bg-[#1e1e1f] text-white">
      <div className="container mx-auto px-6 text-center">
        {/* Título */}
        <h2 className="mb-12">
          <span className="text-3xl bg-gradient-to-r from-sky-400 to-green-400 bg-clip-text text-transparent font-bold">
            {t("favorites.title")}
          </span>
        </h2>

        {/* Videojuegos favoritos */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-white">
            {t("favorites.games")}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {games.map((game, idx) => (
              <div
                key={idx}
                className="overflow-hidden bg-[#121212] rounded-2xl shadow-lg 
                           hover:scale-105 hover:shadow-green-400/30 transition"
              >
                {/* Imagen ocupa toda la tarjeta */}
                <img
                  src={game.logo}
                  alt={game.name}
                  className="w-full h-40 object-cover"
                  title={game.name}
                />
                {/* Nombre debajo */}
                <div className="p-3 text-center">
                  <p className="text-sm font-semibold">{game.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
