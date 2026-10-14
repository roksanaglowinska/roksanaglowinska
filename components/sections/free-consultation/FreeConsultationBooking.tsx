"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, ShieldCheck, Clock, Video, Calendar } from "lucide-react";

export function FreeConsultationBooking() {
  const [iframeHeight, setIframeHeight] = useState(480);

  useEffect(() => {
    // Dynamicznie dopasowujemy wysokość ramki na podstawie postMessage z bookero-embed.html
    const handleMessage = (e: MessageEvent) => {
      if (e.data && e.data.type === "BOOKERO_RESIZE" && typeof e.data.height === "number") {
        const targetHeight = Math.min(1400, Math.max(380, e.data.height));
        setIframeHeight(targetHeight);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <section id="rezerwacja" className="bg-white py-24 md:py-32 scroll-mt-20">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Nagłówek sekcji */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-block bg-primary text-black font-bold px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] mb-4">
            REZERWACJA MIEJSCA
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-foreground uppercase tracking-tighter mb-6 leading-tight">
            ZAREZERWUJ <span className="relative inline-block"><span className="absolute top-[35%] -bottom-2 -inset-x-2 bg-primary/30 -z-10"></span>TERMIN</span>
          </h2>
          <p className="font-sans text-base md:text-lg text-neutral-800 font-light leading-relaxed">
            Zrób pierwszy krok i sprawdź, co warto uporządkować w Twoim biznesie fotograficznym, żeby działać z większą pewnością, lekkością i konkretnym kierunkiem.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Kolumna lewa: Podsumowanie korzyści i zdjęcie */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-neutral-50 border border-neutral-200 p-8 md:p-10">
              <span className="font-heading text-xs font-bold uppercase tracking-widest text-neutral-500 block mb-3">
                W skrócie o rozmowie
              </span>
              <h3 className="font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-foreground mb-6">
                Bezpłatna konsultacja
              </h3>
              
              <ul className="space-y-4 font-sans text-sm font-light text-neutral-700 mb-8">
                <li className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-primary shrink-0" />
                  <span>Czas trwania: <strong>15–25 minut</strong></span>
                </li>
                <li className="flex items-center gap-3">
                  <Video className="w-4 h-4 text-primary shrink-0" />
                  <span>Format: <strong>Spotkanie 1:1 online</strong></span>
                </li>
                <li className="flex items-center gap-3">
                  <Sparkles className="w-4 h-4 text-primary shrink-0" />
                  <span>Koszt: <strong>Bezpłatnie</strong></span>
                </li>
                <li className="flex items-center gap-3">
                  <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                  <span>Wymóg: <strong>Wypełnienie ankiety po zapisie</strong></span>
                </li>
              </ul>

              <div className="border-t border-neutral-200 pt-6">
                <p className="font-sans text-xs italic text-neutral-600 leading-relaxed">
                  „Ta krótka rozmowa ma jeden cel: dać Ci pełną jasność, gdzie dziś ucieka Twój potencjał i jakie kroki warto podjąć w pierwszej kolejności.”
                </p>
                <p className="font-heading text-xs font-bold uppercase tracking-wider text-black mt-2">
                  — Roksana Głowińska
                </p>
              </div>
            </div>
          </div>

          {/* Kolumna prawa: Zagnieżdżony formularz Monthly Box Bookero */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-neutral-200 p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-black">
                  <Calendar className="w-4 h-4 text-black" />
                </div>
                <h3 className="font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-foreground">
                  Wybierz termin spotkania
                </h3>
              </div>

              {/* Stabilna, natywna integracja kalendarza Bookero */}
              <div className="w-full relative transition-all duration-300">
                <iframe
                  id="bookero-calendar-iframe"
                  src="/bookero-embed.html"
                  title="Kalendarz rezerwacji Bookero"
                  className="w-full border-0 transition-all duration-300"
                  style={{
                    height: `${iframeHeight}px`,
                    display: "block",
                  }}
                  scrolling="no"
                  loading="eager"
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
