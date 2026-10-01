import React from "react";
import Image from "next/image";

export function AboutJourney() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-start">
          {/* Images / Timeline */}
          <div className="w-full md:w-5/12 relative">
            <div className="absolute left-6 top-8 bottom-8 w-px bg-neutral-200 hidden md:block" />
            
            <div className="space-y-16">
              <div className="relative z-10 pl-0 md:pl-16">
                <div className="hidden md:flex absolute left-[-4px] top-4 w-2 h-2 rounded-full bg-black" />
                <div className="font-heading font-bold text-xs uppercase tracking-widest text-[#729F89] mb-4">
                  2014 - Początki
                </div>
                <div className="aspect-[4/3] relative overflow-hidden bg-neutral-200 flex items-center justify-center text-neutral-400 border border-neutral-100">
                  <Image 
                    src="/images/poczatki.jpg" 
                    alt="Roksana Głowińska - Początki w 2014 roku" 
                    fill 
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    quality={100}
                    unoptimized={true}
                  />
                </div>
              </div>

              <div className="relative z-10 pl-0 md:pl-16">
                <div className="hidden md:flex absolute left-[-4px] top-4 w-2 h-2 rounded-full bg-black" />
                <div className="font-heading font-bold text-xs uppercase tracking-widest text-[#729F89] mb-4">
                  Dziś
                </div>
                <div className="aspect-[4/3] relative overflow-hidden bg-neutral-200 flex items-center justify-center text-neutral-400 border border-neutral-100">
                  <Image 
                    src="/images/roksana-glowinska-studio.jpg" 
                    alt="Roksana Głowińska - Aktualne zdjęcie w studiu" 
                    fill 
                    className="object-cover object-[center_40%] scale-[1.35] transition-transform duration-700"
                    quality={100}
                    unoptimized={true}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-7/12 space-y-8 font-light text-base md:text-lg text-neutral-800">
            <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-foreground uppercase tracking-tighter leading-tight mb-12 relative z-10">
              TO BYŁ <span className="relative inline-block">
                <span className="absolute top-[30%] -bottom-1 -inset-x-2 bg-primary/30 -z-10"></span>
                PROCES
              </span>, NIE JEDEN PRZEŁOMOWY MOMENT
            </h2>
            
            <p>
              Na początku wydawało mi się, że wystarczy robić piękne zdjęcia, mieć ładną stronę i estetycznego Facebooka (wtedy nie było innych social mediów). Nie wiedziałam jeszcze, czym naprawdę jest sprzedaż. Marketing robiłam intuicyjnie. Bez zrozumienia, co sprawia, że klienci wybierają właśnie mnie.
            </p>
            
            <div className="pl-6 border-l-2 border-primary py-4 my-12">
              <p className="font-heading text-base md:text-lg font-bold uppercase tracking-widest text-foreground leading-relaxed">
                Nie potrafiłam mówić o wartości swojej pracy – bo sama nie zawsze tę wartość widziałam.
              </p>
            </div>
            
            <p>
              Uczyłam się wszystkiego krok po kroku. Testowałam różne rozwiązania, wyciągałam wnioski z niepowodzeń i coraz odważniej podejmowałam kolejne decyzje.
            </p>
            <p>
              Z czasem zrozumiałam, że dobry biznes fotograficzny potrzebuje czegoś więcej. Potrzebuje mocnej marki, przemyślanej strategii i sprzedaży, która nie uwiera. Ale przede wszystkim potrzebuje człowieka, który zna swoją wartość i wie, dokąd zmierza.
            </p>
            <p>
              Dlatego dziś nie uczę fotografów kopiowania jednej gotowej recepty. Pomagam im znaleźć rozwiązania dopasowane do ich biznesu, osobowości i życia. <span className="font-medium text-black">Bo rozwój biznesu zaczyna się dużo wcześniej niż od strategii. Zaczyna się od Ciebie.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
