import "./globals.css";
import type { Metadata } from "next";
import Starfield from "@/components/Starfield";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "KRÄMER & HOLTHAUSEN – KI-Chatbots",
  description: "Enterprise-fähige KI-Chatbots für Websites. DSGVO-konform. EU-Hosting.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        <Starfield />
        <Header />
        <div className="layer pt-16">{children}</div>
      </body>
    </html>
  );
}
