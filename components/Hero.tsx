"use client";
import Link from "next/link";
import { Github, Linkedin, FileText } from "lucide-react"; 
import { motion, Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.1 } 
  }
};

export default function Hero() {
  return (
    <motion.section 
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="flex flex-col justify-center min-h-[60vh]" 
    >
      <div className="space-y-6 max-w-4xl">
        <motion.div variants={fadeInUp} className="inline-block px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-sm font-medium">
          Available for Internship 🚀
        </motion.div>
        
        <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-bold text-white tracking-tight leading-[1.1]">
          Hi, I&apos;m Winata Chen.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-600">
            Building Digital Experiences.
          </span>
        </motion.h1>
        
        <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed pt-4">
          Informatics Student at <span className="text-white font-medium">Universitas Multimedia Nusantara</span>. Passionate about Front-End, Mobile Development & AI.
        </motion.p>
      </div>
      
      <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-6 pt-8">
        
        {/* === TOMBOL DOWNLOAD CV === */}
        {/* PERHATIAN: 
            1. Pastikan file PDF ada di folder "public"
            2. Pastikan nama file di folder public PERSIS "cv_winata.pdf" (huruf kecil semua)
        */}
        <a 
          href="/cv_winata.pdf" 
          download="CV_Winata_Chen.pdf" // Ini nama file yang akan tersimpan di komputer user saat didownload
          className="px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:bg-gray-200 transition flex items-center gap-2 group"
        >
          <FileText className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          Download CV
        </a>

        {/* Divider Kecil */}
        <div className="hidden md:block w-px h-10 bg-white/10"></div>

        {/* SOCIAL LINKS */}
        <div className="flex gap-4">
          {[
            { icon: Github, href: "https://github.com/Winatachenn" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/winata-chen-9b513b28a/" }, 
          ].map((social, i) => (
            <Link 
              key={i} 
              href={social.href} 
              target="_blank"
              className="p-4 bg-white/5 rounded-full hover:bg-white/10 transition border border-white/10 hover:border-purple-500/50 hover:text-purple-400"
            >
              <social.icon className="w-6 h-6" />
            </Link>
          ))}
        </div>
        
      </motion.div>
    </motion.section>
  );
}