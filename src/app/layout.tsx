import type { Metadata } from "next";
import { Luckiest_Guy, Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlobalComponents from "@/components/GlobalComponents";
import StructuredData from "@/components/StructuredData";
import { siteConfig } from "@/lib/siteConfig";

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
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Big Moose Driving Range | Edmonton Golf Practice Facility",
    template: "%s | Big Moose Driving Range",
  },
  description: "Big Moose Driving Range in southwest Edmonton offers 35 elevated mats, premium Titleist balls, affordable bucket pricing, and a 30% senior discount.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    title: "Big Moose Driving Range | Edmonton Golf Practice Facility",
    description: "Practice in southwest Edmonton with elevated mats, premium balls, range targets, mini golf, and affordable bucket pricing.",
    images: [
      {
        url: "/brand/bigmoose-logo-full.png",
        width: 640,
        height: 292,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Big Moose Driving Range | Edmonton Golf Practice Facility",
    description: "Practice in southwest Edmonton with elevated mats, premium balls, range targets, mini golf, and affordable bucket pricing.",
    images: ["/brand/bigmoose-logo-full.png"],
  },
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
