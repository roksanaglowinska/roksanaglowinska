import React from "react";
import Image from "next/image";

export function AboutInspirations() {
  return (
    <section className="bg-neutral-50 text-foreground py-24 md:py-32 overflow-hidden border-b border-neutral-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16 md:mb-24 text-center mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-tighter mb-8 leading-tight relative z-10">
            Najwięcej <span className="relative inline-block">
              <span className="absolute top-[30%] -bottom-1 -inset-x-2 bg-primary/30 -z-10"></span>
              INSPIRACJI
            </span> znajduję poza biurkiem
          </h2>
        </div>

        {/* Scrolling Gallery */}
        <div className="w-full mb-16 -mx-4 md:mx-0 px-4 md:px-0">
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 md:gap-8 pb-8 hide-scrollbar">
            {[
              { src: "/images/roksana-glowinska-podroze-9.jpg", alt: "Inspiracje - Podróże 9" },
              { src: "/images/roksana-glowinska-podroze-3.jpg", alt: "Inspiracje - Podróże 3" },
              { src: "/images/roksana-glowinska-podroze-11.jpg", alt: "Inspiracje - Podróże 11" },
              { src: "/images/roksana-glowinska-podroze-20.jpg", alt: "Inspiracje - Podróże 20" },
              { src: "/images/roksana-glowinska-podroze-5.jpg", alt: "Inspiracje - Podróże 5" },
              { src: "/images/roksana-glowinska-podroze-10.jpg", alt: "Inspiracje - Podróże 10" },
              { src: "/images/roksana-glowinska-podroze-33.jpg", alt: "Inspiracje - Podróże 33" },
              { src: "/images/roksana-glowinska-podroze-36.jpg", alt: "Inspiracje - Podróże 36" },
              { src: "/images/roksana-glowinska-podroze-4.jpg", alt: "Inspiracje - Podróże 4" },
              { src: "/images/roksana-glowinska-podroze-29.jpg", alt: "Inspiracje - Podróże 29" },
              { src: "/images/roksana-glowinska-podroze-7.jpg", alt: "Inspiracje - Podróże 7" },
              { src: "/images/roksana-glowinska-podroze-23.jpg", alt: "Inspiracje - Podróże 23" },
              { src: "/images/roksana-glowinska-podroze-28.jpg", alt: "Inspiracje - Podróże 28" },
              { src: "/images/roksana-glowinska-podroze-13.jpg", alt: "Inspiracje - Podróże 13" },
              { src: "/images/roksana-glowinska-podroze-32.jpg", alt: "Inspiracje - Podróże 32" },
              { src: "/images/roksana-glowinska-podroze-6.jpg", alt: "Inspiracje - Podróże 6" },
              { src: "/images/roksana-glowinska-podroze-14.jpg", alt: "Inspiracje - Podróże 14" },
            ].map((photo, index) => (
              <div 
                key={index} 
                className="snap-center shrink-0 w-[70vw] sm:w-[45vw] md:w-[350px] lg:w-[400px] aspect-[3/4] relative rounded-lg overflow-hidden shadow-lg bg-neutral-100"
              >
                <Image 
                  src={photo.src} 
                  alt={photo.alt} 
                  fill 
                  quality={100}
                  unoptimized={true}
                  className="object-cover hover:scale-105 transition-transform duration-700" 
                  sizes="(max-width: 768px) 70vw, (max-width: 1024px) 45vw, 400px" 
                  priority={index < 3}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6 font-light text-base md:text-lg text-neutral-800 text-center">
          <p>
            Podróże pozwalają mi zmieniać perspektywę, muzyka dostarcza emocji, a rozwój osobisty pomaga lepiej rozumieć siebie i innych. To trzy światy, bez których trudno byłoby opowiedzieć, kim jestem.
          </p>
          <p>
            Uwielbiam odkrywać nowe miejsca – zarówno zachwycać się ich światłem i krajobrazami, jak i doświadczać wszystkiego, co dzieje się po drodze. Kocham koncerty, muzykę słuchaną w samochodzie i momenty, w których jedna piosenka potrafi całkowicie zmienić nastrój dnia.
          </p>
          <p>
            Od lat zgłębiam też rozwój osobisty, duchowy, psychologię, mindset i sposoby poprawiania jakości życia. Nie szukam w nich idealnej wersji siebie. Szukam większej świadomości, spokoju i odwagi, by żyć oraz tworzyć po swojemu.
          </p>
          <p className="font-medium text-foreground pt-4">
            Te pasje przenikają również do mojej pracy. Przypominają mi, że rozwój nie zawsze przebiega po linii prostej, emocje mają znaczenie, a czasem właśnie zmiana perspektywy pozwala dostrzec kierunek, którego wcześniej nie widzieliśmy.
          </p>
        </div>
      </div>
    </section>
  );
}
