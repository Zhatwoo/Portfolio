"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import FloatingBackground from "./components/FloatingBackground";
import Header from "./components/header";
import Footer from "./components/footer";

import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isVerification = pathname === "/verification";

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}>
        {/* Conditional render: Hide on /verification */}
        {!isVerification && <FloatingBackground />}
        {!isVerification && <Header />}

        {children}

        {!isVerification && <Footer />}
      </body>
    </html>
  );
}
