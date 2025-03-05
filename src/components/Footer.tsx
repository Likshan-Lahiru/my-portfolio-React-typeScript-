import React from "react";
import { Github, Twitter, Linkedin, Phone, Mail } from "lucide-react";
export const Footer: React.FC = () => {
  return <footer id="contact" className="bg-white dark:bg-gray-900 transition-colors duration-300 pt-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="flex items-center mb-6 md:mb-0">
            <Phone size={18} className="text-gray-700 dark:text-gray-300 mr-2" />
            <a href="tel:+94774703170" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
              +94 77 4703170
            </a>
          </div>
          <div className="flex items-center mb-6 md:mb-0">
            <Mail size={18} className="text-gray-700 dark:text-gray-300 mr-2" />
            <a href="mailto:lahiru12001@gmail.com" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
              lahiru12001@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://github.com/Likshan-Lahiru" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
              <Github size={20} />
            </a>
            <a href="https://x.com/Likshan_Lahiru_" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
              <Twitter size={20} />
            </a>
            <a href="https://www.linkedin.com/in/likshan-lahiru/" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <nav className="flex flex-wrap justify-center mb-4 md:mb-0">
              <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 mx-3 my-1">
                Home
              </a>
              <a href="#about" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 mx-3 my-1">
                About
              </a>
              <a href="#tech-stack" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 mx-3 my-1">
                Technologies
              </a>
              <a href="#projects" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 mx-3 my-1">
                Projects
              </a>
              <a href="#contact" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 mx-3 my-1">
                Contact
              </a>
            </nav>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Designed and built by lahiru-likshan
            </p>
          </div>
        </div>
      </div>
    </footer>;
};