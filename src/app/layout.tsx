import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  preload: true,
});

// Get site URL from env or fallback
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://localhost:3000";

export const viewport: Viewport = {
  themeColor: [{ color: "#09090b" }],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "thebid | Web3 Engineer & Smart Contract Developer",
    template: "%s | thebid",
  },
  description:
    "I build high-frequency Telegram bots and smart contract systems. Solidity, Rust, DeFi automation with 99.9% uptime.",
  keywords: [
    "Web3",
    "Solidity",
    "Rust",
    "Smart Contracts",
    "DeFi",
    "Telegram Bots",
    "Blockchain",
    "Crypto",
    "dApp",
  ],
  authors: [{ name: "thebid", url: "https://github.com/thebid1" }],
  creator: "thebid",
  metadataBase: new URL(siteUrl),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "thebid",
    title: "thebid | Web3 Engineer",
    description: "Building smart contract systems + high-speed crypto automation",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@thebidfr_",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-zinc-950 text-zinc-100 min-h-screen dark`}
      >
        <div className="relative min-h-screen flex flex-col dot-grid">
          <div className="fixed inset-0 scanlines pointer-events-none z-50 opacity-30" />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
