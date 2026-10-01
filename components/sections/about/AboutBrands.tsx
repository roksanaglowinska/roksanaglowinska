import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function AboutBrands() {
  return (
    <section className="bg-white text-black py-24 md:py-32 border-b border-neutral-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16 md:mb-24">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-tighter mb-8 leading-tight relative z-10">
            TRZY MARKI. RÓŻNE DROGI. WSPÓLNY <span className="relative inline-block"><span className="absolute top-[30%] -bottom-2 -inset-x-2 bg-primary/30 -z-10"></span>KIERUNEK</span>.
          </h2>
          <p className="font-light text-base md:text-lg text-neutral-800">
            Moja działalność od dawna wykracza poza realizowanie sesji zdjęciowych. Każdy z tych projektów jest inny, ale wszystkie łączy człowiek, emocje i chęć wnoszenia realnej wartości do jego życia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-8">
          {/* Roksana Głowińska */}
          <div className="group">
            <div className="aspect-[4/5] relative overflow-hidden bg-neutral-100 rounded-sm mb-6">
              <Image
                src="/images/roksana-glowinska-rzeszow-7.jpg"
                alt="Edukacja dla fotografów - Roksana Głowińska"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <h3 className="font-heading text-xl font-bold uppercase tracking-tight mb-4">Roksana Głowińska</h3>
            <p className="font-light text-sm text-neutral-600 mb-6 min-h-[100px]">
              Moja marka osobista i przestrzeń edukacyjna dla fotografów. Tworzę w niej kursy, mentoringi, warsztaty i materiały, które pomagają rozwijać mocne marki oraz świadomie prowadzić dochodowe biznesy fotograficzne.
            </p>
            <Link href="/kontakt" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#729F89] hover:text-black transition-colors">
              Skontaktuj się ze mną <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Your Light */}
          <div className="group">
            <div className="aspect-[4/5] relative overflow-hidden bg-neutral-100 rounded-sm mb-6">
              <Image
                src="/images/roksana-glowinska-bizuteria-your-light.jpg"
                alt="Biżuteria Your Light"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <h3 className="font-heading text-xl font-bold uppercase tracking-tight mb-4">Your Light</h3>
            <p className="font-light text-sm text-neutral-600 mb-6 min-h-[100px]">
              Marka biżuterii stworzona z myślą o fotografkach, twórczyniach i kreatywnych kobietach. Łączę w niej symbolikę, kamienie naturalne i osobiste znaczenia, aby powstawało coś więcej niż ozdoba – małe przypomnienie o własnej mocy, odwadze i kierunku.
            </p>
            <Link href="https://liryka.net/bizuteria/" target="_blank" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#729F89] hover:text-black transition-colors">
              Poznaj Your Light <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Liryka Studio */}
          <div className="group">
            <div className="aspect-[4/5] relative overflow-hidden bg-neutral-100 rounded-sm mb-6">
              <Image
                src="/images/roksana-glowinska-liryka-studio-rzeszow.jpg"
                alt="Liryka Studio - przestrzeń do wynajęcia"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <h3 className="font-heading text-xl font-bold uppercase tracking-tight mb-4">Liryka Studio</h3>
            <p className="font-light text-sm text-neutral-600 mb-6 min-h-[100px]">
              Blisko 100 metrów jasnej przestrzeni fotograficzno-filmowej w Rzeszowie, stworzonej dla fotografów, twórców i marek. To nie tylko profesjonalne miejsce do pracy, ale także swobodna, inspirująca atmosfera i społeczność osób, które łączy fotografia.
            </p>
            <Link href="https://liryka.net/studio-fotograficzne/" target="_blank" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#729F89] hover:text-black transition-colors">
              Poznaj Liryka Studio <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>



      </div>
    </section>
  );
}
