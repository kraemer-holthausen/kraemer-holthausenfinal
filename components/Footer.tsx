"use client";

const Footer = () => (
  <footer className="mt-16 border-t border-white/10 py-10">
    <div className="container mx-auto px-4 max-w-[1200px] text-sm text-white/70 grid md:grid-cols-3 gap-6">
      <div>
        <div className="font-semibold text-white">KRÄMER & HOLTHAUSEN</div>
        <p className="mt-2">KI-Lösungen für Unternehmen.</p>
      </div>
      <div>
        <div className="font-semibold text-white">Rechtliches</div>
        <ul className="mt-2 space-y-1">
          <li><a className="hover:underline" href="/impressum">Impressum</a></li>
          <li><a className="hover:underline" href="/datenschutz">Datenschutz</a></li>
        </ul>
      </div>
      <div>
        <div className="font-semibold text-white">Kontakt</div>
        <p className="mt-2">info@kraemer-holthausen.de</p>
      </div>
    </div>
  </footer>
);
export default Footer;
