import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function AboutCTA() {
  return (
    <section className="bg-neutral-50 pt-24 pb-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">

          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-tighter leading-tight text-foreground mb-6">
            BYĆ MOŻE TO POCZĄTEK NASZEJ WSPÓLNEJ DROGI
          </h2>
          <p className="font-light text-lg text-neutral-600">
            Jeśli czujesz, że moje podejście jest Ci bliskie, zobacz, w jaki sposób mogę wesprzeć Ciebie lub osoby, dla których tworzysz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {/* Dla fotografów */}
          <div className="bg-white border border-neutral-100 shadow-sm p-10 md:p-16 flex flex-col justify-between group hover:-translate-y-1 transition-transform duration-300">
            <div>
              <h3 className="font-heading text-2xl font-bold uppercase tracking-tight mb-6">
                Chcesz rozwijać swój biznes fotograficzny?
              </h3>
              <p className="font-light text-neutral-600 mb-12">
                Skorzystaj z moich kursów, mentoringu lub dołącz do społeczności fotografek, które chcą działać z większą świadomością, spokojem i jasnym kierunkiem.
              </p>
            </div>
            <Link 
              href="/kontakt" 
              className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 font-bold text-xs uppercase tracking-widest hover:bg-neutral-800 transition-colors group-hover:gap-4 w-fit"
            >
              Skontaktuj się ze mną
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Dla organizatorów */}
          <div className="bg-white border border-neutral-100 shadow-sm p-10 md:p-16 flex flex-col justify-between group hover:-translate-y-1 transition-transform duration-300">
            <div>
              <h3 className="font-heading text-2xl font-bold uppercase tracking-tight mb-6">
                Chcesz zaprosić mnie do swojego projektu?
              </h3>
              <p className="font-light text-neutral-600 mb-12">
                Prowadzę prelekcje i warsztaty, biorę udział w podcastach, wywiadach oraz rozmowach o fotografii, marketingu, przedsiębiorczości, marce osobistej i rozwoju.
                <br /><br />
                Jeśli widzisz przestrzeń do wspólnego działania – napisz do mnie. Chętnie poznam Twój pomysł.
              </p>
            </div>
            <Link href="/kontakt" className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 font-bold text-xs uppercase tracking-widest hover:bg-neutral-800 transition-colors group-hover:gap-4 w-fit">
              Porozmawiajmy o współpracy
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
