import Image from "next/image";
import { Check } from "lucide-react";

export function MentoringMap() {
  return (
    <section className="bg-neutral-50 py-24 md:py-32 border-b border-neutral-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Kolumna Lewa: Tekst */}
          <div className="flex flex-col items-start text-left order-2 lg:order-1">
            <div className="inline-block bg-primary text-black font-bold px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] mb-6">
              NARZĘDZIE WSPARCIA
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground mb-8 uppercase tracking-tighter leading-[1.1]">
              Twoja Mapa Rozwoju
            </h2>
            
            <div className="text-black text-sm md:text-base font-light leading-relaxed w-full">
              <p className="mb-6 text-base md:text-lg">
                Przez cały mentoring pracujesz z indywidualnym dokumentem online, który porządkuje Twój proces rozwoju w jednym miejscu.
              </p>
              
              <p className="font-medium text-foreground text-base md:text-lg mb-8">
                Znajdziesz w nim:
              </p>
              
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">najważniejsze ustalenia i decyzje z naszych spotkań,</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">konkretne zadania i działania do wdrożenia,</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">przestrzeń na Twoje refleksje i wnioski pomiędzy spotkaniami,</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">zapis postępów i zmian, dzięki któremu widzisz, jak rozwija się Twój biznes.</span>
                </li>
              </ul>

              <p className="mb-6 text-base md:text-lg">
                Nie gubisz wniosków w notatkach, wiadomościach czy kolejnych plikach. Widzisz cały proces - od tego, z czym zaczynałaś, przez podjęte decyzje i działania, aż po efekty i kolejne kroki.
              </p>

              <div className="font-medium text-foreground text-base md:text-lg">
                Po zakończeniu mentoringu Mapa zostaje z Tobą jako punkt odniesienia do dalszego rozwoju.
              </div>
            </div>
          </div>

          {/* Kolumna Prawa: Zdjęcie */}
          <div className="relative aspect-[4/5] w-full order-1 lg:order-2">
            <Image 
              src="/images/roksana-glowinska-mentoring.jpg" 
              alt="Mapa Rozwoju" 
              fill
              className="object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
