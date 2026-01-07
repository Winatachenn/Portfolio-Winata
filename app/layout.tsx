import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Mengambil font Inter dari Google Fonts
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // Judul di Tab Browser
  title: "Winata Chen | Front-End & Mobile Developer",
  
  // Deskripsi yang muncul di Google
  description: "Portfolio of Winata Chen, an Informatics student at UMN specializing in Android Development (Kotlin), Web (Next.js), and AI Engineering.",
  
  // Kata kunci untuk SEO
  keywords: ["Winata Chen", "Portfolio", "Android Developer", "Front-End Developer", "React", "Next.js", "UMN", "Informatics"],
  
  authors: [{ name: "Winata Chen", url: "https://github.com/Winatachenn" }],
  
  // Pengaturan Open Graph (Tampilan saat share di WA/LinkedIn/Twitter)
  openGraph: {
    title: "Winata Chen | Portfolio",
    description: "Building Digital Experiences. Explore my projects in Android, Web, and AI.",
    url: "https://winatachen.vercel.app", // Ganti nanti kalau sudah deploy
    siteName: "Winata Chen Portfolio",
    images: [
      {
        url: "/og-image.jpg", // Nanti kita bahas cara pasang gambarnya
        width: 1200,
        height: 630,
        alt: "Winata Chen Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 'scroll-smooth' membuat efek scroll jadi halus saat klik navbar
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}