import { MentoringHero } from "@/components/sections/mentoring/MentoringHero";
import { MentoringPainPoints } from "@/components/sections/mentoring/MentoringPainPoints";
import { MentoringCoreProblem } from "@/components/sections/mentoring-v2/MentoringCoreProblem";
import { MentoringSolution } from "@/components/sections/mentoring/MentoringSolution";
import { MentoringProcess } from "@/components/sections/mentoring-v2/MentoringProcess";
import { MentoringMap } from "@/components/sections/mentoring-v2/MentoringMap";
import { MentoringPricing } from "@/components/sections/mentoring-v2/MentoringPricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { MentoringVsConsultation } from "@/components/sections/mentoring-v2/MentoringVsConsultation";
import { MentoringClosing } from "@/components/sections/mentoring-v2/MentoringClosing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentoring Fotograficzny 1:1 | Roksana Głowińska",
  description: "Zbuduj silną i dochodową markę fotograficzną bez stresu i chaosu. Osobisty mentoring biznesowy dla ambitnych fotografek. Zwiększ sprzedaż i zbuduj prestiż.",
  openGraph: {
    title: "Mentoring Fotograficzny 1:1 | Roksana Głowińska",
    description: "Zbuduj silną i dochodową markę fotograficzną bez stresu i chaosu. Osobisty mentoring biznesowy dla ambitnych fotografek.",
    url: "https://roksanaglowinska.pl/mentoring",
  }
};

export default function MentoringPage() {
  return (
    <main className="bg-white">
      <MentoringHero />
      <MentoringPainPoints />
      <MentoringCoreProblem />
      <MentoringSolution />
      <MentoringProcess />
      <MentoringMap />
      
      <MentoringPricing />
      <Testimonials />
      <FAQ />
      <MentoringVsConsultation />
      <MentoringClosing />
    </main>
  );
}
