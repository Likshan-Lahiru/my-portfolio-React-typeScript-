import React from "react";
import { motion } from "framer-motion";
import {EducationTimeline} from "./EducationTimeLine.tsx";
export const AboutPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 py-20">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.5,
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20"
                >
                    <div className="order-2 md:order-1">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            <br />
                            I'm a professional{" "}
                            <span className="text-cyan-400">full-stack</span> developer &{" "}
                            <span className="text-cyan-400">web</span> developer.
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                            A passionate software engineer dedicated to leveraging technology
                            for innovation. Explore with me as we delve into the world of
                            cutting-edge solutions that drive business growth and enhance
                            lives. Let's create the future together!
                        </p>
                        <div className="space-y-4 text-gray-600 dark:text-gray-400">
                            <div>
                                <span className="font-bold">Name:</span> I.Likshan Lahiru
                                Lolitha Perera
                            </div>
                            <div>
                                <span className="font-bold">Age:</span> 23
                            </div>
                            <div>
                                <span className="font-bold">Address:</span> Panadura, Sri Lanka
                            </div>
                            <div>
                                <span className="font-bold">Email:</span> lahiru212001@gmail.com
                            </div>
                            <div>
                                <span className="font-bold">Phone:</span> (+94)77 470 3 170
                            </div>
                            <div>
                                <span className="font-bold">Freelance:</span>{" "}
                                <span className="text-green-500">Available</span>
                            </div>
                        </div>
                    </div>
                    <motion.div
                        className="order-1 md:order-2 flex justify-center"
                        initial={{
                            opacity: 0,
                            scale: 0.5,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                        }}
                        transition={{
                            duration: 0.5,
                        }}
                    >
                        <div className="relative  rounded-full overflow-hidden  ">
                            <img
                                src="https://i.ibb.co/21kjhhsB/my-png-outline.png"
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>
                </motion.div>
                <EducationTimeline />
            </div>
        </div>
    );
};
