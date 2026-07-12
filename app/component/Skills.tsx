"use client";

import { Sparkles, Code2 } from "lucide-react";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiFigma,
  SiVercel,
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: SiHtml5, color: "text-[#E34F26]" },
  { name: "CSS3", icon: SiCss, color: "text-[#1572B6]" },
  { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
  { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
  { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
  { name: "VS Code", icon: Code2, color: "text-[#7952B3]" },
  { name: "Git", icon: SiGit, color: "text-[#F05032]" },
  { name: "GitHub", icon: SiGithub, color: "text-white" },
  { name: "Figma", icon: SiFigma, color: "text-[#F24E1E]" },
  { name: "Vercel", icon: SiVercel, color: "text-white" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-black py-24 text-white"
    >
      {/* Background */}
      <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-orange-500/10 blur-[150px]" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-size-[45px_45px]" />
      <div className="relative mx-auto max-w-7xl md:px-0 px-5">
        {/* Heading */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 text-sm text-orange-400 backdrop-blur">
            <Sparkles size={16} />
            Frontend Technologies
          </div>

          <h2 className="mt-6 text-2xl font-bold md:text-4xl">
            Technologies I <span className="text-orange-500">Work With</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-zinc-400">
            Technologies I use to build fast, modern, responsive and accessible
            web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.name}
                className="group rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]"
              >
                <div className="flex flex-col items-center">
                  <Icon
                    size={52}
                    className={`${skill.color} transition-transform duration-300 group-hover:scale-110`}
                  />

                  <h3 className="mt-4 text-center text-sm font-medium text-zinc-300">
                    {skill.name}
                  </h3>
                </div>

                <div className="mt-5 h-1 w-0 rounded-full bg-orange-500 transition-all duration-500 group-hover:w-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};