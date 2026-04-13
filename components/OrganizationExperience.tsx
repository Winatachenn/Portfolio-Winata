"use client";

import { motion } from "framer-motion";
import { Users, Calendar } from "lucide-react";

// 1. Tambahkan properti imageSrc di setiap data
const organizationExperiences = [
  {
    role: "Mentor",
    organization: "Character Building Mentoring 2025 - Student Support UMN",
    period: "2025",
    description: "Guided new UMN students in understanding and applying the 5C values of Kompas Gramedia through mentoring activities and discussions.",
    imageSrc: "/mentor.png", // Diperbarui dari /foto_kerja.jpg
    highlights: [
      "Facilitated group discussions and reflective activities to help students understand the 5C values.",
      "Encouraged students to apply these values in their academic journey and daily life.",
      "Supported mentees in building confidence, teamwork, and effective communication skills."
    ]
  },
  {
    role: "Insurer",
    organization: "MAXIMA (Malam Ekspresi Mahasiswa) - BEM UMN",
    period: "2025",
    description: "Supported the execution of MAXIMA, UMN’s flagship annual event that introduces students to various student organizations and communities on campus.",
    imageSrc: "/maxima.png", // Diperbarui dari /foto_kerja.jpg
    highlights: [
      "Ensured the safety and smooth flow of participants during event activities.",
      "Managed crowd control and assisted in maintaining order across event areas.",
      "Coordinated with other committee members to ensure event procedures and schedules ran properly.",
      "Helped create a safe and welcoming environment for new students exploring campus organizations."
    ]
  },
  {
    role: "Logistics / Equipment Staff",
    organization: "TV ON AIR 10.0",
    period: "2025",
    description: "Responsible for preparing and managing facilities and technical equipment to support the smooth execution of event activities.",
    imageSrc: "/tvonair.png", // Diperbarui dari /foto_kerja.jpg
    highlights: [
      "Provided essential facilities such as rooms, tables, chairs, and other logistical equipment for event operations.",
      "Collaborated with multiple divisions to ensure all technical and logistical needs were fulfilled.",
      "Developed technical skills using OBS Studio for video and presentation display management.",
      "Strengthened teamwork, problem-solving, and adaptability skills in a fast-paced event environment."
    ]
  },
];

export default function OrganizationExperience() {
  return (
    <section id="organization" className="py-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-white/10 pb-6 gap-4">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">Organization</h2>
          <p className="text-gray-500 text-lg">My involvement in labs, clubs, and campus life.</p>
        </div>
        <div className="flex items-center gap-2 text-blue-400 font-mono text-sm bg-blue-400/10 px-4 py-2 rounded-full border border-blue-400/20">
          <Users size={16} />
          <span>Community & Labs</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {organizationExperiences.map((org, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative p-8 rounded-[2.5rem] bg-card border border-white/5 hover:border-blue-500/30 transition-all duration-500 overflow-hidden flex flex-col"
          >
            {/* Background Gradient */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-[50px] rounded-full group-hover:bg-blue-500/10 transition-all"></div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-start justify-between mb-6">

                {/* 2. Container untuk Foto Pengganti Logo */}
                <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-white/10 group-hover:border-blue-500/50 transition-colors shrink-0">
                  <img
                    src={org.imageSrc}
                    alt={org.organization}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex items-center gap-2 text-gray-500 text-xs font-mono ml-4">
                  <Calendar size={14} />
                  <span>{org.period}</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                {org.role}
              </h3>
              <p className="text-gray-500 font-medium mb-4">{org.organization}</p>

              <p className="text-muted mb-6 leading-relaxed">
                {org.description}
              </p>

              <div className="mt-auto flex flex-wrap gap-2">
                {org.highlights.map((highlight, i) => (
                  <span
                    key={i}
                    className="text-xs text-muted bg-white/5 px-3 py-1.5 rounded-lg border border-white/5 group-hover:border-blue-500/20 transition-colors"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}