import "./globals.css";

export const metadata = {
  title: "KRÄMER & HOLTHAUSEN – KI für Unternehmen",
  description: "Beratung, Entwicklung und Integration von KI-Lösungen.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className="min-h-screen bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
