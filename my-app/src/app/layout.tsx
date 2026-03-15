import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
  fallback: ["sans-serif"],
});

export const metadata: Metadata = {
  title: "Cartera - Your Digital Wallet",
  description: "A Personal Project Showcasing E-wallet with Blockchain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={poppins.variable}>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
