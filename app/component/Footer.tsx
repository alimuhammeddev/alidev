"use client";

import { bungeeOutline } from "@/app/font";
import { motion } from "framer-motion";

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
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black py-8 text-white">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: false,
          amount: 0.8,
        }}
        className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:px-0 px-5 md:flex-row"
      >
        {/* Logo */}
        <motion.h1 variants={fadeUp} className={`${bungeeOutline.className} text-4xl text-white`}>
          <span className="text-orange-500">ALi</span>_Dev
        </motion.h1>

        <motion.p variants={fadeUp} className="text-sm text-zinc-500">
          © {new Date().getFullYear()} All rights reserved.
        </motion.p>

        <motion.p variants={fadeUp} className="text-sm text-zinc-400">
          <span className="text-orange-500">&lt;/&gt;</span> Building with
          creativity and code
        </motion.p>
      </motion.div>
    </footer>
  );
}
