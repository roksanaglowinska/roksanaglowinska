"use client";
import React, { useRef } from "react";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const firstBatch = [13, 17, 19, 23, 26, 28, 33, 35, 36, 40, 42, 43, 44];
const allOtherPhotos = Array.from({ length: 48 }, (_, i) => i + 2).filter(num => !firstBatch.includes(num));
const orderedPhotos = [...firstBatch, ...allOtherPhotos];
const studioImages = orderedPhotos.map(num => `/images/roksana-glowinska-studio-fotograficzne-w-rzeszowie-${num}.jpg`);

const verticalVideos = [
  "https://www.youtube.com/embed/a5Xmm7MsviY",
  "https://www.youtube.com/embed/Wyx8ikAtVxc",
  "https://www.youtube.com/embed/LSxU2jwzIr4",
  "https://www.youtube.com/embed/uWfQ8x1NybE",
  "https://www.youtube.com/embed/_o6GWxbOryo",
  "https://www.youtube.com/embed/yo2zYDGAWZM",
  "https://www.youtube.com/embed/NJIN2-7xrG4",
  "https://www.youtube.com/embed/ijHYCJnjN-o",
  "https://www.youtube.com/embed/3KdlYQA7tDc",
  "https://www.youtube.com/embed/wdEIY6vl6gs",
  "https://www.youtube.com/embed/HoARwQV9gRk",
  "https://www.youtube.com/embed/7tTi8Qq_n2Y",
  "https://www.youtube.com/embed/2EkgCBcRCCE"
];

