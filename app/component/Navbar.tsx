"use client";

import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import Brand from "./Brand";

const links = ["Home", "About", "Projects", "Skills", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const renderLink = (label: string) =>
    label === "Projects" ? (
      <Link
        key={label}
        href="/projects"
        className="text-sm transition-colors hover:text-[#a95132]"
      >
        {label}
      </Link>
    ) : (
      <a
        key={label}
        href={`#${label.toLowerCase()}`}
        className="text-sm transition-colors hover:text-[#a95132]"
      >
        {label}
      </a>
    );

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#ded8cc] bg-[#f5f2eb]">
      <div className="mx-auto flex h-19 max-w-7xl items-center justify-between px-5 lg:px-8">
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
        onClick={() => setOpen(false)}
        className={`fixed inset-x-0 bottom-0 top-19 bg-[#252720]/40 transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
      />

      <div
        className={`absolute inset-x-0 top-full border-b border-[#ded8cc] bg-[#f5f2eb] shadow-xl transition-all duration-300 lg:hidden ${
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <nav aria-label="Mobile navigation" className="mx-auto max-w-7xl px-5 pb-6 pt-2">
          <ul>
            {links.map((label, i) => {
              const isProjects = label === "Projects";
              const className =
                "group flex items-center justify-between border-b border-[#ded8cc] py-4 text-xl font-medium text-[#252720] transition-colors hover:text-[#a95132]";
              const content = (
                <>
                  <span className="flex items-baseline gap-4">
                    <span className="text-xs font-normal tabular-nums text-[#a95132]">
                      0{i + 1}
                    </span>
                    {label}
                  </span>
                  <ArrowRight
                    size={18}
                    className="text-[#a95132] opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100"
                  />
                </>
              );
              return (
                <li key={label}>
                  {isProjects ? (
                    <Link href="/projects" onClick={() => setOpen(false)} className={className}>
                      {content}
                    </Link>
                  ) : (
                    <a
                      href={`#${label.toLowerCase()}`}
                      onClick={() => setOpen(false)}
                      className={className}
                    >
                      {content}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
          <a
            href="https://wa.me/23407086587956"
            className="mt-6 flex items-center justify-center gap-2 bg-[#a95132] py-3.5 font-medium text-[#f5f2eb] transition-colors hover:bg-[#252720]"
          >
            Let&apos;s talk <ArrowRight size={18} />
          </a>
        </nav>
      </div>
    </header>
  );
}
