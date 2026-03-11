"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Definisi Data Tech Stack dengan logo asli dari Devicon CDN
const categories = [
  { id: "languages", label: "Languages" },
  { id: "frameworks", label: "Frameworks" },
  { id: "tools", label: "Tools" }
];

const skills = {
  languages: [
    { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg", color: "border-blue-500/50 shadow-blue-500/20" },
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg", color: "border-indigo-500/50 shadow-indigo-500/20" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", color: "border-red-500/50 shadow-red-500/20" },
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg", color: "border-purple-500/50 shadow-purple-500/20" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", color: "border-yellow-500/50 shadow-yellow-500/20" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", color: "border-yellow-400/50 shadow-yellow-400/20" },
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", color: "border-orange-500/50 shadow-orange-500/20" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", color: "border-sky-500/50 shadow-sky-500/20" },
    { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg", color: "border-blue-500/50 shadow-blue-500/20" },
    { name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg", color: "border-violet-500/50 shadow-violet-500/20" }
  ],

  frameworks: [
    { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", color: "border-cyan-500/50 shadow-cyan-500/20" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", color: "border-white/50 shadow-white/20" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", color: "border-green-500/50 shadow-green-500/20" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", color: "border-sky-500/50 shadow-sky-500/20" },
    { name: "Scikit-Learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg", color: "border-orange-400/50 shadow-orange-400/20" }
  ],

  tools: [
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg", color: "border-blue-500/50 shadow-blue-500/20" },
    { name: "Android Studio", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg", color: "border-green-400/50 shadow-green-400/20" },
    { name: "Unity", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg", color: "border-gray-400/50 shadow-gray-400/20" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", color: "border-red-500/50 shadow-red-500/20" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", color: "border-gray-300/50 shadow-gray-300/20" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg", color: "border-blue-400/50 shadow-blue-400/20" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg", color: "border-pink-500/50 shadow-pink-500/20" }
  ]
};

export default function TechStack() {
  const [activeTab, setActiveTab] = useState("languages");

  return (
    <section id="techstack" className="py-20 relative">
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
            className={`relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === tab.id ? "text-white" : "text-gray-500 hover:text-gray-300"
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
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto"
          >
            {skills[activeTab as keyof typeof skills].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.08, y: -8 }}
                className={`flex flex-col items-center justify-center p-6 rounded-2xl bg-[#111] border ${skill.color.split(" ")[0]} hover:shadow-[0_0_30px_-5px] ${skill.color.split(" ")[1]} transition-all duration-300 group cursor-default`}
              >
                {/* Real SVG Icon */}
                <div className="mb-4 p-3 rounded-xl bg-white/5 group-hover:bg-white/10 group-hover:scale-110 transition-all duration-300">
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={40}
                    height={40}
                    className="drop-shadow-lg"
                    unoptimized
                  />
                </div>

                <h3 className="font-semibold text-sm text-gray-300 group-hover:text-white transition-colors text-center">
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