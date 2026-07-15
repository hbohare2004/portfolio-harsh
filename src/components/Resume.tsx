"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiDownload, HiDocumentText, HiExternalLink } from "react-icons/hi";

export default function Resume() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="resume" className="relative py-20 sm:py-24 lg:py-32">
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
              Resume
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative rounded-2xl bg-white/[0.03] border border-white/[0.06] overflow-hidden">
            <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between gap-3 p-4 border-b border-white/[0.06] text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-3">
                <HiDocumentText className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <span className="text-white font-medium text-sm sm:text-base truncate">
                  Harsh_s_Resume_AI.pdf
                </span>
              </div>
              <div className="flex gap-2 w-full sm:w-auto">
                <a
                  href="/images/Harsh_s_Resume_AI.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300 hover:text-white hover:border-purple-500/30 transition-all"
                >
                  <HiExternalLink className="w-4 h-4" />
                  Open
                </a>
                <a
                  href="/images/Harsh_s_Resume_AI.pdf"
                  download
                  className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-sm text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all"
                >
                  <HiDownload className="w-4 h-4" />
                  Download
                </a>
              </div>
            </div>

            <div className="relative bg-gray-900/50 p-2 sm:p-4">
              <iframe
                src="/images/Harsh_s_Resume_AI.pdf"
                className="w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-lg border border-white/5"
                title="Resume Preview"
              />
            </div>
          </div>

          <div className="text-center mt-6 sm:mt-8">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/images/Harsh_s_Resume_AI.pdf"
              download
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all text-sm sm:text-base"
            >
              <HiDownload className="w-5 h-5" />
              Download Full Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
