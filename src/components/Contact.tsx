"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  HiMail,
  HiLocationMarker,
  HiPaperAirplane,
} from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { SiGithub, SiX, SiInstagram } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

const WHATSAPP_NUMBER = "918109016036";

const socials = [
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/harshvardhan-bohare",
    color: "hover:text-blue-400 hover:border-blue-400/30",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    href: "https://github.com/hbohare2004",
    color: "hover:text-white hover:border-white/30",
  },
  {
    name: "X / Twitter",
    icon: SiX,
    href: "https://x.com/hbohare007",
    color: "hover:text-sky-400 hover:border-sky-400/30",
  },
  {
    name: "Instagram",
    icon: SiInstagram,
    href: "https://www.instagram.com/harshh_bohare/",
    color: "hover:text-pink-500 hover:border-pink-500/30",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Real newlines only — encodeURIComponent encodes \n as %0A for WhatsApp.
    // Literal "%0A" in the string was double-encoded and appeared as text in the chat.
    const text = `Hi Harshvardhan! I'm ${formData.name} (${formData.email}).\n\n${formData.message}`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-20 sm:py-24 lg:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
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
              Get In Touch
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Have a project in mind or want to collaborate? Let&apos;s connect!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6 sm:space-y-8 text-center lg:text-left"
          >
            <div className="space-y-5 sm:space-y-6 text-left">
              <div className="flex items-start justify-start gap-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <HiMail className="w-5 h-5 text-purple-400" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-white font-semibold mb-1 text-sm sm:text-base">
                    Email
                  </h3>
                  <p className="text-gray-400 text-sm break-all">
                    harshbohare2004@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start justify-start gap-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0">
                  <FaWhatsapp className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1 text-sm sm:text-base">
                    WhatsApp
                  </h3>
                  <p className="text-gray-400 text-sm">+91 8109016036</p>
                </div>
              </div>

              <div className="flex items-start justify-start gap-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <HiLocationMarker className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1 text-sm sm:text-base">
                    Location
                  </h3>
                  <p className="text-gray-400 text-sm">Bhopal, India</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4 text-sm sm:text-base">
                Connect with me
              </h3>
              <div className="flex justify-center lg:justify-start gap-3">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-gray-400 transition-all duration-300 ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all text-sm sm:text-base"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all text-sm sm:text-base"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all resize-none text-sm sm:text-base"
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white font-medium hover:shadow-lg hover:shadow-green-500/25 transition-all text-sm sm:text-base"
              >
                {submitted ? (
                  "Opening WhatsApp..."
                ) : (
                  <>
                    Send Message
                    <HiPaperAirplane className="w-4 h-4 rotate-90" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
