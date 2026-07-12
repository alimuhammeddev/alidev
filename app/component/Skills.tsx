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
import { motion } from "framer-motion";

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

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const card = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.9,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-black text-white"
    >
      {/* Background */}
      <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-orange-500/10 blur-[150px]" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-size-[45px_45px]" />
      <div className="relative mx-auto max-w-7xl md:px-0 px-5 mt-24">
        {/* Heading */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: false,
            amount: 0.3,
          }}
          className="mb-16 text-center"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 text-sm text-orange-400 backdrop-blur"
          >
            <Sparkles size={16} />
            Frontend Technologies
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="mt-6 text-2xl font-bold md:text-4xl"
          >
            Technologies I <span className="text-orange-500">Work With</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-2xl text-zinc-400"
          >
            Technologies I use to build fast, modern, responsive and accessible
            web applications.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: false,
            amount: 0.15,
          }}
          className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
        >
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                variants={card}
                whileHover={{
                  transition: {
                    duration: 0.25,
                  },
                }}
                className="group rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]"
              >
                <div className="flex flex-col items-center">
                  <motion.div
                    whileHover={{
                      rotate: 8,
                      scale: 1.15,
                    }}
                    transition={{ duration: 0.25 }}
                  >
                    <Icon
                      size={52}
                      className={`${skill.color} transition-transform duration-300`}
                    />
                  </motion.div>

                  <h3 className="mt-4 text-center text-sm font-medium text-zinc-300">
                    {skill.name}
                  </h3>
                </div>

                <div className="mt-5 h-1 w-0 rounded-full bg-orange-500 transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
