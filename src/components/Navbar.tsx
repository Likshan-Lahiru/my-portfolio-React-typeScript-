import React, { useState } from "react";
import { Github, Twitter, Linkedin, Menu, X, Sun, Moon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = ["Home", "About", "TechStack", "Projects", "Contact"];
  const socialLinks = [
    { icon: <Github size={20} />, url: "https://github.com" },
    { icon: <Twitter size={20} />, url: "https://twitter.com" },
    { icon: <Linkedin size={20} />, url: "https://linkedin.com" },
  ];

  const handleNavigation = (path: string) => {
    navigate(path === "Home" ? "/" : `/${path.toLowerCase()}`);
    setIsMenuOpen(false);
  };

  return (
      <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm dark:shadow-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4 md:px-6">
          <nav className="flex items-center justify-between py-4">

            <Link to="/" className="text-2xl font-bold">
              <span className="text-blue-500">&#123;</span>
              <span className="text-purple-600">L</span>
              <span className="text-blue-500">&#125;</span>
            </Link>


            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                  <Link
                      key={item}
                      to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
                  >
                    {item}
                  </Link>
              ))}
            </div>


            <div className="hidden md:flex items-center space-x-4">
              <button onClick={toggleDarkMode} className="text-gray-700 dark:text-gray-300">
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              {socialLinks.map(({ icon, url }, index) => (
                  <a
                      key={index}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                  >
                    {icon}
                  </a>
              ))}
            </div>


            <div className="md:hidden flex items-center space-x-4">
              <button onClick={toggleDarkMode} className="text-gray-700 dark:text-gray-300">
                {darkMode ? <Sun size={24} /> : <Moon size={24} />}
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 dark:text-gray-300">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </nav>


          {isMenuOpen && (
              <div className="md:hidden py-4 bg-white dark:bg-gray-900 transition-colors duration-300">
                <div className="flex flex-col space-y-4 pb-4">
                  {navItems.map((item) => (
                      <button
                          key={item}
                          onClick={() => handleNavigation(item)}
                          className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
                      >
                        {item}
                      </button>
                  ))}
                </div>


                <div className="flex space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  {socialLinks.map(({ icon, url }, index) => (
                      <a
                          key={index}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                      >
                        {icon}
                      </a>
                  ))}
                </div>
              </div>
          )}
        </div>
      </header>
  );
};
