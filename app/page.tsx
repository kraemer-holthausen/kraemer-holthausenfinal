"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          KI-Chatbots für Websites,{" "}
          <span className="text-sky-500">die Umsatz bringen</span>
        </h1>
        <p className="text-lg md:text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
          Produktionsreife KI-Assistenten für Lead-Generierung,
          Terminbuchung, Support und Automatisierung.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="#preise"
            className="bg-sky-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-sky-600 transition"
          >
            Preise ansehen
          </Link>
          <Link
            href="#kontakt"
            className="border border-neutral-300 px-6 py-3 rounded-full font-semibold hover:bg-neutral-50 transition"
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </main>
  );
}
