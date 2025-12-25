import React from "react";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import CartProvider from "../context/CartProvider"; 
import Image from "next/image";
import logo from '../logo.png'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata={
  title:{
    default: "Yatun Khaijan",
    template: "%s | Yatun Khaijan"
  },
  description: "Best Fastfood in Noakhali"
}

const poppins = Poppins({
  weight:['400', '500', '700'],
  subsets: ["latin"],
})

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <header className="flex justify-between items-center gap-5 my-3 bg-blue-300 p-5">
          <Link className="flex justify-center items-center gap-2" href="/">
          {/* <img className="w-[100px]" src={logo} alt="" /> */}
           <Image width={100} h={100} src={logo} alt={'nothing'} />
            <h1 className="text-2xl font-bold">KHAIJAN</h1>
          </Link>
          <div className="flex gap-5">
            <Link prefetch={false} href="/foods" className="bg-blue-700 rounded-2xl p-2 px-5">
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
