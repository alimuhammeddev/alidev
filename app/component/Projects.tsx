"use client";

import { Code2, FolderGit2, ExternalLink, ArrowUpRight } from "lucide-react";

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

import Image from "next/image";
import { motion } from "framer-motion";

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

const image = {
  hidden: {
    opacity: 0,
    scale: 1.1,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.9,
    },
  },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-black text-white"
    >
      {/* Background */}
      <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-orange-500/10 blur-[150px]" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-size-[45px_45px]" />

      <div className="relative mx-auto max-w-7xl md:px-0 px-5 mt-20">
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
            className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 text-sm text-orange-400 backdrop-blur"
          >
            <FolderGit2 size={16} />
            Featured Projects
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="mt-4 text-2xl font-bold md:text-4xl"
          >
            Project <span className="text-orange-500">Work</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-3 max-w-2xl text-zinc-400"
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
              key={index}
              variants={card}
              className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 hover:border-orange-500"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent" />

                <span className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 font-semibold text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Content */}
              <div className="space-y-5 p-6">
                <div>
                  <h3 className="text-2xl font-bold">{project.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-zinc-400">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-zinc-800 px-3 py-1 text-xs text-orange-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between border-t border-zinc-800 pt-5">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-sm text-zinc-300 transition hover:text-orange-400"
                  >
                    <Code2 size={18} />
                    Code
                  </a>

                  <a
                    href={project.live}
                    className="group/link flex items-center gap-2 rounded-full bg-orange-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-orange-500"
                  >
                    Live Demo
                    <ExternalLink
                      size={16}
                      className="transition-transform group-hover/link:translate-x-1"
                    />
                  </a>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 h-1 w-0 bg-orange-500 transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </motion.div>
        <div className="mt-10 flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full bg-orange-600 px-8 py-3 font-medium text-white transition-all duration-300 hover:bg-orange-500"
          >
            See All Projects
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
