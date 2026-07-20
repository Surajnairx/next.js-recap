import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/header";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nexora Blog",
  description: "A minimalist blog app buid using Next.js App Router",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className=" min-h-dvh bg-zinc-200 text-zinc-950 flex flex-col px-20">
          
        <Header/>

          <div className="mx-auto flex flex-1 w-full flex-col justify-between  border-0 bg-white text-black">
            <main className=" px-4 py-8 sm:px-6 sm:py-10">{children}</main>

            <footer className="flex h-14 items-center border-t border-zinc-300 px-4 text-sm text-zinc-500 sm:px-6">
              2026 Next Blog
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
