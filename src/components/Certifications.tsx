"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Award, CheckCircle2 } from "lucide-react";

const certs = [
  {
    issuer: "AWS Educate",
    courses: [
      "Introduction to Cloud 101",
      "Getting Started with Storage",
      "Getting Started with Compute",
      "Getting Started with Networking"
    ]
  },
  {
    issuer: "IBM",
    courses: ["Code Generation and Optimization Using IBM Granite"]
  },
  {
    issuer: "MaharaTech - ITI",
    courses: ["Introduction to MongoDB"]
  },
  {
    issuer: "Huawei",
    courses: ["HCIA-AI V4"]
  },
  {
    issuer: "Deep Minds 3",
    courses: ["Odoo and Enterprise Resource Planning (ERP)"]
  }
];

export function Certifications() {
  return (
    <section className="py-20 relative" id="certifications">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading title="Certifications & Courses" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">{cert.issuer}</h3>
              </div>
              <ul className="space-y-3">
                {cert.courses.map((course, i) => (
                  <li key={i} className="flex items-start gap-2 text-foreground/80 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{course}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
