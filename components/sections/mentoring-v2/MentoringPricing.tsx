import Link from "next/link";
import { Check } from "lucide-react";

export function MentoringPricing() {
  const commonFeatures = [
    "spotkania co 2 tygodnie",
    "indywidualną diagnozę Twojego biznesu",
    "strategię dopasowaną do Twojej sytuacji, celów i możliwości",
    "Mapę Rozwoju",
    "konkretne zadania i kolejne kroki po spotkaniach",
    "kontakt i wsparcie pomiędzy spotkaniami"
  ];

  const packages = [
    {
      title: "3 MIESIĄCE",
      subtitle: "6 SPOTKAŃ 1:1",
      forWho: "Dla Ciebie, jeśli chcesz uporządkować swoją sytuację, obrać konkretny kierunek i przejść od planowania do pierwszych realnych zmian.",
      features: [
        "3 miesiące indywidualnej współpracy",
        "6 spotkań mentoringowych 1:1"
      ],
      price: "3 277 zł",
      monthly: "ok. 1092 zł / miesiąc",
      saving: null,
      cta: "WYBIERAM 3 MIESIĄCE",
      link: "/kontakt",
      highlighted: false,
    },
    {
      label: "POLECANY",
      title: "6 MIESIĘCY",
      subtitle: "12 SPOTKAŃ 1:1",
      forWho: "Dla Ciebie, jeśli chcesz przejść przez pełniejszy proces rozwoju, pracować nad kilkoma obszarami biznesu i mieć czas nie tylko na wdrażanie zmian, ale również ich analizowanie i optymalizowanie.",
      features: [
        "6 miesięcy indywidualnej współpracy",
        "12 spotkań mentoringowych 1:1",
        "przestrzeń na pracę nad kilkoma obszarami biznesu",
        "czas na testowanie, wyciąganie wniosków i optymalizację strategii"
      ],
      price: "5 777 zł",
      monthly: "ok. 963 zł / miesiąc",
      saving: "Oszczędzasz 777 zł",
      cta: "WYBIERAM 6 MIESIĘCY",
      link: "/kontakt",
      highlighted: true,
    },
    {
      title: "12 MIESIĘCY",
      subtitle: "24 SPOTKANIA 1:1",
      forWho: "Dla Ciebie, jeśli szukasz długoterminowej opieki mentoringowej i chcesz rozwijać swój biznes ze wsparciem przez cały rok - przez kolejne etapy, decyzje, wdrożenia i zmiany.",
      features: [
        "12 miesięcy indywidualnej współpracy",
        "24 spotkania mentoringowe 1:1",
        "długoterminową pracę nad kolejnymi obszarami biznesu",
        "możliwość reagowania na zmieniającą się sytuację, sezonowość i nowe cele",
        "wsparcie w podejmowaniu ważnych decyzji biznesowych przez cały rok"
      ],
      price: "9 977 zł",
      monthly: "ok. 831 zł / miesiąc",
      saving: "Oszczędzasz 3131 zł",
      cta: "WYBIERAM 12 MIESIĘCY",
      link: "/kontakt",
      highlighted: false,
    }
  ];

  return (
    <section id="cennik" className="bg-white py-24 md:py-32">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-primary text-black font-bold px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] mb-6">
            WARIANTY WSPÓŁPRACY
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-foreground mb-8 uppercase tracking-tighter leading-tight">
            WYBIERZ, JAK DŁUGO CHCESZ MIEĆ MNIE U SWOJEGO BOKU
          </h2>
          <div className="text-sm md:text-base text-black font-light leading-relaxed space-y-4">
            <p>Widzimy się regularnie co 2 tygodnie, dzięki czemu pomiędzy spotkaniami masz czas na wdrażanie ustaleń, obserwowanie efektów i sprawdzanie, co rzeczywiście działa w Twoim biznesie.</p>
          </div>
        </div>

        {/* Common Features Block */}
        <div className="max-w-6xl mx-auto mb-24">
          <div className="text-center mb-12">
            <h3 className="font-heading text-xl md:text-2xl font-extrabold uppercase tracking-widest text-foreground">
              KAŻDY WARIANT OBEJMUJE TEN SAM STANDARD WSPARCIA:
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {commonFeatures.map((feature, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-neutral-200 p-6 md:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-black transition-colors min-h-[120px]"
              >
                <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-neutral-800 relative z-10 leading-relaxed max-w-[85%]">
                  {feature}
                </span>
                <div className="absolute -bottom-2 -right-2 text-6xl md:text-7xl font-heading font-extrabold text-neutral-100 group-hover:text-neutral-200 transition-colors z-0 select-none">
                  0{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, idx) => (
            <div 
              key={idx}
              className={`relative flex flex-col h-full transition-all duration-300 border ${
                pkg.highlighted 
                  ? "border-foreground shadow-sm bg-neutral-50 lg:-translate-y-4 z-10" 
                  : "bg-white border-neutral-200 hover:border-neutral-300"
              }`}
            >
              {pkg.highlighted && pkg.label && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-foreground text-white font-bold px-4 py-1 text-xs uppercase tracking-widest whitespace-nowrap">
                  {pkg.label}
                </div>
              )}

              <div className="p-8 md:p-10 flex-grow flex flex-col">
                <div className="text-center mb-8 border-b border-neutral-200/50 pb-8">
                  <h3 className="font-heading text-3xl font-bold uppercase tracking-widest mb-2 text-foreground">
                    {pkg.title}
                  </h3>
                  <div className={`text-sm font-bold uppercase tracking-widest mb-6 ${pkg.highlighted ? "text-primary" : "text-neutral-500"}`}>
                    {pkg.subtitle}
                  </div>
                  <p className="text-sm font-light leading-relaxed text-left text-neutral-600">
                    {pkg.forWho}
                  </p>
                </div>

                <div className="flex-grow mb-10">
                  <div className="text-xs font-bold uppercase tracking-widest mb-6 text-foreground">
                    Dodatkowo w tym czasie:
                  </div>
                  <ul className="space-y-4">
                    {pkg.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-4">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${pkg.highlighted ? "bg-primary/20" : "bg-neutral-100"}`}>
                          <Check className={`w-3.5 h-3.5 ${pkg.highlighted ? "text-primary" : "text-black"}`} />
                        </div>
                        <span className="text-sm font-light leading-snug text-neutral-700">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-center mt-auto border-t border-neutral-200/50 pt-8">
                  <div className="mb-8">
                    <div className="text-4xl md:text-5xl font-extrabold font-heading tracking-tighter mb-2 text-foreground">
                      {pkg.price}
                    </div>
                    <div className="text-sm font-medium text-neutral-500">
                      {pkg.monthly}
                    </div>
                    <div className="h-[32px] mt-4 flex justify-center">
                      {pkg.saving && (
                        <div className="text-xs font-bold px-4 py-2 inline-block bg-neutral-100 text-black">
                          {pkg.saving}
                        </div>
                      )}
                    </div>
                  </div>

                  <Link 
                    href={pkg.link}
                    className={`block w-full py-5 font-bold uppercase tracking-widest text-xs transition-colors duration-300 text-center border ${
                      pkg.highlighted
                        ? "bg-primary border-primary text-black hover:bg-black hover:text-white"
                        : "bg-black text-white border-black hover:bg-transparent hover:text-black"
                    }`}
                  >
                    {pkg.cta}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
