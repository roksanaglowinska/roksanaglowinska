import Link from "next/link";
import Image from "next/image";
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 448 512" fill="currentColor" className={className}>
    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 448 512" fill="currentColor" className={className}>
    <path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25V349.38A162.55 162.55 0 1 1 185 188.31v89.89a74.62 74.62 0 1 0 52.23 71.18V0l88 0a121.18 121.18 0 0 0 1.86 22.17h0A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14Z"/>
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-white text-foreground pt-16 pb-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 border-t border-b border-neutral-100 py-16">
          
          <div className="md:col-span-2">
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-center sm:items-start mb-8">
              <div className="shrink-0">
                <Image 
                  src="/images/roksana-glowinska-hero.jpg" 
                  alt="Roksana Głowińska - fotografka i mentorka fotografów" 
                  width={160} 
                  height={160} 
                  quality={100}
                  unoptimized={true}
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover object-[center_25%] shadow-sm border border-neutral-100"
                />
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <div>
                  <h3 className="font-heading font-bold text-sm leading-none text-foreground uppercase tracking-widest text-center sm:text-left mb-6">
                    Roksana Głowińska
                  </h3>
                  <p className="text-black max-w-sm font-light leading-relaxed uppercase tracking-widest text-[10px] text-center sm:text-left">
                    Pomagam fotografkom przejść od pustego kalendarza do poukładanego biznesu, w którym sesje przynoszą stałe przychody i spokój w głowie.
                  </p>
                </div>
                
                <div className="flex gap-3 sm:gap-4 mt-6">
                  <a href="https://www.instagram.com/roksana.biznesfoto" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-neutral-200 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-300">
                    <InstagramIcon className="w-[18px] h-[18px]" />
                  </a>
                  <a href="https://www.tiktok.com/@roksana.biznesfoto" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-neutral-200 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-300">
                    <TikTokIcon className="w-4 h-4" />
                  </a>
                  <a href="https://www.facebook.com/roksana.biznesfoto" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-neutral-200 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-300">
                    <FacebookIcon className="w-4 h-4" />
                  </a>
                  <a href="https://www.youtube.com/@roksana.biznesfoto" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-neutral-200 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all duration-300">
                    <YoutubeIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-heading font-bold text-sm leading-none mb-6 text-foreground uppercase tracking-widest">Nawigacja</h4>
            <ul className="space-y-4 text-black font-light uppercase tracking-widest text-[10px]">
              <li><Link href="/o-mnie" className="hover:text-black transition-colors">Poznaj mnie</Link></li>
              <li><Link href="/mentoring" className="hover:text-black transition-colors">Mentoring 1:1</Link></li>
              <li><Link href="/konsultacja" className="hover:text-black transition-colors">Konsultacja 1:1</Link></li>
              <li><a href="https://www.jasnykierunekfotografki.pl" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Platforma Subskrypcyjna</a></li>
              <li><Link href="/kursy" className="hover:text-black transition-colors">Kursy i e-booki</Link></li>
              <li><Link href="/kontakt" className="hover:text-black transition-colors">Kontakt</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-bold text-sm leading-none mb-6 text-foreground uppercase tracking-widest">Ważne Linki</h4>
            <ul className="space-y-4 text-black font-light uppercase tracking-widest text-[10px]">
              <li><a href="https://liryka.net/kokpit/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Zaloguj</a></li>
              <li><Link href="/regulamin" className="hover:text-black transition-colors">Regulamin</Link></li>
              <li><Link href="/polityka-prywatnosci" className="hover:text-black transition-colors">Polityka prywatności</Link></li>
            </ul>
          </div>
          
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-light uppercase tracking-widest text-black">
          <p>&copy; {new Date().getFullYear()} ROKSANA GŁOWIŃSKA | WSZELKIE PRAWA ZASTRZEŻONE.</p>
          <p>PROJEKT RG</p>
        </div>
      </div>
    </footer>
  );
}
