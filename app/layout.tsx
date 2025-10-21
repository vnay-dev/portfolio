import type { Metadata } from "next";
import { Gabarito, Hanken_Grotesk } from "next/font/google";
import localFont from "next/font/local";
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

const editorial = localFont({
  src: [
    {
      path: "../public/fonts/editorial/PPEditorialNew-Ultralight-BF644b21500d0c0.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/editorial/PPEditorialNew-UltralightItalic-BF644b214ff1e9b.otf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../public/fonts/editorial/PPEditorialNew-Regular-BF644b214ff145f.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/editorial/PPEditorialNew-Italic-BF644b214fb0c0a.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/editorial/PPEditorialNew-Ultrabold-BF644b21500840c.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/editorial/PPEditorialNew-UltraboldItalic-BF644b214faef01.otf",
      weight: "800",
      style: "italic",
    },
  ],
  variable: "--font-editorial",
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
  other: {
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${gabarito.variable} ${hankenGrotesk.variable} ${editorial.variable} antialiased`}>
        <SmoothScrollProvider>
          <Navbar />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
