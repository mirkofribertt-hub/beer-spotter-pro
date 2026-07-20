import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import urlaubImage from "@/assets/urlaub-popup.jpg";

const UrlaubPopup = () => {
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
          Betriebsferien – ab 20. August wieder für Sie da
        </DialogTitle>
        <img
          src={urlaubImage}
          alt="Wir machen Urlaub – ab 20. August wieder für Sie da. Alte Brauerei Rußheim."
          className="w-full h-auto rounded-lg"
        />
      </DialogContent>
    </Dialog>
  );
};

export default UrlaubPopup;
