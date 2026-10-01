import React from "react";
import Image from "next/image";

export function AboutEducation() {
  return (
    <section className="bg-neutral-50 py-24 md:py-32 border-b border-neutral-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-16 items-center mb-24">
          <div className="w-full md:w-1/2">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground uppercase tracking-tighter mb-8 leading-tight relative z-10">
              TO, CZEGO NAUCZYŁ MNIE BIZNES, <span className="relative inline-block">
                <span className="absolute top-[30%] -bottom-1 -inset-x-2 bg-primary/30 -z-10"></span>
                PRZEKAZUJĘ
              </span> DALEJ
            </h2>
            <div className="space-y-6 font-light text-base md:text-lg text-neutral-800">
              <p>
                Kiedy w 2021 roku otworzyłam LIRYKA studio i udostępniłam je fotografom na wynajem, zaczęłam jeszcze lepiej poznawać ich codzienne wyzwania: brak klientów, trudność z wyceną własnej pracy, chaos w marketingu i lęk przed sprzedażą.
              </p>
              <p>
                Wiele z tych problemów znałam z własnego doświadczenia. Wiedziałam jednak, że działanie po omacku można zastąpić większą świadomością, pewnością siebie i jasnym kierunkiem.
              </p>
              <p>
                W 2022 roku zaczęłam tworzyć kursy, warsztaty i programy mentoringowe. Od tego czasu zaufały mi setki fotografów, którzy chcieli skuteczniej rozwijać biznes – w sposób naprawdę dopasowany do siebie.
              </p>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] relative overflow-hidden bg-neutral-100 rounded-sm">
                <Image
                  src="/images/roksana-glowinska-warsztaty-rzeszow.jpg"
                  alt="Zdjęcie z warsztatów Rzeszów 1"
                  fill
                  className="object-cover scale-[1.4] translate-x-8"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="aspect-[3/4] relative overflow-hidden bg-neutral-100 rounded-sm translate-y-8">
                <Image
                  src="/images/roksana-glowinska-warsztaty-rzeszow-2.jpg"
                  alt="Zdjęcie z warsztatów Rzeszów 2"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-neutral-100 shadow-sm p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/3 aspect-[3/4] relative overflow-hidden bg-neutral-100">
              <Image 
                src="/images/roksana-glowinska-zlota-plyta.jpg" 
                alt="Złota Płyta Kampania WOW" 
                fill 
                className="object-cover"
                quality={100}
                unoptimized={true}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="w-full md:w-2/3 space-y-6">
              <h3 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-black">
                ZŁOTA PŁYTA, ZA KTÓRĄ STOI ZAUFANIE FOTOGRAFÓW
              </h3>
              <div className="font-light text-base md:text-lg text-neutral-800 space-y-4">
                <p>
                  Otrzymałam Złotą Płytę od Magdaleny Pawłowskiej za przekroczenie 100 000 zł przychodu ze sprzedaży programu online „Marketing Fotografa”.
                </p>
                <p>
                  Ta liczba jest ważnym osiągnięciem, ale dla mnie znaczy coś znacznie więcej. Za tym wynikiem stoją <span className="font-medium text-black">fotografowie, którzy zaufali mi i dołączyli do pierwszej edycji.</span>
                </p>
                <p>
                  Dlatego patrząc na tę płytę, widzę przede wszystkim ludzi, którzy powierzyli mi część swojej biznesowej drogi. To właśnie ich zaufanie jest dla mnie największym wyróżnieniem.
                </p>
              </div>
            </div>
          </div>
        </div>



      </div>
    </section>
  );
}
