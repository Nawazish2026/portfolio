"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Get In Touch
          </h2>

          <div className="glass p-10 rounded-2xl">
            <p className="text-xl text-gray-300 mb-8">
              I&apos;m currently open to new opportunities and collaborations.
              Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
            </p>

            <div className="flex justify-center gap-8 mb-10">
              <a
                href="mailto:nawazishhassan2003@gmail.com"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <FaEnvelope className="text-2xl" />
                <span>nawazishhassan2003@gmail.com</span>
              </a>
            </div>

            <div className="flex justify-center gap-6">
              <a
                href="https://www.linkedin.com/in/nawazish-hassan-015078240/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white/5 rounded-full hover:bg-blue-600 hover:scale-110 transition-all duration-300"
              >
                <FaLinkedin className="text-2xl text-white" />
              </a>
              <a
                href="https://github.com/Nawazish2026"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white/5 rounded-full hover:bg-gray-800 hover:scale-110 transition-all duration-300"
              >
                <FaGithub className="text-2xl text-white" />
              </a>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-12 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-bold text-white shadow-lg shadow-blue-500/30"
            >
              Say Hello
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
