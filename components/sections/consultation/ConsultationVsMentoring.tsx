import Link from "next/link";
import { Check } from "lucide-react";

export function ConsultationVsMentoring({ bgClass = "bg-white" }: { bgClass?: string }) {
  return (
    <section className={`${bgClass} py-24 md:py-32 border-b border-neutral-100`}>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-foreground mb-6 uppercase tracking-tighter">
            NIE WIESZ, KTÓRĄ<br className="hidden md:block" /> FORMĘ WSPÓŁPRACY WYBRAĆ?
          </h2>
          <p className="text-base md:text-lg font-light text-neutral-800 leading-relaxed max-w-3xl mx-auto mt-6">
            Obie formy to indywidualna praca 1:1 nad Twoim biznesem fotograficznym. Różnica polega przede wszystkim na tym, czy potrzebujesz jednorazowej konsultacji, czy dłuższego procesu i wsparcia we wdrażaniu zmian.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Consultation Box (Primary on this page) */}
          <div className="bg-neutral-50 border border-neutral-200 p-10 flex flex-col items-start text-left group hover:border-black transition-colors duration-300">
            <h3 className="font-heading text-2xl font-bold uppercase tracking-widest text-foreground mb-4">
              KONSULTACJA 1:1
            </h3>
            <p className="font-bold text-black mb-4">
              Mam konkretny temat, pytania lub sytuację, z którą chcę ruszyć dalej.
            </p>
            <p className="text-sm font-light text-neutral-600 mb-10 leading-relaxed">
              Wybierz konsultację, jeśli potrzebujesz mojego wsparcia tu i teraz – chcesz coś przeanalizować, podjąć decyzję, znaleźć rozwiązanie albo skonsultować pytania, które chodzą Ci po głowie.
            </p>
            <ul className="space-y-4 mb-12 w-full">
              {[
                "JEDNORAZOWE SPOTKANIE",
                "KONKRETNY TEMAT LUB PYTANIA",
                "SKUPIENIE NA TYM, CZEGO POTRZEBUJESZ TERAZ",
                "IMPULS DO DALSZEGO DZIAŁANIA"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-4">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-foreground leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-auto w-full">
              <Link 
                href="/kontakt"
                className="block w-full py-4 font-bold uppercase tracking-widest text-xs transition-all duration-300 text-center border bg-black text-white border-black hover:bg-primary hover:text-black hover:border-primary shadow-sm hover:shadow-md"
              >
                UMAWIAM KONSULTACJĘ
              </Link>
            </div>
          </div>

          {/* Mentoring Box */}
          <div className="bg-neutral-50 border border-neutral-200 p-10 flex flex-col items-start text-left group hover:border-black transition-colors duration-300">
            <h3 className="font-heading text-2xl font-bold uppercase tracking-widest text-foreground mb-4">
              MENTORING 1:1
            </h3>
            <p className="font-bold text-black mb-4">
              Chcę mieć regularne wsparcie w rozwijaniu mojego biznesu.
            </p>
            <p className="text-sm font-light text-neutral-600 mb-10 leading-relaxed">
              Wybierz mentoring, jeśli nie szukasz jednorazowej odpowiedzi, ale chcesz mieć mnie przy sobie przez kolejne miesiące – wdrażać zmiany, obserwować ich efekty i reagować na to, co pojawia się po drodze.
            </p>
            <ul className="space-y-4 mb-12 w-full">
              {[
                "3, 6 LUB 12 MIESIĘCY",
                "REGULARNE WSPARCIE 1:1",
                "PRACA NAD BIZNESEM W DŁUŻSZEJ PERSPEKTYWIE",
                "WDRAŻANIE, OBSERWACJA I KOLEJNE KROKI"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-4">
                  <div className="w-5 h-5 rounded-full bg-neutral-100 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-neutral-500" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-foreground leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-auto w-full">
              <Link 
                href="/kontakt"
                className="block w-full py-4 font-bold uppercase tracking-widest text-xs transition-all duration-300 text-center border bg-white text-black border-neutral-200 hover:border-black hover:bg-black hover:text-white"
              >
                SPRAWDZAM MENTORING
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
