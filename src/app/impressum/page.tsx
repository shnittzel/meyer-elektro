import type { Metadata } from "next";
import { site } from "@/lib/site";
import { LegalPage, PlaceholderNote } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von Meyer Elektro (Übungsprojekt, fiktiver Kunde).",
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <LegalPage title="Impressum">
      <p className="rounded-lg border border-border bg-surface px-4 py-3 text-sm text-ink">
        <strong>Hinweis:</strong> „Meyer Elektro“ ist ein fiktiver Beispielkunde.
        Diese Website ist ein Übungs-/Konzeptprojekt von Habiko. Sämtliche
        nachfolgenden Angaben sind Platzhalter und müssen vor einer echten
        Veröffentlichung durch reale Daten ersetzt werden.
      </p>

      <h2>Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz)</h2>
      <p>
        {site.legalName}
        <br />
        {site.address.street}
        <br />
        {site.address.zip} {site.address.city}
      </p>

      <h2>Vertreten durch</h2>
      <p>Sabine Meyer, Thomas Meyer (Geschäftsführung)</p>

      <h2>Kontakt</h2>
      <p>
        Telefon: {site.phone.display}
        <br />
        E-Mail: <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>

      <h2>Registereintrag</h2>
      <PlaceholderNote>
        Registergericht, Registernummer (z. B. Amtsgericht Hannover, HRB …) –
        sobald bekannt eintragen. Bei einem Einzelunternehmen/Kleingewerbe ohne
        Handelsregistereintrag entfällt dieser Abschnitt.
      </PlaceholderNote>

      <h2>Umsatzsteuer-Identifikationsnummer</h2>
      <PlaceholderNote>
        USt-IdNr. gemäß § 27 a Umsatzsteuergesetz: DE… – oder Hinweis auf
        Kleinunternehmerregelung nach § 19 UStG.
      </PlaceholderNote>

      <h2>Berufsrechtliche Angaben</h2>
      <PlaceholderNote>
        Zuständige Handwerkskammer (z. B. Handwerkskammer Hannover), Eintragung
        in die Handwerksrolle, gesetzliche Berufsbezeichnung
        (Elektrotechnikermeister / Elektrotechniker-Handwerk, verliehen in
        Deutschland) sowie ggf. Kammer-/Innungszugehörigkeit ergänzen.
      </PlaceholderNote>

      <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
      <p>
        Sabine Meyer
        <br />
        Anschrift wie oben
      </p>

      <h2>Streitschlichtung</h2>
      <p>
        Die Europäische Kommission stellt eine Plattform zur
        Online-Streitbeilegung (OS) bereit:{" "}
        <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
          https://ec.europa.eu/consumers/odr/
        </a>
        . Unsere E-Mail-Adresse finden Sie oben. Wir sind nicht verpflichtet und
        nicht bereit, an Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle teilzunehmen.
      </p>

      <h2>Haftung für Inhalte</h2>
      <p>
        Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf
        diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis
        10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet,
        übermittelte oder gespeicherte fremde Informationen zu überwachen oder
        nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
        hinweisen.
      </p>

      <h2>Haftung für Links</h2>
      <p>
        Unser Angebot enthält ggf. Links zu externen Websites Dritter, auf deren
        Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden
        Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
        Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.
      </p>

      <h2>Urheberrecht</h2>
      <p>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
        Seiten unterliegen dem deutschen Urheberrecht. Fotos auf dieser Website
        sind Symbolbilder.
      </p>
    </LegalPage>
  );
}
