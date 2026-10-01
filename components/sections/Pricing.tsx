import { Check } from "lucide-react";

export function Pricing() {
  const plans = [
    {
      name: "Kurs Online",
      description: "Samodzielna nauka we własnym tempie.",
      price: "1490",
      isPopular: false,
      features: [
        "Ponad 40 lekcji wideo",
        "Gotowe szablony odpowiedzi do klientów",
        "Kalkulator wyceny sesji",
        "Dostęp na platformie przez 12 miesięcy",
        "Moduł o optymalizacji portfolio"
      ],
      ctaText: "Kup dostęp",
      ctaLink: "/kursy"
    },
    {
      name: "Mentoring 1:1",
      description: "Indywidualna praca nad Twoim biznesem.",
      price: "4500",
      isPopular: true,
      features: [
        "Wszystko to, co w Kursie Online",
        "3 miesiące ścisłej współpracy",
        "6 spotkań online (po 90 min)",
        "Audyt Twojego Instagrama i portfolio",
        "Bieżący kontakt przez WhatsApp",
        "Indywidualny plan działania na 6 miesięcy"
      ],
      ctaText: "Aplikuj o miejsce",
      ctaLink: "/mentoring"
    },
    {
      name: "Platforma Subskrypcyjna",
      description: "Ciągły rozwój i wsparcie społeczności.",
      price: "199",
      period: "/msc",
      isPopular: false,
      features: [
        "Dostęp do biblioteki szkoleń i webinarów",
        "Q&A ze mną raz w miesiącu",
        "Zamknięta grupa wsparcia na Discordzie",
        "Zniżki na nowe produkty szkoleniowe",
        "Wspólny networking z innymi fotografami"
      ],
      ctaText: "Dołącz do listy",
      ctaLink: "https://www.jasnykierunekfotografki.pl"
    }
  ];

  return (
    <section id="cennik" className="bg-white py-24 md:py-40 relative">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold mb-8 uppercase tracking-tighter text-foreground">
            Inwestycja w rozwój, <br className="hidden md:block" />która szybko się zwraca
          </h2>
          <p className="text-sm text-black uppercase tracking-widest font-light">
            Wybierz formę współpracy, która najlepiej odpowiada Twoim obecnym potrzebom biznesowym i budżetowi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`p-10 flex flex-col transition-all duration-300 border ${plan.isPopular ? 'border-foreground shadow-sm relative transform md:-tranneutral-y-4 bg-neutral-50' : 'border-neutral-200 hover:border-neutral-300 bg-white'}`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3 left-1/2 -tranneutral-x-1/2 bg-foreground text-white font-bold px-4 py-1 text-xs uppercase tracking-widest">
                  Najpopularniejszy
                </div>
              )}
              
              <h3 className="font-heading text-2xl font-bold mb-3 uppercase tracking-widest text-center">{plan.name}</h3>
              <p className="text-black text-xs mb-8 min-h-[40px] uppercase text-center font-light leading-relaxed">{plan.description}</p>
              
              <div className="mb-10 text-center">
                <span className="text-4xl font-extrabold font-heading text-foreground">{plan.price} zł</span>
                {plan.period && <span className="text-black font-light text-sm">{plan.period}</span>}
              </div>
              
              <ul className="space-y-4 mb-12 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-4 text-sm font-light text-black">
                    <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.isPopular ? 'text-primary' : 'text-black'}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href={plan.ctaLink} 
                target={plan.ctaLink.startsWith('http') ? '_blank' : undefined}
                rel={plan.ctaLink.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`block w-full text-center py-4 font-bold uppercase tracking-widest text-xs transition-all duration-300 border ${plan.isPopular ? 'bg-primary border-primary text-foreground hover:bg-black hover:border-black hover:text-white' : 'bg-transparent border-black text-foreground hover:bg-black hover:text-white'}`}
              >
                {plan.ctaText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
