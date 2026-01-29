"use client";

import { motion } from "framer-motion";
import { SiSwift, SiFirebase } from "react-icons/si";
import { FaApple } from "react-icons/fa";

const iosProjects = [
  {
    title: "iOS Journal App",
    description: "A beautifully designed photo journaling app built with SwiftUI. Features persistent local storage using SwiftData, supporting up to 6 photos per entry with a clean, native iOS interface.",
    tags: ["SwiftUI", "SwiftData", "PhotosUI"],
  },
  {
    title: "Flash Chat",
    description: "Real-time messaging app featuring WhatsApp-style chat UI. Built with UIKit and Firebase for instant messaging and authentication.",
    tags: ["UIKit", "Firebase", "Real-time"],
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {iosProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:bg-white/15 transition-all duration-500 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                  <SiSwift className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              </div>

              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-white/10 rounded-full text-sm font-medium text-blue-200">
                    {tag}
                  </span>
                ))}
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
