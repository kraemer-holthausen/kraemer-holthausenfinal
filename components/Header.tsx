import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-between items-center px-8 py-4 bg-black/60 backdrop-blur-xl header-glass">
      <Link href="/" className="text-xl font-bold text-white tracking-tight">
        KRÄMER & HOLTHAUSEN
      </Link>

      <nav className="hidden md:flex gap-6 text-sm text-white/80">
        <Link href="#services" className="hover:text-white">Services</Link>
        <Link href="#branchen" className="hover:text-white">Branchen</Link>
        <Link href="#cases" className="hover:text-white">Success Stories</Link>
        <Link href="#unternehmen" className="hover:text-white">Unternehmen</Link>
        <Link href="#insights" className="hover:text-white">Insights</Link>
      </nav>

      <Link href="#kontakt" className="pill bg-white text-black">Kontakt →</Link>
    </header>
  );
}
