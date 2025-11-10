"use client";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-neutral-900 flex flex-col">
      {/* HEADER */}
      <header className="fixed top-0 w-full bg-white/70 backdrop-blur-md border-b border-neutral-200 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-bold text-sky-600">
            KRÄMER&nbsp;& HOLTHAUSEN
          </Link>
          <nav className="hidden md:flex gap-8 font-medium">
            <Link href="#leistungen" className="hover:text-sky-500">Leistungen</Link>
            <Link href="#preise" className="hover:text-sky-500">Preise</Link>
            <Link href="#faq" className="hover:text-sky-500">FAQ</Link>
            <Link href="#kontakt" className="hover:text-sky-500">Kontakt</Link>
          </nav>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col justify-center items-center gap-[3px]"
          >
            <span className="block w-6 h-[2px] bg-neutral-800"></span>
            <span className="block w-6 h-[2px] bg-neutral-800"></span>
            <span className="block w-6 h-[2px] bg-neutral-800"></span>
          </button>
        </div>
        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-neutral-200 flex flex-col items-center py-4 space-y-3">
            <Link href="#leistungen" onClick={() => setMenuOpen(false)}>Leistungen</Link>
            <Link href="#preise" onClick={() => setMenuOpen(false)}>Preise</Link>
            <Link href="#faq" onClick={() => setMenuOpen(false)}>FAQ</Link>
            <Link href="#kontakt" onClick={() => setMenuOpen(false)}>Kontakt</Link>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-6 pt-32 pb-20">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          <span className="text-sky-500">KI-Chatbots</span> für Unternehmen
        </h1>
        <p className="text-lg md:text-xl text-neutral-600 mb-8 max-w-2xl">
          Wir entwickeln maßgeschneiderte, DSGVO-konforme Chatbots, die Kundendialoge automatisieren und Umsatz steigern.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="#kontakt" className="bg-sky-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-sky-600 transition">
            Jetzt beraten lassen
          </Link>
          <Link href="#preise" className="border border-neutral-300 px-8 py-3 rounded-full font-semibold hover:bg-neutral-50 transition">
            Preise ansehen
          </Link>
        </div>
      </section>
    </main>
  );
}
