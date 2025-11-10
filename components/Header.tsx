"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    { href: "#services", label: "Services" },
    { href: "#branchen", label: "Branchen" },
    { href: "#cases", label: "Success Stories" },
    { href: "#unternehmen", label: "Unternehmen" },
    { href: "#insights", label: "Insights" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 bg-black/55 backdrop-blur-md border-b border-white/10 ${
        scrolled ? "header-glass" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto h-16 px-5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="KRÄMER & HOLTHAUSEN" width={110} height={28} priority />
          <span className="sr-only">KRÄMER & HOLTHAUSEN</span>
        </Link>

        {/* Center nav (desktop) */}
        <nav className="hidden md:flex items-center gap-3">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="pill">
              {n.label}
              <span className="text-white/40">▾</span>
            </a>
          ))}
        </nav>

        {/* Right side CTA */}
        <a href="#kontakt" className="hidden md:inline-flex pill bg-white text-black border-white px-4 py-2">
          Kontakt
          <span>→</span>
        </a>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-white/80 border border-white/20 rounded-full p-2"
          aria-label="Menü"
        >
          ☰
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-white/10 px-5 py-4 space-y-3 bg-black/80 backdrop-blur">
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="pill w-full justify-between">
              {n.label} <span className="text-white/40">▾</span>
            </a>
          ))}
          <a href="#kontakt" onClick={() => setOpen(false)} className="pill w-full bg-white text-black border-white">
            Kontakt →
          </a>
        </div>
      )}
    </header>
  );
}
