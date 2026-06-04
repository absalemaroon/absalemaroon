import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Absalem Aroon | Blockchain & DeFi Researcher",
  description:
    "Absalem Aroon is a Blockchain & DeFi Researcher, Web3 Strategist, and Founder of Absalex Labs. Researching decentralized systems, blockchain protocols, trust infrastructure, and emerging Web3 ecosystems.",
  keywords: [
    "Blockchain Research",
    "DeFi",
    "Web3",
    "Absalex Labs",
    "Cryptography",
    "Distributed Systems",
    "Security Research",
  ],
  authors: [{ name: "Absalem Aroon" }],
  openGraph: {
    title: "Absalem Aroon | Blockchain & DeFi Researcher",
    description:
      "Blockchain & DeFi Researcher, Web3 Strategist, and Founder of Absalex Labs.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Absalem Aroon | Blockchain & DeFi Researcher",
    description:
      "Blockchain & DeFi Researcher, Web3 Strategist, and Founder of Absalex Labs.",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} bg-background`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
