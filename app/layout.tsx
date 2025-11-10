import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "KRÄMER & HOLTHAUSEN – KI-Chatbots für Unternehmen",
  description:
    "Produktionsreife KI-Assistenten für Lead-Generierung, Terminbuchung, Support und Automatisierung. DSGVO-konform, EU-Hosting.",
  openGraph: {
    title: "KRÄMER & HOLTHAUSEN – KI-Chatbots für Unternehmen",
    description:
      "Produktionsreife KI-Assistenten für Lead-Generierung, Terminbuchung, Support und Automatisierung.",
    type: "website",
    url: "https://kraemer-holthausen.de",
    siteName: "KRÄMER & HOLTHAUSEN",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className="antialiased text-neutral-900 bg-white">
        {/* HEADER */}
        <header className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur-md border-b border-neutral-200">
          <div className="max-w-6xl mx-auto h-16 px-6 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="KRÄMER & HOLTHAUSEN" className="h-8 w-auto" />
              <span className="sr-only">KRÄMER & HOLTHAUSEN</span>
            </Link>

            <nav className="hidden md:flex items-center gap-8 text-[15px]">
              <a href="#leistungen" className="hover:text-sky-600">Leistungen</a>
              <a href="#preise" className="hover:text-sky-600">Preise</a>
              <a href="#faq" className="hover:text-sky-600">FAQ</a>
              <a href="#kontakt" className="hover:text-sky-600">Kontakt</a>
              <a
                href="#kontakt"
                className="inline-flex items-center rounded-full px-4 py-2 bg-sky-600 text-white font-semibold hover:bg-sky-700 transition"
              >
                Beratung anfragen
              </a>
            </nav>
          </div>
        </header>

        {/* PAGE */}
        <div className="pt-16">{children}</div>

        {/* FOOTER */}
        <footer className="mt-24 bg-neutral-950 text-neutral-400">
          <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="" className="h-7 w-auto opacity-90 mb-4" />
              <p className="text-sm">
                KI-Chatbots, die Umsatz bringen – von der Website-Leadmaschine bis zur Prozess-Automatisierung.
              </p>
            </div>
            <div className="text-sm">
              <p className="font-semibold text-neutral-200 mb-2">Links</p>
              <ul className="space-y-1">
                <li><a className="hover:text-white" href="#leistungen">Leistungen</a></li>
                <li><a className="hover:text-white" href="#preise">Preise</a></li>
                <li><a className="hover:text-white" href="#faq">FAQ</a></li>
              </ul>
            </div>
            <div className="text-sm">
              <p className="font-semibold text-neutral-200 mb-2">Rechtliches</p>
              <ul className="space-y-1">
                <li><a className="hover:text-white" href="/impressum">Impressum</a></li>
                <li><a className="hover:text-white" href="/datenschutz">Datenschutz</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-neutral-800 text-xs text-neutral-500 px-6 py-6 text-center">
            © {new Date().getFullYear()} KRÄMER & HOLTHAUSEN · Made for conversions.
          </div>
        </footer>
      </body>
    </html>
  );
}
