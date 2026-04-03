"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { HiAcademicCap, HiCode, HiLightningBolt, HiGlobe } from "react-icons/hi";

const highlights = [
  {
    icon: HiAcademicCap,
    title: "Education",
    desc: "B.Tech CSE, IES College of Technology (2023–2027)",
  },
  {
    icon: HiCode,
    title: "Backend",
    desc: "Java, JSP, Servlets, JDBC, Spring",
  },
  {
    icon: HiGlobe,
    title: "Frontend",
    desc: "Next.js, React, Tailwind CSS",
  },
  {
    icon: HiLightningBolt,
    title: "Focus",
    desc: "Scalable systems & real-world solutions",
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-20 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
              I&apos;m a <span className="text-white font-medium">B.Tech Computer Science</span> student
              at IES College of Technology, Bhopal (2023–2027).
              My journey in software development started with a deep dive into{" "}
              <span className="text-purple-400 font-medium">MERN stack development</span> — mastering
              MongoDB, Express.js, React, and Node.js — and has since expanded into the world of
              modern full-stack development.
            </p>
            <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
              I specialize in building{" "}
              <span className="text-blue-400 font-medium">production-ready web applications</span>{" "}
              using Next.js, React, Node.js, and Tailwind CSS. I&apos;m driven by a strong interest in
              creating scalable systems, writing clean code, and solving complex real-world
              problems that make a tangible impact.
            </p>
            <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
              With hands-on internship experience at{" "}
              <span className="text-white font-medium">NITTTR Bhopal</span> and remote roles, I bring
              a practical approach to software engineering — combining academic knowledge with
              real-world development experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className="group p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-purple-500/30 hover:bg-purple-500/[0.05] transition-all duration-300"
              >
                <item.icon className="w-8 h-8 text-purple-400 mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
