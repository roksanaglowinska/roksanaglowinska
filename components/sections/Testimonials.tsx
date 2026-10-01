"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const testimonials = [
    {
      name: "Fotografka",
      content: "Obejrzyj wideo powyżej, aby usłyszeć moją opinię ze współpracy z Roksaną!",
      videoId: "HgwZLT1KpPs"
    },
    {
      name: "Fotografka",
      content: "Obejrzyj wideo powyżej, aby usłyszeć moją opinię ze współpracy z Roksaną!",
      videoId: "TvWwC-1dgbI"
    },
    {
      name: "Marta, fotografka",
      content: "Twoja energia, wiedza i twarde spojrzenie na branżę to dokładnie to, czego potrzebowałam. Na wszystko, co chciałam wiedzieć, udzieliłaś mi odpowiedzi. Cała inwestycja zwróciła się z nawiązką — w wiedzy, czasie i energii do działania.",
      videoId: "CTBHqhkw4IY"
    },
    {
      name: "Klaudia, fotografka",
      content: "Miałam w głowie ogromny chaos. Przez lata słyszałam mnóstwo sprzecznych porad dotyczących budowania marki i utknęłam w miejscu. Potrzebowałam mentorki, która pomoże mi uporządkować strategię i obierze ze mną jeden, spójny kierunek. Dzięki współpracy wreszcie wiem, co mam robić krok po kroku.",
      videoId: "LWL_2GfUERk"
    },
    {
      name: "Natalia, fotografka",
      content: "Czułam się jak dziecko we mgle, mimo że robię dobre zdjęcia. Najbardziej brakowało mi rzeczowego planu uszytego pod moją sytuację, a nie ogólnych rad. Współpraca dała mi jasność, co zmienić w ofercie i komunikacji, żeby wreszcie trafiać do odpowiednich klientów.",
      videoId: "-xOZLoMR-u8"
    },
    {
      name: "Fotografka",
      content: "Obejrzyj wideo powyżej, aby usłyszeć moją opinię ze współpracy z Roksaną!",
      videoId: "VX7IL0HCHn4"
    },
    {
      name: "Fotografka",
      content: "Obejrzyj wideo powyżej, aby usłyszeć moją opinię ze współpracy z Roksaną!",
      videoId: "1Zalmd2paQw"
    },
    {
      name: "Fotografka",
      content: "Obejrzyj wideo powyżej, aby usłyszeć moją opinię ze współpracy z Roksaną!",
      videoId: "lCQ6UgO2qcY"
    },
    {
      name: "Fotografka",
      content: "Obejrzyj wideo powyżej, aby usłyszeć moją opinię ze współpracy z Roksaną!",
      videoId: "yimahD_fq6g"
    },
    {
      name: "Fotografka",
      content: "Obejrzyj wideo powyżej, aby usłyszeć moją opinię ze współpracy z Roksaną!",
      videoId: "MvSmm2B5sDE"
    }
  ];

  return (
    <section id="opinie" className="bg-neutral-50 py-24 md:py-32 border-b border-neutral-100 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground uppercase tracking-tighter mb-8 leading-tight">
            CO MÓWIĄ FOTOGRAFKI
          </h2>
          <p className="text-base md:text-lg font-light text-neutral-800 leading-relaxed max-w-2xl mx-auto">
            Zobacz i posłuchaj, jak dołączenie do moich przestrzeni wpłynęło na ich biznes, nastawienie i działanie.
          </p>
        </div>

        {/* SLIDER / CAROUSEL OPINII */}
        <div className="relative group mb-16">
          <button 
            onClick={() => scroll("left")}
            className="absolute left-0 top-[45%] -translate-y-1/2 -ml-6 z-10 w-12 h-12 bg-white rounded-full shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] items-center justify-center hidden md:group-hover:flex text-neutral-800 hover:text-black hover:scale-105 transition-all border border-neutral-100"
            aria-label="Przewiń w lewo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={() => scroll("right")}
            className="absolute right-0 top-[45%] -translate-y-1/2 -mr-6 z-10 w-12 h-12 bg-white rounded-full shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] items-center justify-center hidden md:group-hover:flex text-neutral-800 hover:text-black hover:scale-105 transition-all border border-neutral-100"
            aria-label="Przewiń w prawo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 md:gap-8 pb-4 -mx-4 px-4 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex-none w-[85vw] sm:w-[380px] lg:w-[400px] snap-center flex flex-col group">
                {/* Odtwarzacz Wideo z YouTube */}
                <div className="relative w-full aspect-[9/16] bg-black overflow-hidden transition-colors duration-300 border border-neutral-100 rounded">
                  <iframe 
                    src={`https://www.youtube.com/embed/${testimonial.videoId}?rel=0`}
                    className="absolute top-0 left-0 w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Wskazówka o przewijaniu (widoczna głownie na telefonach) */}
        <div className="md:hidden flex items-center justify-center gap-2 mt-8 opacity-50">
          <span className="text-[10px] uppercase tracking-widest font-bold">Przesuń palcem, aby zobaczyć więcej</span>
        </div>
      </div>
    </section>
  );
}
