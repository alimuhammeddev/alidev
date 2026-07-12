"use client";

import {
  User,
  Award,
  Briefcase,
  Code2,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-black md:py-36 py-28 text-white"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-32 h-80 w-80 rounded-full bg-orange-500/10 blur-[140px]" />

      <div className="absolute right-0 bottom-20 h-96 w-96 rounded-full bg-orange-600/10 blur-[180px]" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-size-[45px_45px]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-0">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-sm text-orange-400 backdrop-blur-xl">
              <User size={16} />
              About Me
            </div>

            <h2 className="mt-8 text-2xl font-bold leading-tight md:text-4xl">
              Passionate About Building
              <span className="text-orange-500"> Beautiful </span>
              Digital Experiences.
            </h2>

            <p className="mt-8 md:text-lg text-base leading-8 text-zinc-400">
              I'm Ali, a Frontend Developer specializing in React,
              Next.js and Tailwind CSS. I enjoy turning ideas into
              modern, responsive and high performance website and web applications
              with clean code and beautiful interfaces.
            </p>

            <p className="mt-6 md:text-lg text-base leading-8 text-zinc-400">
              My goal is to create products that are fast, accessible,
              user friendly and visually appealing while delivering the
              best experience for every user.
            </p>

            <div className="mt-10 space-y-5">
              {[
                "Modern Responsive Websites",
                "React & Next.js Development",
                "Beautiful UI/UX Implementation",
                "Performance Optimization",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2
                    size={22}
                    className="text-orange-500"
                  />

                  <span className="text-zinc-300">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#projects"
              className="group mt-10 inline-flex items-center gap-2 rounded-full bg-orange-500 px-8 py-4 font-semibold transition hover:bg-orange-600"
            >
              View Projects

              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-orange-500/10 blur-3xl" />

            <div className="relative rounded-3xl border border-orange-500/20 bg-zinc-900/80 p-4 backdrop-blur-xl">
              <div className="grid gap-6">
                <div className="flex items-center gap-5 rounded-2xl border border-orange-500/10 bg-black/40 p-6">
                  <div className="rounded-xl bg-orange-500/10 p-4">
                    <Code2 className="text-orange-500" />
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      Clean Code
                    </h3>

                    <p className="mt-1 text-sm text-zinc-400">
                      Scalable and maintainable code structure.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-5 rounded-2xl border border-orange-500/10 bg-black/40 p-6">
                  <div className="rounded-xl bg-orange-500/10 p-4">
                    <Briefcase className="text-orange-500" />
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      Real Projects
                    </h3>

                    <p className="mt-1 text-sm text-zinc-400">
                      Experience building production-ready web apps.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-5 rounded-2xl border border-orange-500/10 bg-black/40 p-6">
                  <div className="rounded-xl bg-orange-500/10 p-4">
                    <Award className="text-orange-500" />
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      Continuous Learning
                    </h3>

                    <p className="mt-1 text-sm text-zinc-400">
                      Always exploring new technologies and best practices.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-5">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-orange-500">
                    10+
                  </h3>

                  <p className="mt-2 text-sm text-zinc-400">
                    Projects
                  </p>
                </div>

                <div className="text-center">
                  <h3 className="text-3xl font-bold text-orange-500">
                    2+
                  </h3>

                  <p className="mt-2 text-sm text-zinc-400">
                    Years of Experience
                  </p>
                </div>

                <div className="text-center">
                  <h3 className="text-3xl font-bold text-orange-500">
                    100%
                  </h3>

                  <p className="mt-2 text-sm text-zinc-400">
                    Responsive
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};