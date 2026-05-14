"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { GraduationCap, Calendar } from "lucide-react";

export function Education() {
  return (
    <section className="py-20 bg-primary/5" id="education">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading title="Education" />
        
        <div className="max-w-3xl mx-auto mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative pl-8 md:pl-0"
          >
            {/* Timeline Line (Desktop only) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent -translate-x-1/2" />
            
            {/* Timeline Item */}
            <div className="relative md:flex items-center justify-between w-full mb-8">
              {/* Dot */}
              <div className="absolute left-[-32px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-background z-10" />
              
              {/* Content */}
              <div className="md:w-[45%] glass p-6 rounded-2xl hover:scale-[1.02] transition-transform ml-0 md:ml-auto">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <GraduationCap className="w-5 h-5" />
                  <h3 className="text-xl font-bold">Modern Sciences and Arts University (MSA)</h3>
                </div>
                <h4 className="text-lg font-medium text-foreground/80 mb-2">
                  Bachelor of Science in Computer Science
                </h4>
                <div className="flex items-center gap-2 text-sm text-foreground/60 mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>Expected Graduation: June 2027</span>
                </div>
                <p className="text-foreground/70">
                  Focusing on artificial intelligence, scalable systems, algorithms, and full stack development. 
                  Active participant in programming competitions and tech communities.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
