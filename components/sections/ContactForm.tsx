"use client";

import React, { useState } from "react";
import Image from "next/image";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const formData = new FormData(e.target as HTMLFormElement);
    
    // Pobieramy klucz API ze zmiennych środowiskowych
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    
    if (!accessKey) {
      setStatus("error");
      setMessage("Brak klucza dostępu. Formularz jest w trybie testowym.");
      return;
    }

    formData.append("access_key", accessKey);
    formData.append("subject", "Nowa wiadomość ze strony (Formularz Kontaktowy)");
    formData.append("from_name", "Strona WWW - Kontakt");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      const data = await response.json();
      
      if (data.success) {
        setStatus("success");
        setMessage("Wiadomość została wysłana! Dziękuję za kontakt.");
        (e.target as HTMLFormElement).reset(); // Czyścimy formularz po sukcesie
      } else {
        setStatus("error");
        setMessage("Coś poszło nie tak. Spróbuj ponownie później.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Brak połączenia. Spróbuj ponownie później.");
    }
  };

  return (
    <section id="kontakt" className="py-20 md:py-32 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start max-w-7xl mx-auto">
          {/* Lewa kolumna: Tekst i formularz */}
          <div>
            <div className="text-left mb-12">
              <h1 className="font-heading text-3xl md:text-5xl font-extrabold text-foreground uppercase tracking-tighter mb-4 relative inline-block">
                <span className="absolute top-[40%] -bottom-1 -inset-x-2 bg-primary/30 -z-10"></span>
                ZAPRASZAM CIĘ DO KONTAKTU!
              </h1>
              <div className="font-sans text-black font-light text-base md:text-lg space-y-4">
                <p>Masz pytanie, pomysł albo czujesz, że możemy zrobić razem coś fajnego?</p>
                <p>Chcesz dowiedzieć się więcej o mojej ofercie, podjąć współpracę, zaprosić mnie do prelekcji, podcastu lub innego projektu? Napisz do mnie przez formularz poniżej – odezwę się do Ciebie.</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white border border-neutral-200 p-8 md:p-10 shadow-sm">
              <div className="grid grid-cols-1 gap-8 mb-8">
                {/* Imię i nazwisko */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-sans text-xs font-bold uppercase tracking-widest text-foreground">
                    Imię i nazwisko <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    disabled={status === "loading"}
                    className="border-b border-neutral-300 py-3 bg-transparent text-black placeholder:text-neutral-400 focus:outline-none focus:border-black transition-colors font-sans font-light disabled:opacity-50"
                    placeholder="Twoje imię i nazwisko"
                  />
                </div>

                {/* Adres e-mail */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-sans text-xs font-bold uppercase tracking-widest text-foreground">
                    Adres e-mail <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    disabled={status === "loading"}
                    className="border-b border-neutral-300 py-3 bg-transparent text-black placeholder:text-neutral-400 focus:outline-none focus:border-black transition-colors font-sans font-light disabled:opacity-50"
                    placeholder="Twój adres e-mail"
                  />
                </div>

                {/* Numer telefonu */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="font-sans text-xs font-bold uppercase tracking-widest text-foreground">
                    Numer telefonu
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    disabled={status === "loading"}
                    className="border-b border-neutral-300 py-3 bg-transparent text-black placeholder:text-neutral-400 focus:outline-none focus:border-black transition-colors font-sans font-light disabled:opacity-50"
                    placeholder="Twój numer telefonu (opcjonalnie)"
                  />
                </div>
              </div>

              {/* Wiadomość */}
              <div className="flex flex-col gap-2 mb-10">
                <label htmlFor="message" className="font-sans text-xs font-bold uppercase tracking-widest text-foreground">
                  Wiadomość <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  disabled={status === "loading"}
                  className="border-b border-neutral-300 py-3 bg-transparent text-black placeholder:text-neutral-400 focus:outline-none focus:border-black transition-colors font-sans font-light resize-none disabled:opacity-50"
                  placeholder="Napisz, w czym mogę Ci pomóc..."
                ></textarea>
              </div>

              {/* Zgoda */}
              <div className="flex items-start gap-4 mb-10 group">
                <div className="relative flex items-center justify-center mt-1">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    required
                    disabled={status === "loading"}
                    className="peer appearance-none w-5 h-5 border border-neutral-300 checked:bg-black checked:border-black transition-colors cursor-pointer disabled:opacity-50"
                  />
                  <svg
                    className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <label htmlFor="consent" className="font-sans text-xs md:text-sm text-neutral-600 font-light leading-relaxed cursor-pointer select-none">
                  Wyrażam zgodę na przetwarzanie moich danych osobowych w celu nawiązania kontaktu. <span className="text-red-500">*</span>
                </label>
              </div>

              {/* Feedback message */}
              {message && (
                <div className={`mb-8 p-4 border text-center text-sm font-bold uppercase tracking-widest ${status === 'success' ? 'border-[#AED2C2] text-[#729F89] bg-[#AED2C2]/10' : 'border-red-200 text-red-600 bg-red-50'}`}>
                  {message}
                </div>
              )}

              {/* Przycisk wyślij */}
              <div className="flex justify-start">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full sm:w-auto bg-transparent border border-black text-foreground hover:bg-black hover:text-white font-bold px-12 py-5 uppercase tracking-widest text-xs transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Wysyłanie..." : "Wyślij wiadomość"}
                </button>
              </div>
            </form>
          </div>

          {/* Prawa kolumna: Zdjęcie */}
          <div className="relative h-full w-full mt-12 lg:mt-0">
            <div className="sticky top-24 w-full aspect-[2/3] lg:aspect-[3/4] relative">
              <Image 
                src="/images/roksana-glowinska-rzeszow-kontakt.jpg" 
                alt="Roksana Głowińska - kontakt"
                fill
                quality={100}
                unoptimized={true}
                className="object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
