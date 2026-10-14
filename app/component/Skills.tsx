"use client";

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
  SiFirebase,
} from "react-icons/si";
import { motion } from "framer-motion";
import { BsCircleFill } from "react-icons/bs";

const skills = [
  { name: "HTML5", icon: SiHtml5, color: "text-[#E34F26]" },
  { name: "CSS3", icon: SiCss, color: "text-[#1572B6]" },
  { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
  { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
  { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-[#252720]" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
  { name: "Firebase", icon: SiFirebase, color: "text-[#FFCA28]" },
  { name: "Git", icon: SiGit, color: "text-[#F05032]" },
  { name: "GitHub", icon: SiGithub, color: "text-[#252720]" },
  { name: "Figma", icon: SiFigma, color: "text-[#F24E1E]" },
  { name: "Vercel", icon: SiVercel, color: "text-[#252720]" },
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
      className="border-y border-[#ded8cc] bg-[#efebe3] text-[#252720]"
    >
      <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        {/* Heading */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          className="mb-10 text-center"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 border-b border-[#a95132] pb-2 text-xs font-medium uppercase tracking-[0.16em] text-[#a95132]"
          >
            <BsCircleFill size={7} />
            The Technology Behind Every Project
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="mt-6 text-3xl font-medium tracking-[-0.04em] md:text-5xl"
          >
            Technologies I <span className="text-[#a95132]">Work With</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-4 max-w-2xl text-[#716f66]"
          >
            Technologies I use to build fast, modern, responsive and accessible
            websites and web applications.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
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
                className="group border border-[#d9d2c6] bg-[#f5f2eb] p-6 transition-colors hover:border-[#a95132]"
              >
                <div className="flex flex-col items-center">
                  <motion.div transition={{ duration: 0.25 }}>
                    <Icon
                      size={52}
                      className={`${skill.color} transition-transform duration-300`}
                      aria-hidden="true"
                      focusable="false"
                    />
                  </motion.div>

                  <h3 className="mt-4 text-center text-sm font-medium text-[#55564f]">
                    {skill.name}
                  </h3>
                </div>

                <div className="mt-5 h-px w-0 bg-[#a95132] transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
