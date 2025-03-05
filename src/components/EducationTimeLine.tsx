import React from "react";
import { motion } from "framer-motion";
interface Education {
    year: string;
    title: string;
    institution: string;
}
export const EducationTimeline: React.FC = () => {
    const education: Education[] = [
        {
            year: "2012",
            title: "Award for grade 5 scholars",
            institution: "Royal College Panadura",
        },
        {
            year: "2017",
            title: "Award for GCE O/L's",
            institution: "Royal College Panadura",
        },
        {
            year: "2020",
            title: "Award for GCE A/L's",
            institution: "St. Benedict's College Colombo",
        },
        {
            year: "NOW",
            title: "Currently learning GDSE program",
            institution: "Institute Of Java Software Engineering(IJSE), Pandura",
        },
    ];
    return (
        <div className="py-20">
            <motion.h2
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                className="text-4xl md:text-5xl font-bold text-center mb-16"
            >
                My <span className="text-cyan-400">Education</span>
            </motion.h2>
            <div className="relative">

                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-cyan-400 glow"></div>
                {education.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            delay: index * 0.2,
                        }}
                        className={`flex items-center mb-12 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                    >
                        <div className="flex-1 p-6">
                            <div
                                className={`${index % 2 === 0 ? "text-right" : "text-left"}`}
                            >
                                <h3 className="text-cyan-400 text-4xl font-bold mb-2">
                                    {item.year}
                                </h3>
                                <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                                    {item.title}
                                </h4>
                                <p className="text-gray-600 dark:text-gray-400">
                                    {item.institution}
                                </p>
                            </div>
                        </div>
                        <div className="w-16 flex items-center justify-center">
                            <div className="w-4 h-4 bg-cyan-400 rounded-full relative">
                                <div className="absolute w-8 h-8 bg-cyan-400 rounded-full opacity-25 animate-ping"></div>
                            </div>
                        </div>
                        <div className="flex-1 p-6"></div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
