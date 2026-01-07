import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/Techstack"; 
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-gray-200 selection:bg-purple-500 selection:text-white pb-20 overflow-x-hidden">
      
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-40 space-y-32"> {/* Jarak antar section diperlebar jadi 32 */}
        
        <Hero />
        <About />
        
        {/* Sisipkan Tech Stack di sini */}
        <TechStack />
        
        <Projects />
        <Contact />
        <Footer />

      </div>
    </main>
  );
}