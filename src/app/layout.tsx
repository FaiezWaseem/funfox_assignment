import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FunFox - Learn English Online",
  description: "funfox is a website that helps you learn English online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"  />
        <link href="https://fonts.googleapis.com/css2?family=Short+Stack&display=swap" rel="stylesheet" />
      </Head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
