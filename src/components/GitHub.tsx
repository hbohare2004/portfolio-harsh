"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiExternalLink, HiStar, HiCode } from "react-icons/hi";
import { SiGithub } from "react-icons/si";

const repos = [
  {
    name: "Rag-Innovation",
    description:
      "Rag-Innovation is a business website built with Next.js, React, and Tailwind CSS.",
    language: "TypeScript",
    stars: 0,
    url: "https://github.com/hbohare2004/Rag-Innovation",
  },
   {
    name: "Estate",
    description:
      "Real estate website built with React, Vite, Tailwind CSS and Framer Motion, featuring dark mode, animations, and fully responsive sections.",
    language: "JavaScript",
    stars: 1,
    url: "https://github.com/hbohare2004/Estate",
  },
  {
    name: "Airbnd (Nivasa)",
    description:
      "Full-stack Airbnb-inspired web app that lets users explore, create, edit, and manage property listings. Built with Node.js, Express, MongoDB, Mongoose.",
    language: "CSS",
    stars: 1,
    url: "https://github.com/hbohare2004/Airbnd",
  },
 
  
  // {
  //   name: "NITTTR_intern_page",
  //   description:
  //     "A Java web application developed during NITTTR internship demonstrating full-stack concepts using Servlets, JSP, JDBC, and MySQL.",
  //   language: "Java",
  //   stars: 0,
  //   url: "https://github.com/hbohare2004/NITTTR_intern_page",
  // },
  // {
  //   name: "MindTrack",
  //   description:
  //     "React-based mood and productivity tracker built for students. Clean, calm, aesthetic design that feels comfortable to use in any emotional state.",
  //   language: "CSS",
  //   stars: 0,
  //   url: "https://github.com/hbohare2004/MindTrack",
  // },
  
  
  // {
  //   name: "forage-midas",
  //   description:
  //     "Project repo for the JPMC Advanced Software Engineering Forage program. Hands-on experience with enterprise software tools.",
  //   language: "Java",
  //   stars: 0,
  //   url: "https://github.com/hbohare2004/forage-midas",
  // },
];

const languageColors: Record<string, string> = {
  JavaScript: "#f7df1e",
  Java: "#f89820",
  CSS: "#563d7c",
  HTML: "#e34c26",
  TypeScript: "#3178c6",
};

export default function GitHub() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="github" className="relative py-20 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              GitHub Repositories
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Open source projects and contributions on GitHub
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
          {repos.map((repo, i) => (
            <motion.a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="group p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-purple-500/30 hover:bg-purple-500/[0.03] transition-all duration-300 text-center sm:text-left"
            >
              <div className="flex items-start justify-between sm:justify-between mb-3">
                <div className="flex items-center gap-2 min-w-0">
                  <HiCode className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <span className="text-white font-semibold text-sm sm:text-base group-hover:text-purple-300 transition-colors truncate">
                    {repo.name}
                  </span>
                </div>
                <HiExternalLink className="w-4 h-4 text-gray-500 group-hover:text-purple-400 transition-colors flex-shrink-0 ml-2" />
              </div>

              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                {repo.description}
              </p>

              <div className="flex items-center justify-center sm:justify-start gap-4 text-xs text-gray-500">
                <span className="flex items-center gap-1.5">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{
                      backgroundColor:
                        languageColors[repo.language] || "#8b8b8b",
                    }}
                  />
                  {repo.language}
                </span>
                {repo.stars > 0 && (
                  <span className="flex items-center gap-1">
                    <HiStar className="w-3.5 h-3.5 text-yellow-400" />
                    {repo.stars}
                  </span>
                )}
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <a
            href="https://github.com/hbohare2004"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-gray-700 to-gray-800 text-white font-medium hover:shadow-lg hover:shadow-gray-700/25 transition-all text-sm sm:text-base"
          >
            <SiGithub className="w-5 h-5" />
            View All Repositories
          </a>
        </motion.div>
      </div>
    </section>
  );
}
