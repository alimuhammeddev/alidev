"use client";

import { FolderGit2, ArrowUpRight } from "lucide-react";

import nilebrew from "./assets/nilebrew.png";
import tomato from "./assets/tomato.png";
import clicknshop from "./assets/clicknshop.png";
import fusion from "./assets/fusion.png";
import analytica from "./assets/analytica.png";
import avs from "./assets/avs.png";
import fashionfit from "./assets/fashionfit.png";
import avion from "./assets/avion.png";
import techhub from "./assets/techhub.png";
import travelworld from "./assets/travelworld.png";
import Link from "next/link";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Nile Brew",
    description:
      "A modern coffee shop website showcasing premium brews, menu highlights, and a seamless customer experience.",
    image: nilebrew,
    technologies: [
      "Next.js",
      "Framer Motion",
      "Tailwind CSS",
      "TypeScript",
      "Paystack",
    ],
    github: "https://github.com/alimuhammeddev/nilebrew",
    live: "https://nilebrew-dl9u.vercel.app/",
  },
  {
    title: "Tomato",
    description:
      "A food ordering app with an intuitive menu, shopping cart, and smooth order management experience.",
    image: tomato,
    technologies: ["React.js", "Tailwind CSS", "Context API"],
    github: "https://github.com/alimuhammeddev/Tomato",
    live: "https://tomato-zeta.vercel.app/",
  },
  {
    title: "ClickNShop",
    description:
      "ClickNShop is an e-commerce website where users can order products and items online with ease.",
    image: clicknshop,
    technologies: ["Next.js", "Tailwind CSS", "Stripe", "Zustand"],
    github: "https://github.com/alimuhammeddev/clicknshop",
    live: "https://clicknshop-six.vercel.app/",
  },
  {
    title: "Fusion Unity",
    description:
      "Official website of Fusion Unity NGO, promoting education, advocacy, humanitarian support, and community development.",
    image: fusion,
    technologies: ["Next.js", "Tailwind CSS"],
    github: "https://github.com/alimuhammeddev/fusionunity",
    live: "https://www.fusionunity.org/",
  },
  {
    title: "Analytica Haven",
    description:
      "A technology community platform connecting innovators, learners, and professionals through digital experiences.",
    image: analytica,
    technologies: ["React.js", "Tailwind CSS"],
    github: "https://github.com/alimuhammeddev/Analytica-Haven",
    live: "https://www.analyticahaven.org/",
  },
  {
    title: "AVS Consulting",
    description:
      "A professional consulting website designed to showcase business services with a clean, modern interface.",
    image: avs,
    technologies: ["React.js", "Tailwind CSS"],
    github: "https://github.com/alimuhammeddev/Business-Consulting",
    live: "https://business-consulting-mu.vercel.app/",
  },
  {
    title: "Fashion Fit",
    description:
      "An online fashion store featuring stylish collections, product browsing, and an easy shopping experience.",
    image: fashionfit,
    technologies: ["React.js", "Tailwind CSS"],
    github: "https://github.com/alimuhammeddev/Fashion-Fit",
    live: "https://fashion-fit-nine.vercel.app/",
  },
  {
    title: "Avion",
    description:
      "A modern furniture store landing page highlighting elegant designs and premium home décor collections.",
    image: avion,
    technologies: ["React.js", "Tailwind CSS"],
    github: "https://github.com/alimuhammeddev/Avion",
    live: "https://avion-pink.vercel.app/",
  },
  {
    title: "Tech Hub",
    description:
      "A sleek landing page for a tech startup or innovation hub focused on growth and collaboration.",
    image: techhub,
    technologies: ["React.js", "Tailwind CSS"],
    github: "https://github.com/alimuhammeddev/Techhub",
    live: "https://techhub-delta.vercel.app/",
  },
  {
    title: "Travel World",
    description:
      "A travel booking website helping users discover destinations, plan trips, and explore unforgettable adventures.",
    image: travelworld,
    technologies: ["React.js", "Tailwind CSS"],
    github: "https://github.com/alimuhammeddev/TravelWorld",
    live: "https://travel-world-rho.vercel.app/",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
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
      duration: 0.7,
    },
  },
};

const card = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
    },
  },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#f5f2eb] text-[#252720]"
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
          className="mb-12 text-center"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 border-b border-[#a95132] pb-2 text-xs font-medium uppercase tracking-[0.16em] text-[#a95132]"
          >
            <FolderGit2 size={16} />
            Featured Projects
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="mt-6 text-3xl font-medium tracking-[-0.04em] md:text-5xl"
          >
            Selected <span className="text-[#a95132]">work</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-4 max-w-2xl text-[#716f66]"
          >
            A collection of projects built with React, Next.js, Tailwind CSS,
            and TypeScript focusing on beautiful UI, scalability and
            performance.
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.slice(0, 3).map((project, index) => (
            <motion.div
              key={project.title}
              variants={card}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </motion.div>
        <div className="mt-10 flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 border border-[#a95132] px-6 py-3 text-sm font-medium text-[#a95132] transition-colors hover:bg-[#a95132] hover:text-[#fffaf2]"
          >
            See All Projects
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
