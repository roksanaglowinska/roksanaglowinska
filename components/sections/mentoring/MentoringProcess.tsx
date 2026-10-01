export function MentoringProcess() {
  const steps = [
    {
      title: "Audyt i Diagnoza",
      description: "Zaczynamy od dokładnego prześwietlenia Twojego biznesu. Szukamy wąskich gardeł, problemów z wyceną i miejsc, w których tracisz pieniądze lub energię."
    },
    {
      title: "Strategia Marki",
      description: "Budujemy Twoją unikalną propozycję wartości. Przestaniesz być 'kolejnym fotografem', a staniesz się marką, do której klienci sami chcą wracać."
    },
    {
      title: "Marketing i Sprzedaż",
      description: "Układamy proces pozyskiwania klientów i sprzedaż bez wciskania na siłę. Uczymy się mówić o pieniądzach i wartościach z pełną pewnością siebie."
    },
    {
      title: "Wdrożenie i Skalowanie",
      description: "Wcielasz plan w życie przy moim pełnym wsparciu. Monitorujemy wyniki, wprowadzamy korekty i cieszymy się z pierwszych dużych sukcesów."
    }
  ];

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-foreground mb-6 uppercase tracking-tighter">
            Jak wygląda nasza praca?
          </h2>
          <p className="text-sm font-light text-black uppercase tracking-widest leading-relaxed">
            Przeprowadzę Cię przez 4 kluczowe filary, dzięki którym Twój biznes fotograficzny zacznie wreszcie pracować na Ciebie.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex-none">
                <span className="font-heading font-extrabold text-5xl text-neutral-200">
                  0{index + 1}
                </span>
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold mb-3 uppercase tracking-widest text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm font-light text-black leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
