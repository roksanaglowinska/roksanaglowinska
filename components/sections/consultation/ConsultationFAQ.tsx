import Link from "next/link";

export function ConsultationFAQ() {
  const faqs = [
    {
      question: "KTÓRĄ FORMĘ KONSULTACJI WYBRAĆ – STRATEGICZNĄ CZY Q&A?",
      answer: "Wybierz konsultację STRATEGICZNĄ, jeśli masz jeden konkretny temat, problem lub decyzję, którym chcesz przyjrzeć się głębiej. Przed spotkaniem analizuję Twoją sytuację i przesłane materiały, a podczas konsultacji szukamy rozwiązań dopasowanych do Twojego biznesu.\n\nWybierz Q&A, jeśli masz pytania z jednego lub różnych obszarów i chcesz wykorzystać 60 minut, żeby je ze mną skonsultować. Możesz przesłać je wcześniej albo zadawać na bieżąco podczas naszego spotkania."
    },
    {
      question: "NIE WIEM DOKŁADNIE, GDZIE LEŻY PROBLEM. CZY MOGĘ UMÓWIĆ KONSULTACJĘ?",
      answer: "Tak. Nie musisz przychodzić z gotową diagnozą. Jeśli wiesz, że coś nie działa tak, jak chcesz, ale trudno Ci określić dlaczego, opisz swoją sytuację w ankiecie. W takim przypadku najlepiej sprawdzi się konsultacja STRATEGICZNA – podczas spotkania przyjrzymy się temu, gdzie może leżeć problem i co warto zrobić dalej."
    },
    {
      question: "ILE PYTAŃ MOGĘ ZADAĆ PODCZAS Q&A?",
      answer: "Nie ustalam limitu pytań – przez 60 minut możesz pytać o wszystko, co dotyczy Twojego biznesu fotograficznego. Jeśli chcesz, możesz przygotować i przesłać pytania wcześniej, ale nie musisz. Możesz zadawać je na bieżąco, rozwijać kolejne wątki i dopytywać o to, co pojawi się podczas naszej rozmowy."
    },
    {
      question: "CZY MOGĘ PRZESŁAĆ CI WCZEŚNIEJ MOJĄ OFERTĘ, CENNIK, STRONĘ LUB INSTAGRAM?",
      answer: "Tak. Jeśli wybierasz konsultację STRATEGICZNĄ, możesz przesłać materiały związane z tematem naszego spotkania. Zapoznaję się z nimi wcześniej, dzięki czemu podczas konsultacji możemy od razu przejść do konkretów.\n\nW formule Q&A możesz przesłać materiały potrzebne do Twoich pytań lub pokazać je podczas spotkania. Pamiętaj tylko, że ta forma nie obejmuje wcześniejszej, pogłębionej analizy."
    },
    {
      question: "CZY MUSZĘ JAKOŚ PRZYGOTOWAĆ SIĘ DO KONSULTACJI?",
      answer: "Jeśli wybierasz konsultację STRATEGICZNĄ, przed spotkaniem opisujesz swoją sytuację, temat i przesyłasz potrzebne materiały – dzięki temu mogę wcześniej je przeanalizować.\n\nW przypadku Q&A nie musisz przygotowywać wszystkiego wcześniej. Możesz przesłać mi pytania przed spotkaniem, przyjść z własną listą albo po prostu zadawać je na bieżąco podczas naszej rozmowy."
    },
    {
      question: "CZY KONSULTACJA JEST NAGRYWANA?",
      answer: "Tak. Otrzymasz nagranie całego spotkania, dzięki czemu podczas konsultacji możesz skupić się na rozmowie zamiast na robieniu notatek, a później spokojnie wrócić do najważniejszych odpowiedzi, wniosków i rekomendacji."
    },
    {
      question: "CZY MOGĘ UMÓWIĆ SIĘ NA KOLEJNĄ KONSULTACJĘ?",
      answer: "Tak. Jeśli pojawi się kolejny temat, decyzja albo nowe pytania, możesz umówić następne spotkanie. Jeśli natomiast potrzebujesz regularnego wsparcia przez dłuższy czas, wdrażania, obserwowania efektów i ustalania kolejnych kroków – wtedy lepszą formą współpracy będzie mentoring 1:1."
    }
  ];

  return (
    <section id="faq" className="pt-24 pb-12 md:pt-32 md:pb-16 bg-neutral-50">
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
              className="group border-b border-neutral-200 transition-colors [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex items-center justify-between cursor-pointer py-6 font-heading font-bold text-lg md:text-xl text-foreground uppercase tracking-widest hover:text-primary transition-colors">
                {faq.question}
                <span className="transition group-open:rotate-180 text-black">
                  <svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <div className="pb-8 text-black font-light leading-relaxed text-sm whitespace-pre-line">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
