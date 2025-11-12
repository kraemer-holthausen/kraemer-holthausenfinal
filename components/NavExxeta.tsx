"use client";
import LogoWhite from "./LogoWhite";
import { Search } from "lucide-react";
import { useState } from "react";

export default function NavExxeta() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="sticky top-0 z-40">
      {/* Abstand nach unten wie bei Exxeta */}
      <div className="bg-black/60 backdrop-blur-md pt-10 pb-4">
        <div className="relative container mx-auto max-w-[1200px] px-4 py-3 h-[70px] flex items-center">

          {/* LOGO – exakt gleiche Linkslinie wie Headline */}
          <div className="absolute top-[65%] -translate-y-1/2">
            <a
              href="/"
              className="block relative 
                -ml-12 md:-ml-24 lg:-ml-40 xl:-ml-56 2xl:-ml-72"
            >
              <LogoWhite />
            </a>
          </div>

          {/* ZENTRIERTE EXXETA-NAVIGATION */}
          <nav
            className="
              hidden md:flex items-center gap-1
              rounded-full bg-white text-black 
              shadow-[0_12px_40px_rgba(0,0,0,.25)] px-3 py-2
              absolute left-1/2 -translate-x-1/2
            "
          >
            {[
              "Services",
              "Branchen",
              "Success Stories",
              "Karriere",
              "Unternehmen",
              "Insights",
            ].map((item) => (
              <button
                key={item}
                className="px-3 h-9 rounded-full text-[14px] font-medium hover:bg-black hover:text-white transition"
              >
                {item}
              </button>
            ))}

            <button
              aria-label="Suche"
              className="ml-1 h-9 w-9 rounded-full grid place-items-center hover:bg-black hover:text-white transition"
              onClick={() => setShowSearch((s) => !s)}
            >
              <Search size={16} />
            </button>
          </nav>

          {/* RECHTS */}
<div className="hidden md:flex items-center absolute -right-[200px] top-1/2 -translate-y-1/2">
  <span className="h-8 px-3 rounded-full bg-white/10 text-white/80 grid place-items-center text-sm">
    DE ▾
  </span>
</div>

        </div>
      </div>

      {/* SUCHLEISTE */}
      {showSearch && (
        <div className="border-t border-white/10 bg-black/70 backdrop-blur-md">
          <div className="mx-auto px-4 py-3 flex items-center gap-6 relative">
            <input
              autoFocus
              type="search"
              placeholder="Wonach suchst du?"
              className="w-full h-11 rounded-xl border border-white/20 bg-black/60 text-white px-4 outline-none focus:ring-2 focus:ring-white/20"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  const q = (e.target as HTMLInputElement).value.trim();
                  if (q) window.location.href = `/search?q=${encodeURIComponent(q)}`;
                }
              }}
            />
          </div>
        </div>
      )}
    </header>
  );
}
