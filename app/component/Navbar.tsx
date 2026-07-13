"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowRight, Star } from "lucide-react";
import { bungeeOutline } from "@/app/font";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["Home", "About", "Projects", "Skills", "Contact"];

  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
        scrolled ? "top-0" : "top-5"
      }`}
    >
      {/* Navbar Background */}
      <div
        className={`border border-orange-500/20 bg-black/95 backdrop-blur-xl shadow-[0_8px_35px_rgba(249,115,22,0.18)] transition-all duration-700 ease-in-out ${
          scrolled ? "rounded-none" : "mx-4 rounded-full"
        }`}
      >
        {/* Navbar Content */}
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between md:px-0 px-5">
          {/* Logo */}
          <a href="/" className="group flex items-center gap-2">
            <Star
              size={15}
              className="fill-orange-500 text-orange-500 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
            />

            <h1 className={`${bungeeOutline.className} text-4xl text-white`}>
              <span className="text-orange-500">ALi</span>_Dev
            </h1>

            <Star
              size={15}
              className="fill-orange-500 text-orange-500 transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-12 lg:flex">
            {links.map((link) =>
              link === "Projects" ? (
                <Link
                  key={link}
                  href="/projects"
                  className="group relative text-[15px] font-medium text-zinc-300 transition-colors duration-300 hover:text-orange-400"
                >
                  {link}
                  <span className="absolute -bottom-2 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-orange-500 transition-all duration-300 group-hover:w-full" />
                </Link>
              ) : (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="group relative text-[15px] font-medium text-zinc-300 transition-colors duration-300 hover:text-orange-400"
                >
                  {link}
                  <span className="absolute -bottom-2 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-orange-500 transition-all duration-300 group-hover:w-full" />
                </a>
              ),
            )}
          </nav>

          {/* CTA */}
          <a
            href="https://wa.me/23407086587956"
            className="group relative hidden items-center justify-center overflow-hidden rounded-full border border-orange-500 px-7 py-3 lg:flex"
          >
            <span className="absolute inset-0 origin-left scale-x-0 rounded-full bg-orange-500 transition-transform duration-500 ease-out group-hover:scale-x-100" />

            <span className="relative z-10 flex items-center gap-2 font-medium text-orange-400 transition-colors duration-500 group-hover:text-white">
              Let's Talk
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </span>
          </a>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="rounded-full p-2 text-orange-500 transition hover:bg-orange-500/10 lg:hidden"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-500 lg:hidden ${
          open ? "max-h-125 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className={`border border-orange-500/20 bg-zinc-900/95 p-6 shadow-2xl backdrop-blur-xl transition-all duration-700 ${
            scrolled ? "rounded-none" : "mx-4 mt-4 rounded-3xl"
          }`}
        >
          <div className="mx-auto max-w-7xl">
            <nav className="flex flex-col gap-5">
              {links.map((link) =>
                link === "Projects" ? (
                  <Link
                    key={link}
                    href="/projects"
                    onClick={() => setOpen(false)}
                    className="text-base font-medium text-zinc-300 transition-all duration-300 hover:translate-x-2 hover:text-orange-400"
                  >
                    {link}
                  </Link>
                ) : (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    className="text-lg font-medium text-zinc-300 transition-all duration-300 hover:translate-x-2 hover:text-orange-400"
                  >
                    {link}
                  </a>
                ),
              )}

              <a
                href="https://wa.me/23407086587956"
                className="mt-4 flex items-center justify-center gap-2 rounded-full bg-orange-500 py-3 font-medium text-white transition-all duration-300 hover:bg-orange-600"
              >
                Let's Talk
                <ArrowRight size={18} />
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
