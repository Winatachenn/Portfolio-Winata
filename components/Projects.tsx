"use client";
import { useState, ReactNode } from "react";
import Link from "next/link";
import { Code2, Smartphone, Gamepad2, ArrowRight, BrainCircuit, Terminal, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// 1. KITA BUAT TIPE DATA (INTERFACE) DI SINI BIAR TYPESCRIPT NGGAK MARAH
interface ProjectLink {
  name: string;
  url: string;
}

interface Project {
  title: string;
  role: string;
  year: string;
  desc: string;
  tech: string[];
  keyContributions: string[];
  links: ProjectLink[];
  icon: ReactNode;
  color: string;
  image: string;
}

export default function Projects() {
  // 2. GANTI <any> JADI <Project | null>
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "Fake Review Detection",
      role: "AI Engineer",
      year: "2025",
      desc: "Machine Learning model (SVM) designed to detect fake reviews (Bot vs Human) in e-commerce, achieving 91% accuracy.",
      tech: ["Python", "SVM", "Scikit-Learn", "AI"],
      keyContributions: [
        "Processed and analyzed review data to extract meaningful features.",
        "Conducted data preparation and labeling of the dataset to ensure reliable classification results.",
        "Built and fine-tuned machine learning models using SVM, achieving 91% accuracy."
      ],
      links: [
        { name: "Website", url: "#" },
        { name: "Source Code", url: "#" }
      ],
      icon: <BrainCircuit className="w-6 h-6" />,
      color: "text-rose-400 bg-rose-400/10",
      image: "/projects/fake-review.png"
    },
    {
      title: "Englab App",
      role: "Frontend Mobile Dev",
      year: "2025",
      desc: "Android-based English learning application. Features a responsive and user-friendly UI built with Kotlin & XML.",
      tech: ["Kotlin", "XML", "Android SDK"],
      keyContributions: [
        "Designed and implemented a responsive user interface using XML and Android SDK.",
        "Collaborated with the backend team to integrate APIs for seamless data synchronization.",
        "Optimized app performance to ensure smooth navigation across different devices."
      ],
      links: [
        { name: "Source Code", url: "#" }
      ],
      icon: <Smartphone className="w-6 h-6" />,
      color: "text-green-400 bg-green-400/10",
      image: "/projects/englab.png"
    },
    {
      title: "Banten Pro",
      role: "Fullstack Web Dev",
      year: "2024",
      desc: "Web-based tourism promotion platform for Banten. Built with React.js and Node.js for dynamic content rendering.",
      tech: ["React.js", "Node.js", "Web Dev"],
      keyContributions: [
        "Developed full-stack features using React.js for frontend and Node.js for backend.",
        "Implemented secure authentication and dynamic rendering of tourism content.",
        "Configured deployment pipelines for high availability."
      ],
      links: [
        { name: "Website", url: "#" },
        { name: "Source Code", url: "#" }
      ],
      icon: <Code2 className="w-6 h-6" />,
      color: "text-blue-400 bg-blue-400/10",
      image: "/projects/banten-pro.png"
    },
    {
      title: "Zombie Forest",
      role: "Game Developer",
      year: "2025",
      desc: "3D survival game developed in Unity. Implemented AI Navigation (NavMesh) for intelligent enemy behavior and logic.",
      tech: ["Unity", "C#", "3D Game"],
      keyContributions: [
        "Engineered autonomous enemy AI behavior utilizing Unity NavMesh.",
        "Designed level mechanics and player interaction within a 3D environment.",
        "Optimized game assets to maintain a steady framerate."
      ],
      links: [
        { name: "Demo", url: "#" }
      ],
      icon: <Gamepad2 className="w-6 h-6" />,
      color: "text-muted bg-white/10",
      image: "/projects/zombie-forest.png"
    },
    {
      title: "Ticket Reservation System",
      role: "Software Engineer",
      year: "2023",
      desc: "Console-based booking system enabling users to manage reservations. Features full CRUD functionality and file-based storage.",
      tech: ["C++", "Algorithms", "File Handling"],
      keyContributions: [
        "Programmed a robust C++ CRUD system for user booking operations.",
        "Implemented efficient file handling for data persistence.",
        "Designed a straightforward console interface for easy interaction."
      ],
      links: [
        { name: "Source Code", url: "#" }
      ],
      icon: <Terminal className="w-6 h-6" />,
      color: "text-yellow-400 bg-yellow-400/10",
      image: "/projects/ticket-system.png"
    },
    {
      title: "Smartscan Invoice",
      role: "Software Engineer",
      year: "2026",
      desc: "Console-based booking system enabling users to manage reservations. Features full CRUD functionality and file-based storage.",
      tech: ["C++", "Algorithms", "File Handling"],
      keyContributions: [
        "Developed feature extraction logic to parse invoices accurately.",
        "Integrated robust storage mechanisms for archiving scanned records.",
        "Maintained high code quality through continuous testing and refactoring."
      ],
      links: [
        { name: "Source Code", url: "#" }
      ],
      icon: <Terminal className="w-6 h-6" />,
      color: "text-yellow-400 bg-yellow-400/10",
      image: "/projects/ticket-system.png"
    }
  ];

  return (
    <>
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
            href="https://github.com/Winatachenn"
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden md:flex items-center"
          >
            <div>
              <p className="text-gray-500 text-lg">More Projects</p>
            </div>
            <ArrowRight
              className="w-10 h-10 text-muted -rotate-45
                        transition-all duration-300
                        group-hover:translate-x-2
                        group-hover:-translate-y-2
                        group-hover:text-muted"
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
              onClick={() => setSelectedProject(project)}
              className="group flex flex-col rounded-[2rem] bg-card border border-white/5 hover:border-white/20 transition duration-300 relative overflow-hidden h-full cursor-pointer"
            >
              {/* Content */}
              <div className="flex flex-col flex-1 p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/0 group-hover:to-white/5 transition duration-500"></div>

                <div className="flex items-center justify-between mb-4 relative z-10">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {project.role}
                  </span>
                  <span className="text-xs font-mono text-muted border border-white/10 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-sm z-10">
                    {project.year}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-muted transition relative z-10">
                  {project.title}
                </h3>
                <p className="text-muted text-base mb-8 line-clamp-3 leading-relaxed relative z-10">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs text-muted bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal / Popup */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 cursor-pointer"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-0 m-auto max-w-3xl w-[90%] md:w-full h-fit max-h-[85vh] overflow-y-auto bg-card border border-white/10 rounded-2xl z-50 p-6 md:p-8 custom-scrollbar shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
                  <p className="text-sm font-medium text-gray-400">{selectedProject.role}</p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-8">
                <div>
                  <p className="text-gray-300 text-base leading-relaxed">
                    {selectedProject.desc}
                  </p>
                </div>

                {/* Skills */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t: string, i: number) => (
                      <span key={i} className="text-sm text-gray-300 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Contributions */}
                {selectedProject.keyContributions && selectedProject.keyContributions.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Key Contributions</h4>
                    <ul className="list-disc list-outside ml-5 space-y-2 text-gray-300">
                      {selectedProject.keyContributions.map((kc: string, i: number) => (
                        <li key={i}>{kc}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Links */}
                {selectedProject.links && selectedProject.links.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Links</h4>
                    <div className="flex flex-wrap gap-3">
                      {/* 3. GANTI TIPE DATA LINK DI SINI DARI any JADI ProjectLink */}
                      {selectedProject.links.map((link: ProjectLink, i: number) => (
                        <Link
                          key={i}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-blue-600/20 hover:bg-blue-600/40 text-blue-400 text-sm font-medium rounded-lg transition-colors border border-blue-500/20"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}