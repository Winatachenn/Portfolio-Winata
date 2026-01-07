"use client";
import Link from "next/link";
import { Code2, Smartphone, Gamepad2, ArrowRight, BrainCircuit, Terminal } from "lucide-react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Fake Review Detection",
      role: "AI Engineer",
      year: "2025",
      desc: "Machine Learning model (SVM) designed to detect fake reviews (Bot vs Human) in e-commerce, achieving 91% accuracy.",
      tech: ["Python", "SVM", "Scikit-Learn", "AI"],
      icon: <BrainCircuit className="w-6 h-6" />,
      color: "text-rose-400 bg-rose-400/10"
    },
    {
      title: "Englab App",
      role: "Frontend Mobile Dev",
      year: "2025",
      desc: "Android-based English learning application. Features a responsive and user-friendly UI built with Kotlin & XML.",
      tech: ["Kotlin", "XML", "Android SDK"],
      icon: <Smartphone className="w-6 h-6" />,
      color: "text-green-400 bg-green-400/10"
    },
    {
      title: "Banten Pro",
      role: "Fullstack Web Dev",
      year: "2024",
      desc: "Web-based tourism promotion platform for Banten. Built with React.js and Node.js for dynamic content rendering.",
      tech: ["React.js", "Node.js", "Web Dev"],
      icon: <Code2 className="w-6 h-6" />,
      color: "text-blue-400 bg-blue-400/10"
    },
    {
      title: "Zombie Forest",
      role: "Game Developer",
      year: "2024",
      desc: "3D survival game developed in Unity. Implemented AI Navigation (NavMesh) for intelligent enemy behavior and logic.",
      tech: ["Unity", "C#", "3D Game"],
      icon: <Gamepad2 className="w-6 h-6" />,
      color: "text-purple-400 bg-purple-400/10"
    },
    {
      title: "Ticket Reservation System",
      role: "Software Engineer",
      year: "2023",
      desc: "Console-based booking system enabling users to manage reservations. Features full CRUD functionality and file-based storage.",
      tech: ["C++", "Algorithms", "File Handling"],
      icon: <Terminal className="w-6 h-6" />,
      color: "text-yellow-400 bg-yellow-400/10"
    }
  ];

  return (
    <section id="projects">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-end justify-between mb-12 border-b border-white/10 pb-6"
      >
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">Selected Work</h2>
          <p className="text-gray-500 text-lg">Highlight projects (Apps, Games, AI) 2023-2025</p>
        </div>
        <Link
            href="https://github.com/username"
            target="_blank"
            className="group hidden md:flex items-center"
          >
            <ArrowRight
              className="w-10 h-10 text-purple-500 -rotate-45
                        transition-all duration-300
                        group-hover:translate-x-2
                        group-hover:-translate-y-2
                        group-hover:text-purple-400"
            />
          </Link>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="group flex flex-col p-8 rounded-[2rem] bg-[#111] border border-white/5 hover:border-white/20 transition duration-300 relative overflow-hidden h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/0 group-hover:to-white/5 transition duration-500"></div>

            <div className="flex justify-between items-start mb-8 relative z-10">
              <div className={`p-4 rounded-2xl ${project.color}`}>
                {project.icon}
              </div>
              <span className="text-xs font-mono text-gray-400 border border-white/10 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm">
                {project.year}
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition relative z-10">
              {project.title}
            </h3>
            <p className="text-gray-400 text-base mb-8 line-clamp-4 leading-relaxed relative z-10">
              {project.desc}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto relative z-10">
              {project.tech.map((t, i) => (
                <span key={i} className="text-xs text-gray-400 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                  #{t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}