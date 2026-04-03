"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiBriefcase, HiCalendar, HiLocationMarker } from "react-icons/hi";

const experiences = [
  {
    title: "Full Stack Development Intern",
    company: "National Institute of Technical Teachers' Training and Research (NITTTR)",
    location: "Bhopal",
    period: "Sept 2024 – Jan 2025",
    points: [
      "Built dynamic web applications using Java, JSP, Servlets, JDBC, and MySQL",
      "Followed MVC architecture for scalable and maintainable code",
      "Debugged backend issues and optimized SQL queries",
      "Improved application performance and handled real-world development scenarios",
    ],
  },
  {
    title: "Java Developer",
    company: "WeIntern",
    location: "Remote",
    period: "Feb 2025 – Mar 2025",
    points: [
      "Worked on Core Java and Object-Oriented Programming concepts",
      "Improved CRUD operations using JDBC and SQL",
      "Focused on writing clean, efficient, and maintainable code",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Rag Innovations",
    location: "Freelance / Startup",
    period: "2026",
    points: [
      "Developed and deployed a production-ready business website using Next.js, React, and Tailwind CSS",
      "Built MHM Compliance Solutions page aligned with CBSE and Supreme Court guidelines",
      "Implemented SEO strategies to improve search visibility and performance",
      "Designed a responsive and user-friendly UI for real-world users",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-20 sm:py-24 lg:py-32">
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
              Experience
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-indigo-500 opacity-30" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title + exp.company}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-4 border-[#0a0a1a] z-10 mt-6" />

                <div className={`flex-1 ml-10 sm:ml-12 md:ml-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div
                    className={`p-4 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-purple-500/30 transition-all duration-300 group`}
                  >
                    <div className={`flex items-start sm:items-center gap-2 mb-2 text-purple-400 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                      <HiBriefcase className="w-4 h-4 flex-shrink-0 mt-0.5 sm:mt-0" />
                      <span className="font-semibold text-base sm:text-lg text-white">
                        {exp.title}
                      </span>
                    </div>

                    <p className="text-blue-300 font-medium mb-1 text-sm sm:text-base">
                      {exp.company}
                    </p>

                    <div className={`flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                      <span className="flex items-center gap-1">
                        <HiLocationMarker className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <HiCalendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                    </div>

                    <ul className={`space-y-2 ${i % 2 === 0 ? "md:text-left" : ""}`}>
                      {exp.points.map((point) => (
                        <li
                          key={point}
                          className="text-gray-300 text-xs sm:text-sm flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
