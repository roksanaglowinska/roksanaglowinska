import Link from "next/link";
import { Check } from "lucide-react";

export function ConsultationPricing() {
  const features = [
    "możliwość wyboru dogodnego terminu konsultacji",
    "wybór formy STRATEGIA lub Q&A",
    "ankieta przed spotkaniem",
    "moje przygotowanie do naszego spotkania",
    "przy formule STRATEGIA – wcześniejsza analiza tematu i przesłanych materiałów",
    "60 minut indywidualnej konsultacji 1:1 online",
    "nagranie całego spotkania"
  ];

  return (
    <section id="oferta" className="bg-neutral-50 py-24 md:py-32">
      <div className="container mx-auto px-4 max-w-5xl">
        
        <div className="bg-white border border-neutral-200 p-8 md:p-14 shadow-sm flex flex-col items-center text-center">
          <div className="inline-block bg-primary text-black font-bold px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] mb-6">
            KONSULTACJA 1:1
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6 uppercase tracking-tighter leading-tight max-w-4xl">
            TWOJE PYTANIA. TWÓJ BIZNES. 60 MINUT INDYWIDUALNEJ PRACY.
          </h2>
          <p className="font-sans text-base md:text-lg text-black font-light leading-relaxed mb-12 max-w-3xl">
            Dla Ciebie, jeśli potrzebujesz mojego spojrzenia na konkretny temat, decyzję lub pytania związane z prowadzeniem Twojego biznesu fotograficznego.
          </p>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 text-left border-t border-neutral-200 pt-12">
            
            <div className="flex flex-col justify-center md:pr-8">
              <div className="text-sm font-bold uppercase tracking-widest mb-8 text-foreground">
                W RAMACH KONSULTACJI:
              </div>
              <ul className="space-y-5">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="text-sm font-light leading-snug text-neutral-700">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-col items-center justify-center bg-neutral-50 p-10 border border-neutral-100 h-full">
              <div className="text-xs font-bold uppercase tracking-widest text-primary mb-4 bg-primary/10 px-3 py-1 rounded-sm">
                60 MINUT
              </div>
              <div className="text-5xl md:text-6xl font-extrabold font-heading tracking-tighter text-foreground mb-8">
                677 ZŁ
              </div>
              <Link 
                href="/kontakt"
                className="block w-full py-5 font-bold uppercase tracking-widest text-xs transition-all duration-300 text-center border bg-black text-white border-black hover:bg-primary hover:text-black hover:border-primary shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                UMAWIAM KONSULTACJĘ
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
