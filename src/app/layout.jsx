import React from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import CartProvider from "../context/CartProvider"; // ✅ relative path & default import

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="flex justify-between items-center gap-5 my-3 bg-blue-300 p-5">
          <Link href="/">
            <h1 className="text-2xl font-bold">KHAIJAN</h1>
          </Link>
          <div className="flex gap-5">
            <Link href="/foods" className="bg-blue-700 rounded-2xl p-2 px-5">
              Food
            </Link>
            <Link href="/reviews" className="bg-blue-700 rounded-2xl p-2 px-5">
              Reviews
            </Link>
          </div>
        </header>

        <main className="px-5 py-5">
          <CartProvider>
            {children}
          </CartProvider>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
