import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

// Import project images
import image from '../assets/SSProject/quizdsa.png';
import image1 from '../assets/SSProject/MultiGame.png';
import image2 from '../assets/SSProject/name.png';
import image3 from '../assets/SSProject/bilingsys.png';
import image4 from '../assets/SSProject/tictactoe.png';

const projectsData = [
    {
        title: 'DSA Quiz Platform',
        description: 'Interactive quiz application for Data Structures & Algorithms with real-time scoring.',
        imageUrl: image,
        projectUrl: 'https://quizdsa.netlify.app/',
        repoUrl: 'https://github.com/raghavendrabaheti/quizdsa',
        tech: ['React', 'JavaScript', 'CSS']
    },
    {
        title: 'Multi-Games Collection',
        description: 'A collection of fun and interactive browser games built with modern web technologies.',
        imageUrl: image1,
        projectUrl: 'https://funf.netlify.app/',
        repoUrl: 'https://github.com/Raghavendrabaheti/Fun_Games',
        tech: ['HTML', 'CSS', 'JavaScript']
    },
    {
        title: 'Billing System',
        description: 'Comprehensive online billing system for easy transaction management and invoicing.',
        imageUrl: image3,
        projectUrl: 'https://billingsystemraghavendra.netlify.app/',
        repoUrl: 'https://github.com/Raghavendrabaheti/',
        tech: ['React', 'Node.js', 'MongoDB']
    },
    {
        title: 'Portfolio Website',
        description: 'Personal portfolio website showcasing projects and skills with modern design.',
        imageUrl: image2,
        projectUrl: 'https://raghavendrab.netlify.app/',
        repoUrl: '#',
        tech: ['React', 'Tailwind', 'Framer Motion']
    },
    {
        title: 'Tic Tac Toe Game',
        description: 'Classic Tic Tac Toe game with clean UI and smooth gameplay experience.',
        imageUrl: image4,
        projectUrl: 'https://funtt.netlify.app/',
        repoUrl: 'https://github.com/Raghavendrabaheti/Fun_Games',
        tech: ['HTML', 'CSS', 'JavaScript']
    },
];

const Projects = () => {
    return (
        <section id="projects" className="min-h-screen bg-gray-50 py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
                        My Projects
                    </h2>
                    <div className="w-20 h-1 bg-gray-900 mx-auto mb-4"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        A showcase of web applications and tools I've built using modern technologies
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={index}
                            className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            {/* Project Image */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                            </div>

                            {/* Project Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Links */}
                                <div className="flex items-center justify-between">
                                    <a
                                        href={project.projectUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm font-medium"
                                    >
                                        <ExternalLink size={16} className="mr-1" />
                                        View Project
                                    </a>
                                    <a
                                        href={project.repoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 text-gray-500 hover:text-gray-900 transition-colors duration-300"
                                    >
                                        <Github size={18} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
