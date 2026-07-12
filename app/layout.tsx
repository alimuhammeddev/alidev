import type { Metadata } from "next";
import "./globals.css";
import { geistMono } from "@/app/font";

export const metadata: Metadata = {
  title: "ALi_Dev",
  description: "Frontend Developer Portfolio",
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