import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "sugOS v0.0.1",
  description: "Created by Alex Domzalski, web developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="theme-color" content="#000"></meta>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex w-screen h-dvh sm:h-screen h-dvh sm:overflow-hidden overflow-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
