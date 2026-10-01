import { X } from "lucide-react";

export function ConsultationPainPoints() {
  const painPoints = [
    {
      title: "UTKNĘŁAŚ W KONKRETNYM MIEJSCU",
      description: "Wiesz, czego dotyczy problem – oferta, ceny, sprzedaż, komunikacja czy marketing – ale potrzebujesz spojrzenia z zewnątrz, żeby zobaczyć, co warto zmienić."
    },
    {
      title: "STOISZ PRZED DECYZJĄ",
      description: "Masz kilka pomysłów lub możliwych kierunków i chcesz spojrzeć na nie z biznesowej perspektywy, zanim zdecydujesz, co dalej."
    },
    {
      title: "MASZ PYTANIA I CHCESZ KONKRETNYCH ODPOWIEDZI",
      description: "Nie potrzebujesz analizować jednego obszaru przez całe spotkanie. Masz kilka, kilkanaście konkretnych pytań i chcesz wykorzystać 60 minut, żeby skonsultować je ze mną."
    }
  ];

  return (
    <section className="bg-neutral-50 py-24 md:py-32 border-b border-neutral-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground mb-8 uppercase tracking-tighter relative z-10">
            NIE ZAWSZE POTRZEBUJESZ DŁUGIEGO PROCESU. CZASEM POTRZEBUJESZ PO PROSTU <span className="relative inline-block"><span className="absolute top-[30%] -bottom-2 -inset-x-2 bg-primary/30 -z-10"></span>DOBREJ</span> KONSULTACJI.
          </h2>
          <p className="text-base md:text-lg font-light text-black leading-relaxed">
            Masz problem, który chcesz przeanalizować. Stoisz przed decyzją. Chcesz skonsultować pomysł. A&nbsp;może w ostatnich miesiącach nazbierała Ci się cała lista pytań i potrzebujesz kogoś, z kim możesz je konkretnie przegadać.
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
