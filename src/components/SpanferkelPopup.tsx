import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Phone, X, Flame, Calendar } from "lucide-react";

const SpanferkelPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md border-amber-500/30 bg-card p-0 overflow-hidden">
        <DialogTitle className="sr-only">Spanferkel Event am 1. Mai</DialogTitle>
        
        {/* Header Banner */}
        <div className="bg-gradient-to-br from-amber-600 via-amber-500 to-orange-600 p-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h20v20H0V0zm10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14z\' fill=\'%23000\' fill-opacity=\'0.1\'/%3E%3C/svg%3E")' }} />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full mb-3">
              <Flame className="w-4 h-4 text-amber-200" />
              <span className="text-amber-100 text-xs font-semibold uppercase tracking-wider">Event</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-1 tracking-tight">
              Spanferkel
            </h2>
            <p className="text-amber-100 text-lg font-medium">vom Spieß</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="flex items-center gap-3 bg-muted/50 rounded-xl p-3">
            <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
            <div>
              <p className="text-foreground font-bold text-lg">1. Mai 2025</p>
              <p className="text-muted-foreground text-sm">Feiertag – Tag der Arbeit</p>
            </div>
          </div>

          <p className="text-muted-foreground text-center leading-relaxed">
            Frisch gegrilltes <strong className="text-foreground">Spanferkel vom Spieß</strong> mit 
            hausgemachtem Brot und Krautsalat.
          </p>

          <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-3 text-center">
            <p className="text-destructive font-bold text-sm uppercase tracking-wide">Nur mit Reservierung</p>
            <p className="text-muted-foreground text-xs mt-1">Die Plätze sind begrenzt!</p>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-2 pt-2">
            <a href="tel:072555121" className="block">
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold gap-2">
                <Phone className="w-4 h-4" />
                Anrufen: 07255-5121
              </Button>
            </a>
            <a href="tel:+4917647289436" className="block">
              <Button variant="outline" className="w-full border-primary/30 hover:bg-primary/10 gap-2">
                <Phone className="w-4 h-4" />
                Mobil: 0176 47289436
              </Button>
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SpanferkelPopup;
