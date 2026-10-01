import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function KursyPage() {
  return (
    <div className="min-h-[80vh] bg-white pt-32 pb-24 flex items-center justify-center relative">
      <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
        <span className="font-heading font-bold text-xs uppercase tracking-widest text-[#729F89] mb-4 block">
          PRACE TRWAJĄ
        </span>
        <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-foreground uppercase tracking-tighter mb-6">
          E-BOOKI I{" "}
          <span className="relative inline-block">
            <span className="absolute top-[40%] -bottom-1 -inset-x-2 bg-primary/30 -z-10"></span>
            KURSY
          </span>
        </h1>
        <p className="font-sans text-black font-light text-base md:text-lg mb-12 leading-relaxed max-w-2xl mx-auto">
          Ta podstrona jest obecnie w przygotowaniu. Już wkrótce znajdziesz tutaj pełną ofertę moich produktów cyfrowych i kursów online.
        </p>
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 font-bold text-xs uppercase tracking-widest hover:bg-neutral-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Wróć na stronę główną
        </Link>
      </div>
    </div>
  );
}
