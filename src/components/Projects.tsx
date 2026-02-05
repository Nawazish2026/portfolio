"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "SymptoSense AI",
    subtitle: "Intelligent Health Symptom Analyzer",
    description: "An AI-powered healthcare system using LLMs and RAG to provide safe, structured medical insights. It analyzes user symptoms against a vector database of medical knowledge to offer preliminary assessments and doctor consultation triggers.",
    image: "/projects/symptosense.png",
    tech: ["Next.js", "FastAPI", "RAG", "LLM", "Pinecone", "MongoDB"],
    github: "https://github.com/Nawazish2026/SymptoSense-AI",
    live: "https://sympto-sense-ai.vercel.app/",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Smart E-Prescription",
    subtitle: "Doctor Dashboard & Analytics",
    description: "A production-grade MERN stack system enabling doctors to generate digital prescriptions while visualizing patient analytics. Features real-time aggregation pipelines for disease tracking and secure PDF generation.",
    image: "/projects/eprescription.png",
    tech: ["MongoDB Aggregations", "Express", "React", "Node.js", "Chart.js"],
    github: "https://github.com/Nawazish2026/EPRESCRIPTION",
    live: "https://eprescription-eta.vercel.app/login",
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "Action Discovery",
    subtitle: "Movie Discovery Platform",
    description: "A high-performance movie exploration platform engineered for scalability. Integrates TMDB API with dynamic category rendering and Firebase Authentication, delivering a Netflix-caliber user experience.",
    image: "/projects/action-discovery.png",
    tech: ["React", "Vite", "Firebase Auth", "TMDB API", "Scalable Arch"],
    github: "https://github.com/Nawazish2026/Action-Discovery",
    live: "https://react-auth-dusky.vercel.app/",
    color: "from-red-500 to-rose-600",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-black/40">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 tracking-tight">
            Featured Case Studies
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Deep dives into production-grade systems solving real-world problems with advanced engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="glass rounded-2xl overflow-hidden group hover:border-white/20 transition-all duration-300 flex flex-col h-full"
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10`} />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-6 z-20">
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-300 font-medium">
                    {project.subtitle}
                  </p>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <p className="text-gray-300 mb-6 leading-relaxed text-sm flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 group-hover:bg-blue-500/20 group-hover:text-blue-200 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 border-t border-white/5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors hover:underline underline-offset-4"
                  >
                    <FaGithub /> Source Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors font-medium ml-auto"
                  >
                    Live Demo <FaExternalLinkAlt className="text-xs" />
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
