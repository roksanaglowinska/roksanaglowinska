import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function MentoringHero() {
  return (
    <section className="relative bg-white pt-28 pb-0 lg:pt-40 lg:pb-40 overflow-hidden border-b border-neutral-50 flex flex-col lg:block lg:min-h-[90vh]">
      <div className="container mx-auto px-4 relative z-10 flex h-full items-center">
        <div className="w-full lg:w-[50%] flex flex-col items-start text-left lg:py-10">
          <div className="inline-block bg-primary text-black font-bold px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] mb-6">
            MENTORING 1:1
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] leading-[1.1] font-extrabold text-foreground mb-8 uppercase tracking-tighter z-10 relative">
            TWÓJ BIZNES. <span className="relative inline-block"><span className="absolute top-[30%] -bottom-2 -inset-x-2 bg-primary/30 -z-10"></span>WSPÓLNY</span> PROCES. MOJE WSPARCIE.
          </h1>
          <p className="font-sans text-base md:text-lg text-black max-w-xl mb-12 leading-relaxed font-light">
            Indywidualny proces 1:1, w którym pracujemy nad tym, czego Twój biznes potrzebuje właśnie teraz – od oferty i komunikacji po marketing, sprzedaż czy social media. Wspólnie znajdujemy to, co wymaga zmiany, podejmujemy decyzje, a później wdrażasz je z moim wsparciem.
          </p>

          <div className="flex flex-wrap items-center gap-4 font-bold text-[10px] md:text-xs uppercase tracking-[0.15em] text-foreground mb-8">
            <span className="flex items-center gap-2"><span className="text-primary font-light text-lg leading-none">/</span> 3 MIESIĄCE / 6 SPOTKAŃ</span>
            <span className="text-neutral-300 mx-1">•</span>
            <span className="flex items-center gap-2"><span className="text-primary font-light text-lg leading-none">/</span> 6 MIESIĘCY / 12 SPOTKAŃ</span>
          </div>

          <a 
            href="#cennik" 
            className="inline-flex items-center justify-center gap-4 bg-transparent text-foreground border border-black px-10 py-5 font-bold text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 w-auto"
          >
            SPRAWDŹ WARIANTY MENTORINGU
            <ArrowRight className="w-4 h-4 group-hover:tranneutral-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Zdjęcie Hero (Prawa kolumna) */}
      <div className="w-full aspect-[2/3] lg:aspect-auto lg:h-full relative lg:absolute lg:top-0 lg:right-0 lg:w-[45%] mt-16 lg:mt-0 z-0 overflow-hidden">
        <Image 
          src="/images/roksana-glowinska-mentoring.jpg" 
          alt="Roksana Głowińska - Mentoring 1:1" 
          fill
          priority
          quality={100}
          unoptimized={true}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-center lg:object-left scale-100 lg:scale-[1.08] lg:origin-left"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent hidden lg:block w-32"></div>
      </div>
    </section>
  );
}
