"use client";

import { bungeeOutline } from "@/app/font";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black py-8 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:px-0 px-5 md:flex-row">
        {/* Logo */}
        <h1 className={`${bungeeOutline.className} text-4xl text-white`}>
          <span className="text-orange-500">ALi</span>_Dev
        </h1>

        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} All rights reserved.
        </p>

        <p className="text-sm text-zinc-400">
          <span className="text-orange-500">&lt;/&gt;</span> Building with
          creativity and code
        </p>
      </div>
    </footer>
  );
}
