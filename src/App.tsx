import  { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TechStack } from "./components/TechStack";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import {AboutPage} from "./components/Aboutpage.tsx";
export function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const isDark = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDark);
    setTimeout(() => setIsLoading(false), 1000);
  }, []);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  if (isLoading) {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-white dark:bg-gray-900">
          <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"
          />
        </div>
    );
  }
  return (
      <Router>
        <AnimatePresence mode="wait">
          <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              className="min-h-screen w-full bg-white dark:bg-gray-900 transition-colors duration-300"
          >
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Routes>
              <Route path="/about" element={<AboutPage />} />
              <Route
                  path="/"
                  element={
                    <main className="container mx-auto px-4 md:px-6">
                      <Hero />
                      <TechStack />
                      <Projects />
                    </main>
                  }
              />
            </Routes>
            <Footer />
          </motion.div>
        </AnimatePresence>
      </Router>
  );
}
