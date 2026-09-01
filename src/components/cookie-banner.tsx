"use client";

import { useCallback, useState, useSyncExternalStore } from "react";
import Link from "next/link";

/*
  Einfacher Cookie-Hinweis (Opt-in).
  Aktuell setzt die Seite KEINE Analyse-/Tracking-Cookies – es gibt nur
  technisch notwendige Cookies. Der Banner erfuellt die Hinweispflicht und
  merkt sich die Entscheidung des Besuchers lokal im Browser.
  Sobald echte Tracking-Tools dazukommen, wird hier die Freigabe ("accepted")
  ausgewertet, bevor entsprechende Skripte geladen werden.

  Der gespeicherte Wert wird ueber useSyncExternalStore gelesen – so ist der
  Server-Zustand (kein Zugriff auf localStorage) sauber vom Client getrennt.
*/
const STORAGE_KEY = "meyer-elektro:cookie-consent";

function subscribe(onChange: () => void) {
  window.addEventListener("storage", onChange);
  return () => window.removeEventListener("storage", onChange);
}

function readConsent(): string | null {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return "unavailable";
  }
}

export function CookieBanner() {
  // Auf dem Server / vor der Hydration: null -> Banner bleibt zunaechst aus.
  const consent = useSyncExternalStore(subscribe, readConsent, () => null);
  const [dismissed, setDismissed] = useState(false);

  const decide = useCallback((value: "accepted" | "declined") => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignorieren */
    }
    setDismissed(true);
  }, []);

  const visible = !dismissed && consent === null;
  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Hinweis zu Cookies"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-border bg-white p-4 shadow-[0_-8px_30px_rgba(31,41,51,0.08)]"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-1 sm:flex-row sm:items-center sm:justify-between sm:px-4">
        <p className="text-sm leading-relaxed text-ink-soft">
          Wir verwenden nur technisch notwendige Cookies, damit die Website
          funktioniert. Details finden Sie in der{" "}
          <Link href="/datenschutz" className="font-medium text-ink underline underline-offset-2">
            Datenschutzerklärung
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => decide("declined")}
            className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-surface"
          >
            Nur notwendige
          </button>
          <button
            type="button"
            onClick={() => decide("accepted")}
            className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-accent-strong"
          >
            Einverstanden
          </button>
        </div>
      </div>
    </div>
  );
}
