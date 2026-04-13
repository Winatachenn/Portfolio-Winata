"use client";
import { useState } from "react";
import Link from "next/link";
import { Github, Linkedin, FileText, MonitorPlay } from "lucide-react";
import { motion } from "framer-motion";

// Data untuk video overview
const overviewData = [
  { id: 1, title: "SmartScan AI", label: "Web App // AI", mediaSrc: "/projects/Smartscan_Video.mp4", isVideo: true },
  { id: 2, title: "EngLab App", label: "Mobile App // Android", mediaSrc: "/projects/Englab_Video.mp4", isVideo: true },
  { id: 3, title: "Zombie Forest", label: "Game Dev // Unity", mediaSrc: "/projects/ZombieForest_Showcast.mp4", isVideo: true }
];

export default function Hero() {
  const [activeVideo, setActiveVideo] = useState(0);

  return (
    <section className="w-full pt-15 md:pt-25 pb-15">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full items-center">

        {/* === KOLOM KIRI: TEKS HERO === */}
        <div className="space-y-6 lg:pr-10">
          {/* Badge pakai gaya original kamu */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 rounded-full border border-white/30 bg-white/10 text-muted text-sm font-medium"
          >
            AI Engineer Intern @ PT SPIL 🚀
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white to-primary bg-clip-text text-transparent tracking-tight leading-[1.1]"
          >
            Winata Chen.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-muted max-w-lg leading-relaxed pt-2"
          >
            Informatics Student at <span className="text-primary font-bold">UMN</span>. Focusing on <span className="text-muted">AI Integration</span> and building scalable software solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center gap-6 pt-6"
          >
            {/* Tombol CV gaya original */}
            <a
              href="/cv_winata.pdf"
              download="CV_Winata_Chen.pdf"
              className="px-8 py-4 rounded-full bg-primary text-background font-bold text-lg hover:bg-primary-soft transition flex items-center gap-2 group"
            >
              <FileText className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              Download CV
            </a>

            {/* Tombol Social Media gaya original */}
            <div className="flex gap-4">
              <Link
                href="https://github.com/Winatachenn"
                target="_blank"
                className="p-4 bg-white/5 rounded-full hover:bg-white/10 transition border border-white/10 hover:border-white/50 hover:text-muted"
              >
                <Github className="w-6 h-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/winata-chen-9b513b28a/"
                target="_blank"
                className="p-4 bg-white/5 rounded-full hover:bg-white/10 transition border border-white/10 hover:border-white/50 hover:text-muted"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* === KOLOM KANAN: VIDEO OVERVIEW === */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="relative w-full flex flex-col items-center lg:items-end"
        >
          {/* Container melengkung ala modern UI */}
          <div className="w-full max-w-[500px] bg-card border border-white/10 rounded-[2rem] p-4 hover:border-white/50 transition-colors duration-500 group">

            {/* Header Mini di dalam container */}
            <div className="flex justify-between items-center mb-4 px-2">
              <div className="flex items-center gap-2 text-muted text-sm font-medium">
                <MonitorPlay size={16} />
                <span>Live Preview</span>
              </div>
              <span className="text-xs text-gray-500 uppercase tracking-wider">
                {overviewData[activeVideo].label}
              </span>
            </div>

            {/* Frame Video */}
            <div className="relative aspect-video bg-black rounded-2xl overflow-hidden border border-white/5">
              <div className="absolute inset-0 flex items-center justify-center text-gray-600 text-sm z-0">
                Loading media...
              </div>
              {overviewData[activeVideo].isVideo ? (
                <video
                  key={overviewData[activeVideo].mediaSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="relative z-10 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                >
                  <source src={overviewData[activeVideo].mediaSrc} type="video/mp4" />
                </video>
              ) : (
                <img
                  key={overviewData[activeVideo].mediaSrc}
                  src={overviewData[activeVideo].mediaSrc}
                  alt={overviewData[activeVideo].title}
                  className="relative z-10 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                />
              )}

              {/* Title Overlay gaya modern */}
              <div className="absolute bottom-4 left-4 z-20">
                <span className="bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-xl text-sm font-medium border border-white/10">
                  {overviewData[activeVideo].title}
                </span>
              </div>
            </div>

            {/* Kontrol Dot (Carousel style) */}
            <div className="flex justify-center gap-2 mt-6 mb-2">
              {overviewData.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setActiveVideo(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${activeVideo === index ? "w-8 bg-white" : "w-2 bg-white/20 hover:bg-white/40"
                    }`}
                  aria-label={`Show ${item.title}`}
                />
              ))}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}