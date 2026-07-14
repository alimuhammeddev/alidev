"use client";

import { Mail, MapPin, Phone, Send, Sparkles } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";

const socials = [
  {
    name: "GitHub",
    icon: FaGithub,
    link: "https://github.com/alimuhammeddev",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/alimuhammeddev/",
  },
  {
    name: "Twitter",
    icon: FaTwitter,
    link: "https://twitter.com/alimuhammed_Dev",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    link: "https://www.instagram.com/alimuhammed.website.developer/",
  },
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    link: "https://wa.me/23407086587956",
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
      duration: 0.6,
    },
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -80,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 80,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
    },
  },
};

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black text-white"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-orange-500/10 blur-[150px]" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-size-[45px_45px]" />

      <div className="relative mx-auto w-full max-w-7xl px-5 lg:px-0 mt-28 mb-20">
        {/* Heading */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.4,
          }}
          className="mb-16 text-center"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 text-sm text-orange-400"
          >
            <Sparkles size={16} />
            Get In Touch
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="mt-6 text-2xl font-bold md:text-4xl"
          >
            Let's Build Something{" "}
            <span className="text-orange-500">Amazing</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-2xl text-zinc-400"
          >
            Have a project in mind or want to collaborate? Feel free to reach
            out. I would love to hear from you.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="grid gap-8 lg:grid-cols-2"
        >
          {/* Contact Info */}
          <motion.div
            variants={fadeLeft}
            className="rounded-2xl border border-zinc-800 bg-zinc-900 md:p-8 p-5"
          >
            <h3 className="md:text-2xl text-xl font-semibold">Contact Information</h3>

            <div className="mt-8 space-y-6">
              <motion.div
                variants={fadeUp}
                className="flex items-center gap-4"
              >
                <div className="rounded-xl bg-orange-500/10 p-3 text-orange-500">
                  <Mail />
                </div>
                <div>
                  <p className="text-sm text-zinc-400">Email</p>
                  <p className="break-all">muhammedaliali2020@gmail.com</p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="flex items-center gap-4"
              >
                <div className="rounded-xl bg-orange-500/10 p-2 text-orange-500">
                  <Phone />
                </div>
                <div>
                  <p className="text-sm text-zinc-400">Phone</p>
                  <p>+234 708 658 7956</p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="flex items-center gap-4"
              >
                <div className="rounded-xl bg-orange-500/10 p-2 text-orange-500">
                  <MapPin />
                </div>
                <div>
                  <p className="text-sm text-zinc-400">Location</p>
                  <p>Abuja, Nigeria</p>
                </div>
              </motion.div>
            </div>

            {/* Social Icons */}
            <div className="mt-10">
              <h4 className="mb-4 font-medium">Get In Touch</h4>

              <div className="flex flex-wrap gap-4">
                {socials.map((social) => {
                  const Icon = social.icon;

                  return (
                    <motion.a
                      variants={fadeUp}
                      whileTap={{
                        scale: 0.9,
                      }}
                      key={social.name}
                      href={social.link}
                      target="_blank"
                      className="group rounded-xl border border-zinc-700 bg-zinc-800 p-3 transition-all duration-300 hover:border-orange-500"
                    >
                      <Icon
                        size={16}
                        className="text-zinc-300 transition group-hover:text-orange-500"
                      />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form variants={fadeRight} className="rounded-2xl border border-zinc-800 bg-zinc-900 md:p-8 p-5">
            <div className="grid gap-5">
              <input
                type="text"
                placeholder="Your Name"
                className="rounded-xl border border-zinc-700 bg-black px-4 py-3 outline-none transition focus:border-orange-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="rounded-xl border border-zinc-700 bg-black px-4 py-3 outline-none transition focus:border-orange-500"
              />

              <input
                type="text"
                placeholder="Subject"
                className="rounded-xl border border-zinc-700 bg-black px-4 py-3 outline-none transition focus:border-orange-500"
              />

              <textarea
                rows={5}
                placeholder="Your Message"
                className="rounded-xl border border-zinc-700 bg-black px-4 py-3 outline-none transition focus:border-orange-500"
              />

              <button className="flex items-center justify-center gap-2 rounded-xl bg-orange-500 py-3 font-medium text-white transition hover:bg-orange-400">
                Send Message
                <Send size={18} />
              </button>
            </div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
