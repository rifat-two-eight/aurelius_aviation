import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import SmoothScroll from "@/components/SmoothScroll";

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
    <html lang="en">
      <body className="bg-imperial-black text-marble-white font-body overflow-x-hidden antialiased">
        <Header />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
