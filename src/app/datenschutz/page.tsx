import type { Metadata } from "next";
import { site } from "@/lib/site";
import { LegalPage, PlaceholderNote } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description:
    "Datenschutzerklärung von Meyer Elektro (Übungsprojekt): Umgang mit Daten aus dem Kontaktformular, Hosting und Cookies.",
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <LegalPage title="Datenschutzerklärung" updated="Vorlage – bitte vor Veröffentlichung prüfen">
      <p className="rounded-lg border border-border bg-surface px-4 py-3 text-sm text-ink">
        <strong>Hinweis:</strong> Diese Datenschutzerklärung ist eine Vorlage für
        das Übungsprojekt „Meyer Elektro“. Vor einem echten Einsatz muss sie an
        die tatsächlich eingesetzten Dienste angepasst und rechtlich geprüft
        werden.
      </p>

      <h2>1. Verantwortlicher</h2>
      <p>
        Verantwortlich für die Datenverarbeitung auf dieser Website ist:
        <br />
        {site.legalName}
        <br />
        {site.address.street}, {site.address.zip} {site.address.city}
        <br />
        E-Mail: <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>
      <PlaceholderNote>
        Bei Bestellung eines Datenschutzbeauftragten dessen Kontaktdaten
        ergänzen. Für einen kleinen Betrieb ist das in der Regel nicht
        erforderlich.
      </PlaceholderNote>

      <h2>2. Hosting</h2>
      <p>
        Diese Website wird bei <strong>Vercel Inc.</strong> (340 S Lemon Ave
        #4133, Walnut, CA 91789, USA) gehostet. Beim Aufruf der Website
        verarbeitet Vercel als Auftragsverarbeiter technisch notwendige Daten
        (z. B. IP-Adresse, Datum und Uhrzeit des Zugriffs, abgerufene Datei,
        übertragene Datenmenge, Browsertyp), um die Auslieferung der Seite und
        die IT-Sicherheit zu gewährleisten. Rechtsgrundlage ist Art. 6 Abs. 1
        lit. f DSGVO (berechtigtes Interesse an einem sicheren, stabilen
        Betrieb).
      </p>
      <PlaceholderNote>
        Auftragsverarbeitungsvertrag (AVG/DPA) mit Vercel abschließen und – da
        eine Übermittlung in die USA möglich ist – die Grundlage des
        Datentransfers benennen (EU-Standardvertragsklauseln / Data Privacy
        Framework).
      </PlaceholderNote>

      <h2>3. Server-Logfiles</h2>
      <p>
        Der Hosting-Anbieter erhebt und speichert automatisch Informationen in
        sogenannten Server-Logfiles, die Ihr Browser übermittelt. Eine
        Zusammenführung dieser Daten mit anderen Datenquellen wird nicht
        vorgenommen. Die Daten werden gelöscht, sobald sie für den Zweck der
        Erhebung nicht mehr erforderlich sind.
      </p>

      <h2>4. Kontaktformular und Kontakt per E-Mail</h2>
      <p>
        Wenn Sie uns über das Kontaktformular oder per E-Mail Anfragen zukommen
        lassen, verarbeiten wir die von Ihnen angegebenen Daten (Name, E-Mail,
        optional Telefonnummer sowie den Inhalt Ihrer Nachricht), um Ihre Anfrage
        zu bearbeiten. Ein Pflichtfeld ist die Einwilligung in diese
        Verarbeitung.
      </p>
      <p>
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) bzw.
        Art. 6 Abs. 1 lit. b DSGVO, wenn die Anfrage auf den Abschluss oder die
        Durchführung eines Vertrags gerichtet ist. Sie können eine erteilte
        Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen, z. B.
        formlos per E-Mail.
      </p>
      <p>
        Die Daten verbleiben bei uns, bis Ihre Anfrage vollständig bearbeitet ist
        und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
      </p>
      <PlaceholderNote>
        Sobald feststeht, wie Anfragen verarbeitet werden (E-Mail-Weiterleitung
        und/oder Speicherung in einer Datenbank wie Supabase), diesen Abschnitt
        entsprechend konkretisieren – inkl. Speicherort, Empfänger und
        Löschfristen.
      </PlaceholderNote>

      <h2>5. Cookies</h2>
      <p>
        Diese Website verwendet ausschließlich technisch notwendige Cookies bzw.
        vergleichbare Speichertechniken. Ein Eintrag im lokalen Speicher Ihres
        Browsers merkt sich lediglich, dass Sie den Cookie-Hinweis gesehen und
        Ihre Auswahl getroffen haben. Rechtsgrundlage ist § 25 Abs. 2 TDDDG
        (technisch erforderlich) in Verbindung mit Art. 6 Abs. 1 lit. f DSGVO.
      </p>

      <h2>6. Analyse-Tools und Tracking</h2>
      <p>
        Derzeit sind auf dieser Website <strong>keine</strong> Analyse-,
        Tracking- oder Marketing-Dienste (z. B. Google Analytics, Meta-Pixel)
        eingebunden. Es findet keine Reichweitenmessung statt.
      </p>
      <PlaceholderNote>
        Falls später ein Analyse-Tool ergänzt wird: hier Anbieter, Zweck,
        Rechtsgrundlage, Speicherdauer und Widerspruchsmöglichkeit beschreiben
        und den Cookie-Banner um eine echte Einwilligungsabfrage erweitern.
      </PlaceholderNote>

      <h2>7. Ihre Rechte</h2>
      <p>Sie haben im Rahmen der gesetzlichen Vorgaben jederzeit das Recht auf:</p>
      <ul>
        <li>Auskunft über die zu Ihrer Person gespeicherten Daten (Art. 15 DSGVO)</li>
        <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
        <li>Löschung (Art. 17 DSGVO)</li>
        <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
        <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
        <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
        <li>Widerruf einer erteilten Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
      </ul>
      <p>
        Außerdem haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde
        zu beschweren. Zuständig ist unter anderem die Landesbeauftragte für den
        Datenschutz Niedersachsen.
      </p>

      <h2>8. SSL-/TLS-Verschlüsselung</h2>
      <p>
        Diese Seite nutzt aus Sicherheitsgründen eine SSL- bzw.
        TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie an
        „https://“ in der Adresszeile Ihres Browsers.
      </p>
    </LegalPage>
  );
}
