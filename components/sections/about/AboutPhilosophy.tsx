import React from "react";
import Image from "next/image";
import { Dna, Feather, Hexagon, Navigation, HandHelping } from "lucide-react";

export function AboutPhilosophy() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-16 lg:gap-24 items-center">
          
          <div className="w-full md:w-5/12 order-2 md:order-1">
            <div className="aspect-[3/4] w-full relative overflow-hidden bg-neutral-100 rounded-sm">
              <Image
                src="/images/roksana-glowinska-rzeszow-2.jpg"
                alt="Roksana Głowińska - portret"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>

          <div className="w-full md:w-7/12 order-1 md:order-2 space-y-8">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-tighter leading-tight text-foreground relative z-10">
              WIERZĘ W BIZNES BUDOWANY NA <span className="relative inline-block">
                <span className="absolute top-[30%] -bottom-1 -inset-x-2 bg-primary/30 -z-10"></span>
                WARTOŚCIACH
              </span>
            </h2>
            
            <div className="space-y-6 font-light text-base md:text-lg text-neutral-800">
              <p>
                Dla mnie oznacza to marketing oparty na autentyczności, zaufaniu i prawdziwej relacji z odbiorcami. Sprzedaż, która nie wymaga naciskania, udawania ani przekraczania własnych granic. Strategię, która porządkuje działania, ale pozostawia przestrzeń na życie, zmianę i własne tempo.
              </p>
              <p>
                Nie oddzielam rozwoju biznesu od rozwoju człowieka. Możesz mieć świetną ofertę i szczegółowy plan, ale jeśli nie widzisz wartości swojej pracy, boisz się pokazać albo nie ufasz własnym decyzjom – nawet najlepsza strategia może pozostać tylko na papierze.
              </p>
              <p>
                Dlatego w pracy z fotografami łączę biznes, marketing i sprzedaż z mindsetem, uważnością oraz budowaniem pewności siebie. Pomagam znaleźć jasny kierunek, ale nie wybieram go za Ciebie.
              </p>
              <p className="font-medium text-black">
                Bo nie chodzi o to, żeby robić wszystko tak jak inni. Chodzi o to, żeby świadomie stworzyć biznes, który naprawdę pasuje do Ciebie.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
