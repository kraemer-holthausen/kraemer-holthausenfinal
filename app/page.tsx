"use client";

import MorphingParticles from "@/components/MorphingParticles";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* GROßER MORPHING-KREIS – nur ab md sichtbar */}
      <div className="pointer-events-none hidden md:block">
        <div className="absolute inset-y-24 right-0 w-[46vw] max-w-[520px] min-w-[320px]">
          <MorphingParticles />
        </div>
      </div>

      {/* HERO-INHALT */}
      <section className="relative mx-auto max-w-[1200px] px-4 pt-24 pb-16">
        {/* Headline – auf Mobile innerhalb, ab md leicht nach links geschoben */}
        <div className="relative md:-ml-8 lg:-ml-16 xl:-ml-32 2xl:-ml-48">
          <h1
            className="
              font-extrabold leading-[0.95] tracking-tight
              text-[34px] sm:text-[40px] md:text-[60px] lg:text-[86px] xl:text-[110px]
            "
          >
            Künstliche<br />
            Intelligenz<br />
            für dein<br />
            Unternehmen
          </h1>
        </div>

        {/* Subline */}
        <p className="mt-6 max-w-[480px] text-white/80 text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed">
          Produktionsreife KI-Assistenten, die Leads qualifizieren, Termine anstoßen
          und Support entlasten – sauber integriert in Kalender, CRM &amp; E-Mail.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#kontakt"
            className="px-7 py-3 rounded-full bg-white text-black font-medium hover:bg-white/90 transition"
          >
            Kontakt aufnehmen
          </a>

          <button className="px-6 py-3 rounded-full border border-white/25 text-white/90 hover:bg-white/10 transition">
            Infos
          </button>

          <button className="px-6 py-3 rounded-full border border-white/25 text-white/90 hover:bg-white/10 transition">
            Jetzt sofort live testen
          </button>
        </div>
      </section>
    </main>
  );
}
