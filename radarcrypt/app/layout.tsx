import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components-1/Header";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RadarCrypt",
  description: "Site de monitoramento de Moedas e Crypto moedas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
