"use client";
import Nav from "../components/NavExxeta";
import Footer from "../components/Footer";
import SparkleBackground from "../components/SparkleBackground";
import MorphingParticles from "../components/MorphingParticles";

export default function Page() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* SPARKLES IM HINTERGRUND */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <SparkleBackground />
      </div>

      {/* NAVIGATION */}
      <Nav />

      {/* HERO-BEREICH */}
      <section className="relative z-10">
        <div className="mx-auto max-w-[1200px] px-4 pt-6 md:pt-20 lg:pt-24 pb-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-16">
            {/* LINKER BLOCK – HEADLINE + TEXT + BUTTONS */}
            <div className="relative w-full lg:max-w-[620px]">
              <h1 className="font-extrabold leading-[0.96] tracking-[-0.01em]">
                <span className="block text-[34px] sm:text-[40px] md:text-[64px] lg:text-[80px] xl:text-[96px]">
                  Künstliche
                </span>
                <span className="block text-[34px] sm:text-[40px] md:text-[64px] lg:text-[80px] xl:text-[96px]">
                  Intelligenz
                </span>
                <span className="block text-[34px] sm:text-[40px] md:text-[64px] lg:text-[80px] xl:text-[96px]">
                  für dein
                </span>
                <span className="block text-[34px] sm:text-[40px] md:text-[64px] lg:text-[80px] xl:text-[96px]">
                  Unternehmen
                </span>
              </h1>

              <p className="mt-6 text-[15px] sm:text-[16px] md:text-[17px] text-white/80 max-w-xl leading-relaxed">
                Produktionsreife KI-Assistenten, die Leads qualifizieren,
                Termine anstoßen und Support entlasten – sauber integriert in
                Kalender, CRM &amp; E-Mail.
              </p>

              <div className="mt-8 flex flex-wrap gap-4 sm:gap-6 md:gap-8">
                <a
                  href="#kontakt"
                  className="h-11 sm:h-12 px-6 sm:px-7 rounded-full bg-white text-black text-[14px] sm:text-[15px] font-medium inline-flex items-center justify-center shadow-sm hover:opacity-90 transition"
                >
                  Kontakt aufnehmen
                </a>

                <a
                  href="#infos"
                  className="h-11 sm:h-12 px-6 sm:px-7 rounded-full border border-white/20 text-white/90 text-[14px] sm:text-[15px] font-medium inline-flex items-center justify-center hover:bg-white hover:text-black transition"
                >
                  Infos
                </a>

                <a
                  href="#live"
                  className="h-11 sm:h-12 px-6 sm:px-7 rounded-full border border-white/20 text-white/90 text-[14px] sm:text-[15px] font-medium inline-flex items-center justify-center hover:bg-white hover:text-black transition"
                >
                  Jetzt sofort live testen
                </a>
              </div>
            </div>

            {/* RECHTS – MORPHING SYMBOL (Logo-Form, Chat-Icon etc.) */}
            <div className="w-full lg:flex-1 flex justify-center lg:justify-end">
              <div className="relative w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] lg:w-[360px] lg:h-[360px]">
                <MorphingParticles />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
