import React from "react";

const stats = [
  { label: "W branży fotograficznej - LIRYKA FOTOGRAFIA, LIRYKA STUDIO I YOUR LIGHT", value: "12 LAT\nI 3 MARKI" },
  { label: "Zrealizowanych dla klientów indywidualnych i komercyjnych", value: "PONAD 1000 SESJI FOTO" },
  { label: "W programach, na kursach, warsztatach, mentoringach, konsultacjach, webinarach i wydarzeniach", value: "PONAD 1000 FOTOGRAFÓW" },
];

export function AboutStats() {
  return (
    <section id="droga" className="bg-neutral-50 py-24 md:py-32 border-y border-neutral-100">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-foreground uppercase tracking-tighter leading-tight relative z-10 inline-block">
            Za każdą z tych liczb stoją <span className="relative inline-block">
              <span className="absolute top-[30%] -bottom-1 -inset-x-2 bg-primary/30 -z-10"></span>
              LUDZIE
            </span>, historie i lata doświadczenia.
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-24 h-1 bg-primary/40"></div>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="group bg-white p-12 flex flex-col items-center justify-center text-center border border-neutral-100 hover:border-primary/30 shadow-sm hover:shadow-xl transition-all duration-500 rounded-sm relative overflow-hidden"
            >
              {/* Dekoracyjne tło liczby pokazujące się na hover */}
              <div className="absolute -right-4 -bottom-4 text-[120px] font-heading font-black text-neutral-50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none select-none z-0">
                {stat.value.match(/\d+/)?.[0]}
              </div>
              
              <div className="font-heading text-3xl md:text-4xl font-extrabold text-foreground mb-6 z-10 group-hover:scale-105 transition-transform duration-500 whitespace-pre-line">
                {stat.value}
              </div>
              
              <div className="font-sans text-sm md:text-base font-medium text-neutral-500 uppercase tracking-widest max-w-xs z-10 leading-relaxed group-hover:text-black transition-colors duration-500">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
