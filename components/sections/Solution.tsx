import { CheckSquare } from "lucide-react";
import Image from "next/image";

export function Solution() {
  const benefits = [
    {
      title: "Strategia i jasny kierunek",
      description: "Zyskujesz jasny plan i wybierasz konkretne kroki, dzięki którym przestajesz kręcić się w kółko i zaczynasz podejmować świadome decyzje."
    },
    {
      title: "Marketing i oferta, która sprzedaje",
      description: "Układasz swoją ofertę, cennik i komunikację według sprawdzonej ramy — tak, aby klienci rozumieli wartość Twoich zdjęć i wiedzieli, jak się zapisać."
    },
    {
      title: "Odwaga i pewność siebie w działaniu",
      description: "Dostajesz wsparcie w przełamywaniu barier, które blokują Cię przed wyższymi cenami i pokazaniem się w sieci. Działasz bez obawy przed oceną."
    }
  ];

  return (
    <section id="oferta" className="bg-neutral-50 py-24 md:py-32 relative border-y border-neutral-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <div className="w-full lg:w-1/2 relative">
            <div className="relative aspect-[3/4] md:aspect-[4/5] max-w-md mx-auto lg:mx-0">
              <Image 
                src="/images/roksana-glowinska-kursy.jpg" 
                alt="Mentoring i kursy dla fotografów - Roksana Głowińska" 
                fill
                unoptimized
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="inline-block bg-primary text-black font-bold px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] mb-8">
              Jak pomagam
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground mb-8 leading-[1.1] uppercase tracking-tighter">
              ZAMIAST SCHEMATÓW — KIERUNEK I WSPARCIE
            </h2>
            <p className="text-base md:text-lg text-neutral-800 font-light mb-10 leading-relaxed">
              Nie dostaniesz ode mnie sztywnej instrukcji do przekopiowania. Niezależnie od formy współpracy, daję Ci sprawdzone ramy i wiedzę, z których wybierasz to, co najlepiej pasuje do Ciebie i Twojego biznesu.
            </p>

            <ul className="space-y-6 mb-12">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-4">
                  <CheckSquare className="w-5 h-5 text-black flex-shrink-0 mt-0.5 opacity-50" />
                  <div className="flex flex-col">
                    <span className="text-black font-bold text-sm uppercase tracking-widest mb-1">{benefit.title}</span>
                    <span className="text-black font-light text-sm leading-relaxed">{benefit.description}</span>
                  </div>
                </li>
              ))}
            </ul>

          </div>

        </div>
      </div>
    </section>
  );
}
