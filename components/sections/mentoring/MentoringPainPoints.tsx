import { X } from "lucide-react";

export function MentoringPainPoints() {
  const painPoints = [
    {
      title: "DZIAŁANIA NIE PRZEKŁADAJĄ SIĘ NA KLIENTÓW",
      description: "Publikujesz, promujesz się, próbujesz różnych sposobów, ale zapytania nadal pojawiają się nieregularnie, a klientów jest za mało."
    },
    {
      title: "WIESZ DUŻO, ALE BRAKUJE CI PLANU",
      description: "Masz wiedzę i pomysły, ale trudno zdecydować, co zrobić najpierw i co naprawdę przyniesie efekt."
    },
    {
      title: "NIE WIESZ, CO BLOKUJE TWÓJ BIZNES",
      description: "Oferta? Ceny? Komunikacja? Marketing? Trudno spojrzeć z dystansu i zobaczyć, co naprawdę wymaga zmiany."
    }
  ];

  return (
    <section className="bg-neutral-50 py-24 md:py-32 border-b border-neutral-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground mb-8 uppercase tracking-tighter relative z-10">
            ROBISZ DUŻO. TYLKO CZY TO, CO NAPRAWDĘ MA <span className="relative inline-block"><span className="absolute top-[30%] -bottom-2 -inset-x-2 bg-primary/30 -z-10"></span>ZNACZENIE?</span>
          </h2>
          <p className="text-base md:text-lg font-light text-black leading-relaxed">
            Publikujesz, poprawiasz ofertę, próbujesz reklam, rolek i kolejnych sposobów na dotarcie do klientów, a kalendarz nadal jest pusty. I nie wiesz, gdzie naprawdę leży problem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <div 
              key={index} 
              className="group bg-white p-10 border border-neutral-200 flex flex-col items-center text-center hover:border-black transition-colors duration-300"
            >
              <div className="mb-6 flex-shrink-0 w-12 h-12 flex items-center justify-center">
                <X className="w-8 h-8 text-red-500 transition-all duration-300" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-4 uppercase tracking-widest text-foreground">
                {point.title}
              </h3>
              <p className="text-sm font-light text-black leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
