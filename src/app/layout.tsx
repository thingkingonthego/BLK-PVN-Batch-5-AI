import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BLK PVN Batch 5 — Generative AI & Innovation Hub",
  description:
    "Portal resmi dan showcase inovasi program pelatihan vokasi intensif Generative AI & Autonomous Agent BLK PVN Batch 5. Mencetak talenta AI unggul masa depan Indonesia.",
  keywords: [
    "BLK PVN",
    "Generative AI",
    "Batch 5",
    "Pelatihan AI",
    "Talenta Digital",
    "Vokasi Kemnaker",
    "Machine Learning",
    "Prompt Engineering",
    "Next.js AI",
  ],
  authors: [{ name: "BLK PVN Batch 5 AI Trainees" }],
  openGraph: {
    title: "BLK PVN Batch 5 — Generative AI Hub",
    description:
      "Showcase inovasi karya talenta kecerdasan buatan BLK PVN Batch 5 dengan fitur interaktif AI Playground dan Live Dashboard.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${geistSans.variable} ${geistMono.variable} dark`}>
      <body className="min-h-screen flex flex-col bg-[#090d16] text-slate-100 antialiased selection:bg-indigo-500/30 selection:text-indigo-200">
        {children}
      </body>
    </html>
  );
}
