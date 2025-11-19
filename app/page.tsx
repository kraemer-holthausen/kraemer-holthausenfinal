// app/page.tsx
import NavExxeta from "@/components/NavExxeta";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <NavExxeta />

      {/* Hero-Bereich – nimmt fast den ganzen Screen ein */}
      <main className="mx-auto max-w-6xl lg:max-w-7xl px-6 md:px-10 pt-24 pb-24 min-h-[calc(100vh-140px)] flex items-center">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center w-full">
          {/* LINKER BLOCK – große Headline */}
          <div>
            <h1
              className="
              text-[44px]
              sm:text-[60px]
              lg:text-[88px]
              xl:text-[96px]
              font-semibold
              leading-[1.02]
              tracking-tight
            "
            >
              Künstliche Intelligenz
              <br />
              für dein Unternehmen
            </h1>

            <p className="mt-8 text-lg sm:text-xl text-neutral-700 max-w-2xl leading-relaxed">
              Wir entwickeln produktionsreife KI-Assistenten, die Anfragen
              verstehen, Antworten formulieren und Prozesse automatisiert
              anstoßen – vom ersten Kontakt bis zur Terminbuchung. Sauber
              integriert in Kalender, CRM & bestehende Systeme.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button className="rounded-full bg-black text-white px-9 py-3 text-sm sm:text-base font-semibold shadow hover:bg-neutral-800 transition">
                Jetzt live testen
              </button>
              <button className="rounded-full border border-black px-9 py-3 text-sm sm:text-base font-semibold hover:bg-black hover:text-white transition">
                Kontakt aufnehmen
              </button>
            </div>
          </div>

          {/* RECHTS – laufender Chat mit sequenziellen Nachrichten */}
          <div className="flex justify-center md:justify-end">
            <div>
              <div className="chat-stream">
                {/* SEQUENCE 1 – Terminbuchung */}
                <div className="chat-sequence chat-sequence-1">
                  <div className="chat-bubble chat-bubble-user chat-msg seq1-msg1">
                    Nutzer: „Können wir morgen einen Termin buchen?“
                  </div>
                  <div className="chat-bubble chat-bubble-bot chat-msg seq1-msg2">
                    Bot: „Gerne! 10:30 Uhr oder 14:00 Uhr?“
                  </div>
                  <div className="chat-bubble chat-bubble-user chat-msg seq1-msg3">
                    Nutzer: „14:00 Uhr passt perfekt.“
                  </div>
                  <div className="chat-bubble chat-bubble-bot chat-msg seq1-msg4">
                    Bot: „Super, der Termin um 14:00 Uhr ist eingetragen.“
                  </div>

                  <div className="chat-typing chat-msg seq1-typing">
                    <span className="typing-dot dot-1" />
                    <span className="typing-dot dot-2" />
                    <span className="typing-dot dot-3" />
                  </div>
                </div>

                {/* SEQUENCE 2 – Info zu Services */}
                <div className="chat-sequence chat-sequence-2">
                  <div className="chat-bubble chat-bubble-user chat-msg seq2-msg1">
                    Nutzer: „Was kann euer KI-Assistent genau?“
                  </div>
                  <div className="chat-bubble chat-bubble-bot chat-msg seq2-msg2">
                    Bot: „Er beantwortet Anfragen, qualifiziert Leads
                    und bucht automatisch Termine.“
                  </div>
                  <div className="chat-bubble chat-bubble-user chat-msg seq2-msg3">
                    Nutzer: „Funktioniert das auch mit meinem CRM?“
                  </div>
                  <div className="chat-bubble chat-bubble-bot chat-msg seq2-msg4">
                    Bot: „Ja – wir integrieren ihn in deine bestehenden
                    Systeme.“
                  </div>

                  <div className="chat-typing chat-msg seq2-typing">
                    <span className="typing-dot dot-1" />
                    <span className="typing-dot dot-2" />
                    <span className="typing-dot dot-3" />
                  </div>
                </div>

                {/* SEQUENCE 3 – Projektstart */}
                <div className="chat-sequence chat-sequence-3">
                  <div className="chat-bubble chat-bubble-user chat-msg seq3-msg1">
                    Nutzer: „Wie schnell könnt ihr starten?“
                  </div>
                  <div className="chat-bubble chat-bubble-bot chat-msg seq3-msg2">
                    Bot: „Ein erstes KI-Pilotprojekt ist in wenigen
                    Wochen live – inklusive Training & Testing.“
                  </div>
                  <div className="chat-bubble chat-bubble-user chat-msg seq3-msg3">
                    Nutzer: „Können wir dazu einen Call machen?“
                  </div>
                  <div className="chat-bubble chat-bubble-bot chat-msg seq3-msg4">
                    Bot: „Klar – ich schicke dir direkt drei Terminvorschläge.“
                  </div>

                  <div className="chat-typing chat-msg seq3-typing">
                    <span className="typing-dot dot-1" />
                    <span className="typing-dot dot-2" />
                    <span className="typing-dot dot-3" />
                  </div>
                </div>
              </div>

              <div className="chat-label">
                KI-Chat, der Termine bucht & Fragen beantwortet
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
