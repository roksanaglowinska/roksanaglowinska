import Image from "next/image";

export function ConsultationTopics() {
  const topics = [
    { title: "OFERTA", desc: "Konstrukcja oferty, pakiety, sposób prezentowania usług i ich dopasowanie do klientów." },
    { title: "CENY", desc: "Wycena usług, konstrukcja cennika, podnoszenie cen i komunikowanie wartości." },
    { title: "SPRZEDAŻ", desc: "Proces sprzedaży, zapytania od klientów, komunikacja i miejsca, w których możesz tracić sprzedaż." },
    { title: "MARKETING", desc: "Promocja, docieranie do klientów i wybór działań, które mają sens w Twojej sytuacji." },
    { title: "SOCIAL MEDIA I KOMUNIKACJA", desc: "Profil, treści, komunikaty i sposób, w jaki pokazujesz swoją ofertę i markę." },
    { title: "MARKA", desc: "Pozycjonowanie, wyróżniki i sposób, w jaki chcesz być odbierana przez klientów." },
    { title: "STRONA WWW", desc: "Struktura, komunikaty, oferta, ścieżka klienta i elementy, które warto zmienić." },
    { title: "NOWY POMYSŁ", desc: "Nowa usługa, produkt, projekt albo zmiana, którą chcesz przeanalizować przed wdrożeniem." },
    { title: "KIERUNEK ROZWOJU", desc: "Kilka możliwości, pomysłów lub decyzji, które chcesz uporządkować i spojrzeć na nie z biznesowej perspektywy." }
  ];

  return (
    <section className="bg-neutral-50 py-24 md:py-32 border-b border-neutral-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          
          {/* Kolumna Lewa: Tekst i Kafelki */}
          <div className="w-full lg:w-7/12">
            <div className="text-left mb-16">
              <div className="inline-block bg-primary text-black font-bold px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] mb-6">
                JEDNA KONSULTACJA - WIELE MOZLIWOŚCI
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground uppercase tracking-tighter mb-6">
                Z CZYM MOŻESZ DO MNIE PRZYJŚĆ?
              </h2>
              <p className="font-sans text-base md:text-lg text-black font-light leading-relaxed max-w-xl">
                Niezależnie od tego, którą formę konsultacji wybierzesz, możemy pracować nad różnymi obszarami Twojego biznesu fotograficznego.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {topics.map((topic, index) => (
                <div 
                  key={index} 
                  className="bg-white p-8 border border-neutral-100 hover:border-black transition-all duration-300 group flex flex-col items-start text-left shadow-sm"
                >
                  <div className="text-primary font-light text-2xl mb-4 group-hover:scale-125 transition-transform origin-left">/</div>
                  <h3 className="font-heading text-lg font-bold uppercase tracking-widest text-foreground mb-4">
                    {topic.title}
                  </h3>
                  <p className="font-sans text-sm font-light text-black leading-relaxed">
                    {topic.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-16 border-t border-neutral-200 pt-10 text-left">
              <h3 className="font-heading text-lg font-bold uppercase tracking-widest text-foreground mb-3">
                NIE WIDZISZ TU SWOJEGO TEMATU?
              </h3>
              <p className="font-sans text-sm md:text-base text-neutral-600 font-light leading-relaxed max-w-xl">
                Jeśli dotyczy Twojego biznesu fotograficznego, opisz go przed rezerwacją konsultacji i sprawdzimy, czy jest to temat, nad którym możemy wspólnie pracować.
              </p>
            </div>
          </div>

          {/* Kolumna Prawa: Sticky Photo */}
          <div className="w-full lg:w-5/12 lg:sticky lg:top-32 mt-12 lg:mt-0">
            <div className="relative aspect-[3/4] w-full">
              <Image 
                src="/images/roksana-glowinska-rzeszow-kontakt.jpg" 
                alt="Roksana Głowińska - Konsultacja Strategiczna" 
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
                quality={90}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
