export function MentoringProcess() {
  const steps = [
    {
      num: "01",
      title: "DIAGNOZA",
      desc: "Przed rozpoczęciem współpracy wypełniasz ankietę. Poznaję Twój biznes, obecną sytuację, największe wyzwania, blokady i cele."
    },
    {
      num: "02",
      title: "DECYZJE",
      desc: "Wspólnie ustalamy, co naprawdę wymaga uwagi, co jest teraz priorytetem i nad czym będziemy pracować."
    },
    {
      num: "03",
      title: "WDROŻENIE",
      desc: "Między spotkaniami wprowadzasz ustalenia w życie, obserwujesz efekty i wracasz z konkretnymi doświadczeniami, pytaniami i wnioskami."
    },
    {
      num: "04",
      title: "ANALIZA I KOLEJNE KROKI",
      desc: "Sprawdzamy, co się wydarzyło, co działa, co wymaga zmiany i na tej podstawie podejmujemy kolejne decyzje."
    }
  ];

  return (
    <section className="bg-white py-24 md:py-32 border-b border-neutral-100">
      <div className="container mx-auto px-4 max-w-5xl">
        
        <div className="mb-20 text-center">
          <div className="inline-block bg-white text-black font-bold px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] mb-6 border border-neutral-200">
            MENTORING 1:1
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground uppercase tracking-tighter mb-8 relative z-10">
            Jak wygląda <span className="relative inline-block"><span className="absolute top-[30%] -bottom-2 -inset-x-2 bg-primary/30 -z-10"></span>proces</span>
          </h2>
          
          <div className="font-sans text-base md:text-lg text-black font-light leading-loose space-y-6 max-w-2xl mx-auto">
            <p>
              Możesz wybrać <span className="font-bold">3, 6 lub 12 miesięcy</span> współpracy. Spotykamy się co 2 tygodnie i pracujemy nad tym, czego Twój biznes potrzebuje właśnie teraz. <span className="font-bold">Bez sztywnego programu</span> – z konkretnymi decyzjami, wdrażaniem i analizą efektów.
            </p>
          </div>
        </div>

        <div className="relative">
          {/* Linia łącząca na desktopie */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-neutral-200 -tranneutral-x-1/2"></div>
          
          <div className="space-y-16 md:space-y-0">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative flex flex-col md:flex-row items-center w-full group">
                  
                  {/* Lewa strona tekstu (lub pusta) */}
                  <div className={`w-full md:w-1/2 flex ${isEven ? 'md:justify-end md:pr-16 md:text-right' : 'md:justify-start md:order-3 md:pl-16'}`}>
                    <div className="bg-neutral-50 p-8 md:p-10 border border-neutral-200 hover:border-black transition-colors duration-300 w-full max-w-md shadow-sm">
                      <h3 className="font-heading text-2xl font-bold uppercase tracking-widest text-foreground mb-4">
                        {step.title}
                      </h3>
                      <p className="font-sans text-sm md:text-base text-black font-light leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Kółko na środku na desktopie */}
                  <div className="hidden md:flex absolute left-1/2 -tranneutral-x-1/2 w-12 h-12 bg-white border-2 border-primary rounded-full items-center justify-center z-10 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <span className="font-heading text-xs font-bold">{step.num}</span>
                  </div>

                  {/* Prawa strona pusta, żeby utrzymać layout flex na desktopie */}
                  <div className={`hidden md:block w-1/2 ${isEven ? 'order-3' : 'order-1'}`}></div>
                  
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-32 max-w-4xl mx-auto px-4 text-center mb-12">
          <p className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground uppercase tracking-tighter leading-[1.1]">
            ZAMIAST GOTOWEGO SCHEMATU – PROCES DOPASOWANY DO <span className="italic text-primary pr-2">CIEBIE.</span>
          </p>
        </div>

      </div>
    </section>
  );
}
