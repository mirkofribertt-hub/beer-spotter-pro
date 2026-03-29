import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import flyerImage from "@/assets/spanferkel-flyer.jpg";

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
      <DialogContent className="sm:max-w-md p-0 overflow-hidden border-primary/30 bg-transparent">
        <DialogTitle className="sr-only">Spanferkel Event am 1. Mai 2025</DialogTitle>
        <img
          src={flyerImage}
          alt="Spanferkel am Spieß – 1. Mai 2025 – Nur mit Reservierung. Tel: 07255-5121, Mobil: 0176 47289436"
          className="w-full h-auto rounded-lg"
        />
      </DialogContent>
    </Dialog>
  );
};

export default SpanferkelPopup;
