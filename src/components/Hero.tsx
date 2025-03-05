import React from "react";
import { motion } from "framer-motion";
export const Hero: React.FC = () => {
  return <section id="home" className="py-20 md:py-28">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <motion.div className="md:w-1/2 mb-10 md:mb-0" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }}>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Hi <span className="inline-block animate-pulse">👋</span>,
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My name is
            <span className="block md:inline text-blue-500">
              {" "}
              Likshan Lahiru
            </span>
          </h2>
          <p className="text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-300 mb-6">
            I build things for web
          </p>
          <motion.div className="flex space-x-4 mt-6" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.2,
          duration: 0.5
        }}>
            <a href="#contact" className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors duration-300">
              Contact Me
            </a>
            <a href="#projects" className="px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 font-medium rounded-md hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors duration-300">
              View Work
            </a>
          </motion.div>
        </motion.div>
          <motion.div className="md:w-1/2 flex justify-center md:justify-end" initial={{
              opacity: 0,
              x: 20
          }} animate={{
              opacity: 1,
              x: 0
          }} transition={{
              duration: 0.5,
              delay: 0.2
          }}>
              <div className="relative w-80 h-70 md:w-70 md:h-70 lg:w-110 lg:h-70 rounded-lg overflow-hidden">
                  <img src="/IMG_5200.jpg" alt="Profile" className="w-full h-full object-cover"/>
              </div>
          </motion.div>
      </div>
  </section>;
};