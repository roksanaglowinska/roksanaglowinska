"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Sprawdzamy czy użytkownik już podjął decyzję
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("cookieConsent", "all");
    setIsVisible(false);
    // Miejsce na uruchomienie skryptów analitycznych (np. Google Analytics, Facebook Pixel)
  };

  const acceptEssential = () => {
    localStorage.setItem("cookieConsent", "essential");
    setIsVisible(false);
    // Blokada skryptów śledzących - ładujemy tylko absolutnie niezbędne dla strony
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-[100] bg-white border-t border-neutral-200 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] p-6 lg:p-8 animate-in slide-in-from-bottom-8 duration-700">
      <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12 relative">
        
        {/* Zamknij (krzyżyk) dla mobile */}
        <button 
          onClick={acceptEssential}
          className="absolute -top-2 -right-2 lg:hidden p-2 text-neutral-400 hover:text-black transition-colors"
          aria-label="Zamknij"
        >
          <X size={20} />
        </button>

        {/* Tekst */}
        <div className="flex-1 text-center lg:text-left mt-4 lg:mt-0">
          <h3 className="font-sans font-bold text-sm md:text-base uppercase tracking-widest text-black mb-3">
            Szanuję Twoją prywatność
          </h3>
          <p className="font-sans font-light text-xs md:text-sm text-neutral-600 leading-relaxed max-w-4xl">
            Ta strona używa plików cookies w celach analitycznych, marketingowych oraz by po prostu działała jak należy. 
            Klikając „Akceptuj wszystkie”, pozwalasz mi na zbieranie anonimowych statystyk, które pomagają mi tworzyć dla Ciebie lepsze treści. 
            Zawsze możesz dowiedzieć się więcej w <Link href="/polityka-prywatnosci" className="underline font-medium hover:text-black transition-colors">Polityce Prywatności</Link>.
          </p>
        </div>

        {/* Przyciski */}
        <div className="flex flex-col sm:flex-row w-full lg:w-auto items-center gap-3 shrink-0">
          <button 
            onClick={acceptEssential}
            className="w-full sm:w-auto px-6 py-4 bg-transparent border border-black text-black font-sans font-bold text-[10px] sm:text-xs uppercase tracking-widest hover:bg-neutral-50 transition-colors text-center whitespace-nowrap"
          >
            Tylko niezbędne
          </button>
          <button 
            onClick={acceptAll}
            className="w-full sm:w-auto px-8 py-4 bg-black text-white font-sans font-bold text-[10px] sm:text-xs uppercase tracking-widest hover:bg-neutral-800 transition-colors text-center whitespace-nowrap"
          >
            Akceptuj wszystkie
          </button>
        </div>

      </div>
    </div>
  );
}
