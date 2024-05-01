import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { MainNav } from "@/components/main-nav";
import MainFooter from "@/components/main-footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zero One - Transforming Businesses with AI in Sri Lanka",
  description:
    "At Zero One, we harness the power of advanced AI to elevate and automate business processes, offering tailored solutions for Sri Lankan enterprises. Explore the future of business transformation with us.",
  openGraph: {
    title: "Zero One | AI Solutions in Sri Lanka",
    description:
      "Leading the digital transformation with AI-powered tools designed to revolutionize businesses in Sri Lanka.",
    url: "https://zero-one.online", // Change this to your actual domain
    siteName: "Zero One",
    images: [
      {
        url: "https://zero-one.online/logo.png", // Replace with your actual Open Graph image URL
        width: 1200, // Adjust according to your image's dimensions
        height: 630, // It's a common size for Open Graph images (1.91:1 aspect ratio)
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="shortcut icon" href="/public/favicon.ico" />
        <link rel="canonical" href="https://zero-one.online" />
      </head>
      <body className={inter.className}>
        <MainNav />
        {children}
        <MainFooter />
      </body>
    </html>
  );
}
