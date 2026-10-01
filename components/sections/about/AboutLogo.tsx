import React from "react";
import Image from "next/image";

export function AboutLogo() {
  return (
    <section className="bg-white pt-12 pb-24 md:pt-16 md:pb-32 border-b border-neutral-100">
      <div className="container mx-auto px-4 max-w-6xl">
        
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="inline-block bg-white text-black font-bold px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] mb-6 border border-neutral-200">
            ZNACZENIE MOJEGO ZNAKU
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-foreground uppercase tracking-tighter leading-tight relative z-10">
            KIERUNEK <span className="text-primary/60 font-light">/</span> PRZEŁOM <span className="text-primary/60 font-light">/</span> ISKRA
          </h2>
          <p className="mt-8 text-lg text-neutral-800 font-light leading-relaxed max-w-2xl mx-auto">
            Niewielka iskra pomiędzy moimi inicjałami symbolizuje kierunek i&nbsp;przełom – moment, w&nbsp;którym pojawia się nowa perspektywa, decyzja i&nbsp;gotowość, żeby zrobić kolejny krok. To&nbsp;mały detal, który mieści w&nbsp;sobie sens całej mojej marki.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-start gap-16 md:gap-24">
          
          {/* Lewa kolumna - Logo */}
          <div className="w-full md:w-1/2 flex justify-center mt-0 md:-mt-8">
            <div className="relative w-full max-w-[400px] aspect-square">
              <Image 
                src="/roksana-glowinska-logo.png" 
                alt="Roksana Głowińska Logo - znaczenie" 
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Prawa kolumna - Znaczenie */}
          <div className="w-full md:w-1/2 space-y-12">
            
            <div className="flex items-start gap-6 group">
              <div className="text-4xl md:text-5xl font-light text-primary/80 group-hover:text-black transition-colors -mt-2">
                /
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold uppercase tracking-widest text-foreground mb-2">
                  kierunek
                </h3>
                <p className="font-light text-neutral-700 leading-relaxed">
                  ruch do przodu i świadomy wybór drogi
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="text-4xl md:text-5xl font-light text-primary/80 group-hover:text-black transition-colors -mt-2">
                /
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold uppercase tracking-widest text-foreground mb-2">
                  przełom
                </h3>
                <p className="font-light text-neutral-700 leading-relaxed">
                  moment zmiany i początek nowego etapu
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="text-4xl md:text-5xl font-light text-primary/80 group-hover:text-black transition-colors -mt-2">
                /
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold uppercase tracking-widest text-foreground mb-2">
                  iskra
                </h3>
                <p className="font-light text-neutral-700 leading-relaxed">
                  mały impuls, od którego może zacząć się coś dużego
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-neutral-100">
              <p className="font-medium text-black text-lg">
                Bo czasem naprawdę niewiele trzeba, żeby ruszyć w nowym kierunku.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
