import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import spanferkelFlyer from "@/assets/spanferkel-flyer.png";

const SpanferkelPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Don't show popup after March 2nd, 2026
    const expirationDate = new Date("2026-03-02");
    const today = new Date();
    if (today >= expirationDate) {
      return;
    }

    const hasSeenPopup = localStorage.getItem("spanferkel-popup-seen");
    if (!hasSeenPopup) {
      // Small delay for better UX
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("spanferkel-popup-seen", "true");
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-md p-0 border-0 bg-transparent shadow-2xl overflow-hidden">
        <button
          onClick={handleClose}
          className="absolute right-2 top-2 z-10 bg-black/70 hover:bg-black/90 text-white rounded-full p-2 transition-colors"
          aria-label="Schließen"
        >
          <X className="w-5 h-5" />
        </button>
        <img
          src={spanferkelFlyer}
          alt="Spanferkel vom Spieß - 01.03.2025 - Nur mit Reservierung"
          className="w-full h-auto rounded-lg"
        />
      </DialogContent>
    </Dialog>
  );
};

export default SpanferkelPopup;
