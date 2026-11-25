import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const origin = "https://www.altebrauerei-russheim.de";

const pages: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Alte Brauerei Rußheim – Hähnchen & Schnitzel",
    description:
      "Traditionsrestaurant in Dettenheim-Rußheim bei Karlsruhe und Bruchsal: knusprige halbe Hähnchen nach Originalrezept von 1960, Schnitzel und badische Küche.",
  },
  "/impressum": {
    title: "Impressum | Alte Brauerei Rußheim",
    description:
      "Impressum der Gaststätte Alte Brauerei Rußheim: Angaben zum Inhaber Luka Majstorovic, Anschrift, Kontakt und rechtliche Informationen.",
  },
  "/datenschutz": {
    title: "Datenschutzerklärung | Alte Brauerei Rußheim",
    description:
      "Datenschutzerklärung der Gaststätte Alte Brauerei Rußheim: Informationen zur Verarbeitung personenbezogener Daten und zu Ihren Datenschutzrechten.",
  },
};

/** Client-side head tags; non-JavaScript crawlers still see index.html. */
export default function PageMetadata() {
  const { pathname } = useLocation();
  const route = pathname.replace(/\/+$/, "") || "/";
  const page = pages[route] ?? {
    title: "Seite nicht gefunden | Alte Brauerei Rußheim",
    description:
      "Die angeforderte Seite der Gaststätte Alte Brauerei Rußheim wurde nicht gefunden.",
  };

  const url = `${origin}${route}`;
  return (
    <Helmet>
      <title>{page.title}</title>
      <meta name="description" content={page.description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={page.title} />
      <meta property="og:description" content={page.description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta name="twitter:title" content={page.title} />
      <meta name="twitter:description" content={page.description} />
    </Helmet>
  );
}