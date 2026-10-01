import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function ConsultationClosing() {
  return (
    <section className="bg-neutral-50 py-0 border-t border-neutral-200 overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        
        {/* Kolumna Lewa: Zdjęcie */}
        <div className="w-full lg:w-1/2 relative min-h-[50vh] lg:min-h-0 aspect-square lg:aspect-auto">
          <Image 
            src="/images/roksana-glowinska-zaproszenie.jpg"
            alt="Roksana Głowińska - Konsultacja"
            fill
            className="object-cover"
            sizes="100vw"
            quality={100}
            unoptimized={true}
          />
        </div>

        {/* Kolumna Prawa: Tekst */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-12 py-24 md:p-24 lg:p-32">
          <div className="max-w-xl text-left">
            <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-foreground mb-10 uppercase tracking-tighter leading-tight relative z-10">
              NIE MUSISZ SZUKAĆ <span className="relative inline-block"><span className="absolute top-[30%] -bottom-2 -inset-x-2 bg-primary/30 -z-10"></span>ODPOWIEDZI</span> NA WSZYSTKO SAMA.
            </h2>
            <div className="text-base md:text-lg text-neutral-800 font-light leading-relaxed space-y-8 mb-16">
              <p>
                Czasem potrzebujesz przeanalizować jeden większy temat. Innym razem masz po prostu kilka pytań i chcesz skonsultować je z kimś, kto spojrzy na nie z doświadczeniem i dystansem.
              </p>
              <p>
                Nie musisz mieć gotowego planu ani wiedzieć, jakie jest najlepsze rozwiązanie. Od tego jest nasze spotkanie.
              </p>
              <p className="font-bold text-black uppercase tracking-widest text-sm">
                PRZYNIEŚ TEMAT. PRZYNIEŚ PYTANIA. PRZYJRZYJMY SIĘ IM WSPÓLNIE.
              </p>
              <p>
                60 minut poświęconych temu, czego właśnie teraz potrzebuje Twój biznes.
              </p>
            </div>
            <div className="group inline-block">
              <Link 
                href="/kontakt"
                className="inline-flex items-center justify-center gap-3 bg-black text-white px-10 py-5 font-bold text-xs uppercase tracking-widest hover:bg-neutral-800 transition-colors group-hover:gap-5"
              >
                UMÓW KONSULTACJĘ
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
