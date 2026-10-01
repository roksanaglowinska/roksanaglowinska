import React from "react";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { AboutStats } from "@/components/sections/about/AboutStats";
import { AboutJourney } from "@/components/sections/about/AboutJourney";
import { AboutPhotography } from "@/components/sections/about/AboutPhotography";
import { AboutEducation } from "@/components/sections/about/AboutEducation";
import { AboutBrands } from "@/components/sections/about/AboutBrands";
import { AboutTrustedBrands } from "@/components/sections/about/AboutTrustedBrands";
import { AboutSpeaking } from "@/components/sections/about/AboutSpeaking";
import { AboutPhilosophy } from "@/components/sections/about/AboutPhilosophy";
import { AboutInspirations } from "@/components/sections/about/AboutInspirations";
import { AboutLogo } from "@/components/sections/about/AboutLogo";
import { AboutCTA } from "@/components/sections/about/AboutCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "O mnie | Roksana Głowińska - Twój Mentor Fotograficzny",
  description: "Poznaj moją historię. Od pasji do prestiżowego biznesu. Jestem fotografką, właścicielką Liryka Studio i mentorką wspierającą branżę.",
  openGraph: {
    title: "O mnie | Roksana Głowińska - Twój Mentor Fotograficzny",
    description: "Poznaj moją historię. Pomagam ambitnym twórcom budować silne marki.",
    url: "https://roksanaglowinska.pl/o-mnie",
  }
};

export default function OMniePage() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <AboutHero />
      <AboutStats />
      <AboutJourney />
      <AboutPhotography />
      <AboutEducation />
      <AboutBrands />
      <AboutTrustedBrands />
      <AboutSpeaking />
      <AboutInspirations />
      <AboutPhilosophy />
      <AboutLogo />
      <AboutCTA />
    </main>
  );
}
