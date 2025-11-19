"use client";

import { useState } from "react";

export default function NavExxeta() {
  const [activeIndex, setActiveIndex] = useState(1);

  const NAV_ITEMS = [
    { label: "Services", arrow: true },
    { label: "Branchen", arrow: true },
    { label: "Success Stories" },
    { label: "Karriere" },
    { label: "Unternehmen", arrow: true },
    { label: "Insights" },
  ];

  return (
    <header className="w-full bg-white">
      {/* EINZEILIGE TOP-ROW: LOGO – NAV – DE */}
      <div className="w-full flex items-center justify-between px-10 pt-6">
        
        {/* Logo ganz links */}
        <img
          src="/logo.png"
          alt="KRÄMER & HOLTHAUSEN – KI-ENTWICKLUNG"
          className="h-20 w-auto"
        />

        {/* Nav-Bar in der Mitte */}
        <nav className="flex items-center gap-3 bg-white shadow-xl rounded-full px-8 py-3 text-[15px] font-semibold">
          {NAV_ITEMS.map((item, i) => (
            <button
              key={i}
              onMouseEnter={() => setActiveIndex(i)}
              className={`px-4 py-2 rounded-full transition-all duration-200 ${
                activeIndex === i
                  ? "bg-black text-white"
                  : "text-black hover:bg-black hover:text-white"
              }`}
            >
              {item.label}
              {item.arrow && <span className="text-[10px] ml-1">▾</span>}
            </button>
          ))}
        </nav>

        {/* DE ganz rechts */}
        <button className="rounded-full bg-black text-white text-sm px-6 py-2 font-semibold shadow">
          DE ▾
        </button>
      </div>
    </header>
  );
}
