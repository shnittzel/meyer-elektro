import { NextResponse } from "next/server";

/*
  Route Handler für das Kontaktformular.

  OFFENER PUNKT (mit Luan abzustimmen, siehe CLAUDE-meyer-elektro.md):
  Wie sollen Anfragen verarbeitet werden?
    a) Speichern in einer Datenbank (z. B. Supabase)  – gut für Übersicht/Historie
    b) reiner E-Mail-Versand an das Postfach            – am einfachsten
    c) beides

  Bis das entschieden ist, nimmt dieser Handler die Anfrage nur entgegen,
  prüft die Pflichtfelder und schreibt sie ins Server-Log. Es wird noch
  nichts versendet oder dauerhaft gespeichert.
*/

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  consent?: boolean;
  // Honeypot: echtes Feld, das für Menschen unsichtbar ist. Wird es
  // ausgefüllt, war es ein Bot.
  company?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let data: Payload;
  try {
    data = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  if (data.company) {
    // Bot erkannt – wir tun so, als sei alles gut.
    return NextResponse.json({ ok: true });
  }

  const errors: Record<string, string> = {};
  if (!data.name?.trim()) errors.name = "Bitte geben Sie Ihren Namen an.";
  if (!data.email?.trim()) {
    errors.email = "Bitte geben Sie Ihre E-Mail-Adresse an.";
  } else if (!EMAIL_RE.test(data.email.trim())) {
    errors.email = "Diese E-Mail-Adresse sieht nicht korrekt aus.";
  }
  if (!data.message?.trim() || data.message.trim().length < 10) {
    errors.message = "Bitte beschreiben Sie Ihr Anliegen (mind. 10 Zeichen).";
  }
  if (!data.consent) {
    errors.consent = "Bitte stimmen Sie der Verarbeitung Ihrer Daten zu.";
  }

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 422 });
  }

  // TODO: hier später Speicherung/Versand einbauen (siehe Kommentar oben).
  console.info("[Kontaktformular] Neue Anfrage:", {
    name: data.name,
    email: data.email,
    phone: data.phone ?? "-",
    message: data.message,
    at: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
