# Meyer Elektro – Beispiel-/Übungsprojekt

Öffentliche Website für den **fiktiven** Elektrofachbetrieb „Meyer Elektro" (Raum
Hannover). Übungsprojekt von [Habiko](https://habiko.de) – dient gleichzeitig als
Referenz-/Portfoliobeispiel. Alle Namen, Kontaktdaten, Projekte und Fotos sind
Platzhalter bzw. Symbolbilder.

## Technik

- Next.js 16 (App Router), TypeScript, Tailwind CSS v4
- `next/font` (Sora + Inter), `next/image`
- framer-motion (Scroll-Animationen), lucide-react (Icons)

## Lokal starten

```bash
npm install
npm run dev
```

→ http://localhost:3000

## Skripte

| Befehl | Zweck |
| --- | --- |
| `npm run dev` | Entwicklungsserver |
| `npm run build` | Produktions-Build |
| `npm run start` | Produktionsserver (nach `build`) |
| `npm run lint` | ESLint |

## Deployment

Deployt auf **Vercel** (GitHub-Repo verbunden, Auto-Deploy bei jedem Push auf
`main`). Kein Build-Setup nötig – Vercel erkennt Next.js automatisch.

Die Seite ist bewusst auf **noindex** gesetzt (`src/app/robots.ts` und
`src/app/layout.tsx`), damit der fiktive Betrieb nicht in echten Suchergebnissen
erscheint. Für einen echten Auftrag dort wieder auf „indexierbar" umstellen.

## Offene Punkte

- Kontaktformular (`src/app/api/kontakt/route.ts`) nimmt Anfragen nur entgegen und
  validiert sie – Versand/Speicherung noch nicht angebunden.
- Echte Firmen-/Impressumsdaten sind Platzhalter (`src/lib/site.ts`).
