"use client";

import { useState } from "react";
import { Mail, MapPin, Send, Loader2, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
        // GANTI URL DI BAWAH DENGAN URL FORMSPREE ASLI KAMU
        const response = await fetch("https://formspree.io/f/xjgknwkw", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            setIsSuccess(true);
            setFormData({ name: "", email: "", message: "" });
            setTimeout(() => setIsSuccess(false), 5000);
        } else {
            alert("Oops! Ada masalah saat mengirim pesan.");
        }
    } catch { 
        alert("Error sending message.");
    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full -z-10"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* Kolom Kiri: Teks & Info */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Let&apos;s work <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              together.
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-md leading-relaxed">
            Have a project in mind or want to hire me for an internship? I&apos;m currently open to new opportunities.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 text-gray-300">
              <div className="p-3 bg-white/5 rounded-full border border-white/10 text-purple-400">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <a href="mailto:winata2005chen@gmail.com" className="font-medium hover:text-white transition">winata2005chen@gmail.com</a>
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-gray-300">
              <div className="p-3 bg-white/5 rounded-full border border-white/10 text-purple-400">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-medium">Tangerang, Indonesia</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Kolom Kanan: Form Input */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#111] p-8 md:p-10 rounded-3xl border border-white/5 shadow-2xl relative"
        >
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition placeholder:text-gray-600"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition placeholder:text-gray-600"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
              <textarea 
                id="message" 
                name="message" 
                required
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell me about your project..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition placeholder:text-gray-600 resize-none"
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting || isSuccess}
              className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 ${
                isSuccess 
                  ? "bg-green-500/20 text-green-400 border border-green-500/50 cursor-default" 
                  : "bg-white text-black hover:bg-gray-200"
              }`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : isSuccess ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  Message Sent!
                </>
              ) : (
                <>
                  Send Message
                  <Send className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}