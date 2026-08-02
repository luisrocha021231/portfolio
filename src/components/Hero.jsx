import { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

const INITIALS = "LR";

const CONTACT_ROWS = [
  { icon: Mail, titleKey: "hero.email-title", contentKey: "hero.email-content" },
  { icon: Phone, titleKey: "hero.phone-title", contentKey: "hero.phone-content-2" },
  { icon: MapPin, titleKey: "hero.location-title", contentKey: "hero.location-content" },
];

const SOCIAL_LINKS = [
  { icon: Linkedin, href: "https://linkedin.com/in/luisrocharonq", label: "LinkedIn de Luis Rocha" },
  { icon: Github, href: "https://github.com/luisrocha021231", label: "GitHub de Luis Rocha" },
  { icon: MessageCircle, href: "https://wa.me/527122109471", label: "WhatsApp de Luis Rocha" },
];

function AvatarPanel({ size }) {
  const clamped = size ? Math.min(Math.max(size, 200), 320) : null;
  const desktopStyle = clamped ? { "--avatar-size": `${clamped}px` } : undefined;

  return (
    <div
      className="relative shrink-0 bg-[#1c1f29] flex items-center justify-center w-full h-72 sm:h-[var(--avatar-size)] sm:w-[var(--avatar-size)] overflow-hidden"
      style={desktopStyle}
    >
      {/* Placeholder de iniciales */}
      <div className="w-24 h-24 rounded-full bg-[#2a2e3a] flex items-center justify-center">
        <span
          className="text-3xl font-bold text-[#f5f5f7]"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {INITIALS}
        </span>
      </div>

      {/* 
      <img
        src="/Avatar.webp"
        alt="Foto de perfil"
        className="absolute inset-0 w-full h-full object-cover object-top"
      /> */}

      <span className="absolute bottom-4 right-4 flex h-5 w-5 z-10">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#37f712] opacity-75" />
        <span className="relative inline-flex rounded-full h-5 w-5 bg-[#37f712] border-2 border-[#1c1f29]" />
      </span>
    </div>
  );
}

export default function Hero() {
  const { t } = useTranslation();
  const infoRef = useRef(null);
  const [avatarSize, setAvatarSize] = useState(null);

  useEffect(() => {
    const el = infoRef.current;
    if (!el) return;

    const update = () => {
      const next = el.offsetHeight;
      setAvatarSize((prev) => (prev !== null && Math.abs(prev - next) < 1 ? prev : next));
    };
    update();

    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener("resize", update);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section
      id="inicio"
      className="min-h-screen flex flex-col justify-center items-center bg-[#12141c] text-[#f5f5f7] px-4 pt-20"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      <div className="w-full max-w-3xl rounded-2xl overflow-hidden bg-[#171922] border border-white/[0.08] shadow-[0_24px_60px_rgba(0,0,0,0.4)] flex flex-col">
        <div className="flex flex-col sm:flex-row">
          <AvatarPanel size={avatarSize} />

          {/* Columna info */}
          <div ref={infoRef} className="flex-1 min-w-0 sm:min-w-[320px] px-8 py-9 flex flex-col justify-center">
            <h1 className="text-[26px] leading-tight font-bold break-words">{t("hero.name")}</h1>
            <p className="mt-2 text-[14px] font-semibold text-[#ec4b6a]">{t("hero.desc")}</p>

            <div className="mt-7 space-y-5">
              {CONTACT_ROWS.map(({ icon: Icon, titleKey, contentKey }) => (
                <div
                  key={titleKey}
                  className="flex items-center gap-4 pb-5 border-b border-white/[0.06] last:border-0 last:pb-0"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#1c1f29] flex items-center justify-center shrink-0">
                    <Icon className="w-[17px] h-[17px] text-[#9a9aa5]" strokeWidth={1.75} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] tracking-wide text-[#9a9aa5] uppercase">{t(titleKey)}</p>
                    <p className="text-[15px] truncate">{t(contentKey)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer: */}
        <div className="flex justify-center gap-3 py-5 border-t border-white/[0.06]">
          {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-full bg-[#1c1f29] flex items-center justify-center text-[#9a9aa5] hover:text-[#ec4b6a] transition-colors duration-200"
            >
              <Icon className="w-[17px] h-[17px]" strokeWidth={1.75} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}