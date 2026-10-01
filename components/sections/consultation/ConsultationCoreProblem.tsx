export function ConsultationCoreProblem() {
  return (
    <section className="bg-white py-24 md:py-32 border-b border-neutral-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-20 md:mb-32">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-8 uppercase tracking-tighter leading-[1.1] max-w-3xl relative z-10">
            TY <span className="relative inline-block"><span className="absolute top-[30%] -bottom-2 -inset-x-2 bg-primary/30 -z-10"></span>DECYDUJESZ</span>, JAK CHCESZ WYKORZYSTAĆ TO SPOTKANIE.
          </h2>
          <p className="text-base md:text-lg font-light text-black leading-relaxed max-w-2xl">
            Konsultacja może wyglądać na dwa sposoby. Wybierz formę, która najlepiej odpowiada temu, z czym przychodzisz.
          </p>
        </div>

        <div className="space-y-20 md:space-y-32">
          {/* Opcja 1: Strategia */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
            <div className="md:w-5/12 shrink-0">
              <span className="text-primary text-sm tracking-widest font-bold mb-4 block">01 / FORMA KONSULTACJI</span>
              <h3 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground uppercase tracking-tighter mb-6">
                STRATEGIA
              </h3>
            </div>

            <div className="md:w-7/12 md:pl-10 border-t md:border-t-0 md:border-l border-neutral-200 pt-8 md:pt-0">
              <p className="text-base md:text-lg font-bold text-black uppercase tracking-widest mb-6 leading-relaxed">
                Jeden temat. Głębsza analiza. Konkretne decyzje.
              </p>
              <div className="font-sans text-base font-light text-black leading-loose space-y-6 max-w-2xl">
                <p>
                  Przychodzisz z jednym głównym problemem, obszarem lub decyzją. Przed spotkaniem poznaję Twoją sytuację i analizuję przesłane materiały, a podczas konsultacji przyglądamy się tematowi głębiej, szukamy przyczyn i możliwych rozwiązań.
                </p>
                <p>
                  Ta forma sprawdzi się, jeśli chcesz wiedzieć nie tylko „co mogę zrobić?”, ale przede wszystkim „co ma sens zrobić właśnie w mojej sytuacji?”.
                </p>
              </div>
            </div>
          </div>

          {/* Opcja 2: Q&A */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
            <div className="md:w-5/12 shrink-0">
              <span className="text-primary text-sm tracking-widest font-bold mb-4 block">02 / FORMA KONSULTACJI</span>
              <h3 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground uppercase tracking-tighter mb-6">
                Q&A
              </h3>
            </div>

            <div className="md:w-7/12 md:pl-10 border-t md:border-t-0 md:border-l border-neutral-200 pt-8 md:pt-0">
              <p className="text-base md:text-lg font-bold text-black uppercase tracking-widest mb-6 leading-relaxed">
                Twoje pytania. Moje doświadczenie. 60 minut konkretów.
              </p>
              <div className="font-sans text-base font-light text-black leading-loose space-y-6 max-w-2xl">
                <p>
                  Przychodzisz z listą pytań dotyczących Twojego biznesu fotograficznego. Mogą dotyczyć jednego albo kilku obszarów – oferty, cen, klientów, sprzedaży, marketingu, social mediów czy konkretnych sytuacji, z którymi właśnie się mierzysz.
                </p>
                <p>
                  Przechodzimy przez nie po kolei i omawiamy tyle, ile pozwoli nam czas spotkania.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
