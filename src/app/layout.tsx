import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { DemoBanner } from "@/components/demo-banner";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CookieBanner } from "@/components/cookie-banner";

// Selbst gehostete Schriften. Barlow geht auf die Schilderschrift zurueck
// (Verwandte der DIN-Schriften auf Typen- und Warnschildern). Die schmale
// Variante traegt Ueberschriften, Zahlen und die Wortmarke, die normale den Text.
const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Meyer Elektro – Elektrofachbetrieb in Hannover",
    template: "%s | Meyer Elektro Hannover",
  },
  description:
    "Meyer Elektro: Elektrofachbetrieb aus Hannover, Familienbetrieb seit 1978. Elektroinstallation für Privat- und Gewerbekunden, 24/7-Notdienst und Wallbox-Installation in der Region Hannover.",
  keywords: [
    "Elektriker Hannover",
    "Elektrofachbetrieb Hannover",
    "Elektro-Notdienst Hannover",
    "Wallbox Installation Hannover",
    "Elektroinstallation",
  ],
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Meyer Elektro",
    title: "Meyer Elektro – Elektrofachbetrieb in Hannover",
    description:
      "Familienbetrieb seit 1978: Elektroinstallation, Notdienst und E-Mobilität in der Region Hannover.",
  },
  // Fiktiver Uebungskunde als oeffentliche Demo -> nicht von Suchmaschinen
  // indexieren lassen (sonst taucht ein erfundener Betrieb in echten
  // Suchergebnissen auf). Zum Aktivieren spaeter auf { index: true, follow: true }.
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${barlowCondensed.variable} ${barlow.variable}`}>
      <body className="min-h-dvh bg-white text-ink antialiased">
        {/* Sprungmarke fuer Screenreader / Tastatur */}
        <a
          href="#inhalt"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:shadow"
        >
          Zum Inhalt springen
        </a>
        <DemoBanner />
        <SiteHeader />
        <main id="inhalt">{children}</main>
        <SiteFooter />
        <CookieBanner />
      </body>
    </html>
  );
}
