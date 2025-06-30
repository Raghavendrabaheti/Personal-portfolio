import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Zap, ArrowUpRight } from 'lucide-react';

// Import project images
import image from '../assets/SSProject/quizdsa.png';
import image1 from '../assets/SSProject/MultiGame.png';
import image2 from '../assets/SSProject/name.png';
import image3 from '../assets/SSProject/bilingsys.png';
import image4 from '../assets/SSProject/tictactoe.png';

const projectsData = [
  {
    title: 'DSA Quiz Platform',
    description:
      'Interactive quiz application for Data Structures & Algorithms with real-time scoring and detailed analytics.',
    imageUrl: image,
    projectUrl: 'https://quizdsa.netlify.app/',
    repoUrl: 'https://github.com/raghavendrabaheti/quizdsa',
    tech: ['React', 'JavaScript', 'CSS'],
    featured: true,
  },
  {
    title: 'Multi-Games Collection',
    description:
      'A curated collection of interactive browser games built with modern web technologies and smooth animations.',
    imageUrl: image1,
    projectUrl: 'https://funf.netlify.app/',
    repoUrl: 'https://github.com/Raghavendrabaheti/Fun_Games',
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Smart Billing System',
    description:
      'Comprehensive online billing system with automated invoicing, payment tracking, and analytics dashboard.',
    imageUrl: image3,
    projectUrl: 'https://billingsystemraghavendra.netlify.app/',
    repoUrl: 'https://github.com/Raghavendrabaheti/',
    tech: ['React', 'Node.js', 'MongoDB'],
    featured: true,
  },
  {
    title: 'Portfolio Website',
    description:
      'Modern portfolio website with responsive design, smooth animations, and optimized performance.',
    imageUrl: image2,
    projectUrl: 'https://raghavendrab.netlify.app/',
    repoUrl: '#',
    tech: ['React', 'Tailwind', 'Framer Motion'],
  },
  {
    title: 'Tic Tac Toe Game',
    description:
      'Classic game reimagined with modern UI, smart AI opponent, and multiplayer functionality.',
    imageUrl: image4,
    projectUrl: 'https://funtt.netlify.app/',
    repoUrl: 'https://github.com/Raghavendrabaheti/Fun_Games',
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2 mb-6">
            <Zap size={16} className="text-gray-600" />
            <span className="text-sm font-medium text-gray-600">
              My Work
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Featured
            <br />
            <span className="text-gray-500">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gray-900 to-gray-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            A collection of projects that showcase my expertise in modern web
            development and creative problem-solving
          </p>
        </motion.div>

        {/* Projects Grid - Desktop / Horizontal Scroll - Mobile */}
        <div className="w-full">
          {/* Desktop Grid Layout */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <motion.div
                key={index}
                className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 ${project.featured ? 'ring-2 ring-gray-200' : ''
                  }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {project.featured && (
                  <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-gray-900 to-gray-700 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Featured
                  </div>
                )}

                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Hover Actions */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/90 backdrop-blur-sm text-gray-700 rounded-full hover:bg-white transition-colors duration-200"
                    >
                      <ExternalLink size={16} />
                    </a>
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/90 backdrop-blur-sm text-gray-700 rounded-full hover:bg-white transition-colors duration-200"
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-50 text-gray-700 text-xs rounded-full border border-gray-100 font-medium"
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
                      className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm font-medium group/link"
                    >
                      <span>View Project</span>
                      <ArrowUpRight
                        size={14}
                        className="ml-1 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200"
                      />
                    </a>
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-full transition-all duration-200"
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Horizontal Scroll Layout */}
          <div className="md:hidden w-full overflow-x-auto scrollbar-hide">
            <div className="flex gap-6 px-4">
              {projectsData.map((project, index) => (
                <motion.div
                  key={`mobile-${index}`}
                  className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 min-w-[280px] ${project.featured ? 'ring-2 ring-gray-200' : ''
                    }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  {project.featured && (
                    <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-gray-900 to-gray-700 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Featured
                    </div>
                  )}

                  {/* Project Image */}
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Hover Actions */}
                    <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/90 backdrop-blur-sm text-gray-700 rounded-full hover:bg-white transition-colors duration-200"
                      >
                        <ExternalLink size={16} />
                      </a>
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/90 backdrop-blur-sm text-gray-700 rounded-full hover:bg-white transition-colors duration-200"
                      >
                        <Github size={16} />
                      </a>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-50 text-gray-700 text-xs rounded-full border border-gray-100 font-medium"
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
                        className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm font-medium group/link"
                      >
                        <span>View Project</span>
                        <ArrowUpRight
                          size={12}
                          className="ml-1 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200"
                        />
                      </a>
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-full transition-all duration-200"
                      >
                        <Github size={14} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* View More Projects CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a
            href="https://github.com/Raghavendrabaheti"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 border-2 border-gray-200 text-gray-700 rounded-2xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 hover:scale-105 group"
          >
            <Github size={18} className="mr-2" />
            <span>View All Projects on GitHub</span>
            <ArrowUpRight
              size={16}
              className="ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
