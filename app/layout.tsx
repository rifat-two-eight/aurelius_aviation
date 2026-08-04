import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import SmoothScroll from "@/components/SmoothScroll";
import IntroOverlay from "@/components/IntroOverlay/IntroOverlay";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cinzel",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aurelius Aviation | Monumental Quiet Luxury",
  description: "Modern continuation of a great civilization. We preserve aviation assets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${inter.variable}`}>
      <body className="bg-imperial-black text-marble-white font-body overflow-x-hidden antialiased">
        <IntroOverlay />
        <Header />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
