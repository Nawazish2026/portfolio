"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/30 rounded-full blur-[100px]" />
      <div className="absolute top-40 right-10 w-80 h-80 bg-purple-600/30 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl md:text-2xl text-blue-400 font-medium mb-4">
            Hello, I&apos;m
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Nawazish <span className="text-gradient">Hassan</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8">
            Full Stack Developer | AI/ML Engineer | iOS Developer
            <span className="block mt-2 text-lg text-gray-400">
              Building scalable web apps, native iOS apps & intelligent AI systems.
            </span>
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-12">
            <Link
              href="#projects"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all transform hover:scale-105"
            >
              View Projects
            </Link>
            <Link
              href="#contact"
              className="px-8 py-3 border border-gray-600 hover:border-white text-gray-300 hover:text-white rounded-full font-medium transition-all"
            >
              Contact Me
            </Link>
          </div>

          <div className="flex justify-center space-x-6 text-2xl text-gray-400">
            <a href="https://github.com/Nawazish2026" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/nawazish-hassan-015078240/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <FaLinkedin />
            </a>
            <a href="mailto:nawazishhassan2003@gmail.com" className="hover:text-pink-400 transition-colors">
              <FaEnvelope />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-gray-500 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
