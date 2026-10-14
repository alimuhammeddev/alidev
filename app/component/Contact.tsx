"use client";

import { Mail, MapPin, Phone, Send } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { BsCircleFill } from "react-icons/bs";

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
      className="border-t border-[#ded8cc] bg-[#efebe3] text-[#252720]"
    >
      <div className="mx-auto w-full max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        {/* Heading */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.4,
          }}
          className="mb-12 text-center"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 border-b border-[#a95132] pb-2 text-xs font-medium uppercase tracking-[0.16em] text-[#a95132]"
          >
            <BsCircleFill size={7} />
            Get In Touch
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="mt-6 text-3xl font-medium tracking-[-0.04em] md:text-5xl"
          >
            Let&apos;s Build Something{" "}
            <span className="text-[#a95132]">Amazing</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-4 max-w-2xl text-[#716f66]"
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
            className="border border-[#ded8cc] bg-[#f5f2eb] p-6 md:p-8"
          >
            <h3 className="md:text-2xl text-xl font-semibold">
              Contact Information
            </h3>

            <div className="mt-8 space-y-6">
              <motion.div variants={fadeUp} className="flex items-center gap-4">
                <div className="border border-[#ded8cc] p-3 text-[#a95132]">
                  <Mail aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm text-[#716f66]">Email</p>
                  <p className="break-all">muhammedaliali2020@gmail.com</p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="flex items-center gap-4">
                <div className="border border-[#ded8cc] p-2 text-[#a95132]">
                  <Phone aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm text-[#716f66]">Phone</p>
                  <p>+234 708 658 7956</p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="flex items-center gap-4">
                <div className="border border-[#ded8cc] p-2 text-[#a95132]">
                  <MapPin aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm text-[#716f66]">Location</p>
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
                      aria-label={`Visit my ${social.name} profile`}
                      title={social.name}
                      className="group border border-[#ded8cc] p-3 transition-colors duration-300 hover:border-[#a95132]"
                    >
                      <Icon
                        size={16}
                        aria-hidden="true"
                        focusable="false"
                        className="text-[#55564f] transition group-hover:text-[#a95132]"
                      />
                      <span className="sr-only">
                        Visit my {social.name} profile
                      </span>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            variants={fadeRight}
            className="border border-[#ded8cc] bg-[#f5f2eb] p-6 md:p-8"
          >
            <div className="grid gap-5">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-[#ded8cc] bg-transparent px-4 py-3 text-[#252720] placeholder:text-[#8c897f] outline-none transition-colors focus:border-[#a95132]"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="border border-[#ded8cc] bg-transparent px-4 py-3 text-[#252720] placeholder:text-[#8c897f] outline-none transition-colors focus:border-[#a95132]"
              />

              <input
                type="text"
                placeholder="Subject"
                className="border border-[#ded8cc] bg-transparent px-4 py-3 text-[#252720] placeholder:text-[#8c897f] outline-none transition-colors focus:border-[#a95132]"
              />

              <textarea
                rows={5}
                placeholder="Your Message"
                className="resize-y border border-[#ded8cc] bg-transparent px-4 py-3 text-[#252720] placeholder:text-[#8c897f] outline-none transition-colors focus:border-[#a95132]"
              />

              <button className="flex items-center justify-center gap-2 bg-[#a95132] py-3 font-medium text-[#fffaf2] transition-colors hover:bg-[#87412b]">
                Send Message
                <Send size={18} aria-hidden="true" />
              </button>
            </div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
