import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="bg-white pt-24 md:pt-32 pb-12 md:pb-16">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-foreground uppercase tracking-tighter mb-8 relative z-10">
          <span className="relative inline-block"><span className="absolute top-[30%] -bottom-2 -inset-x-2 bg-primary/30 -z-10"></span>PRZECHODZIMY</span> DO KONKRETÓW?
        </h2>
        <p className="text-black font-light text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          Wiem, że w biznesie fotograficznym łatwo się pogubić i utknąć w martwym punkcie. Jeśli czujesz, że potrzebujesz obiektywnego spojrzenia i kogoś, kto pomoże Ci ułożyć klocki w Twoim tempie – zróbmy to razem.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link 
            href="/bezplatna-konsultacja"
            className="inline-flex items-center justify-center gap-3 bg-black text-white px-8 py-4 font-bold text-[10px] sm:text-xs uppercase tracking-widest hover:bg-neutral-800 transition-colors w-full sm:w-auto"
          >
            Umów się na bezpłatną konsultację
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link 
            href="/kontakt"
            className="inline-flex items-center justify-center gap-3 bg-transparent border border-black text-black px-8 py-4 font-bold text-[10px] sm:text-xs uppercase tracking-widest hover:bg-neutral-50 transition-colors w-full sm:w-auto"
          >
            Napisz do mnie
          </Link>
        </div>
      </div>
    </section>
  );
}
