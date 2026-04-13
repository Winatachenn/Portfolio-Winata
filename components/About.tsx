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
        className="h-full min-h-[500px] p-8 lg:p-12 rounded-[2.5rem] bg-card border border-white/5 relative overflow-hidden flex flex-col justify-center"
      >
        <h3 className="text-4xl font-bold text-white mb-8 flex items-center gap-3">
          About Me
        </h3>

        <div className="text-muted text-lg md:text-xl leading-relaxed space-y-6 relative z-10">
          <p>
            I’m an Informatics Engineering student at{" "}
            <strong className="text-white">Universitas Multimedia Nusantara</strong>, currently working as an{" "}
            <strong className="text-white">AI Engineer Intern</strong> at{" "}
            <strong className="text-white">PT Salam Pacific Indonesia Lines (SPIL)</strong>.
          </p>

          <p>
            I enjoy turning complex ideas especially in AI and machine learning into practical, real world solutions.
            Recently, I’ve been focused on building systems that automate industrial workflows, making processes
            faster, smarter, and more reliable.
          </p>

          <p>
            What I find most interesting is bridging the gap between AI models and production ready software.
            Whether it’s optimizing OCR pipelines for large scale document processing or building web applications
            with Next.js, I like working on things that actually get used.
          </p>

          <p>
            Outside of coding, I see myself as someone who connects the dots between data, systems, and people.
            I’m always open to learning, collaborating, and exploring new opportunities in AI and software engineering.
          </p>
        </div>

        {/* Hiasan Background Abstrak */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/10 blur-[80px] rounded-full"></div>
      </motion.div>

      {/* Kolom Kanan: LANYARD PHYSICS */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative h-full min-h-[500px] flex items-center justify-center bg-card/30 rounded-[2.5rem] border border-white/5 lg:border-none lg:bg-transparent"
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