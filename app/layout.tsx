import type { Metadata } from "next";
import "./globals.css";
import { SmoothScrollProvider } from "@/lib/lenis";

export const metadata: Metadata = {
  title: "Portfolio | Your Name",
  description: "A stunning portfolio showcasing my work, skills, and experience",
  keywords: ["portfolio", "web developer", "designer", "creative"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Portfolio | Your Name",
    description: "A stunning portfolio showcasing my work, skills, and experience",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Your Name",
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
      <body className="antialiased">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
