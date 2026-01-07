"use client";
import { motion } from "framer-motion";
import Lanyard from "./Lanyard"; // <-- Import komponen Lanyard

export default function About() {
  return (
    <section id="about" className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch py-20">
      
      {/* Kolom Kiri: Teks About Me (Diperbesar & Rapi) */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="h-full min-h-[500px] p-8 lg:p-12 rounded-[2.5rem] bg-[#111] border border-white/5 relative overflow-hidden flex flex-col justify-center"
      >
        <h3 className="text-4xl font-bold text-white mb-8 flex items-center gap-3">
          About Me <span className="animate-pulse">👋</span>
        </h3>
        <div className="text-gray-400 text-lg md:text-xl leading-relaxed space-y-6 relative z-10">
          <p>
            I am an Informatics Engineering student at <strong className="text-white">Universitas Multimedia Nusantara</strong> with a strong focus on Front-End Development for both web and mobile platforms.
          </p>
          <p>
            I am highly detail-oriented, adaptable, and quick to learn new technologies. I enjoy solving complex problems and turning ideas into interactive reality.
          </p>
          <p>
            Currently, I am actively seeking a <strong className="text-white">Front-End Developer</strong> or <strong className="text-white">Android Developer</strong> internship to apply my skills in a professional environment.
          </p>
        </div>

        {/* Hiasan Background Abstrak */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/10 blur-[80px] rounded-full"></div>
      </motion.div>

      {/* Kolom Kanan: LANYARD PHYSICS */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative h-full min-h-[500px] flex items-center justify-center bg-[#111]/30 rounded-[2.5rem] border border-white/5 lg:border-none lg:bg-transparent"
      >
         {/* Panggil komponen Lanyard di sini */}
         <Lanyard />
         
         {/* Teks Hint Kecil */}
         <div className="absolute bottom-10 text-center text-gray-600 text-sm animate-bounce">
            Grab the card & drag! 👆
         </div>
      </motion.div>

    </section>
  );
}