import { X } from "lucide-react";

export function PainPoints() {
  const problems = [
    {
      title: "Tkwisz w chaotycznych działaniach",
      description: "Próbujesz wszystkiego naraz — wrzucasz posty, gdy masz chwilę, testujesz nowe pomysły, ale wciąż brakuje Ci spójnego planu i powtarzalnych efektów."
    },
    {
      title: "Gubisz się w sprzecznych radach",
      description: "Jeden doradca mówi, że musisz mieć osobne konto na każdy rodzaj fotografii, inny poleca pokazywać wszystko w jednym miejscu. W efekcie zamiast działać, stoisz w miejscu i nie wiesz, kogo słuchać."
    },
    {
      title: "Czujesz obawę przed wycenieniem się wyżej",
      description: "Chcesz zarabiać więcej, ale powstrzymują Cię myśli: „Co jeśli nikt nie kupi?” albo „Co pomyślą inni?”. Wyceniasz usługi poniżej ich wartości, chociaż robisz dobre zdjęcia."
    },
    {
      title: "Pojawia się lęk przed pokazaniem siebie",
      description: "Chcesz zdobywać zlecenia przez social media, ale paraliżuje Cię myśl o mówieniu do kamery, nagrywaniu relacji czy wystawieniu się na ocenę."
    }
  ];

  return (
    <section id="problemy" className="bg-white py-24 md:py-32 scroll-mt-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground mb-8 uppercase tracking-tighter relative z-10">
            DOBRE ZDJĘCIA <br className="hidden sm:block" />
            TO DOPIERO <span className="relative inline-block"><span className="absolute top-[30%] -bottom-2 -inset-x-2 bg-primary/30 -z-10"></span>POCZĄTEK.</span>
          </h2>
          <p className="text-base md:text-lg font-light text-black leading-relaxed">
            Możesz świetnie fotografować, a jednocześnie gubić się w prowadzeniu biznesu. W marketingu, sprzedaży, wycenie, pokazywaniu siebie czy podejmowaniu kolejnych decyzji. Sama przez to przeszłam i wiem, jak bardzo potrafi to frustrować.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="group bg-transparent p-10 border border-neutral-200 hover:border-black transition-all flex flex-col items-center text-center duration-300"
            >
              <div className="mb-6 flex-shrink-0 w-12 h-12 flex items-center justify-center">
                <X className="w-8 h-8 text-red-500 transition-all duration-300" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg mb-4 text-foreground uppercase tracking-widest">{problem.title}</h3>
                <p className="text-black font-light text-sm leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center max-w-2xl mx-auto">
          <p className="font-sans text-sm md:text-base font-light text-black leading-relaxed">
            <strong className="font-bold">Być może wcale nie potrzebujesz robić jeszcze lepszych zdjęć.</strong> Potrzebujesz nauczyć się równie świadomie prowadzić swój biznes – podejmować decyzje, które Ci służą, docierać do właściwych klientów i działać z większą pewnością.
          </p>
        </div>
      </div>
    </section>
  );
}
