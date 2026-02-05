import { Phone } from "lucide-react";
import { useState, useEffect } from "react";

const FloatingReserveButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past hero section (about 400px)
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <a
      href="tel:+4917647289436"
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-primary-foreground px-5 py-3 rounded-full shadow-2xl hover:shadow-primary/40 transition-all duration-300 transform hover:scale-105 animate-in slide-in-from-bottom-4 fade-in"
      aria-label="Jetzt reservieren: 0176 47289436"
    >
      <Phone className="w-5 h-5 animate-pulse" />
      <span className="font-semibold text-sm md:text-base">Jetzt reservieren</span>
    </a>
  );
};

export default FloatingReserveButton;
