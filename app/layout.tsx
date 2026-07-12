import type { Metadata } from "next";
import "./globals.css";
import { geistMono } from "@/app/font";

export const metadata: Metadata = {
  title: "ALi Muhammed",
  description: "ALi Muhammed Frontend Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={geistMono.className}>
        {children}
      </body>
    </html>
  );
};