import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import HeaderNavigation from "@/components/HeaderNavigation";
import FooterComponent from "@/components/FooterComponent";
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
  title: "Biccobs",
  description: "Get the latest products reommended by Biccobs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-background text-foreground">
          <HeaderNavigation />
          <main className="flex-1">{children}</main>
          <FooterComponent />
        </div>
      </body>
    </html>
  );
}
