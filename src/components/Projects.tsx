"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiExternalLink } from "react-icons/hi";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiSupabase,
  SiStripe,
  SiFramer,
  SiGithub,
  SiStreamlit,
  SiPython,
} from "react-icons/si";
import { FaBrain } from "react-icons/fa";
import Image from "next/image";

const projects = [
  {
    title: "Rag Innovations",
    subtitle: "Live Production Website",
    description:
      "Built a production-ready business website focused on menstrual hygiene solutions. Implemented SEO optimization, responsive UI, and aligned with CBSE and Supreme Court compliance guidelines.",
    image: "/images/rag_photo.png",
    tech: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: SiReact },
      { name: "Tailwind", icon: SiTailwindcss },
    ],
    live: "https://raginnovations.com",
    github: "https://github.com/hbohare2004/Rag-Innovation",
    gradient: "from-blue-500/20 to-purple-500/20",
    borderGlow: "hover:shadow-blue-500/10",
  },

  {
    title: "RAG Innovations Chatbot",
    subtitle: "Retrieval-Augmented Chatbot",
    description:
      "An intelligent chatbot powered by Retrieval-Augmented Generation (RAG). It enables interactive document querying and provides context-aware answers to user inquiries.",
    image: "/images/RagAI.png",
    tech: [
      { name: "Streamlit", icon: SiStreamlit },
      { name: "Python", icon: SiPython },
      { name: "Groq AI", icon: FaBrain },
    ],
    live: "https://rag-innovations-chatbot-zc7gxf5zuxjgixbnzgkk8x.streamlit.app/",
    github: "https://github.com/hbohare2004/RAG-Innovations-Chatbot",
    gradient: "from-orange-500/20 to-red-500/20",
    borderGlow: "hover:shadow-orange-500/10",
  },
  {
    title: "Cottorin",
    subtitle: "Sanitaryware E-Commerce Website",
    description:
      "A modern full-stack e-commerce website built with Next.js 14, Supabase, and Stripe. Features product catalog, shopping cart, secure checkout, and an admin panel.",
    image: "/images/e-comm.png",
    tech: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Supabase", icon: SiSupabase },
      { name: "Stripe", icon: SiStripe },
      { name: "Tailwind", icon: SiTailwindcss },
    ],
    live: "https://e-comm-rag-rxy8.vercel.app/",
    github: "https://github.com/hbohare2004/E-Comm-Rag-",
    gradient: "from-emerald-500/20 to-cyan-500/20",
    borderGlow: "hover:shadow-emerald-500/10",
  },
   {
    title: "Nivasa",
    subtitle: "Airbnb-style Full Stack App",
    description:
      "Full-stack web application using MVC architecture with authentication & authorization. Features admin-only CRUD property listings and integrated Cloudinary for image storage.",
    image: "/images/nivasa_photo.png",
    tech: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
    ],
    live: "https://airbnd-b8zk.onrender.com/listings",
    github: "https://github.com/hbohare2004/Airbnd",
    gradient: "from-purple-500/20 to-pink-500/20",
    borderGlow: "hover:shadow-purple-500/10",
  },
  
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative py-20 sm:py-24 lg:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Real-world projects that showcase my development skills
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className={`group relative rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-purple-500/30 overflow-hidden transition-all duration-500 ${project.borderGlow} hover:shadow-2xl`}
            >
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-[#0a0a1a]/40 to-transparent" />
              </div>

              <div className="p-5 sm:p-6 space-y-3 sm:space-y-4 text-center md:text-left">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-purple-400 text-xs sm:text-sm font-medium">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t.name}
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300"
                    >
                      <t.icon className="w-3 h-3" />
                      {t.name}
                    </span>
                  ))}
                </div>

                <div className="pt-1 flex flex-wrap justify-center md:justify-start gap-4">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <HiExternalLink className="w-4 h-4" />
                      Live Site
                    </a>
                  )}
                  {'github' in project && project.github && (
                    <a
                      href={project.github as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-300 transition-colors"
                    >
                      <SiGithub className="w-4 h-4" />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
