# CLAUDE.md – Übungsprojekt: Website für Meyer Elektro

> Dies ist ein eigenständiges, separates Projekt (eigenes Repo, eigenes
> Vercel-Deployment) – unabhängig vom Habiko-Projekt. Zweck: Übungsprojekt
> mit einem fiktiven Kunden, um den kompletten Website-Bau-Workflow zu
> trainieren, bevor echte Kundenprojekte übernommen werden. Trotzdem soll
> die Seite so professionell gebaut werden, als wäre es ein echter Auftrag
> – sie dient später auch als Referenz-/Portfoliobeispiel für Habiko.

## 1. Der Kunde (fiktiv)

**Meyer Elektro** – Elektrofachbetrieb aus Hannover
- Familienbetrieb, gegründet 1978
- Größerer Betrieb: 6+ Mitarbeiter
- Leistungsspektrum: breit aufgestellt – Privatkunden, Gewerbekunden und
  Notdienst
- Positionierung: Tradition trifft moderne Technik – langjährige Erfahrung
  seit 1978, aber auch aktuelle Themen wie E-Mobilität/Ladestationen,
  Smart Home, moderne Elektroinstallation
- Ton der Texte: modern-professionell, kompetent, nicht altbacken – die
  lange Tradition wird als Vertrauensfaktor genutzt, ohne verstaubt zu wirken

> Hinweis für Claude Code: Alle Inhalte (Texte, Ansprechpartner, genaue
> Adresse, Telefonnummer, Bilder) sind fiktiv/Platzhalter für Übungszwecke.
> Deutlich als Beispielprojekt kennzeichnen, falls die Seite später als
> Referenz auf habiko.de gezeigt wird.

## 2. Seitenstruktur

### 2.1 Startseite (`/`)
- Starker erster Eindruck: Wer ist Meyer Elektro, seit wann, wofür stehen
  sie (Familientradition + moderne Kompetenz)
- Hero-Bereich mit Überschrift, kurzer Beschreibung und zwei
  Call-to-Action-Buttons nebeneinander (z. B. „Angebot anfragen" +
  „Unsere Leistungen") – Inspiration: baderelektro.de
- Direkt darunter: 4 Leistungs-Kacheln (Privatkunden, Gewerbekunden,
  Notdienst, E-Mobilität) mit kurzem Text + „Mehr erfahren"-Link je Kachel
- Kennzahlen-Sektion mit großen, auffälligen Zahlen als Vertrauenselement,
  z. B. „Seit 1978", „6+ Mitarbeiter", „100% Meisterqualität"
- „So arbeiten wir"-Sektion in 4 Schritten (z. B. Beratungsgespräch →
  Angebot → Umsetzung → Abnahme & Service) – schafft Transparenz und
  Vertrauen, Inspiration: baderelektro.de
- Kontakt/Notdienst-Nummer prominent sichtbar (Elektro-Notdienst ist ein
  Bereich, wo Kunden schnell eine Nummer suchen), zusätzlich nochmal klar
  hervorgehoben vor dem Footer (Telefonnummer + E-Mail groß und klickbar)

### 2.2 Leistungen (`/leistungen`)
Klar strukturiert nach Zielgruppen/Bereichen:
1. **Privatkunden** – klassische Elektroinstallation, Sanierung,
   Smart-Home-Lösungen
2. **Gewerbekunden** – Elektroinstallation für Betriebe, Wartung,
   Sicherheitsprüfungen
3. **Notdienst** – schnelle Erreichbarkeit bei Störungen/Notfällen
4. **E-Mobilität** – Ladestationen/Wallbox-Installation als modernes
   Zusatzangebot, das die Tradition-trifft-Zukunft-Positionierung stützt

Jede Leistung: verständlich erklärt, kein übertriebener Fachjargon,
klarer Nutzen für den Kunden statt technischer Aufzählung

### 2.3 Über uns (`/ueber-uns`)
- Firmengeschichte: gegründet 1978, Familienbetrieb, Entwicklung bis heute
  zum größeren Team
- Team-Vorstellung (kann mit Platzhalter-Fotos/Kurzbeschreibungen arbeiten)
- Werte: Zuverlässigkeit, Erfahrung, aber offen für neue Technik

### 2.4 Referenzen/Projekte (`/referenzen`)
- Auswahl an (fiktiven) Beispielprojekten – z. B. Elektrosanierung
  Einfamilienhaus, Gewerbeinstallation, Wallbox-Montage
