import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function MentoringHero() {
  return (
    <section className="relative bg-white pt-28 pb-0 lg:pt-40 lg:pb-40 overflow-hidden border-b border-neutral-50 min-h-[90vh] flex flex-col lg:block">
      <div className="container mx-auto px-4 relative z-10 flex h-full items-center">
        <div className="w-full lg:w-[55%] flex flex-col items-start text-left lg:py-10">
          
          <div className="inline-block bg-primary text-black font-bold px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] mb-8">
            MENTORING 1:1
          </div>
          
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] leading-[1.1] font-extrabold text-foreground mb-8 uppercase tracking-tighter">
            TWÓJ BIZNES. WSPÓLNY PROCES. MOJE WSPARCIE.
          </h1>
          
          <div className="font-sans text-base md:text-lg text-black max-w-xl mb-12 font-light leading-loose space-y-6">
            <p>
              2-miesięczny proces 1:1, podczas którego przyglądamy się Twojej marce, ofercie, komunikacji, sprzedaży i temu, co dziś naprawdę blokuje Twój rozwój.
            </p>
            <p>
              Porządkujemy chaos, podejmujemy konkretne decyzje i tworzymy kierunek dopasowany do Ciebie i Twojego biznesu.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Link 
              href="#cennik" 
              className="inline-flex items-center justify-center gap-4 bg-transparent text-foreground border border-black px-10 py-5 font-bold text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 w-full sm:w-auto"
            >
              CHCĘ RUSZYĆ DO PRZODU
              <ArrowRight className="w-4 h-4" />
            </Link>
            
            <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 text-center sm:text-left">
              4 spotkania 1:1 • online • 2 miesiące • indywidualny proces
            </p>
          </div>

        </div>
      </div>

      {/* Zdjęcie Hero (Prawa kolumna) */}
      <div className="w-full aspect-[3/4] lg:aspect-auto lg:h-full relative lg:absolute lg:top-0 lg:right-0 lg:w-[45%] mt-16 lg:mt-0 z-0">
        <Image 
          src="/images/roksana-glowinska-mentoring-2.jpg" 
          alt="Roksana Głowińska - Mentoring 1:1 dla fotografów" 
          fill
          priority
          quality={100}
          unoptimized={true}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-center"
        />
        {/* Delikatny gradient oddzielający tekst od zdjęcia na dużych ekranach */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent hidden lg:block w-32"></div>
      </div>
    </section>
  );
}
