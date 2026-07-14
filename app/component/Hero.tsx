"use client";

import {
  Sparkles,
  Code2,
  Zap,
  MonitorSmartphone,
  ArrowUpRight,
  File,
} from "lucide-react";
import { bungeeOutline } from "@/app/font";
import { BsCircleFill } from "react-icons/bs";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-black text-white">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-87.5 w-87.5 -translate-x-1/2 rounded-full bg-orange-500/20 blur-[200px] lg:h-162.5 lg:w-162.5 lg:blur-[500px]" />

      <div className="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-orange-500/10 blur-[200px] lg:h-72 lg:w-72 lg:blur-[500px]" />

      <div className="absolute right-0 top-40 h-64 w-64 rounded-full bg-orange-600/10 blur-[200px] lg:h-96 lg:w-96 lg:blur-[500px]" />

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-size-[45px_45px]" />

      <div className="relative mx-auto flex min-h-svh max-w-7xl items-center px-5 md:pt-48 pt-36 lg:min-h-screen md:px-0">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">
          {/* LEFT */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 text-sm text-orange-400 backdrop-blur-md">
                <BsCircleFill size={7} />
                Available for Freelance Projects
              </div>
            </div>

            <p className="mt-8 text-sm uppercase tracking-[5px] text-orange-400 sm:text-base">
              Hello, I'm <span className="text-white">Ali Muhammed</span>
            </p>

            <h2 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
              Frontend
              <span className="text-orange-500"> React</span> &
              <span className="text-orange-500"> Next.js </span>
              Developer
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-zinc-400 lg:mx-0 lg:text-lg lg:leading-8">
              I build modern, responsive and high performance web applications
              using React, Next.js and Tailwind CSS. I create fast, beautiful,
              and user friendly interfaces that deliver outstanding user
              experiences.
            </p>

            {/* Buttons */}
            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="https://wa.me/23407086587956"
                className="group flex items-center justify-center gap-2 rounded-full bg-orange-600 px-8 py-4 font-semibold transition hover:bg-orange-500"
              >
                Hire Me
                <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="/Ali-Dev.pdf"
                className="group flex items-center justify-center gap-2 rounded-full border border-orange-500 px-8 py-4 font-semibold text-orange-400 transition hover:bg-orange-600 hover:text-white"
              >
                View Resume
                <File className="transition-transform duration-300 group-hover:-translate-y-1" />
              </a>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-5 text-center lg:flex lg:gap-12 lg:text-center">
              <div>
                <h3 className="text-3xl font-bold text-orange-500 lg:text-4xl">
                  10+
                </h3>
                <p className="mt-2 text-sm text-zinc-400">Projects</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-orange-500 lg:text-4xl">
                  2+
                </h3>
                <p className="mt-2 text-sm text-zinc-400">
                  Years of Experience
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-orange-500 lg:text-4xl">
                  100%
                </h3>
                <p className="mt-2 text-sm text-zinc-400">Responsive</p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center">
            {/* Glow */}
            <div className="absolute h-75 w-75 rounded-full bg-orange-500/20 blur-[80px] sm:h-95 sm:w-95 lg:h-112.5 lg:w-112.5 lg:blur-[100px]" />

            {/* Code Card */}
            <div className="relative w-full max-w-sm rounded-3xl border border-orange-500/20 bg-zinc-900/80 p-6 shadow-2xl backdrop-blur-xl sm:max-w-md lg:p-8">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500" />
                  <span className="h-3 w-3 rounded-full bg-green-500" />
                </div>

                <Code2 className="text-orange-500" />
              </div>

              <pre className="overflow-x-auto text-xs leading-7 text-zinc-300 sm:text-sm">
                {`const developer = {
  name: "Ali Muhammed S.",

  role: "Frontend Developer",

  stack: [
    "React",
    "Next.js",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript"
  ],

  passion: "Building beautiful UI",

  available: true
}`}
              </pre>
            </div>

            {/* Floating Cards */}
            <div className="absolute -left-8 top-10 hidden items-center gap-3 rounded-2xl border border-orange-500/20 bg-zinc-900 px-5 py-3 shadow-xl backdrop-blur-xl lg:flex">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10">
                <Zap size={20} className="text-orange-500" />
              </div>

              <div>
                <h4 className="text-sm font-semibold text-white">
                  Fast Performance
                </h4>
                <p className="text-xs text-zinc-400">
                  Optimized & Lightning Fast
                </p>
              </div>
            </div>

            <div className="absolute -bottom-6 right-0 hidden items-center gap-3 rounded-2xl border border-orange-500/20 bg-zinc-900 px-5 py-3 shadow-xl backdrop-blur-xl lg:flex">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10">
                <MonitorSmartphone size={20} className="text-orange-500" />
              </div>

              <div>
                <h4 className="text-sm font-semibold text-white">Modern UI</h4>
                <p className="text-xs text-zinc-400">Responsive Design</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
