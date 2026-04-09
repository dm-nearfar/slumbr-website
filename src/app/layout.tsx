import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Slumbr | AI Dream Journal App - Record, Analyse & Visualise Your Dreams",
  description:
    "Slumbr is a free AI-powered dream journal app for iPhone. Record your dreams, get instant AI analysis, and watch them come to life as cinematic videos. Download free on the App Store.",
  keywords:
    "dream journal, dream diary, dream app, dream meaning, dream interpretation, AI dream analysis, dream journal app, lucid dreaming, dream tracker, dream recorder, dream visualiser, dream video",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://slumbr.ai",
  },
  openGraph: {
    title: "Slumbr | AI Dream Journal - Record, Analyse & Visualise Your Dreams",
    description:
      "Free AI-powered dream journal for iPhone. Record dreams, get AI analysis, and generate cinematic dream videos.",
    type: "website",
    url: "https://slumbr.ai",
    siteName: "Slumbr",
    locale: "en_GB",
    images: [{ url: "/logo.png", width: 1024, height: 1024, alt: "Slumbr app icon" }],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Slumbr: Dream Journal & AI",
    operatingSystem: "iOS",
    applicationCategory: "LifestyleApplication",
    offers: [
      {
        "@type": "Offer",
        price: "0",
        priceCurrency: "GBP",
        description: "Free plan with 3 AI analyses per month",
      },
      {
        "@type": "Offer",
        price: "5.99",
        priceCurrency: "GBP",
        description: "Pro monthly subscription",
      },
    ],
    url: "https://slumbr.ai",
    downloadUrl:
      "https://apps.apple.com/gb/app/slumbr-dream-journal-ai/id6744979739",
    description:
      "AI-powered dream journal app that analyses your dreams and generates cinematic dream videos.",
    publisher: {
      "@type": "Organization",
      name: "Slumbr LTD",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Slumbr LTD",
    url: "https://slumbr.ai",
    contactPoint: {
      "@type": "ContactPoint",
      email: "contact@slumbr.ai",
      contactType: "customer service",
    },
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${inter.variable} antialiased`}>
      <head>
        {jsonLd.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
