"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";

export function NewsletterModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Sprawdzamy, czy użytkownik zamknął już modal w przeszłości
    const isDismissed = localStorage.getItem("newsletterModalDismissed");
    
    if (!isDismissed) {
      // Uruchamiamy modal po 12 sekundach przebywania na stronie
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 12000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    // Zapisujemy informację, że użytkownik zamknął okienko, by go więcej nie męczyć
    localStorage.setItem("newsletterModalDismissed", "true");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, listType: "platforma" }),
      });

      const data = await response.json();

      if (!response.ok && response.status !== 200) {
        throw new Error(data.error || "Wystąpił błąd");
      }

      setStatus("success");
      setMessage(data.message || "Zapisano pomyślnie!");
      
      // Automatyczne zamknięcie po 3 sekundach po udanym zapisie
      setTimeout(() => {
        handleClose();
      }, 3000);

    } catch (error: any) {
      setStatus("error");
      setMessage(error.message || "Wystąpił błąd. Spróbuj ponownie.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center px-4">
      {/* Tło przyciemniające */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-300"
        onClick={handleClose}
      />
      
      {/* Główne okienko */}
      <div className="bg-white relative w-full max-w-4xl shadow-2xl flex flex-col md:flex-row overflow-hidden animate-in zoom-in-95 duration-500 z-10">
        
        {/* Przycisk zamykania */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 text-neutral-400 hover:text-black transition-colors bg-white/50 backdrop-blur-md rounded-full p-1"
          aria-label="Zamknij"
        >
          <X size={24} />
        </button>

        {/* Lewa strona - Zdjęcie */}
        <div className="w-full md:w-5/12 h-48 md:h-auto relative hidden sm:block">
          <Image 
            src="/images/roksana-glowinska-platforma-nowe.jpg" 
            alt="Dołącz do platformy"
            fill
            quality={100}
            className="object-cover object-center"
          />
          <div className="absolute top-8 left-0 w-full flex justify-center z-10 px-6">
            <div className="relative w-48 md:w-56 h-12 md:h-16">
              <Image 
                src="/images/jasny-kierunek-fotografki.png" 
                alt="Jasny Kierunek Fotografki Logo"
                fill
                quality={100}
                unoptimized={true}
                className="object-contain drop-shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Prawa strona - Formularz */}
        <div className="w-full md:w-7/12 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <div className="inline-block bg-primary text-black font-bold px-3 py-1 text-[10px] uppercase tracking-[0.2em] mb-4 self-start">
            WKRÓTCE STARTUJEMY
          </div>
          
          <h2 className="font-heading text-2xl md:text-4xl font-extrabold text-foreground mb-4 uppercase tracking-tighter leading-tight">
            PLATFORMA SUBSKRYPCYJNA DLA FOTOGRAFEK
          </h2>
          
          <p className="font-sans font-light text-sm text-neutral-600 mb-8 leading-relaxed">
            Zostaw swój adres e-mail, a ja wkrótce wyślę Ci informację o starcie platformy subskrypcyjnej - <strong className="font-bold text-black">Jasny Kierunek Fotografki</strong>. Otrzymasz najlepsze warunki na otwarcie!
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col gap-4">
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={status === "loading" || status === "success"}
                className="w-full bg-transparent border-b border-neutral-300 text-foreground px-2 py-3 focus:outline-none focus:border-black transition-colors rounded-none text-sm placeholder-neutral-400 disabled:opacity-50" 
                placeholder="Jak masz na imię?*" 
              />
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={status === "loading" || status === "success"}
                className="w-full bg-transparent border-b border-neutral-300 text-foreground px-2 py-3 focus:outline-none focus:border-black transition-colors rounded-none text-sm placeholder-neutral-400 disabled:opacity-50" 
                placeholder="Twój najlepszy adres e-mail*" 
              />
            </div>
            
            <button 
              type="submit" 
              disabled={status === "loading" || status === "success"}
              className="w-full bg-black text-white font-bold py-4 uppercase tracking-widest text-xs hover:bg-neutral-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Zapisywanie..." : status === "success" ? "Gotowe!" : "ZAPISZ SIĘ NA LISTĘ"}
            </button>
            
            {message && (
              <p className={`text-sm mt-4 font-bold tracking-wider uppercase text-center ${status === 'success' ? 'text-[#729F89]' : 'text-red-500'}`}>
                {message}
              </p>
            )}

            <p className="text-[10px] text-neutral-400 mt-4 text-center">
              Zapisując się wyrażasz zgodę na kontakt mailowy. Bez spamu, obiecuję! Możesz wypisać się w każdej chwili.
            </p>
          </form>
        </div>

      </div>
    </div>
  );
}
