"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Terminal, Database, Cpu, Globe, Layers, Settings, Wrench, Braces } from "lucide-react";

// Definisi Data Tech Stack
const categories = [
  { id: "languages", label: "Languages" },
  { id: "frameworks", label: "Frameworks" },
  { id: "tools", label: "Tools" }
];

const skills = {
  languages: [
    { name: "C", icon: <Code2 />, color: "text-blue-400 border-blue-500/50 shadow-blue-500/20" },
    { name: "C++", icon: <Code2 />, color: "text-indigo-400 border-indigo-500/50 shadow-indigo-500/20" },
    { name: "Java", icon: <Code2 />, color: "text-red-400 border-red-500/50 shadow-red-500/20" },
    { name: "PHP", icon: <Code2 />, color: "text-purple-400 border-purple-500/50 shadow-purple-500/20" },
    { name: "Python", icon: <Terminal />, color: "text-yellow-300 border-yellow-500/50 shadow-yellow-500/20" },
    { name: "JavaScript", icon: <Braces />, color: "text-yellow-400 border-yellow-400/50 shadow-yellow-400/20" },
    { name: "HTML", icon: <Globe />, color: "text-orange-400 border-orange-500/50 shadow-orange-500/20" },
    { name: "CSS", icon: <Globe />, color: "text-sky-400 border-sky-500/50 shadow-sky-500/20" },
    { name: "SQL", icon: <Database />, color: "text-blue-400 border-blue-500/50 shadow-blue-500/20" }
  ],

  frameworks: [
    { name: "React.js", icon: <Layers />, color: "text-cyan-400 border-cyan-500/50 shadow-cyan-500/20" },
    { name: "Next.js", icon: <Layers />, color: "text-white border-white/50 shadow-white/20" },
    { name: "Node.js", icon: <Cpu />, color: "text-green-500 border-green-500/50 shadow-green-500/20" },
    { name: "Tailwind CSS", icon: <Layers />, color: "text-sky-400 border-sky-500/50 shadow-sky-500/20" },
    { name: "Scikit-Learn", icon: <Cpu />, color: "text-orange-300 border-orange-400/50 shadow-orange-400/20" }
  ],

  tools: [
    { name: "VS Code", icon: <Terminal />, color: "text-blue-400 border-blue-500/50 shadow-blue-500/20" },
    { name: "Android Studio", icon: <Settings />, color: "text-green-300 border-green-400/50 shadow-green-400/20" },
    { name: "Unity", icon: <Cpu />, color: "text-gray-300 border-gray-400/50 shadow-gray-400/20" },
    { name: "Git & GitHub", icon: <Wrench />, color: "text-red-400 border-red-500/50 shadow-red-500/20" },
    { name: "MySQL", icon: <Database />, color: "text-blue-300 border-blue-400/50 shadow-blue-400/20" },
    { name: "Figma", icon: <Settings />, color: "text-pink-400 border-pink-500/50 shadow-pink-500/20" }
  ]
};

export default function TechStack() {
  const [activeTab, setActiveTab] = useState("languages");

  return (
    <section className="py-20 relative">
      <div className="text-center mb-12 space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          Tech Stack
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Technologies and tools I use to build seamless digital experiences.
        </p>
      </div>

      {/* TABS NAVIGATION */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {categories.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === tab.id ? "text-white" : "text-gray-500 hover:text-gray-300"
            }`}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-white/10 border border-white/10 rounded-full"
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* GRID CONTENT */}
      <div className="min-h-[300px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            {skills[activeTab as keyof typeof skills].map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`flex flex-col items-center justify-center p-6 rounded-2xl bg-[#111] border ${skill.color.split(" ")[1]} hover:shadow-[0_0_30px_-5px_currentColor] transition-all duration-300 group`}
              >
                {/* Icon Wrapper dengan Glow */}
                <div className={`mb-4 p-4 rounded-full bg-white/5 ${skill.color.split(" ")[0]} group-hover:scale-110 transition-transform duration-300`}>
                    {skill.icon}
                </div>
                
                <h3 className="font-semibold text-gray-200 group-hover:text-white transition-colors">
                  {skill.name}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}