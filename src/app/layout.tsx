import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Free Marriage Biodata Maker | PDF Download | FreeBiodataMaker",
  description:
    "Create a professional marriage biodata in minutes. Multi-language support. Download high-quality PDF. Free, no signup. English, Hindi, Marathi, Gujarati, Telugu, Bengali.",
  keywords: [
    "free biodata maker",
    "marriage biodata",
    "gujarati biodata",
    "marathi biodata",
    "hindi biodata",
    "biodata PDF",
    "online biodata maker",
  ],
  authors: [{ name: "FreeBiodataMaker" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Free Marriage Biodata Maker",
    description: "Create & download professional marriage biodata PDF. Modern templates.",
    type: "website",
    locale: "en_IN",
  },
  alternates: {
    canonical: "https://freebiodatamaker.com",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#c4a35a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full bg-[#faf8f5] font-sans text-[#1c1917] antialiased"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
