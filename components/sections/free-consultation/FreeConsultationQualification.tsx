import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";

export function FreeConsultationQualification() {
  const criteria = [
    {
      title: "Prowadzisz już działania fotograficzne",
      description: "Masz już pierwsze zlecenia lub aktywny profil i chcesz rozwijać swój biznes w sposób uporządkowany, dojrzały i bardziej świadomy."
    },
    {
      title: "Czujesz chaos i brak konsekwencji",
      description: "Trudno Ci utrzymać regularność w pozyskiwaniu klientów, brakuje Ci powtarzalnego systemu i chcesz skończyć z przypadkowymi wynikami."
    },
    {
      title: "Jesteś gotowa działać, a nie tylko pytać",
      description: "Nie szukasz kolejnej dawki przypadkowej wiedzy teoretycznej, ale realnego przełożenia wskazówek na wdrożenie i decyzje biznesowe."
    },
    {
      title: "Bierzesz pod uwagę inwestycję w swój rozwój",
      description: "Rozumiesz, że budowa marki fotograficznej wymaga zaangażowania — czasowego, energetycznego oraz finansowego."
    }
  ];

  return (
    <section className="bg-white py-24 md:py-32 border-b border-neutral-200">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Kolumna lewa: Zdjęcie */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative aspect-[2/3] overflow-hidden bg-neutral-100 shadow-sm">
              <Image 
                src="/images/roksana-glowinska-rzeszow.jpg"
                alt="Roksana Głowińska - mentoring i konsultacja dla fotografów"
                fill
                quality={90}
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Kolumna prawa: Kwalifikacja */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="inline-block bg-primary text-black font-bold px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] mb-4">
              DLA KOGO JEST TA ROZMOWA
            </div>
            
            <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-foreground uppercase tracking-tighter mb-10 leading-tight">
              UMÓW SIĘ, <span className="relative inline-block"><span className="absolute top-[35%] -bottom-2 -inset-x-2 bg-primary/30 -z-10"></span>JEŚLI:</span>
            </h2>

            <div className="space-y-6 mb-10">
              {criteria.map((item, index) => (
                <div 
                  key={index} 
                  className="p-6 bg-neutral-50 border border-neutral-200 hover:border-black transition-colors flex items-start gap-4"
                >
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-black stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-bold uppercase tracking-wide text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="font-sans text-sm font-light text-neutral-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#rezerwacja"
              className="inline-flex items-center gap-3 font-heading font-bold text-xs uppercase tracking-widest text-black hover:text-neutral-600 transition-colors group"
            >
              <span>Sprawdź dostępne terminy i zarezerwuj rozmowę</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}
