"use client";
import { useEffect, useRef, useState } from "react";

export default function LogoWhite({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [hover, setHover] = useState(false);

  // Deutlich sichtbare Bewegung nur bei Hover
  useEffect(() => {
    const el = ref.current!;
    const letters = Array.from(el.querySelectorAll<HTMLElement>("[data-letter]"));
    let raf = 0, t = 0;
    const step = () => {
      t += 0.016;
      const amp = hover ? 1.6 : 0;
      const sx = hover ? 1.016 : 1;
      for (let i = 0; i < letters.length; i++) {
        const span = letters[i];
        const dx = Math.sin(t * 1.8 + i * 0.7) * amp;
        const dy = Math.cos(t * 1.9 + i * 0.5) * amp;
        span.style.transform = `translate(${dx}px, ${dy}px) scale(${sx})`;
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [hover]);

  const wrap = (txt: string) =>
    txt.split("").map((ch, i) => (
      <span key={i} data-letter className="inline-block will-change-transform">
        {ch}
      </span>
    ));

  return (
    <div
      ref={ref}
      className={`leading-[0.95] select-none text-white ${className}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <a href="/" className="block" aria-label="Zur Startseite">
        {/* Beide Varianten sind immer im DOM -> keine Hydration-Diffs */}
        <div className={`transition-opacity duration-150 ${hover ? "opacity-0 pointer-events-none absolute" : "opacity-100 relative"}`}>
          <div className="text-[22px] md:text-[24px] font-extrabold tracking-[0.14em] uppercase">
            {wrap("KRÄMER &")}
          </div>
          <div className="text-[22px] md:text-[24px] font-extrabold tracking-[0.14em] uppercase mt-[2px]">
            {wrap("HOLTHAUSEN")}
          </div>
        </div>

        <div className={`transition-opacity duration-150 ${hover ? "opacity-100 relative" : "opacity-0 pointer-events-none absolute"}`}>
          <div className="text-[22px] md:text-[24px] font-extrabold tracking-[0.14em] uppercase flex items-baseline gap-1">
            <span>{wrap("KRÄMER &")}</span>
            <span>{wrap("HOLTHAUSEN")}</span>
          </div>
        </div>
      </a>

      {/* Subline nur bei Hover */}
      <div className={`text-[11px] mt-1 tracking-[0.22em] uppercase text-white/80 transition-opacity duration-150 ${hover ? "opacity-100" : "opacity-0"}`}>
        KI-Entwicklung
      </div>
    </div>
  );
}
