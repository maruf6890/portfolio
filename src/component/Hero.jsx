import React from "react";
import { TbMoodSmileBeam } from "react-icons/tb";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="text-white bg-gradient-to-r from-slate-900 via-gray-800 to-black h-96 md:h-screen flex justify-center items-center">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.p
          className="flex items-center justify-center text-lg font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.span
            animate={{
              y: [0, -5, 0], // Move up and down
            }}
            transition={{
              duration: 1, // Duration of one cycle
              repeat: Infinity, // Infinite loop
              repeatType: "loop",
            }}
          >
            HI
          </motion.span>
          <motion.span
            className="ml-2 text-yellow-400 text-2xl"
            animate={{
              rotate: [0, 15, 0], // Rotate left and back to the center
              scale: [1, 1.1, 1], // Slight zoom effect
            }}
            transition={{
              duration: 1, // Duration of one cycle
              repeat: Infinity, // Infinite loop
              repeatType: "loop",
            }}
          >
            <TbMoodSmileBeam />
          </motion.span>
        </motion.p>
        <motion.h1
          className="text-white text-5xl md:text-6xl poppins-bold mt-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Mehedi Hasan Maruf
        </motion.h1>
        <motion.h3
          className="text-sky-400 capitalize text-2xl md:text-3xl poppins-bold mt-4 typewriter"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Exploring Ideas, Solving Problems.
        </motion.h3>
        <motion.div
          className="mt-6 flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <a
            href="projects"
            className="bg-sky-400 text-white px-6 py-2 rounded-md hover:bg-sky-500 transition"
          >
            Explore My Work
          </a>
          <a
            href="/contact"
            className="border border-sky-400 text-sky-400 px-6 py-2 rounded-md hover:bg-sky-400 hover:text-white transition"
          >
            Let's Collaborate
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