export function AboutPhotography() {
  const photosRef = useRef<HTMLDivElement>(null);
  const videosRef = useRef<HTMLDivElement>(null);

  const scroll = (ref: React.RefObject<HTMLDivElement | null>, direction: 'left' | 'right') => {
    if (ref.current) {
      const scrollAmount = 360;
      ref.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Sekcja 1: Fotografia */}
      <section className="bg-neutral-50 py-24 md:py-32 border-b border-neutral-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start mb-16 lg:mb-24">
            <div className="w-full lg:w-5/12">
              <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-foreground uppercase tracking-tighter leading-tight sticky top-32 z-10">
                POKOCHAŁAM FOTOGRAFIĘ ZA TO, JAK <span className="relative inline-block">
                  <span className="absolute top-[30%] -bottom-1 -inset-x-2 bg-primary/30 -z-10"></span>
                  POZWALA
                </span> LUDZIOM ZOBACZYĆ SIEBIE
              </h2>
            </div>
            <div className="w-full lg:w-7/12 space-y-8 font-light text-base md:text-lg text-neutral-800">
              <p className="leading-relaxed">
                Od początku fascynowały mnie nie tylko zdjęcia, ale przede wszystkim to, co działo się z ludźmi, kiedy je oglądali. Zaczynali patrzeć na siebie łagodniej, dostrzegać swoje piękno i widzieć w sobie coś, czego wcześniej nie zauważali. <span className="font-medium text-black">Pokochałam świadomość, że mogę mieć wpływ na ten moment</span> – sprawić, że ktoś poczuje się pewniej, swobodniej i zobaczy siebie w nowym świetle.
              </p>

              <div className="h-px w-16 bg-neutral-200 my-8"></div>

              <p className="leading-relaxed">
                Fotografuję od 2014 roku, choć pierwsze sesje realizowałam jeszcze wcześniej. Przez te lata stworzyłam ponad 1000 sesji zdjęciowych dla klientów indywidualnych, marek osobistych i firm z różnych branż. Przed moim obiektywem stawały kobiety, rodziny, przedsiębiorcy, twórcy oraz osoby, które często po raz pierwszy brały udział w profesjonalnej sesji.
              </p>
              <p className="leading-relaxed">
                Zawsze zależało mi na czymś więcej niż pięknych kadrach. Chciałam tworzyć doświadczenie, w którym człowiek czuje się swobodnie, bezpiecznie i naprawdę dobrze ze sobą. To właśnie z tego podejścia wyrosła <span className="font-medium text-black">LIRYKA – marka oparta na świetle, emocjach, bliskości i dostrzeganiu tego, co w drugim człowieku najpiękniejsze.</span>
              </p>
            </div>
          </div>

          {/* Scrolling Vertical Photos Gallery */}
          <div className="relative group">
            {/* Desktop Navigation Arrows */}
            <button 
              onClick={() => scroll(photosRef, 'left')}
              className="absolute left-0 top-[45%] -translate-y-1/2 -ml-6 z-10 w-12 h-12 bg-white rounded-full shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] items-center justify-center hidden md:group-hover:flex text-neutral-800 hover:text-black hover:scale-105 transition-all border border-neutral-100"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => scroll(photosRef, 'right')}
              className="absolute right-0 top-[45%] -translate-y-1/2 -mr-6 z-10 w-12 h-12 bg-white rounded-full shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] items-center justify-center hidden md:group-hover:flex text-neutral-800 hover:text-black hover:scale-105 transition-all border border-neutral-100"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div 
              ref={photosRef}
              className="flex overflow-x-auto gap-4 pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] -mx-4 px-4 md:mx-0 md:px-0"
            >
            {studioImages.map((src, i) => (
              <div 
                key={i} 
                className="w-[280px] md:w-[340px] shrink-0 aspect-[2/3] bg-neutral-100 flex items-center justify-center snap-center relative overflow-hidden"
              >
                <Image
                  src={src}
                  alt={`Sesja zdjęciowa w Rzeszowie - fotografka Roksana Głowińska - ujęcie ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 280px, 340px"
                  quality={85}
                />
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sekcja 2: Opinie Klientów */}
      <section className="bg-white py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-foreground uppercase tracking-tighter leading-tight mb-8 text-center">
              JAK SESJĘ ZE MNĄ<br /> WSPOMINAJĄ MOI KLIENCI?
            </h2>
            <p className="text-center font-light text-base md:text-lg text-neutral-600">
              Zamiast opowiadać Ci, jaka atmosfera panuje podczas moich sesji, oddaję głos osobom, które same jej doświadczyły.
            </p>
          </div>

          {/* Scrolling Vertical Videos Gallery */}
          <div className="relative group mb-16">
            {/* Desktop Navigation Arrows */}
            <button 
              onClick={() => scroll(videosRef, 'left')}
              className="absolute left-0 top-[45%] -translate-y-1/2 -ml-6 z-10 w-12 h-12 bg-white rounded-full shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] items-center justify-center hidden md:group-hover:flex text-neutral-800 hover:text-black hover:scale-105 transition-all border border-neutral-100"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => scroll(videosRef, 'right')}
              className="absolute right-0 top-[45%] -translate-y-1/2 -mr-6 z-10 w-12 h-12 bg-white rounded-full shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] items-center justify-center hidden md:group-hover:flex text-neutral-800 hover:text-black hover:scale-105 transition-all border border-neutral-100"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div 
              ref={videosRef}
              className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] -mx-4 px-4 md:mx-0 md:px-0"
            >
            {verticalVideos.map((url, i) => (
              <div 
                key={i} 
                className="w-[280px] md:w-[320px] shrink-0 aspect-[9/16] relative bg-neutral-800 flex items-center justify-center snap-center group overflow-hidden border border-neutral-100 rounded"
              >
                {url ? (
                  <iframe 
                    className="absolute inset-0 w-full h-full" 
                    src={url} 
                    title={`Opinia Wideo ${i + 1}`}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 border border-dashed border-neutral-600 m-4"></div>
                    <div className="z-10 flex flex-col items-center gap-6 text-white relative">
                      <div className="w-16 h-16 bg-[#729F89] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer">
                        <Play className="w-6 h-6 ml-1" />
                      </div>
                      <span className="font-heading text-xs uppercase tracking-widest text-center px-4 cursor-pointer">
                        Wideo Pionowe {i + 1}<br/><span className="text-[10px] text-neutral-400 mt-2 block">Reels / TikTok</span>
                      </span>
                    </div>
                  </>
                )}
              </div>
            ))}
            </div>
          </div>
          
          <div className="mt-16 space-y-6 font-light text-base md:text-lg text-neutral-800 max-w-4xl mx-auto">
            <p>
              Fotografia nauczyła mnie znacznie więcej niż pracy z aparatem. Nauczyła mnie budowania relacji, rozpoznawania potrzeb klientów, tworzenia oferty, komunikowania wartości i prowadzenia biznesu w nieustannie zmieniającej się branży.
            </p>
            <p className="font-medium text-black">
              Dlatego wiedza, którą dziś przekazuję fotografom, nie powstała wyłącznie na podstawie książek czy szkoleń. Wyrosła z lat prawdziwej pracy – rozmów z klientami, podejmowanych decyzji, popełnianych błędów i rozwiązań sprawdzonych we własnej działalności.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
