import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sandrill - Beach Storage Solutions | Secure Your Beach Essentials",
  description: "Discover Sandrill's innovative beach storage solutions. From sand anchors to collapsible storage, keep your beach essentials safe and organized. Perfect for beachgoers, families, and outdoor enthusiasts.",
  keywords: "beach storage, sand anchor, beach safety, collapsible storage, beach essentials, outdoor storage",
  authors: [{ name: "Sandrill" }],
  openGraph: {
    title: "Sandrill - Beach Storage Solutions",
    description: "Secure your beach essentials with Sandrill's innovative storage solutions",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
