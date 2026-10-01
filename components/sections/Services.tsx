import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Services() {
  return (
    <section id="uslugi" className="bg-white py-24 md:py-32 relative border-b border-neutral-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-24">
          <div className="inline-block bg-primary text-black font-bold px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] mb-6">
            Twój Kolejny Krok
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground uppercase tracking-tighter mb-6">
            Jak możemy współpracować
          </h2>
          <p className="text-base md:text-lg text-black font-light leading-relaxed max-w-3xl">
            Nie dostaniesz ode mnie sztywnej instrukcji do przekopiowania. Niezależnie od formy współpracy, daję Ci sprawdzone ramy i wiedzę, z których wybierasz to, co najlepiej pasuje do Ciebie i Twojego biznesu.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Card 1 */}
          <div className="p-8 md:p-10 flex flex-col bg-white border border-neutral-200 hover:border-black transition-all duration-300">
            <h3 className="font-heading text-2xl font-bold mb-4 uppercase tracking-widest">Współpraca Indywidualna</h3>
            <p className="text-black text-sm font-light leading-relaxed mb-8 flex-grow">
              Dwie formy współpracy 1:1 – w zależności od tego, jakiego wsparcia dziś potrzebujesz. Konsultacja, gdy chcesz skupić się na konkretnym temacie, znaleźć rozwiązanie lub po prostu przyjść z listą pytań. Mentoring, gdy potrzebujesz dłuższego procesu, regularnego wsparcia i pracy nad swoim biznesem jako całością.
            </p>
            <div className="flex flex-col gap-4 mt-auto">
              <Link href="/mentoring" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors">
                ZOBACZ MENTORING 1:1 <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/konsultacja" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors">
                ZOBACZ KONSULTACJĘ 1:1 <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-8 md:p-10 flex flex-col bg-neutral-50 border border-neutral-200 hover:border-black transition-all duration-300">
            <h3 className="font-heading text-2xl font-bold mb-4 uppercase tracking-widest">Platforma Subskrypcyjna <span className="block text-primary text-sm mt-1">(Wkrótce)</span></h3>
            <p className="text-black text-sm font-light leading-relaxed mb-8 flex-grow">
              Przestrzeń rozwoju dla fotografek z moim prowadzeniem. Co miesiąc pracujemy nad jednym konkretnym obszarem biznesowym — otrzymujesz jasny kierunek rozwoju, gotowy plan działania, moje prowadzenie, wyzwanie miesiąca, spotkania na żywo, wsparcie społeczności oraz dostęp do biblioteki wiedzy.
            </p>
            <a href="https://www.jasnykierunekfotografki.pl" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors">
              DOWIEDZ SIĘ WIĘCEJ <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Card 3 */}
          <div className="p-8 md:p-10 flex flex-col bg-white border border-neutral-200 hover:border-black transition-all duration-300">
            <h3 className="font-heading text-2xl font-bold mb-4 uppercase tracking-widest">KURSY ONLINE <br/>I E-BOOKI</h3>
            <p className="text-black text-sm font-light leading-relaxed mb-8 flex-grow">
              Gotowe programy przeznaczone do samodzielnej pracy w Twoim własnym tempie. Znajdziesz tu materiały, które pomagają poukładać trwałe fundamenty marketingu, komunikacji i sprzedaży bez umawiania się na spotkania, jak i te skrojone pod konkretne, pojedyncze wyzwania w biznesie.
            </p>
            <Link href="/kursy" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors">
              POZNAJ PRODUKTY <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
