import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Particles from "@/components/Particles";

export const metadata: Metadata = {
  title: "KRÄMER & HOLTHAUSEN – KI-Chatbots",
  description: "Enterprise-fähige KI-Chatbots für Websites. DSGVO-konform. EU-Hosting.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        <Particles />
        <Header />
        <div className="layer pt-16">{children}</div>
      </body>
    </html>
  );
}
