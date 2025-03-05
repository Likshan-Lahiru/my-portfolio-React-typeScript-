import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
export const TechStack: React.FC = () => {
  const {
    ref,
    isInView
  } = useScrollAnimation();
  const technologies =
      [  { name: "HTML5", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
          { name: "CSS3", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
          { name: "JavaScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
          { name: "React", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
          { name: "Redux", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
          { name: "Bootstrap", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
          { name: "Tailwind CSS", image: "https://i.ibb.co/4wqBBrTn/pngwing-com-1.png" },
          { name: "SASS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
          { name: "Spring Boot", image: "https://i.ibb.co/999L678h/pngaaa-com-2459546.png" },
          { name: "Node.js", image: "https://i.ibb.co/rGGVFXd9/pngwing-com-2.png" },
          { name: "Java", image: "https://i.ibb.co/gbb2rb1H/pngwing-com-3.png" },
          { name: "Python", image: "https://i.ibb.co/KzwTtRJ2/pngwing-com-4.png" },
          { name: "TypeScript", image: "https://i.ibb.co/FrB06gr/pngwing-com-5.png" },
          { name: "AWS", image: "https://i.ibb.co/4ZrPLyXX/abf067f3bef03527c829cc1ee52768d5.png" },
          { name: "Azure", image: "https://i.ibb.co/21kBsnRH/756775c0e4483c74bc9ffbb730e3fab2.png" },
          { name: "Git", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
          { name: "GitHub", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
          { name: "Figma", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" }];


  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0
    }
  };
  const floatingAnimation = {
    hidden: {
      y: 0
    },
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };
  return <section id="tech-stack" className="py-20" ref={ref}>
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
          My Tech Stack
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Technologies I've been working with recently
        </p>
      </motion.div>
      <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {technologies.map((tech, index) => <motion.div key={index} variants={itemVariants} whileHover={{
        scale: 1.1
      }} whileTap={{
        scale: 0.95
      }} animate="float" custom={index} className="flex flex-col items-center justify-center p-4">
            <motion.div variants={floatingAnimation} className="w-16 h-16 mb-2">
              <img src={tech.image} alt={tech.name} className="w-full h-full object-contain" />
            </motion.div>
            <motion.p initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.2
        }} className="text-sm text-gray-700 dark:text-gray-300">
              {tech.name}
            </motion.p>
          </motion.div>)}
      </motion.div>
    </section>;
};