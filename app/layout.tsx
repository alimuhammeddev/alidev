import type { Metadata } from "next";
import "./globals.css";
import { geistMono } from "@/app/font";

export const metadata: Metadata = {
  title: "Ali Muhammed S.",
  description: "Ali Muhammed S. - Frontend Developer",
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