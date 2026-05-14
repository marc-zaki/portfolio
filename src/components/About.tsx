"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Code, Cpu, Globe, Lightbulb } from "lucide-react";

export function About() {
  const cards = [
    {
      title: "Full Stack Development",
      description: "Building responsive, dynamic, and user-friendly web applications.",
      icon: <Globe className="w-6 h-6 text-primary" />,
    },
    {
      title: "AI & Algorithms",
      description: "Passionate about artificial intelligence and complex problem solving.",
      icon: <Cpu className="w-6 h-6 text-primary" />,
    },
    {
      title: "Scalable Systems",
      description: "Designing architecture that handles growth and performance gracefully.",
      icon: <Code className="w-6 h-6 text-primary" />,
    },
    {
      title: "Impactful Solutions",
      description: "Creating software that solves real-world problems and adds value.",
      icon: <Lightbulb className="w-6 h-6 text-primary" />,
    },
  ];

  return (
    <section className="py-20 relative" id="about">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="About Me" 
          subtitle="Get to know me and what drives my passion for technology."
        />

        <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold tracking-tight">
              I'm a Computer Science student aiming to build the future.
            </h3>
            <p className="text-foreground/70 leading-relaxed text-lg">
              I am currently studying Computer Science at the Modern Sciences and Arts University (MSA), 
              with an expected graduation in June 2027. My journey in tech is driven by an insatiable 
              curiosity for how things work under the hood.
            </p>
            <p className="text-foreground/70 leading-relaxed text-lg">
              I specialize in full-stack development, algorithms, and scalable systems. Whether it's 
              crafting a beautiful front-end interface, designing a robust back-end, or exploring the 
              latest in Artificial Intelligence, I am always eager to learn and apply modern technologies 
              to create impactful software solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {cards.map((card, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl glass hover:bg-white/5 transition-colors border border-white/10"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  {card.icon}
                </div>
                <h4 className="text-lg font-medium mb-2">{card.title}</h4>
                <p className="text-sm text-foreground/60">{card.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
