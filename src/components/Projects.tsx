"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "AgriVision – AI Diagnostic Platform",
    description: "Deep learning based plant disease detection system with 96% accuracy. Features a RAG-based advisory system for farmers.",
    tech: ["FastAPI", "Next.js", "Deep Learning", "RAG"],
    github: "#",
    live: "#",
    color: "from-green-400 to-emerald-600",
  },
  {
    title: "DocuScript – E-Prescription SaaS",
    description: "Modern E-Prescription platform for doctors with JWT authentication and automated PDF generation.",
    tech: ["MERN Stack", "JWT", "PDFKit", "Tailwind"],
    github: "#",
    live: "#",
    color: "from-blue-400 to-indigo-600",
  },
  {
    title: "CineVelo – Movie Discovery",
    description: "A Netflix-style movie discovery platform using TMDB API with personal watchlist and Firebase based authentication.",
    tech: ["React", "Firebase", "TMDB API", "Framer Motion"],
    github: "#",
    live: "#",
    color: "from-red-500 to-rose-700",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="glass rounded-xl overflow-hidden group hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Card Gradient Header */}
              <div className={`h-2 bg-gradient-to-r ${project.color}`} />

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all">
                  {project.title.split(" – ")[0]}
                </h3>
                <p className="text-sm text-gray-400 mb-2">{project.title.split(" – ")[1] || "Project"}</p>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 border border-white/10 text-blue-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <FaGithub /> Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
