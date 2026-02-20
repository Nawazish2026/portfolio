"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useCallback } from "react";

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

/* ─── 3D Tilt Card ─── */
function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-6, 6]);
  const glowX = useTransform(x, [-0.5, 0.5], ["20%", "80%"]);
  const glowY = useTransform(y, [-0.5, 0.5], ["20%", "80%"]);

  const handleMouse = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      x.set((e.clientX - rect.left) / rect.width - 0.5);
      y.set((e.clientY - rect.top) / rect.height - 0.5);
    },
    [x, y]
  );

  const handleLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ delay: index * 0.15, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      viewport={{ once: true }}
      className="group relative rounded-2xl flex flex-col h-full"
      style={{ perspective: 1200 }}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouse}
        onMouseLeave={handleLeave}
        className="glass rounded-2xl overflow-hidden flex flex-col h-full relative hover:border-white/[0.1] transition-colors duration-500"
      >
        {/* Mouse-following highlight */}
        <motion.div
          className="absolute w-[200px] h-[200px] rounded-full pointer-events-none z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            left: glowX,
            top: glowY,
            translateX: "-50%",
            translateY: "-50%",
            background: `radial-gradient(circle, ${project.accent}10 0%, transparent 70%)`,
            filter: "blur(20px)",
          }}
        />

        {/* Animated top accent */}
        <motion.div
          className="absolute top-0 left-0 w-full h-[2px] z-20"
          style={{ background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)` }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15 + 0.4, duration: 0.7 }}
        />

        {/* Image Section */}
        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-[#08080D] via-transparent to-transparent z-10" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
          {/* Color overlay on hover */}
          <motion.div
            className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{ background: `linear-gradient(to top, ${project.accent}10, transparent)` }}
          />
          <div className="absolute bottom-4 left-5 z-20">
            <motion.h3
              initial={{ x: -15, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 + 0.3 }}
              className="text-lg font-bold text-white mb-0.5"
            >
              {project.title}
            </motion.h3>
            <p className="text-xs text-gray-400 font-medium">{project.subtitle}</p>
          </div>
        </div>

        <div className="p-5 flex flex-col flex-grow relative z-10">
          <p className="text-gray-500 mb-5 leading-relaxed text-sm flex-grow">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tech.map((t, i) => (
              <motion.span
                key={t}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + i * 0.05, type: "spring", stiffness: 200 }}
                whileHover={{
                  borderColor: `${project.accent}30`,
                  color: project.accent,
                  background: `${project.accent}08`,
                }}
                className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.05] text-gray-500 transition-all duration-200 cursor-default"
              >
                {t}
              </motion.span>
            ))}
          </div>

          <div className="flex gap-4 pt-4 border-t border-white/[0.04]">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 4, color: "#fff" }}
              className="flex items-center gap-2 text-xs text-gray-600 transition-colors"
            >
              <FaGithub /> Source Code
            </motion.a>
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 4 }}
              className="flex items-center gap-1.5 text-xs font-medium ml-auto transition-colors"
              style={{ color: project.accent }}
            >
              Live Demo <FaExternalLinkAlt className="text-[10px]" />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 relative">
      {/* Floating shapes */}
      <motion.div
        className="absolute top-32 left-[5%] w-16 h-16 border border-[#22D1EE]/8 rounded-full"
        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
        transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" }, scale: { duration: 4, repeat: Infinity } }}
      />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xs font-medium uppercase tracking-[0.25em] text-gray-600 mb-3"
          >
            Selected Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 150 }}
            className="text-3xl md:text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#22D1EE] to-[#B8FF57] tracking-tight"
          >
            Featured Case Studies
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-sm text-gray-600 max-w-lg mx-auto"
          >
            Production-grade systems solving real-world problems with advanced engineering.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
