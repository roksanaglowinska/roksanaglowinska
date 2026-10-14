import { Check } from "lucide-react";

export function FreeConsultationAgenda() {
  const steps = [
    {
      number: "01",
      title: "Krótko przeanalizuję Twoją sytuację",
      description: "Przyjrzymy się temu, gdzie dziś jesteś ze swoim biznesem fotograficznym i co sprawia Ci największą trudność."
    },
    {
      number: "02",
      title: "Wskażę najważniejsze obszary do uporządkowania",
      description: "Zidentyfikuję newralgiczne punkty, które mogą zatrzymywać pozyskiwanie klientów, odbierać spokój lub powodować chaos w działaniu."
    },
    {
      number: "03",
      title: "Podpowiem kierunek dalszej pracy",
      description: "Powiem Ci, na czym w pierwszej kolejności warto się skupić, aby nie tracić energii na chaotyczne ruchy, tylko działać z jasnym priorytetem."
    },
    {
      number: "04",
      title: "Sprawdzimy, czy i jak mogę Ci pomóc",
      description: "Wspólnie zweryfikujemy, czy dalsza współpraca (np. mentoring 1:1, konsultacja 1:1 lub inna przestrzeń) jest dla Ciebie właściwym krokiem."
    }
  ];

  return (
    <section id="w-trakcie-rozmowy" className="bg-neutral-50 py-24 md:py-32 border-b border-neutral-200">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Nagłówek sekcji */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-block bg-primary text-black font-bold px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] mb-4">
            AGENDA SPOTKANIA
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-foreground uppercase tracking-tighter leading-tight">
            W TRAKCIE <span className="relative inline-block"><span className="absolute top-[35%] -bottom-2 -inset-x-2 bg-primary/30 -z-10"></span>ROZMOWY:</span>
          </h2>
        </div>

        {/* Siatka 4 punktów */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {steps.map((step, index) => {
            return (
              <div 
                key={index}
                className="bg-white border border-neutral-200 p-8 md:p-10 hover:border-black transition-all duration-300 flex flex-col justify-between group shadow-[0_2px_10px_rgba(0,0,0,0.02)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-heading text-3xl md:text-4xl font-extrabold text-neutral-300 group-hover:text-black transition-colors">
                      {step.number}
                    </span>
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                      <Check className="w-8 h-8 text-emerald-600 stroke-[2.5] transition-transform duration-300 group-hover:scale-110" />
                    </div>
                  </div>
                  <h3 className="font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="font-sans text-sm md:text-base font-light text-neutral-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
