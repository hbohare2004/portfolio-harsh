"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { HiArrowDown, HiDownload } from "react-icons/hi";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Open to opportunities
            </motion.div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-white">Hi, I&apos;m</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Harshvardhan
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Bohare
              </span>
            </h1>

            <div className="text-lg sm:text-2xl text-gray-300 font-medium h-8 sm:h-10">
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "Java Developer",
                  2000,
                  "Problem Solver",
                  2000,
                  "Backend Specialist",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent"
              />
            </div>

            <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-xl leading-relaxed">
              Computer Science student passionate about building scalable web
              applications and solving real-world problems. Experienced in
              backend development, modern frontend technologies, and full-stack
              project development.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all text-sm sm:text-base"
              >
                View Projects
                <HiArrowDown className="group-hover:translate-y-0.5 transition-transform" />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/images/Harsh_s_Resume.pdf"
                download
                className="flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl border border-purple-500/30 text-purple-300 hover:bg-purple-500/10 font-medium transition-all text-sm sm:text-base"
              >
                Download Resume
                <HiDownload />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 opacity-60 blur-2xl animate-pulse" />
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-purple-500/50 shadow-2xl shadow-purple-500/20">
                <Image
                  src="/images/profile.jpeg"
                  alt="Harshvardhan Bohare"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 224px, (max-width: 1024px) 288px, 320px"
                />
              </div>

              {/* <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 px-3 py-1.5 rounded-lg bg-[#0a0a1a]/80 backdrop-blur border border-purple-500/30 text-purple-300 text-xs sm:text-sm"
              >
                Full Stack
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 px-3 py-1.5 rounded-lg bg-[#0a0a1a]/80 backdrop-blur border border-blue-500/30 text-blue-300 text-xs sm:text-sm"
              >
                Java Backend
              </motion.div> */}
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-purple-500/30 flex justify-center pt-2">
          <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
