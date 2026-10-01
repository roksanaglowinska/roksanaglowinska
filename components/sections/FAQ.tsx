import Link from "next/link";

export function FAQ() {
  const faqs = [
    {
      question: "Czy mentoring jest dla mnie, jeśli dopiero zaczynam?",
      answer: "Mentoring najlepiej sprawdzi się, jeśli już działasz jako fotografka i masz pierwsze doświadczenia z klientami. Nie musisz mieć poukładanego biznesu ani pełnego kalendarza – właśnie nad tym możemy pracować.\n\nJeśli jesteś na samym początku i dopiero budujesz podstawy, lepszym pierwszym krokiem może być jeden z moich kursów lub platforma subskrypcyjna Jasny Kierunek Fotografki."
    },
    {
      question: "Co, jeśli nie wiem, nad czym dokładnie powinnyśmy pracować?",
      answer: "Nie musisz tego wiedzieć. Przed rozpoczęciem współpracy poznaję Twój biznes, obecną sytuację, cele i wyzwania. Wspólnie ustalamy, które obszary wymagają uwagi i od czego warto zacząć.\n\nUmiejętność spojrzenia na Twój biznes z zewnątrz i znalezienia tego, co naprawdę wymaga zmiany, jest właśnie częścią mojej pracy jako mentorki."
    },
    {
      question: "Nad jakimi tematami możemy pracować?",
      answer: "Zakres nie jest zamknięty. Możemy pracować m.in. nad ofertą, cenami, komunikacją, marką, marketingiem, sprzedażą, social mediami, pozyskiwaniem klientów, strategią czy mindsetem.\n\nNie realizujemy gotowej listy tematów – pracujemy nad tym, czego w danym momencie potrzebuje Twój biznes."
    },
    {
      question: "Czym mentoring różni się od kursu, platformy i pojedynczej konsultacji?",
      answer: "Każda z tych form odpowiada na inną potrzebę. Kurs daje Ci wiedzę i pomoc w budowaniu narzędzi, platforma dodatkowo pomaga działać regularnie i utrzymać kierunek, a pojedyncza konsultacja służy rozwiązaniu konkretnego problemu, podjęciu konkretnej decyzji czy zadaniu dowolnych pytań o biznes.\n\nMentoring to proces. Przez kilka miesięcy pracujemy na Twoim biznesie, wdrażamy zmiany, obserwujemy ich efekty i podejmujemy kolejne decyzje. Nie rozwiązujemy jednego problemu – pracujemy nad rozwojem Twojego biznesu w czasie."
    },
    {
      question: "Który wariant wybrać – 3, 6 czy 12 miesięcy?",
      answer: "3 miesiące – jeśli chcesz skupić się na najważniejszych wyzwaniach, ustalić priorytety i wdrożyć konkretne zmiany.\n\n6 miesięcy – jeśli potrzebujesz większego procesu: wdrażania, obserwowania efektów, optymalizacji i pracy nad kolejnymi obszarami biznesu.\n\n12 miesięcy – jeśli chcesz mieć moje długofalowe wsparcie w rozwoju biznesu i podejmowaniu decyzji na różnych jego etapach – również wtedy, gdy pojawiają się nowe cele, wyzwania i możliwości.\n\nJeśli nie wiesz, który wariant będzie dla Ciebie odpowiedni, pomogę Ci wybrać go przed rozpoczęciem współpracy."
    },
    {
      question: "Czy mentoring zagwarantuje mi więcej klientów?",
      answer: "Nie mogę zagwarantować Ci konkretnej liczby klientów ani określonych zarobków. Efekty mentoringu zależą również od Twojego zaangażowania, konsekwencji i tego, jak wdrażasz wypracowane wspólnie rozwiązania.\n\nMoją rolą jest pomóc Ci znaleźć to, co dziś ogranicza rozwój Twojego biznesu, podejmować trafniejsze decyzje i wypracować działania, które mają prowadzić do większej liczby zapytań i sprzedaży. Twoją – wprowadzić je w życie."
    },
    {
      question: "Jak wygląda praca między spotkaniami?",
      answer: "Spotykamy się co 2 tygodnie, dzięki czemu pomiędzy rozmowami masz czas na działanie, wdrażanie zmian i obserwowanie efektów.\n\nWszystkie ustalenia, zadania, wnioski, refleksje i postępy zbieramy w Twojej Mapie Rozwoju, dzięki czemu cały proces masz w jednym miejscu."
    }
  ];

  return (
    <section id="faq" className="pt-24 pb-12 md:pt-32 md:pb-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-20 md:mb-28">
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-foreground mb-6 uppercase tracking-tighter">
            Często zadawane pytania
          </h2>
          <p className="text-base md:text-lg font-light text-neutral-800 leading-relaxed max-w-2xl mx-auto">
            Masz wątpliwości? Zobacz, o co najczęściej pytają inni fotografowie.
          </p>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <details 
              key={index} 
              className="group bg-white border-b border-neutral-200 transition-colors [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="list-none flex items-center justify-between cursor-pointer py-6 font-heading font-bold text-lg md:text-xl text-foreground uppercase tracking-widest hover:text-black transition-colors [&::-webkit-details-marker]:hidden">
                {faq.question}
                <span className="transition group-open:rotate-180 text-black">
                  <svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <div className="pb-8 text-black font-light leading-relaxed text-sm whitespace-pre-wrap">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
