/*
  Referenz-/Beispielprojekte fuer /referenzen.
  Meyer Elektro ist ein fiktiver Uebungskunde – alle Projekte sind
  an realistischen Faellen orientiert, aber frei erfunden. Auf der
  Seite werden sie deshalb sichtbar mit "Beispielprojekt" markiert.

  Struktur bewusst so gehalten, dass spaeter echte Referenzen
  (Kundenname, Fotos, Zitat) ohne Umbau ergaenzt werden koennen.
*/

export type Project = {
  slug: string;
  title: string;
  category: "Privatkunden" | "Gewerbekunden" | "Notdienst" | "E-Mobilität";
  location: string;
  year: number;
  scope: string; // Kurzfassung fuer die Kachel
  image: string; // Symbolbild (nach Kategorie)
  situation: string; // Ausgangslage
  solution: string; // Umsetzung
  result: string; // Ergebnis
  facts: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: "elektrosanierung-einfamilienhaus",
    title: "Elektrosanierung Einfamilienhaus, Baujahr 1974",
    category: "Privatkunden",
    location: "Hannover-Kirchrode",
    year: 2024,
    scope: "Komplette Erneuerung der Elektrik im bewohnten Zustand.",
    image: "/images/leistung-privatkunden.jpg",
    situation:
      "Die Eigentümer hatten ein Haus aus den 1970er-Jahren übernommen. Die Leitungen waren teils noch mit Stoffummantelung verlegt, es gab zu wenige Steckdosen und keinen Fehlerstromschutz. Ausziehen kam während der Bauzeit nicht in Frage.",
    solution:
      "Wir haben die Sanierung in Etappen pro Etage geplant, sodass immer ein Teil des Hauses nutzbar blieb. Neuer Zählerschrank mit FI-Schutz für alle Stromkreise, durchgängig neue Leitungen, mehr Steckdosen pro Raum und vorbereitete Leerrohre für spätere Erweiterungen.",
    result:
      "Nach vier Wochen war die gesamte Anlage auf aktuellem Stand und abgenommen. Die Familie konnte während der kompletten Bauzeit im Haus wohnen bleiben.",
    facts: [
      { label: "Dauer", value: "4 Wochen" },
      { label: "Stromkreise", value: "38 neu" },
      { label: "Bewohnt", value: "durchgehend" },
    ],
  },
  {
    slug: "gewerbeinstallation-lagerhalle",
    title: "Elektroinstallation für eine neue Lagerhalle",
    category: "Gewerbekunden",
    location: "Langenhagen",
    year: 2023,
    scope: "Erstinstallation inklusive Hallenbeleuchtung und Prüfung.",
    image: "/images/leistung-gewerbekunden.jpg",
    situation:
      "Ein Logistikbetrieb baute eine zusätzliche Halle und benötigte die komplette Elektrotechnik: Beleuchtung, Kraftstrom für Tore und Ladegeräte, Verteilung und die vorgeschriebene Erstprüfung.",
    solution:
      "Planung gemeinsam mit dem Bauleiter, LED-Hallenbeleuchtung mit Präsenzmeldern in den Gängen, getrennte Stromkreise für Tortechnik und Staplerladung, zentrale Unterverteilung mit Reserveplätzen.",
    result:
      "Übergabe pünktlich zum Einzugstermin, mit vollständigem Prüfprotokoll. Durch die Präsenzsteuerung liegt der Beleuchtungsverbrauch spürbar unter dem ursprünglich geplanten Wert.",
    facts: [
      { label: "Fläche", value: "1.800 m²" },
      { label: "Leuchten", value: "72 Stück" },
      { label: "Termin", value: "eingehalten" },
    ],
  },
  {
    slug: "wallbox-doppelgarage",
    title: "Zwei Wallboxen für eine Doppelgarage",
    category: "E-Mobilität",
    location: "Isernhagen",
    year: 2024,
    scope: "Beratung, Netzbetreiber-Anmeldung und Installation.",
    image: "/images/leistung-e-mobilitaet.jpg",
    situation:
      "Zwei Haushalte in einem Doppelhaus wollten je ein Elektroauto laden, ohne dass bei gleichzeitigem Laden die Hausanschlüsse überlastet werden.",
    solution:
      "Zwei 11-kW-Wallboxen mit gemeinsamem Lastmanagement, jeweils eigener abgesicherter Zuleitung und FI Typ B. Anmeldung beider Ladepunkte beim Netzbetreiber inklusive.",
    result:
      "Beide Parteien können gleichzeitig laden; das Lastmanagement verteilt die verfügbare Leistung automatisch. Die Förderung wurde vor Auftragsvergabe geprüft und beantragt.",
    facts: [
      { label: "Ladepunkte", value: "2 × 11 kW" },
      { label: "Lastmanagement", value: "dynamisch" },
      { label: "Anmeldung", value: "übernommen" },
    ],
  },
  {
    slug: "notdienst-arztpraxis",
    title: "Notdiensteinsatz in einer Arztpraxis",
    category: "Notdienst",
    location: "Hannover-Südstadt",
    year: 2023,
    scope: "Störungssuche und Wiederherstellung an einem Freitagabend.",
    image: "/images/leistung-notdienst.jpg",
    situation:
      "In einer Praxis fiel freitags nach Feierabend die halbe Etage aus, darunter der Kühlschrank für Medikamente. Am Montag war voller Praxisbetrieb.",
    solution:
      "Anfahrt innerhalb einer Stunde. Fehler bis zu einer beschädigten Abzweigdose eingegrenzt, betroffenen Bereich provisorisch wieder versorgt, am Samstag dauerhaft instand gesetzt.",
    result:
      "Die Medikamentenkühlung lief noch am selben Abend wieder. Der reguläre Praxisbetrieb am Montag war zu keiner Zeit gefährdet.",
    facts: [
      { label: "Anfahrt", value: "< 60 Min." },
      { label: "Notversorgung", value: "am selben Abend" },
      { label: "Reparatur", value: "Samstag" },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
