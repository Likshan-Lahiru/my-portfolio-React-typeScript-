import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink: string;
  codeLink: string;
}
export const Projects: React.FC = () => {
  const {
    ref,
    isInView
  } = useScrollAnimation();
  const projects: Project[] = [{
    id: 1,
    title: "🗒️ CleverlyAl - AI-Powered Hiring Platform",
    description: "The platform features a user-friendly interface for job seekers and recruiters, automated job recommendations, and real-time data processing to enhance the overall hiring experience.",
    image: "https://i.ibb.co/23F0ckzG/Screenshot-2025-03-05-at-14-32-55.png",
    technologies: ["React", "Express.js", "TailwindCSS", "MongoDB","GPT3.5"],
    liveLink: "https://cleverlyal-hiring-platform.netlify.app/",
    codeLink: "https://github.com/Likshan-Lahiru/cleverlyAl-aI-powered-hiring-platform"

  }, {
    id: 2,
    title: "Crop Monitoring System",
    description: "This project is a Crop Monitoring System developed for Green Shadow (Pvt) Ltd., a mid-scale farm specializing in root crops and cereals. The system aims to manage the company’s fields, crops, staff, vehicles, and equipment while supporting monitoring logs and data analysis.",
    image: "https://i.ibb.co/2rbxHz1/Screenshot-2025-03-05-at-14-48-06.png",
    technologies: ["HTML", "JavaScript", "SpringBoot", "JWT"],
    liveLink: "https://greenshadowltd.netlify.app/",
    codeLink: "https://github.com/Likshan-Lahiru/Proposed-crop-monitoring-system-frontEnd"

  }, {
    id: 3,
    title: "HandyHire",
    description: "HandyHire is a React-based web application designed for renting tools efficiently. Users can browse, rent, and manage tool rentals with ease. The platform includes category-based navigation, user authentication, and a responsive design for seamless user experience.",
    image: "https://i.ibb.co/B50gn8vh/Screenshot-2025-03-04-at-14-49-56.png",
    technologies: ["React", "TypeScript", "TailwindCss", "Express.Js","MUI"],
    liveLink: "https://handy-hire.netlify.app/",
    codeLink: "https://github.com/Likshan-Lahiru/HandyHire"


  }, {
    id: 4,
    title: "HandyHire-MobileApp",
    description: "HandyHire is a React Native application designed for hassle-free tool rentals on the go. Whether you're a professional tradesperson or a DIY enthusiast, you can easily browse, rent, and manage tool rentals right from your mobile device.",
    image: "https://i.ibb.co/Vdrqgjs/dark-blue-product-background.png",
    technologies: ["React-native", "express.Js", "Clerk"],
    liveLink: "https://github.com/Likshan-Lahiru/HandyHire-MobileApp",
    codeLink: "https://github.com/Likshan-Lahiru/HandyHire-MobileApp"

  }, {
    id: 5,
    title: "Chat Application",
    description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80",
    technologies: ["Java", "JavaSocket", "javaFx", ],
    liveLink: "#",
    codeLink: "#"
  }, {
    id: 6,
    title: "Figma Design",
    description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
    technologies: ["Figma"],
    liveLink: "#",
    codeLink: "#"
  }];
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.2
      }
    }
  };
  return <section id="projects" className="py-20" ref={ref}>
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={isInView ? {
      opacity: 1,
      y: 0
    } : {
      opacity: 0,
      y: 20
    }} transition={{
      duration: 0.5
    }} className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Projects
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Things I've built so far
        </p>
      </motion.div>
      <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(project => <motion.div key={project.id} variants={cardVariants} whileHover="hover" className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <motion.div className="h-56 overflow-hidden" whileHover={{
          scale: 1.05
        }} transition={{
          duration: 0.3
        }}>
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </motion.div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>
              <div className="mb-4">
                <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">
                  Tech stack:
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {project.technologies.join(", ")}
                </p>
              </div>
              <div className="flex space-x-4">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm">
                  <ExternalLink size={16} className="mr-1" />
                  Live Preview
                </a>
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm">
                  <Github size={16} className="mr-1" />
                  View Code
                </a>
              </div>
            </div>
          </motion.div>)}
      </motion.div>
    </section>;
};