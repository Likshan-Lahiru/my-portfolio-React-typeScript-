import React, { useState } from "react";
import { Github, Twitter, Linkedin, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}
export const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
      <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm dark:shadow-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4 md:px-6">
          <nav className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <a href="#" className="text-2xl font-bold">
                <span className="text-blue-500">&#123;</span>
                <span className="text-purple-600">L</span>
                <span className="text-blue-500">&#125;</span>
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                  to="/"
                  className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
              >
                Home
              </Link>
              <Link
                  to="/about"
                  className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
              >
                About
              </Link>
              <Link
                  to="/tech-stack"
                  className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
              >
                Tech Stack
              </Link>
              <Link
                  to="/projects"
                  className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
              >
                Projects
              </Link>
              <Link
                  to="/contact"
                  className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
              >
                Contact
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <button
                  onClick={toggleDarkMode}
                  className="w-12 h-6 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center transition duration-300 focus:outline-none shadow"
              >
                <div
                    className={`w-5 h-5 rounded-full transform duration-300 ${darkMode ? "translate-x-6 bg-blue-500" : "translate-x-1 bg-white"}`}
                ></div>
              </button>
              <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
              >
                <Github size={20} />
              </a>
              <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
              >
                <Twitter size={20} />
              </a>
              <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
              >
                <Linkedin size={20} />
              </a>
            </div>
            <div className="md:hidden flex items-center space-x-4">
              <button
                  onClick={toggleDarkMode}
                  className="w-12 h-6 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center transition duration-300 focus:outline-none shadow"
              >
                <div
                    className={`w-5 h-5 rounded-full transform duration-300 ${darkMode ? "translate-x-6 bg-blue-500" : "translate-x-1 bg-white"}`}
                ></div>
              </button>
              <button
                  onClick={toggleMenu}
                  className="text-gray-700 dark:text-gray-300"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </nav>
          {isMenuOpen && (
              <div className="md:hidden py-4 bg-white dark:bg-gray-900 transition-colors duration-300">
                <div className="flex flex-col space-y-4 pb-4">
                  <Link
                      to="/"
                      className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
                      onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                      to="/about"
                      className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
                      onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                      to="/tech-stack"
                      className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
                      onClick={() => setIsMenuOpen(false)}
                  >
                    Tech Stack
                  </Link>
                  <Link
                      to="/projects"
                      className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
                      onClick={() => setIsMenuOpen(false)}
                  >
                    Projects
                  </Link>
                  <Link
                      to="/contact"
                      className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
                      onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </div>
                <div className="flex space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                  >
                    <Github size={20} />
                  </a>
                  <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                  >
                    <Twitter size={20} />
                  </a>
                  <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
          )}
        </div>
      </header>
  );
};
