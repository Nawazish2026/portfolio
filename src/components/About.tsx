"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            About Me
          </h2>

          <div className="glass p-8 md:p-12 rounded-2xl text-left md:text-center">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
              I am a Computer Science student passionate about <span className="text-blue-400">AI</span>, <span className="text-purple-400">scalable systems</span>, and <span className="text-pink-400">full-stack engineering</span>.
              My journey involves building intelligent applications that solve real-world problems, from diagnostic platforms to high-performance web systems.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              With a strong foundation in <span className="text-white font-medium">Data Structures</span>, <span className="text-white font-medium">System Design</span>, and performance optimization,
              I strive to bridge the gap between complex algorithms and seamless user experiences.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
