// components/HeroVisual.tsx
"use client";

const columns = 7;
const rows = 6;

export default function HeroVisual() {
  const cells = Array.from({ length: rows * columns });

  return (
    <div className="relative mx-auto w-full max-w-md aspect-[4/3] bg-white rounded-3xl shadow-xl border border-neutral-200 overflow-hidden flex items-center justify-center">
      {/* „Spielbrett“ */}
      <div className="relative w-[80%] h-[70%] bg-white border-4 border-black rounded-2xl grid grid-cols-7 grid-rows-6 gap-1 p-2">
        {cells.map((_, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center"
          >
            <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border border-black bg-white" />
          </div>
        ))}
      </div>

      {/* Animierte „Coins“, die reinfallen */}
      <span className="hero-coin hero-coin-1" />
      <span className="hero-coin hero-coin-2" />
      <span className="hero-coin hero-coin-3" />

      {/* kleiner Label-Text unten rechts */}
      <div className="absolute bottom-4 right-5 text-[11px] text-neutral-500">
        KI-gestützte Entscheidungen
      </div>
    </div>
  );
}
