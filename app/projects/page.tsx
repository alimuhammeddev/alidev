"use client";

import Image from "next/image";
import Link from "next/link";
import { Code2, ExternalLink, FolderGit2, ArrowLeft } from "lucide-react";

import nilebrew from "../component/assets/nilebrew.png";
import tomato from "../component/assets/tomato.png";
import clicknshop from "../component/assets/clicknshop.png";
import fusion from "../component/assets/fusion.png";
import analytica from "../component/assets/analytica.png";
import avs from "../component/assets/avs.png";
import fashionfit from "../component/assets/fashionfit.png";
import avion from "../component/assets/avion.png";
import techhub from "../component/assets/techhub.png";
import travelworld from "../component/assets/travelworld.png";

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

export default function ProjectsPage() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Top Glow */}
      <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-orange-500/10 blur-[150px]" />

      {/* Bottom Glow */}
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-orange-500/5 blur-[180px]" />

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-size-[45px_45px]" />

      <div className="relative mx-auto max-w-7xl px-5 py-20">
        {/* Header */}
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-orange-400 transition hover:text-orange-300"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>

        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 text-sm text-orange-400">
            <FolderGit2 size={16} />
            Projects
          </div>

          <h1 className="mt-4 text-2xl font-bold md:text-4xl">
            All <span className="text-orange-500">Projects</span>
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-zinc-400">
            Explore my collection of web applications built with React, Next.js,
            Tailwind CSS, TypeScript, and modern frontend technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition-all duration-500 hover:translate-y-0 hover:border-orange-500"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  preload
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <span className="absolute left-5 top-5 rounded-full bg-orange-500 px-4 py-2 font-bold text-gray-900">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="space-y-5 p-6">
                <div>
                  <h2 className="md:text-2xl text-xl font-bold">
                    {project.title}
                  </h2>

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
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-zinc-300 transition hover:text-orange-400"
                  >
                    <Code2 size={18} />
                    Code
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full bg-orange-500 px-4 py-2 text-sm font-medium text-gray-900 transition hover:bg-orange-600"
                  >
                    Live Demo
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 h-1 w-0 bg-orange-500 transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
