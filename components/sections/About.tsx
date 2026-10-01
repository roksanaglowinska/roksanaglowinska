import Image from "next/image";
import Link from "next/link";
export function About() {
  return (
    <section id="o-mnie" className="bg-white py-24 md:py-32 border-b border-neutral-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-stretch gap-12 lg:gap-16">
          
          <div className="w-full md:w-1/2 h-full">
            <div className="relative h-full min-h-[600px] lg:min-h-[700px]">
              <Image 
                src="/images/roksana-glowinska-rzeszow.jpg" 
                alt="Roksana Głowińska - fotograf, mentorka fotografów Rzeszów" 
                fill
                unoptimized
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex flex-col justify-center py-8">
            <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground mb-10 uppercase tracking-tighter">
              HELLO, JESTEM ROKSANA!
            </h2>
            <div className="space-y-6 text-black text-sm font-light leading-loose mb-12">
              <p>
                Zanim zaczęłam uczyć fotografów, sama przeszłam drogę, którą dziś przechodzi wielu z nich. Zaczynałam od pasji i przekonania, że wystarczy robić piękne zdjęcia, mieć ładną stronę i estetycznego Facebooka (wtedy nie było innych social mediów).
              </p>
              <p>
                Nie wiedziałam, czym naprawdę jest sprzedaż, nie potrafiłam mówić o wartości tego, co robię i sama tej wartości do końca nie widziałam. Marketing robiłam intuicyjnie - bez strategii, kierunku i świadomości, które działania naprawdę przekładają się na pozyskiwanie klientów.
              </p>
              <p>
                Dziś, po 12 latach w branży, wiem, że dobry biznes fotograficzny potrzebuje znacznie więcej niż dobrych zdjęć. Pomagam fotografom budować mocne marki i dochodowe biznesy na własnych zasadach - z większą pewnością siebie, spokojem i jasnym kierunkiem.
              </p>
              <p>
                Bo rozwój biznesu zaczyna się dużo wcześniej niż od strategii. Zaczyna się od Ciebie.
              </p>
            </div>

            <div className="mb-12">
              <Link href="/o-mnie" className="inline-block bg-transparent text-foreground border border-black px-10 py-5 font-bold uppercase tracking-widest text-xs hover:bg-black hover:text-white transition-all duration-300">
                Poznaj moją historię
              </Link>
            </div>
            
            <div className="flex flex-wrap sm:flex-nowrap items-start justify-between gap-4 pt-10 border-t border-neutral-100">
              <div className="w-[45%] sm:w-[26%]">
                <p className="font-heading font-extrabold text-3xl md:text-4xl text-foreground tracking-tighter">12+</p>
                <p className="text-[10px] font-bold text-black uppercase tracking-widest mt-2">Lat jako fotografka</p>
              </div>
              <div className="hidden sm:block w-px h-10 bg-neutral-200 mt-2 shrink-0"></div>
              <div className="w-[45%] sm:w-[30%]">
                <p className="font-heading font-extrabold text-3xl md:text-4xl text-foreground tracking-tighter">4+</p>
                <p className="text-[10px] font-bold text-black uppercase tracking-widest mt-2">Lat jako mentorka fotografów</p>
              </div>
              <div className="hidden sm:block w-px h-10 bg-neutral-200 mt-2 shrink-0"></div>
              <div className="w-full sm:w-[40%] mt-4 sm:mt-0">
                <p className="font-heading font-extrabold text-3xl md:text-4xl text-foreground tracking-tighter">1K+</p>
                <p className="text-[10px] font-bold text-black uppercase tracking-widest mt-2">Fotografek, które skorzystały z mojej wiedzy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
