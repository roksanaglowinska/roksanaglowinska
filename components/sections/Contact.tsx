"use client";

import { useState } from "react";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
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
      setMessage(data.message || "Zapisano pomyślnie!");
      setName("");
      setEmail("");
    } catch (error: any) {
      setStatus("error");
      setMessage(error.message || "Wystąpił błąd. Spróbuj ponownie.");
    }
  };

  return (
    <section id="kontakt" className="bg-neutral-50 py-24 md:py-32">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white border border-neutral-200 p-10 md:p-20 text-center">
          
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-foreground mb-6 uppercase tracking-tighter">
            Zapisz się do FOCUSLETTERA
          </h2>
          <p className="text-sm text-black mb-12 uppercase tracking-widest font-light leading-relaxed">
            KRÓTKIE WSKAZÓWKI BIZNESOWE DO KAWY • KODY RABATOWE • PIERWSZEŃSTWO ZAPISÓW DO MOICH PRZESTRZENI • EKSKLUZYWNE MATERIAŁY
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full">
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  disabled={status === "loading"}
                  className="w-full bg-transparent border-b border-neutral-300 text-foreground px-2 py-3 focus:outline-none focus:border-black transition-colors rounded-none text-sm placeholder-neutral-400 disabled:opacity-50" 
                  placeholder="Imię*" 
                />
              </div>
              <div className="w-full">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={status === "loading"}
                  className="w-full bg-transparent border-b border-neutral-300 text-foreground px-2 py-3 focus:outline-none focus:border-black transition-colors rounded-none text-sm placeholder-neutral-400 disabled:opacity-50" 
                  placeholder="Twój najlepszy e-mail" 
                />
              </div>
            </div>
            
            <button 
              type="submit" 
              disabled={status === "loading"}
              className="w-full bg-transparent border border-black text-foreground font-bold py-4 uppercase tracking-widest text-xs hover:bg-black hover:text-white transition-all duration-300 mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Zapisywanie..." : "Zapisuję się"}
            </button>
            
            {message && (
              <p className={`text-sm mt-4 font-bold tracking-wider uppercase ${status === 'success' ? 'text-[#729F89]' : 'text-red-500'}`}>
                {message}
              </p>
            )}

            <p className="text-xs text-black mt-4 font-light">
              Zapisując się wyrażasz zgodę na przetwarzanie danych osobowych w celu wysyłki Focuslettera. Możesz wypisać się w dowolnym momencie.
            </p>
          </form>
          
        </div>
      </div>
    </section>
  );
}
