import React from "react";
import Image from "next/image";

export function AboutTrustedBrands() {
  return (
    <section className="bg-neutral-50 py-24 md:py-32 border-b border-neutral-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-tighter mb-6 leading-tight">
          ZAUFALI MI MIĘDZY INNYMI
        </h2>
        <p className="font-light text-base md:text-lg text-neutral-600 max-w-2xl mx-auto mb-16">
          Na przestrzeni lat miałam przyjemność współpracować z markami z różnych branż – jako fotografka, mentorka, właścicielka studia oraz ambasadorka.
        </p>

        <div className="space-y-20 max-w-4xl mx-auto">
          {/* Współprace Branżowe */}
          <div>
            <h3 className="font-heading text-xs font-bold uppercase tracking-widest text-neutral-500 mb-12 md:mb-16">
              Współprace Branżowe
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
              
              {/* Photonesto */}
              <div className="relative w-48 h-28 md:w-56 md:h-36 mix-blend-multiply hover:opacity-80 transition-opacity duration-300">
                <Image 
                  src="/logos/photonesto.png" 
                  alt="Photonesto" 
                  fill 
                  className="object-contain"
                />
              </div>

              {/* nPhoto */}
              <div className="relative w-36 h-12 md:w-44 md:h-14 mix-blend-multiply hover:opacity-80 transition-opacity duration-300">
                <Image 
                  src="/logos/nphoto.jpg" 
                  alt="nPhoto" 
                  fill 
                  className="object-contain"
                />
              </div>

              {/* GlareOne */}
              <div className="relative w-48 h-12 md:w-56 md:h-14 mix-blend-multiply hover:opacity-80 transition-opacity duration-300 scale-90 md:scale-90">
                <Image 
                  src="/logos/glareone.png" 
                  alt="GlareOne" 
                  fill 
                  className="object-contain"
                />
              </div>

            </div>
          </div>

          {/* Fotografia i Komercja */}
          <div>
            <h3 className="font-heading text-xs font-bold uppercase tracking-widest text-neutral-500 mb-12 md:mb-16">
              Marki Fotografowane / Realizacje
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
              {[
                { src: "/logos/newbalance.png", alt: "New Balance" },
                { src: "/logos/pan-robak.png", alt: "Pan Robak" },
                { src: "/logos/balloo.png", alt: "Balloo" },
                { src: "/logos/bybaja.png", alt: "By Baja" },
                { src: "/logos/glowatelier.png", alt: "Glow Atelier" },
                { src: "/logos/noeli.png", alt: "Noeli" },
                { src: "/logos/madlen.png", alt: "Madlen" },
                { src: "/logos/inlove.png", alt: "In Love", className: "scale-50 md:scale-[0.65]" },
              ].map((logo, index) => (
                <div key={index} className={`relative w-28 md:w-36 h-16 md:h-20 mix-blend-multiply hover:opacity-80 transition-opacity duration-300 ${logo.className || ""}`}>
                  <Image 
                    src={logo.src} 
                    alt={logo.alt} 
                    fill 
                    className="object-contain"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Liryka Studio Guests */}
          <div>
            <h3 className="font-heading text-xs font-bold uppercase tracking-widest text-neutral-500 mb-12 md:mb-16">
              Gościli w moim studio m.in.
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
              {[
                { src: "/logos/cocolita.png", alt: "Cocolita", className: "scale-[0.85] md:scale-90" },
                { src: "/logos/misteromilano.png", alt: "Mistero Milano" },
                { src: "/logos/ibra.png", alt: "Ibra" },
                { src: "/logos/bohomoss.png", alt: "Bohomoss" },
                { src: "/logos/habys.png", alt: "Habys" },
                { src: "/logos/giorre.png", alt: "Giorre" },
                { src: "/logos/minimal.png", alt: "Minimal" },
                { src: "/logos/kaman.jpg", alt: "Kaman" },
                { src: "/logos/ness.jpg", alt: "Ness" },
                { src: "/logos/lulumadeline.png", alt: "Lulu Madeline" },
                { src: "/logos/acusmed.png", alt: "Acusmed" },
                { src: "/logos/modelplus.png", alt: "Model Plus" },
                { src: "/logos/streetstyle.png", alt: "Street Style" },
                { src: "/logos/panmaterac.png", alt: "Pan Materac", className: "scale-[0.85] md:scale-90" },
                { src: "/logos/borsetka.png", alt: "Borsetka" },
                { src: "/logos/impresja.png", alt: "Impresja" },
                { src: "/logos/stykky.png", alt: "Stykky", className: "scale-[0.85] md:scale-90" },
                { src: "/logos/sopilov.png", alt: "Sopilov" },
                { src: "/logos/newbalance.png", alt: "New Balance" },
              ].map((logo, index) => (
                <div key={index} className={`relative w-28 md:w-36 h-16 md:h-20 mix-blend-multiply hover:opacity-80 transition-opacity duration-300 ${logo.className || ""}`}>
                  <Image 
                    src={logo.src} 
                    alt={logo.alt} 
                    fill 
                    className="object-contain"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
