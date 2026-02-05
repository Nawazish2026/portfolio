"use client";

import { motion } from "framer-motion";
import { SiSwift, SiFirebase } from "react-icons/si";
import { FaApple, FaGithub } from "react-icons/fa";

const iosProjects = [
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
  "Swift", "SwiftUI", "UIKit", "SwiftData", "Core Data", "Firebase", "CocoaPods", "Xcode"
];

export default function IOSSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-white/5 backdrop-blur-3xl border-y border-white/10">
      {/* Subtle Apple-style gradient background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/5 to-purple-500/5 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex justify-center mb-4">
            <FaApple className="text-5xl text-white opacity-90" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
            iOS Development
          </h2>
          <p className="text-xl text-gray-300 font-light leading-relaxed">
            I build high-performance, beautifully designed native iOS applications using Apple&apos;s modern frameworks like SwiftUI and UIKit.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 h-full">
          {iosProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 hover:bg-white/15 transition-all duration-500 group flex flex-col"
            >
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                    <SiSwift className="text-white text-xl" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                </div>

                <p className="text-gray-300 text-lg mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-white/10 rounded-full text-sm font-medium text-blue-200">
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <FaGithub /> View Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
        >
          {iosTech.map((tech, index) => (
            <span
              key={index}
              className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
