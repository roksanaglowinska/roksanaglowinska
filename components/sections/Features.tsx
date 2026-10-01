import { Camera, Briefcase, TrendingUp, Users, Target, Zap } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: <Camera className="w-6 h-6 text-black" />,
      title: "Marketing na Instagramie",
      description: "Przestań publikować w próżnię. Nauczysz się tworzyć angażujące Rolki, stories i posty, które realnie przyciągają klientów, a nie tylko innych fotografów."
    },
    {
      icon: <Briefcase className="w-6 h-6 text-black" />,
      title: "Autentyczna marka premium",
      description: "Przestaniesz konkurować ceną. Zbudujemy Twój unikalny wizerunek, dzięki któremu klienci będą chcieli pracować tylko z Tobą, bez względu na stawkę."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-black" />,
      title: "Psychologia sprzedaży",
      description: "Jak odpisywać na wiadomości 'jaka cena'? Nauczysz się prowadzić rozmowy sprzedażowe z lekkością i domykać zlecenia z pewnością siebie."
    },
    {
      icon: <Users className="w-6 h-6 text-black" />,
      title: "Pozyskiwanie klientów B2B",
      description: "Wyjdziesz poza rynek B2C. Dowiesz się, jak nawiązywać współpracę z markami, tworzyć oferty komercyjne i negocjować lukratywne kontrakty."
    },
    {
      icon: <Target className="w-6 h-6 text-black" />,
      title: "Strategia na lata",
      description: "Opracujemy konkretny biznesplan. Poznasz swoje liczby, wyznaczysz realne cele finansowe i ułożysz drabinę produktów dopasowaną do Ciebie."
    },
    {
      icon: <Zap className="w-6 h-6 text-black" />,
      title: "Automatyzacja i delegowanie",
      description: "Odzyskasz swój czas. Pokażę Ci narzędzia do automatyzacji procesów i podpowiem, co, jak i kiedy zacząć delegować, by nie zwariować."
    }
  ];

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-4xl mx-auto mb-20 md:mb-24">
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground uppercase tracking-tighter mb-8 leading-tight">
            Kompleksowa edukacja dla Twojego biznesu
          </h2>
          <p className="text-black font-light text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            W moich materiałach i mentoringach nie ma lania wody. Otrzymujesz konkretną wiedzę, sprawdzone schematy i gotowe szablony do wdrożenia od zaraz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group border-t border-neutral-200 pt-8 hover:border-black transition-colors duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center mb-8 opacity-40 group-hover:opacity-100 transition-opacity duration-300">
                {feature.icon}
              </div>
              <h3 className="font-heading font-bold text-lg mb-4 text-foreground uppercase tracking-widest">
                {feature.title}
              </h3>
              <p className="text-black text-sm font-light leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
