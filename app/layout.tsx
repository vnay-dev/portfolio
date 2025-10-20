import type { Metadata } from "next";
import { Gabarito, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import "./typography.css";
import { SmoothScrollProvider } from "@/lib/lenis";
import { Navbar } from "@/components/layout";

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

export const metadata: Metadata = {
  title: "Vinay Krishnan",
  description: "A stunning portfolio showcasing my work, skills, and experience",
  keywords: ["portfolio", "web developer", "designer", "creative"],
  authors: [{ name: "Vinay Krishnan" }],
  openGraph: {
    title: "Vinay Krishnan",
    description: "A stunning portfolio showcasing my work, skills, and experience",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vinay Krishnan",
    description: "A stunning portfolio showcasing my work, skills, and experience",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${gabarito.variable} ${hankenGrotesk.variable} antialiased`}>
        <SmoothScrollProvider>
          <Navbar />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
