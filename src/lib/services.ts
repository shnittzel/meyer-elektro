import { Home, Building2, Siren, PlugZap, type LucideIcon } from "lucide-react";

/*
  Die vier Leistungsbereiche von Meyer Elektro.
  Aus diesen Daten werden sowohl die Kacheln auf der Startseite
  als auch die Detailabschnitte auf /leistungen erzeugt – so bleibt
  beides automatisch synchron.
*/

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  intro: string;
  benefits: string[];
  /* Bild kommt spaeter (Symbolbild). Solange leer -> gestaltete Platzhalterflaeche. */
  image?: string;
  imageAlt: string;
};

export const services: Service[] = [
  {
    slug: "privatkunden",
    icon: Home,
    title: "Privatkunden",
    tagline: "Vom Lichtschalter bis zum Smart Home",
    intro:
      "Ob Neubau, Sanierung oder eine einzelne Steckdose an der richtigen Stelle – wir kümmern uns um die Elektrik in Ihrem Zuhause. Sauber, termintreu und verständlich erklärt.",
    benefits: [
      "Elektroinstallation für Neubau und Modernisierung",
      "Zählerschrank und Sicherungen auf aktuellen Stand bringen",
      "Smart-Home-Lösungen für Licht, Heizung und Beschattung",
      "Prüfung Ihrer Anlage nach einem Kauf oder vor der Vermietung",
    ],
    image: "/images/leistung-privatkunden.jpg",
    imageAlt: "Symbolbild: Elektroinstallation in einem Wohnhaus",
  },
  {
    slug: "gewerbekunden",
    icon: Building2,
    title: "Gewerbekunden",
    tagline: "Elektrik, die Ihren Betrieb am Laufen hält",
    intro:
      "Für Handwerk, Handel, Büro und Produktion planen und installieren wir Elektroanlagen, die zuverlässig arbeiten – und übernehmen die wiederkehrenden Prüfungen, damit Sie auf der sicheren Seite sind.",
    benefits: [
      "Elektroinstallation für Werkstätten, Läden und Bürogebäude",
      "Wartungsverträge mit festen Ansprechpartnern",
      "Prüfung ortsfester und ortsveränderlicher Betriebsmittel (DGUV V3)",
      "Beleuchtungskonzepte und Nachrüstung auf LED",
    ],
    image: "/images/leistung-gewerbekunden.jpg",
    imageAlt: "Symbolbild: Elektroinstallation in einem Gewerbebetrieb",
  },
  {
    slug: "notdienst",
    icon: Siren,
    title: "Notdienst",
    tagline: "Wenn es nicht warten kann",
    intro:
      "Stromausfall, ein ausgelöster Fehlerstromschutzschalter oder Brandgeruch an der Verteilung? Unser Notdienst ist rund um die Uhr erreichbar und kommt schnell in die Region Hannover.",
    benefits: [
      "Erreichbar an 365 Tagen im Jahr, auch nachts und am Wochenende",
      "Schnelle Anfahrt im Raum Hannover",
      "Erste Sicherung der Anlage, dann dauerhafte Reparatur",
      "Klare Auskunft zu Kosten, bevor wir loslegen",
    ],
    image: "/images/leistung-notdienst.jpg",
    imageAlt: "Symbolbild: Elektriker bei einem Notdiensteinsatz an einem Sicherungskasten",
  },
  {
    slug: "e-mobilitaet",
    icon: PlugZap,
    title: "E-Mobilität",
    tagline: "Die eigene Ladestation, fachgerecht angeschlossen",
    intro:
      "Wir beraten zur passenden Wallbox, melden sie beim Netzbetreiber an und installieren sie so, dass Auto und Hausanlage sicher zusammenarbeiten – für Privathaushalte wie für Firmenparkplätze.",
    benefits: [
      "Beratung zu Wallbox, Leistung und Förderung",
      "Anmeldung und Abstimmung mit dem Netzbetreiber",
      "Installation mit Leitungsschutz und FI Typ B",
      "Lastmanagement für mehrere Ladepunkte im Betrieb",
    ],
    image: "/images/leistung-e-mobilitaet.jpg",
    imageAlt: "Symbolbild: Wallbox-Ladestation an einer Hauswand",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
