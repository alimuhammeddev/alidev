"use client";

import {
  User,
  Award,
  Briefcase,
  Code2,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { motion, Variants } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#f5f2eb] text-[#252720]"
    >
      <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid items-center gap-20 lg:grid-cols-2"
        >
          {/* LEFT */}
          <motion.div variants={fadeUp}>
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 border-b border-[#a95132] pb-2 text-xs font-medium uppercase tracking-[0.16em] text-[#a95132]"
            >
              <User size={16} />
              Why Work With Me
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="mt-6 text-3xl font-medium leading-tight tracking-[-0.04em] md:text-5xl"
            >
              Helping Businesses Stand Out With
              <span className="text-[#a95132]"> Modern Websites </span>
              That Deliver Results.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-base leading-8 text-[#716f66] md:text-lg"
            >
              I&apos;m Ali Muhammed, a website developer who helps businesses
              transform their ideas into modern, high performing websites and
              web applications. Whether you&apos;re launching a new business,
              refreshing your online presence, or building a custom platform, I
              create digital solutions that build trust, engage customers,
              support business growth and help you connect with more customers.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-base leading-8 text-[#716f66] md:text-lg"
            >
              Every project I build is designed with performance,
              responsiveness, accessibility, and user experience in mind. I
              focus on creating websites that not only look professional but
              also load quickly, work seamlessly on every device, and leave a
              lasting impression on your customers.
            </motion.p>

            <div className="mt-7 space-y-5">
              {[
                "Professional websites that build trust",
                "Fast-loading and SEO-friendly development",
                "Responsive across all devices",
                "Long-term support and scalable solutions",
              ].map((item) => (
                <motion.div
                  variants={fadeUp}
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 size={20} className="text-[#a95132]" />

                  <span className="text-[#55564f]">{item}</span>
                </motion.div>
              ))}
            </div>

            <a
              href="/projects"
              className="group mt-8 inline-flex items-center gap-3 border-b border-[#a95132] pb-2 font-medium text-[#a95132] transition-colors hover:text-[#252720]"
            >
              See My Work
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* RIGHT */}
          <motion.div variants={fadeUp} className="relative">
            <div className="border border-[#ded8cc] bg-[#efebe3] p-4 sm:p-6">
              <div className="grid gap-6">
                <motion.div
                  variants={fadeUp}
                  className="flex items-center gap-5 border-b border-[#ded8cc] p-5"
                >
                  <div className="border border-[#ded8cc] bg-[#f5f2eb] p-3">
                    <Code2 className="text-[#a95132]" />
                  </div>

                  <div>
                    <h3 className="font-semibold">Clean Code</h3>

                    <p className="mt-1 text-sm text-[#716f66]">
                      Scalable and maintainable code structure.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  className="flex items-center gap-5 border-b border-[#ded8cc] p-5"
                >
                  <div className="border border-[#ded8cc] bg-[#f5f2eb] p-3">
                    <Briefcase className="text-[#a95132]" />
                  </div>

                  <div>
                    <h3 className="font-semibold">Real Projects</h3>

                    <p className="mt-1 text-sm text-[#716f66]">
                      Experience building production ready websites and web
                      apps.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  className="flex items-center gap-5 p-5"
                >
                  <div className="border border-[#ded8cc] bg-[#f5f2eb] p-3">
                    <Award className="text-[#a95132]" />
                  </div>

                  <div>
                    <h3 className="font-semibold">Continuous Learning</h3>

                    <p className="mt-1 text-sm text-[#716f66]">
                      Always exploring new technologies and best practices.
                    </p>
                  </div>
                </motion.div>
              </div>

              <motion.div
                variants={fadeUp}
                className="mt-8 grid grid-cols-3 gap-5"
              >
                <div className="border-t border-[#ded8cc] pt-5 text-center">
                  <h3 className="md:text-3xl text-2xl font-medium text-[#a95132]">10+</h3>

                  <p className="mt-2 text-sm text-[#716f66]">Projects</p>
                </div>

                <div className="border-t border-[#ded8cc] pt-5 text-center">
                  <h3 className="md:text-3xl text-2xl font-medium text-[#a95132]">4+</h3>

                  <p className="mt-2 text-sm text-[#716f66]">
                    Years of Experience
                  </p>
                </div>

                <div className="border-t border-[#ded8cc] pt-5 text-center">
                  <h3 className="md:text-3xl text-2xl font-medium text-[#a95132]">100%</h3>

                  <p className="mt-2 text-sm text-[#716f66]">
                    Mobile Optimized
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
