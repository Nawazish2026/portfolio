"use client";

import { motion } from "framer-motion";
import { SiSwift } from "react-icons/si";
import { FaApple, FaGithub } from "react-icons/fa";

const iosProjects = [
  {
    title: "MeetMind AI — Meeting Recorder",
    description: "AI-powered meeting recorder that converts speech to text, generating structured AI summaries and action items using the Google Gemini API. Built with SwiftUI and CoreData.",
    image: "https://raw.githubusercontent.com/Nawazish2026/MeetMindAI/main/Screenshots/home_dark.png",
    tags: ["SwiftUI", "Gemini AI", "CoreData", "Speech API"],
    github: "https://github.com/Nawazish2026/MeetMindAI"
  },
  {
    title: "eJournal — Personal iOS App",
    description: "A modern personal journaling application built with SwiftUI + SwiftData. Features persistent local storage, rich text entries with up to 6 photos, and a native Apple HIG-compliant design.",
    image: "https://cdn.macstories.net/journal1-1-1702406173971.png",
    tags: ["SwiftUI", "SwiftData", "PhotosUI", "MVVM"],
    github: "https://github.com/Nawazish2026/eJournal"
  },
  {
    title: "Flash Chat — Real-Time Messaging",
    description: "A WhatsApp-inspired real-time messaging app featuring secure cloud-backed data sync. Built with UIKit and Firebase Firestore for instant message streaming and authentication.",
    image: "https://images.openai.com/static-rsc-3/qtZOYD38hI1nOLJ_EGxC65Yi7nq0z8mW38qTtkJ20X42EtWrf-8cZhCGXn9wBRdJfpfC9sd0vA7tVtLSn8PHM7wACxY19HBrl0yL0sE15uE?purpose=fullsize&v=1",
    tags: ["UIKit", "Firebase", "Real-time", "CocoaPods"],
    github: "https://github.com/Nawazish2026/Flash-Chat-iOS"
  }
];

const iosTech = [
  "Swift", "SwiftUI", "UIKit", "SwiftData", "Core Data", "Firebase", "Gemini API", "AVFoundation"
];

export default function IOSSection() {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#22D1EE]/[0.025] rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <motion.div
            className="flex justify-center mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaApple className="text-4xl text-white/80" />
          </motion.div>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-gray-600 mb-3">
            Native Apps
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-white/90 via-[#22D1EE] to-white/90 tracking-tight">
            iOS Development
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed max-w-lg mx-auto">
            Building high-performance, beautifully designed native iOS applications with Apple&apos;s modern frameworks.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {iosProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative group flex flex-col"
            >
              <div className="glass rounded-2xl overflow-hidden flex flex-col h-full relative hover:border-white/[0.08] transition-colors duration-500">
                {/* Top accent */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#22D1EE]/60 to-transparent z-20" />

                <div className="h-56 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08080D] via-transparent to-transparent z-10" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-3">
                    <motion.div
                      whileHover={{ rotate: 8 }}
                      className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#22D1EE] to-[#A78BFA] flex items-center justify-center"
                    >
                      <SiSwift className="text-white text-lg" />
                    </motion.div>
                    <h3 className="text-base font-semibold text-white">{project.title}</h3>
                  </div>

                  <p className="text-gray-500 text-sm mb-5 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full text-[10px] font-medium border border-[#22D1EE]/10 text-[#22D1EE]/60 bg-[#22D1EE]/[0.03]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 3 }}
                    className="flex items-center gap-2 text-xs text-gray-600 hover:text-gray-300 transition-colors"
                  >
                    <FaGithub /> View Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech pills */}
        <div className="flex flex-wrap justify-center gap-2.5 max-w-3xl mx-auto">
          {iosTech.map((tech, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04, type: "spring", stiffness: 200 }}
              whileHover={{ borderColor: "rgba(34,209,238,0.25)" }}
              className="px-3.5 py-1.5 rounded-full border border-white/[0.05] bg-white/[0.02] text-gray-500 text-xs cursor-default transition-colors"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
