"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

const workExperiences = [
  {
    role: "AI Engineer Intern",
    company: "PT Salam Pacific Indonesia Lines (SPIL)",
    period: "Feb 2026 - Present",
    description: "Automating industrial workflows using AI, focusing on scalable high-performance applications for logistics.",
    achievements: [
      "Optimizing OCR processing for large-scale invoice datasets.",
      "Developing AI-driven solutions for logistical challenges.",
      "Bridging the gap between ML models and production-ready software."
    ]
  },
  // Add more experiences here as needed
];

export default function WorkExperience() {
  return (
    <section id="experience" className="py-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-white/10 pb-6 gap-4">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">Work Experience</h2>
          <p className="text-gray-500 text-lg">My professional journey and internships.</p>
        </div>
        <div className="flex items-center gap-2 text-muted font-mono text-sm bg-white/10 px-4 py-2 rounded-full border border-white/30">
          <Briefcase size={16} />
          <span>Professional Path</span>
        </div>
      </div>

      <div className="space-y-8">
        {workExperiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative p-8 rounded-[2rem] bg-card border border-white/5 hover:border-white/50 transition-all duration-500"
          >
            {/* Background Glow on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/0 group-hover:from-white/5 group-hover:to-transparent transition-all duration-500 rounded-[2rem]"></div>

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-muted transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-muted font-medium">{exp.company}</p>
                </div>
                <div className="flex items-center gap-2 text-gray-500 bg-white/5 px-4 py-2 rounded-xl border border-white/5">
                  <Calendar size={16} />
                  <span className="text-sm font-mono">{exp.period}</span>
                </div>
              </div>

              <p className="text-muted text-lg mb-6 leading-relaxed">
                {exp.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {exp.achievements.map((achievement, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-muted mt-1 shrink-0" />
                    <span className="text-muted">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
