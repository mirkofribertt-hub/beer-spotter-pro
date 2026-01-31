import { Clock, MapPin, Phone, Star, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-amber-950 to-amber-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span className="text-amber-200 text-sm font-medium">4,5 Sterne · 110 Bewertungen</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-amber-50 mb-4 tracking-tight">
            Alte Brauerei
          </h1>
          <p className="text-2xl md:text-3xl text-amber-200 font-light mb-2">Rußheim</p>
          <p className="text-amber-300/80 text-lg mt-6 max-w-2xl mx-auto">
            Tradition trifft Geschmack – Seit Generationen der Ort für echte badische Gastlichkeit
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-amber-950 font-semibold text-lg px-8">
              Reservieren
            </Button>
            <Button size="lg" variant="outline" className="border-amber-400/50 text-amber-200 hover:bg-amber-800/50 text-lg px-8">
              Speisekarte
            </Button>
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
                  src="https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=800&q=80" 
                  alt="Frittiertes Hähnchen"
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
                Frittierte Halbe Hähnchen
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Knusprig, saftig, unwiderstehlich – unsere frittierten halben Hähnchen sind das Herzstück unserer Küche. 
                Nach traditionellem Familienrezept zubereitet und mit Liebe serviert.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Jedes Hähnchen wird frisch mariniert, perfekt gewürzt und goldbraun frittiert. 
                Dazu empfehlen wir unsere hausgemachten Beilagen und ein frisches Bier aus der Region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Besuchen Sie uns</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-card border-amber-200/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-7 h-7 text-amber-600" />
                </div>
                <h4 className="font-semibold text-lg mb-2 text-foreground">Adresse</h4>
                <p className="text-muted-foreground">Huttenheimer Str. 7</p>
                <p className="text-muted-foreground">76706 Dettenheim</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-amber-200/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-7 h-7 text-amber-600" />
                </div>
                <h4 className="font-semibold text-lg mb-2 text-foreground">Öffnungszeiten</h4>
                <p className="text-muted-foreground">Sonntag: 11:30 - 22:00</p>
                <p className="text-muted-foreground">Mo-Sa: Ruhetag</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-amber-200/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-7 h-7 text-amber-600" />
                </div>
                <h4 className="font-semibold text-lg mb-2 text-foreground">Kontakt</h4>
                <p className="text-muted-foreground">0176 47289436</p>
                <a href="https://metro.rest" className="text-amber-600 hover:underline">metro.rest</a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-950 text-amber-200 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-amber-50 mb-2">Alte Brauerei Rußheim</h2>
          <p className="text-amber-300/70 mb-6">Traditionelle badische Küche seit Generationen</p>
          <p className="text-amber-400/50 text-sm">© 2024 Alte Brauerei Rußheim. Alle Rechte vorbehalten.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
