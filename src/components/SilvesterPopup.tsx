import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import flyerAsset from "@/assets/silvester-spanferkel-flyer.png.asset.json";

const SilvesterPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden border-primary/30 bg-transparent">
        <DialogTitle className="sr-only">
          Silvester-Spanferkel-Event am 31.12.2026 – nur mit Reservierung
        </DialogTitle>
        <img
          src={flyerAsset.url}
          alt="Spanferkel-Event Silvester – selbstgemachtes, frisch gegrilltes Spanferkel mit hausgemachtem Brot und Krautsalat – 31.12.2026 – Nur mit Reservierung, die Plätze sind begrenzt. Reservierung direkt vor Ort oder telefonisch: Tel 07255-5121, Mobil 0176 47289436"
          className="w-full h-auto rounded-lg"
        />
      </DialogContent>
    </Dialog>
  );
};

export default SilvesterPopup;
