import React from "react";
import { motion } from "framer-motion";

export default function About() {
    return (
        <div className="bg-slate-900 text-gray-400 min-h-screen flex flex-col items-center justify-center p-6 md:p-12">
            {/* Title Section */}
            <motion.h1
                className="text-3xl md:text-4xl font-bold text-sky-400 mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                About Me
            </motion.h1>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full max-w-6xl px-4 md:px-8">
                {/* Image Section */}
                <motion.div
                    className="md:col-span-4 flex justify-center"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <img
                        src="avatar.png"
                        alt="Mehedi Hasan Maruf"
                        className="w-full md:w-4/5 rounded-lg shadow-md"
                    />
                </motion.div>

                {/* Content Section */}
                <motion.div
                    className="md:col-span-8 text-justify space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    <p className="leading-7">
                        Hi, I’m <span className="text-sky-400 font-semibold">Mehedi Hasan Maruf</span>,
                        a passionate learner and problem-solver. I’m pursuing my software engineering degree at
                        <span className="text-sky-400 font-semibold"> Shahjalal University of Science and Technology</span>.
                        I’m driven by the excitement of exploring fields from <span className="text-sky-400">web development</span>
                        to <span className="text-sky-400">creative coding</span>.
                    </p>
                    <p className="leading-7">
                        Currently, I’m diving deep into modern web technologies like <span className="text-sky-400">React</span>,
                        <span className="text-sky-400"> Next.js</span>, and <span className="text-sky-400">MongoDB</span>, building projects
                        that reflect my love for innovation.
                    </p>
                    <p className="leading-7">
                        Beyond web development, I’m also exploring <span className="text-sky-400">competitive programming</span> and honing my algorithmic
                        problem-solving skills. I’m venturing into fields like <span className="text-sky-400">Machine Learning</span>,
                        <span className="text-sky-400">Artificial Intelligence</span>, and <span className="text-sky-400">Data Science</span>.
                    </p>
                </motion.div>
            </div>

            {/* Skills/Values Section */}
            <motion.div
                className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-6xl px-4 md:px-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
            >
                {[
                    { title: "Problem-Solver", description: "I thrive on challenges, tackling problems head-on." },
                    { title: "Lifelong Learner", description: "I’m always learning and growing with each project." },
                    { title: "Innovative Thinker", description: "I bring creativity to every project I take on." },
                    { title: "Tech Enthusiast", description: "Passionate about cutting-edge technologies." },
                ].map((item, index) => (
                    <div
                        key={index}
                        className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition"
                    >
                        <h3 className="text-xl md:text-2xl font-bold text-sky-400 mb-2">{item.title}</h3>
                        <p className="text-sm">{item.description}</p>
                    </div>
                ))}
            </motion.div>

            {/* Fun Fact Section */}
            <motion.div
                className="mt-12 w-full max-w-6xl px-4 md:px-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.9 }}
            >
                <h3 className="text-2xl font-bold text-sky-400 text-center mb-6">Fun Facts</h3>
                <div className="space-y-4">
                    {[
                        {
                            title: "Favorite Characters",
                            details: ["Super Hero: Iron Man", "Movie Char: Captain Jack Sparrow", "Anime: Luffy & Naruto"],
                        },
                        {
                            title: "Favorite Movies & Series",
                            details: ["Anime: I Want to Eat Your Pancreas", "Series: Squid Game"],
                        },
                        {
                            title: "Hobbies",
                            details: ["Cinematography", "Reading Books", "Traveling"],
                        },
                    ].map((fact, index) => (
                        <div key={index} className="collapse collapse-arrow bg-gray-800 rounded-lg shadow-lg">
                            <input type="checkbox" />
                            <div className="collapse-title text-lg font-medium text-sky-400">
                                {fact.title}
                            </div>
                            <div className="collapse-content">
                                <ul className="text-sm text-gray-300">
                                    {fact.details.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
