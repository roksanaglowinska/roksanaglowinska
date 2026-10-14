import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function FreeConsultationHero() {
  return (
    <section className="relative bg-white pt-24 pb-16 lg:pt-36 lg:pb-32 overflow-hidden border-b border-neutral-100 min-h-[85vh] flex flex-col justify-center">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Kolumna lewa: Treść */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="inline-block bg-primary text-black font-bold px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] mb-8">
              BEZPŁATNA KONSULTACJA
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.75rem] leading-[1.1] font-extrabold text-foreground mb-8 uppercase tracking-tighter relative z-10">
              SPRAWDŹ, CO DZIŚ <span className="relative inline-block"><span className="absolute top-[35%] -bottom-2 -inset-x-2 bg-primary/30 -z-10"></span>BLOKUJE ROZWÓJ</span> TWOJEGO BIZNESU FOTOGRAFICZNEGO.
            </h1>

            <div className="font-sans text-base md:text-lg text-neutral-800 max-w-2xl mb-10 font-light leading-relaxed space-y-5">
              <p>
                Fotografko, jeśli czujesz, że robisz dużo, ale nadal brakuje Ci regularnych zapytań, spójnej strategii albo jasnego kierunku — ta rozmowa jest dla Ciebie.
              </p>
              <p>
                Podczas krótkiej konsultacji przyjrzę się Twojej obecnej sytuacji i pomogę Ci zobaczyć, co może dziś najbardziej zatrzymywać rozwój Twojego biznesu fotograficznego.
              </p>
            </div>

            {/* Kluczowe parametry spotkania */}
            <div className="flex flex-wrap items-center gap-4 font-bold text-[10px] md:text-xs uppercase tracking-[0.15em] text-foreground mb-10">
              <span className="flex items-center gap-2">
                <span className="text-primary font-light text-lg leading-none">/</span> 15–25 MINUT
              </span>
              <span className="text-neutral-300 mx-1">•</span>
              <span className="flex items-center gap-2">
                <span className="text-primary font-light text-lg leading-none">/</span> SPOTKANIE ONLINE 1:1
              </span>
              <span className="text-neutral-300 mx-1">•</span>
              <span className="flex items-center gap-2">
                <span className="text-primary font-light text-lg leading-none">/</span> BEZPŁATNIE
              </span>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href="#rezerwacja"
                className="inline-flex items-center justify-center gap-3 bg-black text-white px-10 py-5 font-bold text-xs uppercase tracking-widest hover:bg-neutral-800 transition-all duration-300 shadow-sm group"
              >
                <span>ZAREZERWUJ TERMIN</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#w-trakcie-rozmowy"
                className="inline-flex items-center justify-center gap-2 bg-transparent text-foreground border border-neutral-300 px-8 py-5 font-bold text-xs uppercase tracking-widest hover:border-black transition-colors"
              >
                <span>DOWIEDZ SIĘ WIĘCEJ</span>
              </a>
            </div>
          </div>

          {/* Kolumna prawa: Zdjęcie */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto w-full max-w-md lg:max-w-none aspect-[3/4] overflow-hidden bg-neutral-100 shadow-sm">
              <Image
                src="/images/roksana-glowinska-rzeszow-kontakt.jpg"
                alt="Roksana Głowińska - bezpłatna konsultacja dla fotografów"
                fill
                priority
                quality={95}
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
