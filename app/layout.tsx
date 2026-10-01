import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({
  subsets: ["latin", "latin-ext"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://roksanaglowinska.pl'),
  title: {
    default: "Roksana Głowińska - Mentorka i Trenerka Fotografów",
    template: "%s | Roksana Głowińska"
  },
  description: "Edukacja biznesowa dla fotografów: marketing, budowanie autentycznej marki, pozyskiwanie klientów, sprzedaż, strategia i mindset z Roksaną Głowińską.",
  keywords: ["mentoring dla fotografów", "szkolenia fotograficzne Rzeszów", "kursy dla fotografów", "marketing dla fotografów", "Roksana Głowińska", "biznes fotograficzny"],
  openGraph: {
    title: "Roksana Głowińska - Mentorka i Trenerka Fotografów",
    description: "Zbuduj dochodowy i mocny biznes fotograficzny. Edukacja biznesowa dla fotografów: marketing, pozyskiwanie klientów, strategia.",
    url: "/",
    siteName: "Roksana Głowińska",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "/images/roksana-glowinska-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Roksana Głowińska - Mentorka Fotografów"
      }
    ]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    }
  }
};

import { CookieBanner } from "@/components/CookieBanner";
import { NewsletterModal } from "@/components/NewsletterModal";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Roksana Głowińska - Mentorka Fotografów",
              "image": "https://roksanaglowinska.pl/images/roksana-glowinska-hero.jpg",
              "url": "https://roksanaglowinska.pl",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Rzeszów",
                "addressCountry": "PL"
              },
              "description": "Edukacja biznesowa dla fotografów: marketing, budowanie autentycznej marki, pozyskiwanie klientów, sprzedaż, strategia i mindset.",
              "sameAs": [
                "https://www.instagram.com/roksanaglowinska/"
              ]
            })
          }}
        />
      </head>
      <body className={`${jost.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        <CookieBanner />
        <NewsletterModal />
      </body>
    </html>
  );
}
