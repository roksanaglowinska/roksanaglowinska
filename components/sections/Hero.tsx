import { ArrowRight, ArrowDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative bg-white pt-28 pb-0 lg:pt-40 lg:pb-40 overflow-hidden border-b border-neutral-50 flex flex-col lg:block lg:min-h-[90vh]">
      <div className="container mx-auto px-4 relative z-10 flex h-full items-center">
        <div className="w-full lg:w-[50%] flex flex-col items-start text-left lg:py-10">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] leading-[1.1] font-extrabold text-foreground mb-8 uppercase tracking-tighter z-10 relative">
            TWÓJ KIERUNEK.<br />
            <span className="relative inline-block">
              <span className="absolute top-[30%] -bottom-2 -inset-x-2 bg-primary/30 -z-10"></span>
              TWOJA MARKA.
            </span><br />
            PEWNOŚĆ, Z<br />
            KTÓRĄ DZIAŁASZ.
          </h1>
          <p className="font-sans text-base md:text-lg text-black max-w-xl mb-8 leading-relaxed font-light">
            Pomagam fotografkom rozwijać biznes z większą klarownością, pewnością i spokojem. Porządkujemy to, co dziś nie działa – od mindsetu, przez markę i ofertę, po marketing, sprzedaż i strategię. Bez sztywnych schematów i przypadkowych działań. Z jasnym kierunkiem, który jest naprawdę Twój.
          </p>

          <div>
            <a 
              href="#problemy"
              className="inline-flex items-center justify-center gap-4 bg-transparent text-foreground border border-black px-8 py-4 font-bold text-[10px] sm:text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 group w-fit"
            >
              TO CO, ZACZYNAMY?
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      <div className="w-full aspect-[3/4] lg:aspect-auto lg:h-full relative lg:absolute lg:top-0 lg:right-0 lg:w-[45%] mt-16 lg:mt-0 z-0">
        <Image 
          src="/images/roksana-glowinska-hero.jpg" 
          alt="Roksana Głowińska - Mentorka i edukatorka fotografów z Rzeszowa" 
          fill
          priority
          quality={100}
          unoptimized={true}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-top lg:object-left"
        />
        {/* Delikatny gradient oddzielający tekst od zdjęcia na dużych ekranach */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent hidden lg:block w-32"></div>
      </div>
    </section>
  );
}
