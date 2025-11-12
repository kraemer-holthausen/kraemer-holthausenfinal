"use client";
import Nav from "../components/NavExxeta";
import Footer from "../components/Footer";
import MorphingParticles from "../components/MorphingParticles";

export default function Page() {
  return (
    <main className="relative">
      <MorphingParticles />
      <Nav />

      <section className="relative z-10">
        <div className="container mx-auto max-w-[1200px] px-4 pt-12 md:pt-16">
          {/* Headline-Block: kleiner + weit nach links */}
          <div className="relative -ml-12 md:-ml-24 lg:-ml-40 xl:-ml-56 2xl:-ml-72">
            <h1 className="font-extrabold leading-[1] tracking-[-0.01em]">
              <span className="block text-[52px] md:text-[84px] lg:text-[92px]">Künstliche</span>
              <span className="block text-[52px] md:text-[84px] lg:text-[92px]">Intelligenz</span>
              <span className="block text-[52px] md:text-[84px] lg:text-[92px]">für dein</span>
              <span className="block text-[52px] md:text-[84px] lg:text-[92px]">Unternehmen</span>
            </h1>

            <p className="mt-6 text-[16px] md:text-[17px] text-white/80 max-w-xl">
              Produktionsreife KI-Assistenten, die Leads qualifizieren, Termine anstoßen
              und Support entlasten – sauber integriert in Kalender, CRM &amp; E-Mail.
            </p>

            <div className="mt-7 flex flex-wrap gap-12">
              <a href="#kontakt" className="h-12 px-6 rounded-full bg-white text-black text-[15px] font-medium inline-flex items-center justify-center shadow-sm hover:opacity-90 transition">
                Kontakt aufnehmen
              </a>
              <a href="#infos" className="h-12 px-6 rounded-full border border-white/20 text-white/90 text-[15px] font-medium inline-flex items-center justify-center hover:bg-white hover:text-black transition">
                Infos
              </a>
              <a href="#live" className="h-12 px-6 rounded-full border border-white/20 text-white/90 text-[15px] font-medium inline-flex items-center justify-center hover:bg-white hover:text-black transition">
                Jetzt sofort live testen
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
