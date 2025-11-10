import Link from "next/link";
import Particles from "@/components/Particles";

export default function Page() {
  return (
    <main>
      {/* HERO – mit Partikel-Animation */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        {/* Hintergrund-Animation */}
        <Particles />

        {/* Inhalt */}
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h1 className="hero-title">
            Künstliche <br className="hidden md:block" />
            In<span className="inline-block translate-y-[.06em] border-b-4 pb-1 border-white/60">tel</span>ligenz
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70">
            Produktionsreife KI-Assistenten, die Leads qualifizieren, Termine anstoßen und Support entlasten –
            sauber integriert in Kalender, CRM &amp; E-Mail.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link href="#offering" className="pill bg-white text-black border-white">zum Offering ↓</Link>
            <Link href="#kontakt" className="pill">Kontakt →</Link>
          </div>
        </div>
      </section>

      {/* Hier kannst du später weitere Sections ergänzen */}
    </main>
  );
}
