"use client";

import { SiGithub, SiX } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { HiHeart } from "react-icons/hi";

const socials = [
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/harshvardhan-bohare",
    label: "LinkedIn",
  },
  {
    icon: SiGithub,
    href: "https://github.com/hbohare2004",
    label: "GitHub",
  },
  {
    icon: SiX,
    href: "https://x.com/hbohare007",
    label: "Twitter/X",
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[#0a0a1a]/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm flex items-center gap-1">
            &copy; {new Date().getFullYear()} Harshvardhan Bohare. Built with
            <HiHeart className="w-4 h-4 text-red-400 inline" />
          </p>

          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
