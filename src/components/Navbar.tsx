import React, { useState } from "react";
import { Github, Twitter, Linkedin, Menu, X, Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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
              {["Home", "About", "Tech Stack", "Projects", "Contact"].map((item) => (
                  <Link
                      key={item}
                      to={`/${item.toLowerCase().replace(" ", "-")}`}
                      className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
                  >
                    {item}
                  </Link>
              ))}
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <button onClick={toggleDarkMode} className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
                {darkMode ? <Sun size={22} /> : <Moon size={22} />}
              </button>
              {[
                { href: "https://github.com", Icon: Github },
                { href: "https://twitter.com", Icon: Twitter },
                { href: "https://linkedin.com", Icon: Linkedin },
              ].map(({ href, Icon }) => (
                  <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
                    <Icon size={20} />
                  </a>
              ))}
            </div>
            <div className="md:hidden flex items-center space-x-4">
              <button onClick={toggleDarkMode} className="text-gray-700 dark:text-gray-300">
                {darkMode ? <Sun size={22} /> : <Moon size={22} />}
              </button>
              <button onClick={toggleMenu} className="text-gray-700 dark:text-gray-300">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </nav>
          {isMenuOpen && (
              <div className="md:hidden py-4 bg-white dark:bg-gray-900 transition-colors duration-300">
                <div className="flex flex-col space-y-4 pb-4">
                  {["Home", "About", "Tech Stack", "Projects", "Contact"].map((item) => (
                      <Link
                          key={item}
                          to={`/${item.toLowerCase().replace(" ", "-")}`}
                          className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
                          onClick={() => setIsMenuOpen(false)}
                      >
                        {item}
                      </Link>
                  ))}
                </div>
                <div className="flex space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  {[
                    { href: "https://github.com", Icon: Github },
                    { href: "https://twitter.com", Icon: Twitter },
                    { href: "https://linkedin.com", Icon: Linkedin },
                  ].map(({ href, Icon }) => (
                      <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
                        <Icon size={20} />
                      </a>
                  ))}
                </div>
              </div>
          )}
        </div>
      </header>
  );
};
