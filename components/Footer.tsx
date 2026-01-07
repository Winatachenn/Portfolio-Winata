import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0a] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* SECTION: QUOTE */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <p className="text-xl md:text-2xl font-medium text-gray-300 italic max-w-3xl leading-relaxed">
            “The best way to get a project done faster is to start sooner.”
          </p>
          <div className="flex items-center gap-4 mt-6">
            <span className="h-px w-8 bg-purple-500/50"></span>
            <p className="text-sm text-purple-400 font-mono tracking-widest uppercase">
              Jim Highsmith
            </p>
            <span className="h-px w-8 bg-purple-500/50"></span>
          </div>
        </div>

        {/* SECTION: COPYRIGHT & LINKS */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-gray-600 text-sm border-t border-white/5 pt-8">
          <span>© 2026 Winata Chen. All rights reserved.</span>
          <div className="flex gap-8">
              <Link href="https://github.com/Winatachenn" target="_blank" className="hover:text-white transition cursor-pointer">Github</Link>
              <Link href="https://www.linkedin.com/in/winata-chen-9b513b28a/" target="_blank" className="hover:text-white transition cursor-pointer">LinkedIn</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}