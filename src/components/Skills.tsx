"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  SiJavascript,
  SiC,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiDocker,
  SiFigma,
  SiPostman,
} from "react-icons/si";
import { FaJava, FaBrain } from "react-icons/fa";

const skills = [
  { name: "Java", icon: FaJava, color: "#f89820" },
  { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
  { name: "C", icon: SiC, color: "#00599C" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express.js", icon: SiExpress, color: "#ffffff" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#ffffff" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "Machine Learning", icon: FaBrain, color: "#9C27B0" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
];

function SkillBubble({
  skill,
  index,
}: {
  skill: (typeof skills)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  const floatDuration = 3 + (index % 5) * 0.5;
  const floatDelay = (index % 7) * 0.3;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: floatDuration,
          repeat: Infinity,
          delay: floatDelay,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.2, y: -5 }}
        className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center cursor-pointer group"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-indigo-500/20 backdrop-blur-md border border-white/10 group-hover:border-purple-500/50 group-hover:shadow-lg group-hover:shadow-purple-500/20 transition-all duration-300" />
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300" />
        <skill.icon
          className="relative z-10 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 transition-all duration-300"
          style={{ color: hovered ? skill.color : "#9ca3af" }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 5, scale: 0.9 }}
        animate={
          hovered
            ? { opacity: 1, y: 0, scale: 1 }
            : { opacity: 0, y: 5, scale: 0.9 }
        }
        className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-3 py-1 rounded-lg bg-[#1a1a2e]/90 backdrop-blur border border-white/10 text-xs text-white whitespace-nowrap z-20 pointer-events-none"
      >
        {skill.name}
      </motion.div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-20 sm:py-24 lg:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        {inView && (
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 pb-8">
            {skills.map((skill, i) => (
              <SkillBubble key={skill.name} skill={skill} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
