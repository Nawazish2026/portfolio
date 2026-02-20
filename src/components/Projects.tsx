"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "SymptoSense AI",
    subtitle: "Intelligent Health Symptom Analyzer",
    description: "An AI-powered healthcare system using LLMs and RAG to provide safe, structured medical insights. Analyzes symptoms against a vector database of medical knowledge for preliminary assessments.",
    image: "/projects/symptosense.png",
    tech: ["Next.js", "FastAPI", "RAG", "LLM", "Pinecone", "MongoDB"],
    github: "https://github.com/Nawazish2026/SymptoSense-AI",
    live: "https://sympto-sense-ai.vercel.app/",
    accent: "#22D1EE",
  },
  {
    title: "Smart E-Prescription",
    subtitle: "Doctor Dashboard & Analytics",
    description: "A production-grade MERN stack system enabling doctors to generate digital prescriptions while visualizing patient analytics with real-time aggregation pipelines.",
    image: "/projects/eprescription.png",
    tech: ["MongoDB", "Express", "React", "Node.js", "Chart.js"],
    github: "https://github.com/Nawazish2026/EPRESCRIPTION",
    live: "https://eprescription-eta.vercel.app/login",
    accent: "#B8FF57",
  },
  {
    title: "Action Discovery",
    subtitle: "Movie Discovery Platform",
    description: "A high-performance movie exploration platform integrating TMDB API with dynamic category rendering and Firebase Authentication for a Netflix-caliber experience.",
    image: "/projects/action-discovery.png",
    tech: ["React", "Vite", "Firebase Auth", "TMDB API"],
    github: "https://github.com/Nawazish2026/Action-Discovery",
    live: "https://react-auth-dusky.vercel.app/",
    accent: "#F23FA0",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-gray-600 mb-3">
            Selected Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#22D1EE] to-[#B8FF57] tracking-tight">
            Featured Case Studies
          </h2>
          <p className="text-sm text-gray-600 max-w-lg mx-auto">
            Production-grade systems solving real-world problems with advanced engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group relative rounded-2xl flex flex-col h-full"
            >
              <div className="glass rounded-2xl overflow-hidden flex flex-col h-full relative hover:border-white/[0.08] transition-colors duration-500">
                {/* Top accent */}
                <div
                  className="absolute top-0 left-0 w-full h-[2px] z-20 opacity-60"
                  style={{ background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)` }}
                />

                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08080D] via-transparent to-transparent z-10" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-4 left-5 z-20">
                    <h3 className="text-lg font-bold text-white mb-0.5">
                      {project.title}
                    </h3>
                    <p className="text-xs text-gray-400 font-medium">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <p className="text-gray-500 mb-5 leading-relaxed text-sm flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.05] text-gray-500"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4 border-t border-white/[0.04]">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 2 }}
                      className="flex items-center gap-2 text-xs text-gray-600 hover:text-gray-300 transition-colors"
                    >
                      <FaGithub /> Source Code
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 2 }}
                      className="flex items-center gap-1.5 text-xs font-medium ml-auto transition-colors"
                      style={{ color: project.accent }}
                    >
                      Live Demo <FaExternalLinkAlt className="text-[10px]" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
