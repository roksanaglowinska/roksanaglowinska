import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function MentoringSolution() {
  return (
    <section className="bg-neutral-50 py-24 md:py-32 border-b border-neutral-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Kolumna Lewa: Zdjęcie */}
          <div className="relative aspect-[4/5] w-full">
            <Image 
              src="/images/roksana-glowinska-mentoring-2.jpg" 
              alt="Roksana Głowińska Mentoring" 
              fill
              className="object-cover"
            />
          </div>

          {/* Kolumna Prawa: Tekst */}
          <div className="flex flex-col items-start text-left">

            <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground mb-8 uppercase tracking-tighter leading-[1.1] relative z-10">
              Patrzymy <span className="relative inline-block"><span className="absolute top-[30%] -bottom-2 -inset-x-2 bg-primary/30 -z-10"></span>szerzej</span> niż tylko na marketing.
            </h2>
            
            <div className="text-black text-sm md:text-base font-light leading-relaxed w-full">
              <p className="mb-8 text-base md:text-lg">
                W mentoringu pracujemy na trzech głównych poziomach:
              </p>
              
              <ul className="space-y-6 mb-10">
                <li>
                  <strong className="font-bold text-foreground tracking-widest uppercase text-xs block mb-1">DECYZJE</strong>
                  Ustalamy, co naprawdę wymaga Twojej uwagi, co jest priorytetem i na czym warto skupić się właśnie teraz.
                </li>
                <li>
                  <strong className="font-bold text-foreground tracking-widest uppercase text-xs block mb-1">STRATEGIA</strong>
                  Przekładamy decyzje na konkretne działania w Twojej marce, ofercie, marketingu, komunikacji i sprzedaży.
                </li>
                <li>
                  <strong className="font-bold text-foreground tracking-widest uppercase text-xs block mb-1">WDROŻENIE</strong>
                  Pracujemy również nad tym, co pojawia się po drodze – oporem, obawami czy przekonaniami, które mogą zatrzymywać Cię przed działaniem.
                </li>
              </ul>

              <div className="mt-8 text-base md:text-lg">
                Dzięki temu nie kończymy na odpowiedzi „co zrobić?”. Wiesz również <span className="font-bold">„dlaczego właśnie to”</span>, a później pracujemy nad tym, żeby naprawdę wprowadzić to w życie.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
