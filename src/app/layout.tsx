import type { Metadata } from "next";
import { Luckiest_Guy, Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlobalComponents from "@/components/GlobalComponents";
import StructuredData from "@/components/StructuredData";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "600", "800"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600"],
  style: ["normal", "italic"],
});

const brandDisplay = Luckiest_Guy({
  variable: "--font-brand-display",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bigmoosedrivingrange.ca"),
  title: "Big Moose Driving Range | Edmonton's Premier Golf Practice Facility",
  description: "Big Moose Driving Range in southwest Edmonton offers 35 elevated mats, premium Titleist balls, affordable bucket pricing, and a 30% senior discount.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={`${outfit.variable} ${playfair.variable} ${brandDisplay.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <GlobalComponents />
        <StructuredData />
      </body>
    </html>
  );
}