- Kurzbeschreibung + Vorher/Nachher-Charakter, wo sinnvoll

### 2.5 Kontakt (`/kontakt`)
- Kontaktformular (Name, E-Mail, Telefon optional, Nachricht)
- Notdienst-Rufnummer separat und auffällig hervorgehoben (nicht im
  normalen Kontaktbereich untergehen lassen)
- Adresse, Öffnungszeiten

### 2.6 Rechtliche Pflichtseiten
- Impressum (`/impressum`) – mit klar erkennbaren Platzhalterdaten, da
  fiktiver Kunde
- Datenschutzerklärung (`/datenschutz`) – deckt Kontaktformular und
  eingesetzte Tools ab

## 3. Bildmaterial

- Die Seite darf und soll mit Bildern arbeiten (Kunde hat das
  ausdrücklich gewünscht)
- Da es ein Übungsprojekt ohne echtes Fotomaterial ist: mit passenden,
  lizenzfrei nutzbaren Platzhalterbildern arbeiten (z. B. Elektroinstallation,
  Werkzeug, Teamfotos-Symbolbilder) oder mit gestalterischen Elementen
  (Icons, Formen, Farbflächen), wo kein passendes Bild verfügbar ist
- Bilder klar als Symbolbilder kennzeichnen, falls die Seite später als
  Habiko-Referenz gezeigt wird

## 4. Design- und Stilrichtung

- Modern-professionell, vertrauenswürdig – passend zu einem etablierten,
  aber zeitgemäßen Handwerksbetrieb
- Klare, aufgeräumte Struktur – nicht verspielt, eher sachlich-kompetent
  mit warmen, einladenden Akzenten
- **Farbwelt (festgelegt):**
  - Hauptfarbe: **Weiß** als dominanter Hintergrund – sorgt für einen
    hellen, aufgeräumten, modernen Gesamteindruck
  - Akzentfarbe: **Gelb** (kräftiger, warmer Ton) – für Buttons, Icons,
    Hervorhebungen, Kennzahlen-Sektion; sollte gut lesbar/kontrastreich
    gewählt werden (kein zu blasses Pastellgelb)
  - Dritte Farbe zur Ergänzung: ein **dunkler, neutraler Ton** (z. B.
    Anthrazit/dunkles Graublau) für Fließtext, Headlines und Kontrast –
    sorgt dafür, dass Weiß+Gelb nicht zu grell/unruhig wirkt und Texte gut
    lesbar bleiben. Claude Code soll hierfür einen konkreten Farbwert
    vorschlagen, der harmonisch zum warmen Gelb passt
  - Gelb sparsam und gezielt einsetzen (Akzent, nicht Fläche), damit die
    Seite hochwertig statt aufdringlich wirkt
- Gute Lesbarkeit und schnelle Auffindbarkeit von Notdienst-Kontakt hat
  Priorität vor rein ästhetischen Design-Spielereien

## 5. Technische Anforderungen

- Next.js, gleiche technische Basis wie Habiko-Projekte (siehe Habiko
  Root-CLAUDE.md als allgemeine Referenz für Qualitätsstandard)
- Next.js `<Image>` für alle Bilder, `next/font` für Schriften
- Mobile-first, vollständig Desktop-tauglich
- SEO-Grundlagen: lokale Ausrichtung (Hannover) in Texten/Meta-Daten
- Eigenes, separates GitHub-Repo und Vercel-Projekt (nicht Teil des
  Habiko-Projekts)

## 6. Zusammenarbeit / Vorgehen

- Claude Code erklärt Vorgehen Schritt für Schritt (Luan lernt aktiv mit,
  gleiche Arbeitsweise wie bei den Habiko-Projekten)
- Bei Design-Entscheidungen (Farben, genaue Bildauswahl, Layout-Details)
  aktiv bei Luan nachfragen statt anzunehmen
- Empfohlene Reihenfolge: Grundgerüst (Navigation, Footer) → Startseite →
  Leistungen → Über uns → Referenzen → Kontakt → rechtliche Pflichtseiten

## 7. Offene Punkte, die vor/während dem Bauen zu klären sind

- Gewünschter Umfang/Stil der Platzhalterbilder
- Ob ein Logo für Meyer Elektro erstellt werden soll oder nur Textmarke
  verwendet wird
- Genauer Inhalt der Referenzprojekte (frei erfunden vs. an echten
  Beispielen orientiert)
