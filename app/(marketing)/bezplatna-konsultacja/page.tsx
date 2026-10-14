import React from "react";
import { Metadata } from "next";
import { FreeConsultationHero } from "@/components/sections/free-consultation/FreeConsultationHero";
import { FreeConsultationAgenda } from "@/components/sections/free-consultation/FreeConsultationAgenda";
import { FreeConsultationQualification } from "@/components/sections/free-consultation/FreeConsultationQualification";
import { FreeConsultationImportantInfo } from "@/components/sections/free-consultation/FreeConsultationImportantInfo";
import { FreeConsultationBooking } from "@/components/sections/free-consultation/FreeConsultationBooking";

export const metadata: Metadata = {
  title: "Bezpłatna Konsultacja Wstępna dla Fotografek | Roksana Głowińska",
  description: "Sprawdź, co dziś blokuje rozwój Twojego biznesu fotograficznego. Krótka, konkretna bezpłatna konsultacja 1:1 online z Roksaną Głowińską.",
  openGraph: {
    title: "Bezpłatna Konsultacja Wstępna dla Fotografek | Roksana Głowińska",
    description: "Sprawdź, co dziś blokuje rozwój Twojego biznesu fotograficznego. Krótka, konkretna bezpłatna konsultacja 1:1 online.",
    url: "https://roksanaglowinska.pl/bezplatna-konsultacja",
    type: "website",
    locale: "pl_PL",
  },
};

export default function FreeConsultationPage() {
  return (
    <main className="bg-white">
      <FreeConsultationHero />
      <FreeConsultationAgenda />
      <FreeConsultationQualification />
      <FreeConsultationImportantInfo />
      <FreeConsultationBooking />
    </main>
  );
}
