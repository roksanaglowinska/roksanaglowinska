import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function ConsultationHero() {
  return (
    <section className="relative bg-white pt-28 pb-0 lg:pt-40 lg:pb-40 overflow-hidden border-b border-neutral-50 min-h-[90vh] flex flex-col lg:block">
      <div className="container mx-auto px-4 relative z-10 flex h-full items-center">
        <div className="w-full lg:w-[55%] flex flex-col items-start text-left lg:py-10">
          
          <div className="inline-block bg-primary text-black font-bold px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] mb-8">
            KONSULTACJA 1:1
          </div>
          
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] leading-[1.1] font-extrabold text-foreground mb-8 uppercase tracking-tighter relative z-10">
            TWOJA PRZESTRZEŃ NA BIZNESOWE <span className="relative inline-block"><span className="absolute top-[30%] -bottom-2 -inset-x-2 bg-primary/30 -z-10"></span>PYTANIA</span> I DECYZJE.
          </h1>
          
          <div className="font-sans text-base md:text-lg text-black max-w-xl mb-12 font-light leading-loose space-y-6">
            <p>
              Indywidualna konsultacja 1:1, podczas której korzystasz z mojego doświadczenia dokładnie tam, gdzie dziś go potrzebujesz.
            </p>
            <p>
              Możemy skupić się na jednym konkretnym temacie i przeanalizować go głębiej albo wykorzystać spotkanie w formule Q&A i przejść przez listę pytań dotyczących różnych obszarów Twojego biznesu.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 font-bold text-[10px] md:text-xs uppercase tracking-[0.15em] text-foreground mb-8">
            <span className="flex items-center gap-2"><span className="text-primary font-light text-lg leading-none">/</span> 60 MINUT</span>
            <span className="text-neutral-300 mx-1">•</span>
            <span className="flex items-center gap-2"><span className="text-primary font-light text-lg leading-none">/</span> STRATEGICZNA LUB Q&A</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a 
              href="#oferta" 
              className="inline-flex items-center justify-center gap-4 bg-transparent text-foreground border border-black px-10 py-5 font-bold text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 w-full sm:w-auto group"
            >
              UMÓW KONSULTACJĘ
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>
      </div>

      {/* Zdjęcie Hero (Prawa kolumna) */}
      <div className="w-full aspect-[3/4] lg:aspect-auto lg:h-full relative lg:absolute lg:top-0 lg:right-0 lg:w-[45%] mt-16 lg:mt-0 z-0 overflow-hidden">
        <Image 
          src="/images/roksana-glowinska-konsultacja.jpg" 
          alt="Konsultacja strategiczna i biznesowa dla fotografów - Roksana Głowińska" 
          fill
          priority
          quality={100}
          sizes="(max-width: 1024px) 100vw, 50vw"
          unoptimized={true}
          className="object-cover object-[70%_80%] scale-[1.25] origin-[70%_80%]"
        />
        {/* Delikatny gradient oddzielający tekst od zdjęcia na dużych ekranach */}
        <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-white via-transparent to-transparent hidden lg:block w-32 z-10"></div>
      </div>
    </section>
  );
}
