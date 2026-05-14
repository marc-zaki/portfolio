"use client";

import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 border-t border-white/10 mt-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tighter text-gradient">MZ.</span>
        </div>
        
        <p className="text-sm text-foreground/60 text-center">
          © {currentYear} Marc Zaki. Built with Next.js & Tailwind CSS.
        </p>

        <div className="flex items-center gap-4">
          <a href="https://github.com/marczaki" target="_blank" rel="noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
            <FaGithub className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://linkedin.com/in/marczaki" target="_blank" rel="noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
            <FaLinkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="mailto:sherifmark759@gmail.com" className="text-foreground/60 hover:text-primary transition-colors">
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
