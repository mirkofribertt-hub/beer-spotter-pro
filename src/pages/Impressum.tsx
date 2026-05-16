import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Impressum = () => {
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

        <h1 className="text-4xl font-bold text-amber-400 mb-8">Impressum</h1>

        <section className="space-y-6 text-amber-100/90 leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-amber-300 mb-2">
              Angaben gemäß § 5 TMG
            </h2>
            <p>
              Gaststätte Alte Brauerei Rußheim
              <br />
              Inhaber: Luka Majstorovic
              <br />
              Huttenheimer Str. 7
              <br />
              76706 Dettenheim-Rußheim
              <br />
              Deutschland
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-amber-300 mb-2">Kontakt</h2>
            <p>
              Telefon: <a href="tel:+4972555121" className="hover:text-amber-300">07255 5121</a>
              <br />
              Mobil: <a href="tel:+4917647289436" className="hover:text-amber-300">0176 47289436</a>
              <br />
              E-Mail: <a href="mailto:luka.majstorovic@hotmail.de" className="hover:text-amber-300">luka.majstorovic@hotmail.de</a>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-amber-300 mb-2">Steuernummer</h2>
            <p>3040731284</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-amber-300 mb-2">
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            </h2>
            <p>
              Luka Majstorovic
              <br />
              Huttenheimer Str. 7
              <br />
              76706 Dettenheim-Rußheim
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-amber-300 mb-2">
              EU-Streitschlichtung
            </h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 underline"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              .
              <br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-amber-300 mb-2">
              Verbraucherstreitbeilegung / Universalschlichtungsstelle
            </h2>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
              vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-amber-300 mb-2">Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte
              auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
              §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
              übermittelte oder gespeicherte fremde Informationen zu überwachen oder
              nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
              hinweisen.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-amber-300 mb-2">Haftung für Links</h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren
              Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden
              Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
              Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
              verantwortlich.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-amber-300 mb-2">Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
              Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
              Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
              jeweiligen Autors bzw. Erstellers.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Impressum;
