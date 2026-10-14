import { Clock, Mail, ClipboardCheck, AlertCircle, Users, ShieldCheck } from "lucide-react";

export function FreeConsultationImportantInfo() {
  const infoCards = [
    {
      icon: Clock,
      title: "Czas i format spotkania",
      text: "Spotkanie trwa około 15–25 minut i odbywa się online w wygodnej formie wideo."
    },
    {
      icon: Mail,
      title: "Link do rozmowy i ankieta",
      text: "Po zapisaniu się natychmiast otrzymasz na swój e-mail link do pokoju wideo oraz krótką ankietę wstępną."
    },
    {
      icon: ClipboardCheck,
      title: "Obowiązkowa ankieta",
      text: "Wypełnienie ankiety jest obowiązkowe — dzięki Twoim odpowiedziom mogę przygotować się do rozmowy i nie marnować ani minuty."
    },
    {
      icon: AlertCircle,
      title: "Zasada anulowania",
      text: "Jeśli ankieta nie zostanie wypełniona przed terminem, rezerwacja może zostać anulowana na rzecz innej osoby."
    },
    {
      icon: ShieldCheck,
      title: "Cel i charakter spotkania",
      text: "To nie jest mini-szkolenie ani pełna strategia za darmo. To wstępne spotkanie, które pozwala nam sprawdzić, gdzie jesteś teraz i czy dalsza współpraca będzie dla Ciebie dobrym krokiem."
    },
    {
      icon: Users,
      title: "Ograniczona liczba miejsc",
      text: "Liczba bezpłatnych miejsc w miesiącu jest limitowana. Zarezerwuj termin tylko wtedy, gdy naprawdę chcesz działać."
    }
  ];

  return (
    <section className="bg-neutral-50 py-24 md:py-32 border-b border-neutral-200">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Nagłówek */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-block bg-primary text-black font-bold px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] mb-4">
            PRZEBIEG I REZERWACJA
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-foreground uppercase tracking-tighter leading-tight">
            WAŻNE <span className="relative inline-block"><span className="absolute top-[35%] -bottom-2 -inset-x-2 bg-primary/30 -z-10"></span>INFORMACJE:</span>
          </h2>
        </div>

        {/* Karty informacyjne */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {infoCards.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white border border-neutral-200 p-8 flex flex-col justify-between hover:border-black transition-all duration-300 shadow-sm"
              >
                <div>
                  <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center mb-6 text-black group-hover:bg-primary">
                    <Icon className="w-5 h-5 text-neutral-900" />
                  </div>
                  <h3 className="font-heading text-base font-bold uppercase tracking-tight text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm font-light text-neutral-600 leading-relaxed">
                    {item.text}
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
