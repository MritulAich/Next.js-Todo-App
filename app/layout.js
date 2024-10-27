"use client";
import localFont from "next/font/local";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SessionProvider>

        <h1 className="text-4xl text-center mt-8 mb-4 text-green-800">Welcome to my Todo App</h1>
          <hr />
          <nav>
            <ul className="flex justify-center gap-20 text-2xl underline my-4">
              <li><Link href='/'>Home</Link></li>
              <li><Link href='/addList'>Add List</Link></li>
            </ul>
          </nav>
        {children}
        </SessionProvider>
      </body>
    </html>
  );
}
