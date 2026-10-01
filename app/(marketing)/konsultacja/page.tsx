import React from "react";
import { ConsultationHero } from "@/components/sections/consultation/ConsultationHero";
import { ConsultationPainPoints } from "@/components/sections/consultation/ConsultationPainPoints";
import { ConsultationCoreProblem } from "@/components/sections/consultation/ConsultationCoreProblem";
import { ConsultationTopics } from "@/components/sections/consultation/ConsultationTopics";
import { ConsultationProcess } from "@/components/sections/consultation/ConsultationProcess";
import { ConsultationPricing } from "@/components/sections/consultation/ConsultationPricing";
import { ConsultationTestimonials } from "@/components/sections/consultation/ConsultationTestimonials";
import { ConsultationFAQ } from "@/components/sections/consultation/ConsultationFAQ";
import { ConsultationVsMentoring } from "@/components/sections/consultation/ConsultationVsMentoring";
import { ConsultationClosing } from "@/components/sections/consultation/ConsultationClosing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Konsultacje Biznesowe dla Fotografów | Roksana Głowińska",
  description: "Indywidualne konsultacje strategiczne dla fotografów. Rozwiąż problemy w swoim biznesie, omów cennik i strategię ze sprawdzonym mentorem.",
  openGraph: {
    title: "Konsultacje Biznesowe dla Fotografów | Roksana Głowińska",
    description: "Rozwiąż problemy w swoim biznesie fotograficznym podczas indywidualnej konsultacji strategicznej.",
    url: "https://roksanaglowinska.pl/konsultacja",
  }
};

export default function KonsultacjaPage() {
  return (
    <main className="bg-white">
      <ConsultationHero />
      <ConsultationPainPoints />
      <ConsultationCoreProblem />
      <ConsultationTopics />
      <ConsultationProcess />
      <ConsultationPricing />
      <ConsultationTestimonials />
      <ConsultationFAQ />
      <ConsultationVsMentoring />
      <ConsultationClosing />
    </main>
  );
}
