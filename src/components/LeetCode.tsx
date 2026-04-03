"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiExternalLink, HiChartBar, HiFire, HiLightningBolt } from "react-icons/hi";
import { SiLeetcode } from "react-icons/si";

// const stats = [
//   { label: "Problems Solved", value: "150+", icon: HiChartBar, color: "text-green-400" },
//   { label: "Contest Rating", value: "1500+", icon: HiFire, color: "text-orange-400" },
//   { label: "Streak Days", value: "30+", icon: HiLightningBolt, color: "text-yellow-400" },
// ];



const difficultyStats = [
  { label: "Easy", count: 131, color: "text-green-400", bg: "bg-green-400/10", border: "border-green-400/20" },
  { label: "Medium", count: 75, color: "text-yellow-400", bg: "bg-yellow-400/10", border: "border-yellow-400/20" },
  { label: "Hard", count: 2, color: "text-red-400", bg: "bg-red-400/10", border: "border-red-400/20" },
];

export default function LeetCode() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="leetcode" className="relative py-20 sm:py-24 lg:py-32">
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
              Problem Solving & DSA
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Consistently sharpening my algorithmic thinking on LeetCode
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative p-5 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-purple-500/30 transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-orange-500/10 to-transparent rounded-bl-full" />

            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-orange-500/20 to-yellow-500/20 border border-orange-500/20 flex items-center justify-center flex-shrink-0">
                <SiLeetcode className="w-6 h-6 sm:w-7 sm:h-7 text-orange-400" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">LeetCode Profile</h3>
                <p className="text-gray-400 text-xs sm:text-sm">Competitive Programming & DSA</p>
              </div>
            </div>

            {/* <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="text-center p-3 sm:p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]"
                >
                  <stat.icon className={`w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-1.5 sm:mb-2 ${stat.color}`} />
                  <div className="text-lg sm:text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-[10px] sm:text-xs text-gray-400 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div> */}

            {/* Difficulty Breakdown */}
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              {difficultyStats.map((diff) => (
                <div key={diff.label} className={`flex-1 py-3 px-2 rounded-xl border ${diff.border} ${diff.bg} text-center`}>
                  <div className={`text-xl sm:text-2xl font-bold ${diff.color}`}>{diff.count}</div>
                  <div className="text-gray-300 text-xs sm:text-sm mt-1">{diff.label}</div>
                </div>
              ))}
            </div>



            <a
              href="https://leetcode.com/u/harshbohare007/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-medium hover:shadow-lg hover:shadow-orange-500/25 transition-all text-sm sm:text-base"
            >
              View LeetCode Profile
              <HiExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
