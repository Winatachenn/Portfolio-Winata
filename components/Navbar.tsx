"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Tech Stack", href: "#techstack" }, 
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // 2. Beri tipe ': Variants' pada semua variabel animasi di bawah ini

  const menuVars: Variants = {
    initial: { scaleY: 0 },
    animate: { 
      scaleY: 1, 
      transition: { duration: 0.5, ease: [0.12, 0, 0.39, 0] } 
    },
    exit: { 
      scaleY: 0, 
      transition: { delay: 0.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  const containerVars: Variants = {
    initial: { transition: { staggerChildren: 0.09, staggerDirection: -1 } },
    open: { transition: { delayChildren: 0.3, staggerChildren: 0.09, staggerDirection: 1 } }
  };

  const mobileLinkVars: Variants = {
    initial: { y: "30vh", transition: { duration: 0.5, ease: [0.37, 0, 0.63, 1] } },
    open: { y: 0, transition: { duration: 0.7, ease: [0, 0.55, 0.45, 1] } }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "circOut" }}
      className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-white/5 bg-[#0a0a0a]/80"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="font-bold text-2xl tracking-tight bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent z-50 relative">
          Winata Chen
        </Link>

        {/* DESKTOP MENU (Hidden di Mobile) */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          {navLinks.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className="hover:text-white transition relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* MOBILE BURGER BUTTON (Visible di Mobile) */}
        <div className="md:hidden z-50">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-white focus:outline-none p-2"
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-screen bg-[#0a0a0a] origin-top flex flex-col items-center justify-center p-10 z-40"
          >
            <motion.div 
              variants={containerVars}
              initial="initial"
              animate="open"
              exit="initial"
              className="flex flex-col gap-8 text-3xl font-bold text-center"
            >
              {navLinks.map((item) => (
                <div key={item.name} className="overflow-hidden">
                  <motion.div variants={mobileLinkVars}>
                    <Link 
                      href={item.href} 
                      onClick={() => setIsOpen(false)} // Tutup menu saat link diklik
                      className="text-white hover:text-purple-400 transition"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}