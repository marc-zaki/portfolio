"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const technicalSkills = [
  { name: "Python", level: 90 },
  { name: "C++", level: 85 },
  { name: "JavaScript", level: 85 },
  { name: "Flutter", level: 80 },
  { name: "PHP", level: 75 },
  { name: "SQL", level: 85 },
  { name: "MongoDB", level: 80 },
  { name: "Flask", level: 80 },
  { name: "Odoo", level: 70 },
];

const softSkills = [
  "Problem Solving",
  "Teamwork",
  "Communication",
  "Adaptability"
];

export function Skills() {
  return (
    <section className="py-20 bg-primary/5" id="skills">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="My Skills" 
          subtitle="Technologies I work with and personal attributes I bring to the table."
        />

        <div className="grid md:grid-cols-2 gap-12 mt-12 max-w-5xl mx-auto">
          {/* Technical Skills - Progress Bars */}
          <div className="glass p-8 rounded-3xl">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="text-gradient">Technical</span> Expertise
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-sm">{skill.name}</span>
                    <span className="text-xs text-foreground/50">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-background rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.1 * index }}
                      className="h-full bg-gradient-to-r from-primary to-blue-400 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills - Animated Badges */}
          <div className="glass p-8 rounded-3xl h-fit">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="text-gradient">Soft</span> Skills
            </h3>
            <div className="flex flex-wrap gap-4">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-3 bg-background border border-primary/20 rounded-full font-medium text-foreground/80 shadow-sm"
                >
                  {skill}
                </motion.div>
              ))}
            </div>

            {/* Additional Info box */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 p-4 rounded-xl bg-primary/10 border border-primary/20 text-sm text-foreground/70"
            >
              <p>
                My diverse technical stack is complemented by strong problem-solving capabilities 
                and a continuous learning mindset. I adapt quickly to new technologies and excel 
                in collaborative environments.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
