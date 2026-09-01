/*
  Zentrale Stammdaten der Website.
  ACHTUNG: Meyer Elektro ist ein fiktiver Uebungskunde.
  Alle Kontaktdaten, Adressen und Namen sind Platzhalter und muessen
  vor einem echten Einsatz durch reale Angaben ersetzt werden.
*/

export const site = {
  name: "Meyer Elektro",
  legalName: "Meyer Elektro GmbH", // Platzhalter
  tagline: "Elektrofachbetrieb · Hannover",
  foundedYear: 1978,
  employees: "6+",

  // Fuer SEO / Metadaten (Platzhalter-Domain)
  url: "https://www.meyer-elektro-beispiel.de",

  phone: {
    display: "0511 12 34 56 0",
    href: "tel:+49511123456",
  },
  emergencyPhone: {
    display: "0511 12 34 56 99",
    href: "tel:+4951112345699",
  },
  email: "info@meyer-elektro-beispiel.de", // Platzhalter

  address: {
    street: "Musterstraße 12", // Platzhalter
    zip: "30161",
    city: "Hannover",
    region: "Region Hannover",
  },

  hours: [
    { days: "Montag – Freitag", time: "07:30 – 17:00 Uhr" },
    { days: "Samstag", time: "nach Vereinbarung" },
    { days: "Elektro-Notdienst", time: "rund um die Uhr, 365 Tage" },
  ],

  nav: [
    { label: "Leistungen", href: "/leistungen" },
    { label: "Über uns", href: "/ueber-uns" },
    { label: "Referenzen", href: "/referenzen" },
    { label: "Kontakt", href: "/kontakt" },
  ],
} as const;

export type SiteConfig = typeof site;
