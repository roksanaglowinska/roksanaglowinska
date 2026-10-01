import React from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

export function AboutHero() {
  return (
    <section className="relative bg-white pt-28 pb-0 lg:pt-40 lg:pb-24 overflow-hidden min-h-[90vh] flex flex-col lg:block border-b border-neutral-50">
      <div className="container mx-auto px-4 relative z-10 flex h-full items-center">
        {/* Text Content */}
        <div className="w-full lg:w-[55%] flex flex-col items-start text-left space-y-8 lg:py-10">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground uppercase tracking-tighter leading-[1.1] z-10 relative">
            <span className="block">MOJA DROGA</span>
            <span className="block mb-2">ZACZĘŁA SIĘ OD PASJI.</span>
            <span className="block">
              KIERUNEK{" "}
              <span className="relative inline-block">
                <span className="absolute top-[30%] -bottom-1 -inset-x-2 bg-primary/30 -z-10"></span>
                ODKRYWAŁAM
              </span>{" "}
              PO DRODZE.
            </span>
          </h1>
          
          <div className="space-y-6 text-base md:text-lg text-black font-light max-w-xl">
            <p className="font-medium">
              Hello, jestem Roksana Głowińska – fotografka, mentorka i trenerka fotografów, przedsiębiorczyni oraz twórczyni marek LIRYKA Naturalna Fotografia, LIRYKA studio i Your Light.
            </p>
            <p>
              Łączę doświadczenie zdobyte podczas ponad 1000 sesji zdjęciowych z marketingiem, strategią, sprzedażą i rozwojem osobistym. Pomagam fotografom budować mocne marki i dochodowe biznesy na własnych zasadach – z większą pewnością siebie, spokojem i jasnym kierunkiem.
            </p>
          </div>

          <div className="pt-4">
            <a 
              href="#droga"
              className="inline-flex items-center justify-center gap-4 bg-transparent text-foreground border border-black px-8 py-4 font-bold text-[10px] sm:text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 group"
            >
              Zobacz moją drogę
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-full aspect-[2/3] lg:aspect-auto lg:h-full relative lg:absolute lg:top-0 lg:right-0 lg:w-[45%] mt-16 lg:mt-0 z-0 overflow-hidden">
        <Image
          src="/images/roksana-glowinska-poznajmy-sie-nowe.jpg"
          alt="O mnie - Roksana Głowińska, biznes i fotografia Rzeszów"
          fill
          quality={100}
          unoptimized={true}
          className="object-cover object-center lg:object-center"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
        {/* Delikatny gradient oddzielający tekst od zdjęcia na dużych ekranach */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent hidden lg:block w-32"></div>
      </div>
    </section>
  );
}
