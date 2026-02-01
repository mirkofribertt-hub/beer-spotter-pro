import { Clock, MapPin, Phone, Star, Utensils, UtensilsCrossed, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SpanferkelPopup from "@/components/SpanferkelPopup";
import gebaeude from "@/assets/gebaeude.jpeg";
import haehnchenTeller from "@/assets/haehnchen-teller.jpeg";
import haehnchenKueche from "@/assets/haehnchen-kueche.jpeg";
import terrasse from "@/assets/terrasse.jpeg";
import gastraum from "@/assets/gastraum.jpeg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SpanferkelPopup />
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${gebaeude})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span className="text-amber-200 text-sm font-medium">4,5 Sterne · 110 Bewertungen</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-amber-50 mb-4 tracking-tight drop-shadow-lg">
            Gaststätte Alte Brauerei
          </h1>
          <p className="text-2xl md:text-3xl text-amber-200 font-light mb-2">in Rußheim</p>
          <p className="text-amber-300/90 text-lg mt-6 max-w-2xl mx-auto">
            Tradition trifft Geschmack – Berühmt für unsere knusprigen halben Hähnchen
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+4917647289436">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8">
                <Phone className="w-5 h-5 mr-2" />
                Jetzt anrufen
              </Button>
            </a>
            <a href="#speisekarte">
              <Button size="lg" variant="outline" className="border-primary/50 text-foreground hover:bg-primary/20 text-lg px-8">
                Speisekarte ansehen
              </Button>
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Specialty Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl ring-4 ring-amber-500/20">
                <img 
                  src={haehnchenTeller}
                  alt="Frittiertes halbes Hähnchen auf Teller"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-amber-500 text-amber-950 px-6 py-3 rounded-2xl shadow-xl">
                <span className="text-2xl font-bold">Unsere Spezialität</span>
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 text-amber-600 mb-4">
                <Utensils className="w-5 h-5" />
                <span className="font-semibold uppercase tracking-wider text-sm">Hausgemacht</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                ½ Hähnchen
              </h2>
              <p className="text-3xl font-bold text-amber-600 mb-4">9,00 €</p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Knusprig, saftig, unwiderstehlich – unsere frittierten halben Hähnchen sind das Herzstück unserer Küche. 
                Nach traditionellem Familienrezept zubereitet und mit Liebe serviert.
              </p>
              <div className="flex items-center gap-2 text-amber-600">
                <Flame className="w-5 h-5" />
                <span className="font-medium">Extra-Schärfe (Mittel oder Chilli): + 0,50 €</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kitchen Image Section */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <img 
              src={haehnchenKueche}
              alt="Frisch frittierte Hähnchen in der Küche"
              className="w-full h-80 object-cover"
            />
          </div>
          <p className="text-center text-muted-foreground mt-4 text-lg">Frisch aus unserer Küche – jeden Sonntag für Sie zubereitet</p>
        </div>
      </section>

      {/* Speisekarte Section */}
      <section id="speisekarte" className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-amber-600 mb-4">
              <UtensilsCrossed className="w-5 h-5" />
              <span className="font-semibold uppercase tracking-wider text-sm">Preisliste</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Unsere Speisekarte</h2>
          </div>

          {/* Hähnchen Gerichte */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-amber-600 mb-6 border-b-2 border-amber-200 pb-2">Hähnchen</h3>
            <div className="space-y-4">
              <MenuItem name="½ Hähnchen" badge="Unsere Spezialität" price="9,00 €" />
              <MenuItem name="Extra-Schärfe" description="Mittel oder Chilli" price="+ 0,50 €" isNew />
              <MenuItem name="Hähnchenschlegel" price="5,50 €" />
              <MenuItem name="Hähnchen-Nuggets" description="8 Stück" price="6,00 €" />
              <MenuItem name="Chicken Wings" description="8 Stück" price="8,50 €" isNew />
              <MenuItem name="Hähnchen Cordon bleu" description="2 Stück" price="10,00 €" />
            </div>
          </div>

          {/* Schnitzel */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-amber-600 mb-6 border-b-2 border-amber-200 pb-2">Schnitzel</h3>
            <div className="space-y-4">
              <MenuItem name="Paniertes Schnitzel" description="mit Bratensoße" price="10,00 €" />
              <MenuItem name="Jägerschnitzel paniert" description="mit Soße" price="11,00 €" />
              <MenuItem name="Zigeunerschnitzel paniert" description="mit Soße" price="11,00 €" />
              <MenuItem name="Rahmschnitzel paniert" description="mit Soße" price="11,00 €" />
            </div>
          </div>

          {/* Weitere Gerichte */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-amber-600 mb-6 border-b-2 border-amber-200 pb-2">Weitere Gerichte</h3>
            <div className="space-y-4">
              <MenuItem name="Cevapcici + Ajvar u. Pommes" price="kl. 7,50 € / gr. 13,50 €" isNew />
            </div>
          </div>

          {/* Beilagen */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-amber-600 mb-6 border-b-2 border-amber-200 pb-2">Beilagen</h3>
            <div className="space-y-4">
              <MenuItem name="Pommes, Kroketten oder Spätzle" price="4,00 €" />
              <MenuItem name="Grüner Salat" description="Salatdressing hausgemacht!" price="5,00 €" />
              <MenuItem name="Gemischter Salat" description="Salatdressing hausgemacht!" price="5,50 €" />
              <MenuItem name="Dips zur Auswahl" description="Ketchup, Knoblauch, Mayo, Chilli, Mild" price="1,00 €" isNew />
            </div>
          </div>

          <p className="text-center text-muted-foreground text-sm">Preise inklusive Mehrwertsteuer</p>
          <p className="text-center text-amber-600 font-semibold text-lg mt-4">Alle Speisen zum Mitnehmen!</p>
        </div>
      </section>

      {/* Spezialangebote */}
      <section className="py-16 px-4 bg-amber-50 dark:bg-amber-950/20">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-amber-700 dark:text-amber-400 mb-6">Spezialangebote</h3>
          <p className="text-lg text-amber-800 dark:text-amber-300 mb-2">Ideal für kleine Feste zu Hause!</p>
          <div className="space-y-3 text-muted-foreground mt-6">
            <p><strong>Schweinebraten, Schweinenacken, Rollbraten</strong> (ab 10 Portionen)</p>
            <p><strong>Ente im Backofen</strong></p>
            <p><strong>Spanferkel am Spieß auf Holz gegrillt</strong> mit Krautsalat und selbstgebackenem Brot (ab 15 Portionen)</p>
          </div>
          <p className="text-amber-600 font-bold text-xl mt-6">Preise auf Anfrage</p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Unser Lokal</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={gastraum}
                alt="Gemütlicher Gastraum"
                className="w-full h-72 object-cover hover:scale-105 transition-transform duration-300"
              />
              <p className="text-center py-3 bg-muted text-muted-foreground font-medium">Gemütlicher Gastraum</p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={terrasse}
                alt="Sonnige Terrasse"
                className="w-full h-72 object-cover hover:scale-105 transition-transform duration-300"
              />
              <p className="text-center py-3 bg-muted text-muted-foreground font-medium">Sonnige Terrasse</p>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Besuchen Sie uns</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-card border-primary/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-semibold text-lg mb-2 text-foreground">Adresse</h4>
                <p className="text-muted-foreground">Huttenheimer Str. 7</p>
                <p className="text-muted-foreground">76706 Dettenheim</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-semibold text-lg mb-4 text-foreground text-center">Öffnungszeiten</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sonntag</span>
                    <span className="text-foreground">11:30 – 21:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Montag</span>
                    <span className="text-foreground text-right text-xs">10:30–14:00, 17:00–21:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Dienstag</span>
                    <span className="text-destructive">Geschlossen</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Mittwoch</span>
                    <span className="text-foreground">17:00 – 21:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Donnerstag</span>
                    <span className="text-foreground text-right text-xs">10:30–14:00, 17:00–21:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Freitag</span>
                    <span className="text-foreground text-right text-xs">10:30–14:00, 17:00–21:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Samstag</span>
                    <span className="text-foreground text-right text-xs">10:30–14:00, 17:00–21:00</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-semibold text-lg mb-2 text-foreground">Kontakt</h4>
                <p className="text-muted-foreground">07255 - 5121</p>
                <p className="text-muted-foreground">0176 47289436</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8 text-foreground">So finden Sie uns</h3>
          <div className="rounded-2xl overflow-hidden shadow-xl border border-primary/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2617.8!2d8.4183!3d49.1847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797b5c5e7b5b5b5%3A0x5b5b5b5b5b5b5b5b!2sHuttenheimer%20Str.%207%2C%2076706%20Dettenheim!5e0!3m2!1sde!2sde!4v1706000000000!5m2!1sde!2sde"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Standort Gaststätte Alte Brauerei"
              className="w-full"
            />
          </div>
          <p className="text-center text-muted-foreground mt-4">
            Huttenheimer Str. 7, 76706 Dettenheim (Rußheim)
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-950 text-amber-200 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-amber-50 mb-2">Gaststätte Alte Brauerei</h2>
          <p className="text-amber-300/70 mb-6">in Rußheim · Traditionelle badische Küche</p>
          <p className="text-amber-400/50 text-sm">© 2024 Gaststätte Alte Brauerei Rußheim. Alle Rechte vorbehalten.</p>
        </div>
      </footer>
    </div>
  );
};

const MenuItem = ({ 
  name, 
  description, 
  price, 
  badge, 
  isNew 
}: { 
  name: string; 
  description?: string; 
  price: string; 
  badge?: string;
  isNew?: boolean;
}) => (
  <div className="flex justify-between items-start py-3 border-b border-muted last:border-0">
    <div className="flex-1">
      <div className="flex items-center gap-2">
        {isNew && (
          <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded">NEU</span>
        )}
        <span className="font-medium text-foreground">{name}</span>
        {badge && (
          <span className="text-amber-600 text-sm font-medium">– {badge}</span>
        )}
      </div>
      {description && (
        <p className="text-muted-foreground text-sm mt-0.5">{description}</p>
      )}
    </div>
    <span className="font-bold text-amber-600 ml-4">{price}</span>
  </div>
);

export default Index;
