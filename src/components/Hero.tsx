"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Hero() {
  const titles = ["Computer Science Student", "Full Stack Developer", "AI & Software Enthusiast"];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden" id="hero">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px] -z-10" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-block py-1.5 px-3 rounded-full border border-primary/30 glass text-primary text-sm font-medium"
          >
            Welcome to my portfolio
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-4"
          >
            Hi, I'm <span className="text-gradient">Marc Zaki</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl font-medium text-foreground/80 mb-6 h-[40px]"
          >
            Computer Science Student | Full Stack Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-foreground/60 mb-10 max-w-2xl"
          >
            Passionate about software engineering, AI, web development, and problem solving. 
            I love building scalable systems and crafting modern, interactive web experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <a
              href="#projects"
              className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-all hover:scale-105 active:scale-95"
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              download
              className="flex items-center gap-2 glass px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-all hover:scale-105 active:scale-95"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 border border-foreground/20 px-6 py-3 rounded-full font-medium hover:bg-foreground/5 transition-all hover:scale-105 active:scale-95"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center gap-6"
          >
            <a href="https://github.com/marc-zaki" target="_blank" rel="noreferrer" className="p-3 rounded-full glass hover:text-primary transition-colors hover:scale-110 active:scale-95">
              <FaGithub className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/marc-zakii/" target="_blank" rel="noreferrer" className="p-3 rounded-full glass hover:text-primary transition-colors hover:scale-110 active:scale-95">
              <FaLinkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:sherifmark759@gmail.com" className="p-3 rounded-full glass hover:text-primary transition-colors hover:scale-110 active:scale-95">
              <Mail className="w-6 h-6" />
              <span className="sr-only">Email</span>
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 bg-foreground/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
