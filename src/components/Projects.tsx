"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { ExternalLink, Trophy } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "MASARI - CS Course Recommender & Interview Analyzer",
    date: "May 2026 - Nominated for Deepminds 7th Edition",
    description: "An intelligent, full-stack educational and career companion that merges LLMs, dynamic data visualization, and interactive mock interview simulations to guide CS students from upskilling to acing technical interviews.",
    features: [
      "Generative technical grading & strict JSON LLM parsing",
      "WebRTC & Whisper API voice transcription for interviews",
      "Semantic search & VADER sentiment analysis for course ranking",
      "Asynchronous headless scraping engine",
      "Interactive data visualization dashboard"
    ],
    tech: ["Python", "FastAPI", "Vanilla JS", "Groq API", "MongoDB", "Selenium"],
    award: true,
    github: "https://github.com/marc-zaki/AI-Powered-CS-Course-Recommender-Intelligence-Dashboard",
    demo: "https://masari-cs.vercel.app/",
  },
  {
    title: "SeamCarve Pro: Content-Aware Image Resizing",
    date: "Winner of 1st Place at DeepMinds 6 (Feb 2026)",
    description: "A desktop application for real-time content-aware image resizing using Dynamic Programming.",
    features: ["Dynamic Programming based seam carving algorithm", "Forward Energy optimization", "Real-time image processing", "Flask visualization", "Modern desktop UI"],
    tech: ["Python", "OpenCV", "Numba", "CustomTkinter", "Flask"],
    award: true,
    github: "https://github.com/bannxa/Seam-Carving",
    demo: "",
    hideDemo: true,
  },
  {
    title: "OurHealthEG",
    date: "May 2024 – Jul 2024 | Deep Minds 3 Award Winner",
    description: "An ERP System using Odoo built to help underserved patients access life-saving medicine through an affordable distribution system.",
    features: ["Affordable medicine distribution system", "Focused on accessibility and patient well-being"],
    tech: ["Odoo ERP", "Python", "PostgreSQL"],
    award: true,
    github: "",
    demo: "",
    hideLinks: true,
  },
  {
    title: "Cairo to Capital Transport",
    date: "Nov 2024 – Dec 2024 | Nominated for Deep Minds 4",
    description: "An online multimodal transportation ticketing platform designed to reduce physical queues and improve user experience.",
    features: ["Applied OOP principles and design patterns", "Reduced physical queues"],
    tech: ["HTML", "CSS", "JavaScript", "PHP", "SQL"],
    award: true,
    github: "https://github.com/marc-zaki/oose-c2c",
    demo: "https://oose-c2c.vercel.app/View/Homepage.html",
  },
  {
    title: "Secure P2P Chat Application",
    date: "Nov 2025 – Jan 2026",
    description: "End-to-end encrypted messaging system with custom TCP socket implementation.",
    features: ["RSA-2048 + AES-256 encryption", "Cross-platform support", "Real-time messaging"],
    tech: ["Flutter", "Python", "MongoDB"],
    award: false,
    github: "https://github.com/marc-zaki/secureapp",
    demo: "",
    hideDemo: true,
  },

];

export function Projects() {
  return (
    <section className="py-20 bg-primary/5" id="projects">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of my best work and award-winning projects."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl overflow-hidden flex flex-col h-full border border-white/10 hover:border-primary/50 transition-colors group"
            >
              <div className="p-6 flex-1 flex flex-col">
                {project.award && (
                  <div className="flex items-center gap-1 text-yellow-500 text-xs font-bold uppercase tracking-wider mb-3">
                    <Trophy className="w-4 h-4" />
                    Award Winner / Nominee
                  </div>
                )}

                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-foreground/50 mb-4">{project.date}</p>
                <p className="text-foreground/70 text-sm mb-6 flex-1">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-xs font-semibold uppercase text-foreground/50 mb-2">Key Features</h4>
                  <ul className="text-sm text-foreground/70 space-y-1 list-disc list-inside">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="truncate">{feature}</li>
                    ))}
                    {project.features.length > 3 && <li>And more...</li>}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary border border-primary/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Links */}
              {!project.hideLinks && (
                <div className="px-6 py-4 border-t border-white/10 flex justify-between items-center bg-black/5 dark:bg-white/5">
                  <a
                    href={project.github || "#"}
                    target={project.github ? "_blank" : undefined}
                    rel={project.github ? "noreferrer" : undefined}
                    onClick={(e) => { if (!project.github) e.preventDefault(); }}
                    className={`flex items-center gap-2 text-sm font-medium transition-colors ${!project.github ? "text-foreground/40 cursor-default hover:text-foreground/40" : "hover:text-primary"}`}
                  >
                    <FaGithub className="w-4 h-4" /> Code
                  </a>
                  {!project.hideDemo && (
                    <a
                      href={project.demo || "#"}
                      target={project.demo ? "_blank" : undefined}
                      rel={project.demo ? "noreferrer" : undefined}
                      onClick={(e) => { if (!project.demo) e.preventDefault(); }}
                      className={`flex items-center gap-2 text-sm font-medium transition-colors ${!project.demo ? "text-foreground/40 cursor-default hover:text-foreground/40" : "hover:text-primary"}`}
                    >
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
