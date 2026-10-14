"use client";

import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  File,
  MonitorSmartphone,
  Zap,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-[#ded8cc] bg-[#f5f2eb] text-[#252720]"
    >
      <div className="mx-auto grid min-h-[760px] max-w-7xl items-center gap-16 px-5 pb-20 pt-32 md:pt-36 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-8 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-[#a95132]">
            <span className="h-px w-8 bg-[#a95132]" />
            Independent web developer · Abuja, Nigeria
          </p>

          <h1 className="text-5xl font-medium leading-[1.04] tracking-[-0.065em] sm:text-6xl lg:text-[clamp(4rem,6.4vw,6.4rem)]">
            Thoughtful
            <br />
            websites,
            <br />
            <span className="font-normal italic text-[#a95132]">
              built to work.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-8 text-[#716f66] sm:text-lg">
            I&apos;m Ali Muhammed, a frontend developer partnering with ambitious
            businesses to turn good ideas into fast, memorable digital
            experiences.
          </p>

          <div className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-center">
            <a
              href="https://wa.me/23407086587956"
              className="group inline-flex items-center justify-center gap-3 bg-[#a95132] px-7 py-4 text-sm font-medium text-[#fffaf2] transition-colors hover:bg-[#87412b]"
            >
              Start a project
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href="/Ali Resume.pdf"
              className="inline-flex items-center justify-center gap-2 px-3 py-3 text-sm font-medium text-[#252720] transition-colors hover:text-[#a95132]"
            >
              <File size={16} />
              View résumé
            </a>
          </div>

          <div className="mt-16 grid max-w-lg grid-cols-3 border-t border-[#d9d2c6] pt-6">
            {[
              ["10+", "Projects delivered"],
              ["4+", "Years building"],
              ["100%", "Responsive"],
            ].map(([value, label]) => (
              <div key={label} className="pr-3">
                <p className="text-2xl font-medium tracking-tight text-[#252720] sm:text-3xl">
                  {value}
                </p>
                <p className="mt-2 text-xs leading-5 text-[#716f66] sm:text-sm">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[510px] lg:ml-auto">
          <div className="border border-[#353a33] bg-[#252a25] p-6 text-[#e6e2d8] sm:p-9">
            <div className="mb-10 flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#aeb0a4]">
                  A good website does more
                </p>
                <p className="mt-2 text-sm text-white">Than look the part.</p>
              </div>
              <Code2 size={20} className="text-[#d58b69]" aria-hidden="true" />
            </div>

            <div className="space-y-6 font-mono text-xs leading-6 sm:text-sm">
              <p>
                <span className="text-[#d58b69]">const</span>{" "}
                <span className="text-white">yourNextWebsite</span> = {"{"}
              </p>
              <div className="space-y-3 pl-5 text-[#c6c6ba]">
                <p>
                  purpose: <span className="text-[#d8b695]">&quot;clear&quot;</span>,
                </p>
                <p>
                  performance:{" "}
                  <span className="text-[#d8b695]">&quot;lightning fast&quot;</span>,
                </p>
                <p>
                  design:{" "}
                  <span className="text-[#d8b695]">&quot;made for people&quot;</span>,
                </p>
                <p>
                  mobile: <span className="text-[#d8b695]">true</span>,
                </p>
                <p>
                  readyToGrow: <span className="text-[#d8b695]">true</span>,
                </p>
              </div>
              <p>{"}"}</p>
            </div>

            <div className="mt-10 grid grid-cols-2 border-t border-white/10 pt-6">
              <div className="flex items-center gap-3 pr-4">
                <Zap size={17} className="shrink-0 text-[#d58b69]" />
                <span className="text-xs leading-5 text-[#d3d0c6]">
                  Built for speed
                </span>
              </div>
              <div className="flex items-center gap-3 border-l border-white/10 pl-4">
                <MonitorSmartphone
                  size={17}
                  className="shrink-0 text-[#d58b69]"
                />
                <span className="text-xs leading-5 text-[#d3d0c6]">
                  Designed for every screen
                </span>
              </div>
            </div>
          </div>

          <a
            href="#about"
            className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#716f66] transition-colors hover:text-[#a95132]"
          >
            Explore the portfolio <ArrowDown size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
