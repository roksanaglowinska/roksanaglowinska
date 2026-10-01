"use client";

import React, { useState } from "react";

export default function PlatformaPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;
    
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });

      const data = await response.json();

      if (!response.ok && response.status !== 200) {
        throw new Error(data.error || "Wystąpił błąd");
      }

      setStatus("success");
      setMessage("Dziękuję! Zapisałeś się na listę oczekujących.");
      setName("");
      setEmail("");
    } catch (error: any) {
      setStatus("error");
      setMessage(error.message || "Wystąpił błąd. Spróbuj ponownie.");
    }
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-24 flex items-center justify-center relative">
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <span className="font-heading font-bold text-xs uppercase tracking-widest text-[#729F89] mb-4 block">
            WKRÓTCE OTWARCIE
          </span>
          <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-foreground uppercase tracking-tighter mb-6">
            JASNY{" "}
            <span className="relative inline-block">
              <span className="absolute top-[40%] -bottom-1 -inset-x-2 bg-primary/30 -z-10"></span>
              KIERUNEK
            </span>{" "}
            FOTOGRAFKI
          </h1>
          <div className="font-sans text-black font-light text-base md:text-lg mb-8 leading-relaxed max-w-3xl mx-auto space-y-6">
            <p className="font-bold text-xl md:text-2xl tracking-wide uppercase">Jedna społeczność. Jeden kierunek. Jeden krok naraz.</p>
            <p>Subskrypcyjna przestrzeń rozwoju biznesowego dla fotografek, które chcą przestać działać chaotycznie i zacząć rozwijać swój biznes z większą klarownością, regularnością i spokojem.</p>
            <p>Nie potrzebujesz kolejnego miejsca pełnego wiedzy, której nie masz kiedy wdrożyć.<br />Potrzebujesz wiedzieć, na czym skupić się właśnie teraz – i co zrobić krok po kroku.</p>
            <p>W Jasnym Kierunku Fotografki każdego miesiąca otrzymasz konkretny kierunek, plan działania, moje prowadzenie i wsparcie społeczności, które pomogą Ci przejść od „wiem, że powinnam” do „zrobiłam”.</p>
            <p>To miejsce, w którym nie zostajesz sama ze swoimi pytaniami, decyzjami i kolejnymi krokami w biznesie.</p>
          </div>
        </div>

        <div className="bg-white border border-neutral-200 p-10 md:p-20 shadow-sm max-w-4xl mx-auto">
          <h3 className="font-heading font-bold text-2xl md:text-3xl uppercase tracking-widest text-center mb-4">
            OTWARCIE JUŻ WKRÓTCE
          </h3>
          <p className="font-sans text-black font-light text-sm text-center mb-10 max-w-2xl mx-auto">
            Dołącz do listy oczekujących, a jako pierwsza dowiesz się o starcie platformy i otrzymasz dostęp do najlepszych warunków na otwarcie.
          </p>
          <form onSubmit={handleSubmit} className="space-y-8 max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col gap-2 w-full text-left">
                <label htmlFor="name" className="font-sans text-xs font-bold uppercase tracking-widest text-foreground">
                  Imię <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  disabled={status === "loading" || status === "success"}
                  className="border-b border-neutral-300 py-3 bg-transparent text-black focus:outline-none focus:border-black transition-colors font-sans font-light disabled:opacity-50"
                  placeholder="Twoje imię"
                />
              </div>
              
              <div className="flex flex-col gap-2 w-full text-left">
                <label htmlFor="email" className="font-sans text-xs font-bold uppercase tracking-widest text-foreground">
                  Adres e-mail <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={status === "loading" || status === "success"}
                  className="border-b border-neutral-300 py-3 bg-transparent text-black focus:outline-none focus:border-black transition-colors font-sans font-light disabled:opacity-50"
                  placeholder="Twój adres e-mail"
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={status === "loading" || status === "success"}
              className="w-full bg-black text-white border border-black font-bold py-4 uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all duration-300 mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Zapisywanie..." : status === "success" ? "Zapisano pomyślnie!" : "CHCĘ POZNAĆ JASNY KIERUNEK"}
            </button>
            
            {message && (
              <div className={`mt-4 p-3 text-center text-xs font-bold uppercase tracking-widest ${status === 'success' ? 'text-[#729F89] bg-[#AED2C2]/10' : 'text-red-500 bg-red-50'}`}>
                {message}
              </div>
            )}

            <p className="text-xs text-neutral-500 mt-6 font-light text-center leading-relaxed">
              Zapis do listy oczekujących jest bezpłatny i do niczego Cię nie zobowiązuje.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
