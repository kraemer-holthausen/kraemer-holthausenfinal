// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "KRÄMER & HOLTHAUSEN – KI für Unternehmen",
  description: "Strategie, Beratung & KI-Lösungen für Unternehmen.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <body className="bg-white text-black">{children}</body>
    </html>
  );
}
