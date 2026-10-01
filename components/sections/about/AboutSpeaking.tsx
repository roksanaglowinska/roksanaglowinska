"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export function AboutSpeaking() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 560; // Approximate width of one video card
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="bg-white pt-24 md:pt-32 pb-4 md:pb-8 overflow-hidden border-b border-neutral-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-32 lg:mb-40">
          <div className="w-full lg:w-1/2">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground uppercase tracking-tighter mb-8 leading-tight relative z-10">
            TO, CO <span className="relative inline-block">
              <span className="absolute top-[30%] -bottom-1 -inset-x-2 bg-primary/30 -z-10"></span>
              TWORZĘ
            </span> I CZEGO UCZĘ, WYBRZMIEWA TAKŻE SZERZEJ
          </h2>
            <div className="space-y-6 font-light text-base md:text-lg text-neutral-800">
              <p>
                Swoją wiedzą i doświadczeniem dzieliłam się na scenach wydarzeń fotograficznych i biznesowych w całej Polsce – między innymi podczas <span className="font-medium text-black">ŚwiatłoSiła, FotoForma, EXPOzycji, FotoONA, nPhoto Roadshow, Jurajskiego Festiwalu Fotograficznego</span>, Adora Academy oraz Kongresu International Women – She Can Do It.
              </p>
              <p>
                Byłam również zapraszana do podcastów i rozmów, między innymi przez Agatę Koman, "Fotorelacje" oraz twórców cyklu "Rozmowy w kamperze". Publikowana m.in. w „Kobietach nad Wyraz”, „Law Business Quality” i mediach regionalnych. Wyróżniona w Chromatic Photography Awards oraz podczas Podkarpackiej Gali Biznesu. Współtworzona przeze mnie LIRYKA zdobyła Podkarpacką Nagrodę Mody w kategorii „Rynkowy Debiut Roku”.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-3 gap-2">
              {[
                "roksana-glowinska-prelekcje-12.jpg",
                "roksana-glowinska-prelekcje-10.jpg",
                "roksana-glowinska-prelekcje.jpg",
                "roksana-glowinska-prelekcje-2.jpg",
                "roksana-glowinska-prelekcje-5.jpg",
                "roksana-glowinska-prelekcje-4.jpg",
                "roksana-glowinska-prelekcje-7.jpg",
                "roksana-glowinska-prelekcje-16.jpg",
                "roksana-glowinska-prelekcje-17.jpg",
              ].map((photo, index) => (
                <div 
                  key={index} 
                  className="aspect-square relative overflow-hidden bg-neutral-100 group"
                >
                  <Image 
                    src={`/images/${photo}`} 
                    alt={`Wystąpienia i prelekcje - Roksana Głowińska ${index + 1}`} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-500" 
                    sizes="(max-width: 768px) 33vw, 16vw" 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>



        {/* Galeria Wideo i Podcastów (Pozioma) */}
        <div className="mb-0">
          <div className="mb-8 md:mb-12">
            <h3 className="font-heading text-xl md:text-2xl font-bold uppercase tracking-tight">
              POSŁUCHAJ PODCASTÓW I ROZMÓW Z MOIM UDZIAŁEM
            </h3>
          </div>
          <div className="relative group">
            {/* Desktop Navigation Arrows */}
            <button 
              onClick={() => scroll('left')}
              className="absolute left-0 top-[45%] -translate-y-1/2 -ml-6 z-10 w-12 h-12 bg-white rounded-full shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] items-center justify-center hidden md:group-hover:flex text-neutral-800 hover:text-black hover:scale-105 transition-all border border-neutral-100"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="absolute right-0 top-[45%] -translate-y-1/2 -mr-6 z-10 w-12 h-12 bg-white rounded-full shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] items-center justify-center hidden md:group-hover:flex text-neutral-800 hover:text-black hover:scale-105 transition-all border border-neutral-100"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div 
              ref={scrollRef}
              className="flex overflow-x-auto snap-x snap-mandatory gap-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden items-center"
            >
            {/* YouTube 1 (Agata Koman) */}
            <div className="snap-center shrink-0 w-[85vw] md:w-[560px] aspect-video">
              <iframe className="w-full h-full rounded shadow-sm" src="https://www.youtube.com/embed/P-wnNQVYmis" frameBorder="0" allowFullScreen></iframe>
            </div>
            {/* YouTube 2 (Fotorelacje) */}
            <div className="snap-center shrink-0 w-[85vw] md:w-[560px] aspect-video">
              <iframe className="w-full h-full rounded shadow-sm" src="https://www.youtube.com/embed/x-jTjSSDtKY" frameBorder="0" allowFullScreen></iframe>
            </div>
            {/* YouTube 3 */}
            <div className="snap-center shrink-0 w-[85vw] md:w-[560px] aspect-video">
              <iframe className="w-full h-full rounded shadow-sm" src="https://www.youtube.com/embed/bMkM3VvCC5s" frameBorder="0" allowFullScreen></iframe>
            </div>
            {/* YouTube 4 */}
            <div className="snap-center shrink-0 w-[85vw] md:w-[560px] aspect-video">
              <iframe className="w-full h-full rounded shadow-sm" src="https://www.youtube.com/embed/CivCBy8aA1U" frameBorder="0" allowFullScreen></iframe>
            </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
