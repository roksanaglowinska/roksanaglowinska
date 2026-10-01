import { ContactForm } from "@/components/sections/ContactForm";
import { FAQ } from "@/components/sections/FAQ";
import { InstagramFeed } from "@/components/sections/InstagramFeed";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt | Roksana Głowińska - Mentorka Fotografów",
  description: "Skontaktuj się ze mną. Masz pytania o mentoring, szkolenia lub chcesz podjąć współpracę? Napisz wiadomość i porozmawiajmy.",
  openGraph: {
    title: "Kontakt | Roksana Głowińska - Mentorka Fotografów",
    description: "Masz pytania o mentoring, szkolenia lub chcesz podjąć współpracę? Napisz wiadomość.",
    url: "https://roksanaglowinska.pl/kontakt",
  }
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <ContactForm />
      <FAQ />
      <InstagramFeed />
    </main>
  );
}
