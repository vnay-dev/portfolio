import type { Metadata } from "next";
import { Gabarito, Hanken_Grotesk } from "next/font/google";
import { METADATA } from "./constants";
import { Footer } from "@/components/shared/composite";
import "./globals.css";
import "./typography/index.css";
import "./colors.css";

const gabarito = Gabarito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-gabarito",
  display: "swap",
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hanken",
  display: "swap",
});

export const metadata: Metadata = METADATA;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${gabarito.variable} ${hankenGrotesk.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
