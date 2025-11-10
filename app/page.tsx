"use client";
import Link from "next/link";

function Check({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2">
      <span className="inline-block h-4 w-4 rounded-full bg-sky-500"></span>
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_60%_at_50%_10%,#000_10%,transparent_70%)]"
          style={{
            background:
              "radial-gradient(60% 50% at 50% -10%, rgba(14,165,233,0.25), transparent 60%)",
          }}
        />
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
            KI-Chatbots für Websites, <span className="text-sky-600">die Umsatz bringen</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto">
            Leads qualifizieren, Termine anstoßen, Support entlasten – voll DSGVO-konform mit EU-Hosting.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#kontakt"
              className="rounded-full px-6 py-3 bg-sky-600 text-white font-semibold hover:bg-sky-700 transition"
            >
              Kostenlose Beratung
            </a>
            <a
              href="#preise"
              className="rounded-full px-6 py-3 border border-neutral-300 font-semibold hover:bg-neutral-50 transition"
            >
              Preise ansehen
            </a>
          </div>

          {/* Trust bar (Platzhalter-Logos) */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 opacity-70">
            {["/logo.png", "/logo.png", "/logo.png", "/logo.png"].map((src, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={i} src={src} alt="" className="h-8 w-auto mx-auto" />
            ))}
          </div>
        </div>
      </section>

      {/* LEISTUNGEN */}
      <section id="leistungen" className="py-24 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-center">
            Vom Website-Bot bis zur Prozess-Automation
          </h2>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              {
                t: "Lead-Maschine",
                d: "Start-Chips, qualifizierende Fragen, saubere Übergabe in CRM oder E-Mail.",
              },
              {
                t: "Termin-Flows",
                d: "Kalender-Anbindung oder Übergabe. Erinnerungen optional.",
              },
              {
                t: "Support-Entlastung",
                d: "FAQ-Antworten, Status-Abfragen, Handover an Team bei Bedarf.",
              },
            ].map((b, i) => (
              <div
                key={i}
                className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold mb-2">{b.t}</h3>
                <p className="text-neutral-600">{b.d}</p>
                <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                  <li><Check>DSGVO-konform</Check></li>
                  <li><Check>EU-Hosting</Check></li>
                  <li><Check>Design passend zu Ihrer CI</Check></li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES (kurz) */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6">
          {[
            {
              h: "Friseur-Kette",
              p: "Mehr Termine, weniger Telefon – +62% qualifizierte Anfragen in 4 Wochen.",
            },
            {
              h: "Dienstleister KMU",
              p: "Website-Bot filtert Leads vor, Vertrieb spart täglich 2–3 Stunden.",
            },
          ].map((c, i) => (
            <div
              key={i}
              className="rounded-2xl border border-neutral-200 p-8 bg-white shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-bold mb-2">{c.h}</h3>
              <p className="text-neutral-600">{c.p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PREISE */}
      <section id="preise" className="py-24 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Pakete</h2>
          <p className="mt-3 text-neutral-600">
            Monatlich kündbar. Hosting inklusive. Keine Einrichtungsgebühr für Starter/Pro.
          </p>

          <div className="mt-10 grid md:grid-cols-3 gap-6 text-left">
            {[
              {
                name: "Starter",
                price: "149 € / Monat",
                features: ["1 Domain", "1.000 Bot-Nachrichten / Monat", "E-Mail Übergabe"],
                cta: "Jetzt starten",
              },
              {
                name: "Pro",
                price: "349 € / Monat",
                features: ["3 Domains", "10.000 Bot-Nachrichten / Monat", "Kalender & Webhooks"],
                cta: "Anfragen",
                highlight: true,
              },
              {
                name: "Enterprise",
                price: "auf Anfrage",
                features: ["Eigene Instanz", "SLAs", "Spezielle Integrationen / API"],
                cta: "Beratung buchen",
              },
            ].map((p, i) => (
              <div
                key={i}
                className={`rounded-2xl border p-8 shadow-sm bg-white hover:shadow-md transition ${
                  p.highlight ? "border-sky-300" : "border-neutral-200"
                }`}
              >
                <h3 className="text-xl font-bold">{p.name}</h3>
                <p className="mt-2 text-sky-600 font-semibold">{p.price}</p>
                <ul className="mt-4 space-y-2 text-neutral-700">
                  {p.features.map((f, j) => (
                    <li key={j}>• {f}</li>
                  ))}
                </ul>
                <a
                  href="#kontakt"
                  className={`mt-6 inline-block rounded-full px-5 py-2 font-semibold transition ${
                    p.highlight
                      ? "bg-sky-600 text-white hover:bg-sky-700"
                      : "border border-neutral-300 hover:bg-neutral-50"
                  }`}
                >
                  {p.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-center">
            Häufige Fragen
          </h2>
          <div className="mt-10 divide-y divide-neutral-200 border border-neutral-200 rounded-2xl overflow-hidden">
            {[
              {
                q: "Ist das DSGVO-konform?",
                a: "Ja. EU-first, Logging minimiert, Opt-in für Kontaktdaten, Auftragsverarbeitung möglich.",
              },
              {
                q: "Wie schnell sind wir live?",
                a: "In der Regel 1–3 Tage bis zur ersten Version, danach iterativer Feinschliff.",
              },
              {
                q: "Wie binden wir Kalender/CRM an?",
                a: "Über vorhandene Tools, Webhooks oder direkte API-Integrationen (HubSpot, Pipedrive u. a.).",
              },
            ].map((f, i) => (
              <details key={i} className="group open:bg-neutral-50">
                <summary className="cursor-pointer select-none list-none px-5 py-4 font-semibold flex items-center justify-between">
                  {f.q}
                  <span className="ml-4 h-5 w-5 rounded-full bg-neutral-200 group-open:bg-sky-500 transition" />
                </summary>
                <div className="px-5 pb-5 text-neutral-700">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="kontakt" className="py-24 bg-gradient-to-b from-neutral-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Bereit, Anfragen zu verdoppeln?
          </h2>
          <p className="mt-3 text-neutral-600">
            Wir setzen eine Demo auf Ihrer Domain auf – kostenlos & unverbindlich.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@kraemer-holthausen.de"
              className="rounded-full px-6 py-3 bg-sky-600 text-white font-semibold hover:bg-sky-700 transition"
            >
              E-Mail schreiben
            </a>
            <a
              href="tel:+49000000000"
              className="rounded-full px-6 py-3 border border-neutral-300 font-semibold hover:bg-neutral-50 transition"
            >
              Jetzt anrufen
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
