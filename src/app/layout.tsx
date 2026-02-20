import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  title: "Nawazish Hassan | Full Stack Developer & AI Engineer",
  description: "Portfolio of Nawazish Hassan - CS Student, Full Stack Developer, and AI/ML Engineer building scalable systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.variable} antialiased selection:bg-[#ADFF2F] selection:text-black`}>
        {children}
      </body>
    </html>
  );
}
