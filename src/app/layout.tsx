import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ClientShell } from "@/components/ClientShell";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Biwash Thapa — Frontend Developer",
    template: "%s | Biwash Thapa",
  },
  description:
    "A passionate Frontend Developer dedicated to crafting immersive, high-performance web experiences. Specializing in modern React ecosystems and performance-driven UI architecture.",
  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Biwash Thapa",
    "Kathmandu",
    "Nepal",
    "Web Developer",
    "Portfolio",
  ],
  authors: [{ name: "Biwash Thapa", url: "https://github.com/Biwash-2002" }],
  creator: "Biwash Thapa",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Biwash Thapa — Frontend Developer",
    description:
      "Crafting immersive, high-performance web experiences with React & Next.js.",
    siteName: "Biwash Thapa Portfolio",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Biwash Thapa — Frontend Developer",
    description:
      "Crafting immersive, high-performance web experiences with React & Next.js.",
    creator: "@biwashthapa",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        <ThemeProvider>
          <ClientShell>{children}</ClientShell>
        </ThemeProvider>
      </body>
    </html>
  );
}

