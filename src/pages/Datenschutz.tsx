import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-amber-100">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Zurück zur Startseite
        </Link>

        <h1 className="text-4xl font-bold text-amber-400 mb-8">Datenschutzerklärung</h1>

        <section className="space-y-6 text-amber-100/90 leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-amber-300 mb-2">
              1. Verantwortlicher
            </h2>
            <p>
              Gaststätte Alte Brauerei Rußheim
              <br />
              Inhaber: Luka Majstorovic
              <br />
              Huttenheimer Str. 7, 76706 Dettenheim-Rußheim
              <br />
              Telefon: 07255 5121
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-amber-300 mb-2">
              2. Allgemeines zur Datenverarbeitung
            </h2>
            <p>
              Wir verarbeiten personenbezogene Daten unserer Besucher nur, soweit
              dies zur Bereitstellung einer funktionsfähigen Website sowie unserer
              Inhalte und Leistungen erforderlich ist. Rechtsgrundlage ist Art. 6
              Abs. 1 lit. f DSGVO (berechtigtes Interesse).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-amber-300 mb-2">
              3. Server-Log-Dateien
            </h2>
            <p>
              Beim Aufruf dieser Website werden durch unseren Hosting-Anbieter
              automatisch Informationen erfasst (Browsertyp, Betriebssystem,
              Referrer-URL, Hostname, IP-Adresse, Uhrzeit der Anfrage). Diese Daten
              sind nicht bestimmten Personen zuordenbar und werden ausschließlich zur
              Sicherstellung eines störungsfreien Betriebs verarbeitet.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-amber-300 mb-2">
              4. Kontaktaufnahme per Telefon
            </h2>
            <p>
              Bei telefonischer Kontaktaufnahme (z.B. für Reservierungen oder
              Bestellungen) werden die mitgeteilten Daten ausschließlich zur
              Bearbeitung Ihres Anliegens verarbeitet und nicht an Dritte
              weitergegeben. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-amber-300 mb-2">
              5. Google Maps
            </h2>
            <p>
              Diese Website nutzt Google Maps zur Darstellung unseres Standorts.
              Anbieter: Google Ireland Limited, Gordon House, Barrow Street, Dublin
              4, Irland. Beim Aufruf der Karte werden Daten (u.a. IP-Adresse) an
              Server von Google übertragen, ggf. auch in die USA. Weitere
              Informationen:{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 underline"
              >
                policies.google.com/privacy
              </a>
              . Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-amber-300 mb-2">
              6. Social-Media-Links
            </h2>
            <p>
              Wir verlinken auf unsere Profile bei Facebook (Meta Platforms Ireland
              Ltd.) und Instagram (Meta Platforms Ireland Ltd.). Beim bloßen Setzen
              der Links werden noch keine Daten an die Anbieter übertragen. Erst
              durch Anklicken der Links werden Sie auf die jeweilige Plattform
              weitergeleitet, dort gelten die Datenschutzbestimmungen des Anbieters.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-amber-300 mb-2">
              7. Ihre Rechte
            </h2>
            <p>
              Sie haben jederzeit das Recht auf Auskunft (Art. 15 DSGVO),
              Berichtigung (Art. 16 DSGVO), Löschung (Art. 17 DSGVO), Einschränkung
              der Verarbeitung (Art. 18 DSGVO), Datenübertragbarkeit (Art. 20 DSGVO)
              sowie auf Widerspruch (Art. 21 DSGVO). Zudem steht Ihnen ein
              Beschwerderecht bei einer Aufsichtsbehörde zu (Art. 77 DSGVO) –
              zuständig: Landesbeauftragter für den Datenschutz und die
              Informationsfreiheit Baden-Württemberg.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-amber-300 mb-2">
              8. SSL-Verschlüsselung
            </h2>
            <p>
              Diese Seite nutzt aus Sicherheitsgründen eine SSL-Verschlüsselung. Eine
              verschlüsselte Verbindung erkennen Sie am „https://" in der
              Adresszeile Ihres Browsers.
            </p>
          </div>

          <p className="text-sm text-amber-300/60 pt-4">
            Stand: Mai 2026
          </p>
        </section>
      </div>
    </div>
  );
};

export default Datenschutz;
