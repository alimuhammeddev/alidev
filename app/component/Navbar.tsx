"use client";

import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import Brand from "./Brand";

const links = ["Home", "About", "Projects", "Skills", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const renderLink = (label: string, mobile = false) =>
    label === "Projects" ? (
      <Link
        key={label}
        href="/projects"
        onClick={() => setOpen(false)}
        className={`transition-colors hover:text-[#a95132] ${mobile ? "text-lg" : "text-sm"}`}
      >
        {label}
      </Link>
    ) : (
      <a
        key={label}
        href={`#${label.toLowerCase()}`}
        onClick={() => setOpen(false)}
        className={`transition-colors hover:text-[#a95132] ${mobile ? "text-lg" : "text-sm"}`}
      >
        {label}
      </a>
    );

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#ded8cc] bg-[#f5f2eb]">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-8">
        <Brand />

        <nav aria-label="Main navigation" className="hidden items-center gap-9 lg:flex">
          {links.map((link) => renderLink(link))}
        </nav>

        <a
          href="https://wa.me/23407086587956"
          className="group hidden items-center gap-2 border-b border-[#a95132] pb-1 text-sm font-medium text-[#a95132] transition-colors hover:text-[#252720] lg:flex"
        >
          Let&apos;s talk
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </a>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="p-2 text-[#252720] lg:hidden"
        >
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-[#ded8cc] bg-[#f5f2eb] transition-[max-height,opacity] duration-300 lg:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 border-t-transparent opacity-0"
        }`}
      >
        <nav aria-label="Mobile navigation" className="mx-auto grid max-w-7xl gap-5 px-6 py-6">
          {links.map((link) => renderLink(link, true))}
          <a
            href="https://wa.me/23407086587956"
            className="mt-1 inline-flex items-center gap-2 text-lg font-medium text-[#a95132]"
          >
            Let&apos;s talk <ArrowRight size={18} />
          </a>
        </nav>
      </div>
    </header>
  );
}
