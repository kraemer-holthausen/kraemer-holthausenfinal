import Link from "next/link";

export default function Page() {
  return (
    <main>
      {/* HERO */}
      <section className="min-h-[80vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="hero-title">
            Künstliche <br className="hidden md:block" />
            In<span className="inline-block translate-y-[.06em] border-b-4 pb-1 border-white/60">tel</span>ligenz
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70">
            Wir liefern produktionsreife KI-Assistenten, die Leads qualifizieren, Termine anstoßen
            und Support entlasten – sauber integriert in Kalender, CRM &amp; E-Mail.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link href="#offering" className="pill bg-white text-black border-white">
              zum Offering ↓
            </Link>
            <Link href="#kontakt" className="pill">
              Kontakt →
            </Link>
          </div>
        </div>
      </section>

      {/* OFFERING PREVIEW */}
      <section id="offering" className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          {[
            {
              t: "Website-Bots",
              d: "Start-Chips, geführte Flows, DSGVO-Opt-ins. Design in eurer CI.",
            },
            {
              t: "Termin & CRM",
              d: "Kalenderbuchung, E-Mail und Webhooks. Handover ans Team.",
            },
            {
              t: "Prozess-Automation",
              d: "Vom Lead-Scoring bis zum FAQ-Support. EU-Hosting, Logging minimiert.",
            },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold mb-2">{c.t}</h3>
              <p className="text-white/70">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="kontakt" className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">Bereit für Enterprise-Qualität?</h2>
          <p className="text-white/70 mt-3">
            Kurzer Call, klare Roadmap. Wir setzen eine Demo auf eurer Domain auf.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:info@kraemer-holthausen.de" className="pill bg-white text-black border-white">
              E-Mail schreiben
            </a>
            <a href="tel:+490000000000" className="pill">
              Jetzt anrufen
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
