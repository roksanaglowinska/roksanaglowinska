import Link from "next/link";
import Script from "next/script";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export function InstagramFeed() {
  return (
    <section className="py-20 md:py-32 bg-neutral-50 relative border-t border-neutral-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-foreground uppercase tracking-tighter mb-4 flex items-center justify-center gap-4">
            <InstagramIcon className="w-8 h-8 md:w-10 md:h-10" />
            ZAJRZYJ NA MÓJ INSTAGRAM
          </h2>
          <p className="font-sans text-black font-light text-base md:text-lg mb-8">
            Codzienna dawka wiedzy biznesowej, kulisy mojej pracy i inspiracje dla fotografów.
          </p>
        </div>

        <div className="max-w-6xl mx-auto w-full overflow-hidden">
          <div className="elfsight-app-9dd7cd8a-1494-4d15-bab1-4fa670811046" data-elfsight-app-lazy></div>
        </div>

        <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
      </div>
    </section>
  );
}
