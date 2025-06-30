import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Zap, Trophy, ArrowUpRight } from 'lucide-react';
import image5 from '../assets/SSProject/SIH.png';
import image6 from '../assets/SSProject/logithon.jpeg';
import image7 from '../assets/SSProject/sih24.jpeg';

const hackathonProjects = [
  {
    title: 'Multi-Modal Cross-Border Route Selector',
    description: 'Advanced logistics optimization system leveraging Dijkstra Algorithm for efficient cross-border routing with real-time tracking capabilities.',
    imageUrl: image6,
    projectUrl: 'https://github.com/Tech-Transit',
    repoUrl: 'https://github.com/Tech-Transit',
    tech: ['React', 'Node.js', 'Algorithms', 'MongoDB'],
    award: 'Winner',
    event: 'Logithon 2024'
  },
  {
    title: 'Smart India Hackathon 2023',
    description: 'Innovative smart infrastructure solution focusing on urban development challenges with IoT integration and data analytics.',
    imageUrl: image5,
    projectUrl: 'https://raghavendrabaheti.github.io/SIH23.github.io/',
    repoUrl: 'https://github.com/Raghavendrabaheti/SIH23.github.io',
    tech: ['HTML', 'CSS', 'JavaScript', 'IoT'],
    award: 'Finalist',
    event: 'SIH 2023'
  },
  {
    title: 'Smart India Hackathon 2024',
    description: 'Next-generation solution for modern challenges using cutting-edge web technologies and AI-driven insights.',
    imageUrl: image7,
    projectUrl: 'https://raghavendrabaheti.github.io/SIH23.github.io/',
    repoUrl: 'https://github.com/Raghavendrabaheti/SIH-2024',
    tech: ['React', 'MongoDB', 'Express', 'AI'],
    award: 'Participant',
    event: 'SIH 2024'
  }
];

const Work = () => {
  return (
    <section id="work" className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 py-20">
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
            <Trophy size={16} className="text-gray-600" />
            <span className="text-sm font-medium text-gray-600">Hackathon Projects</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Competition
            <br />
            <span className="text-gray-500">Achievements</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gray-900 to-gray-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Showcasing innovative solutions and problem-solving skills through competitive programming and hackathon participation
          </p>
        </motion.div>

        {/* Projects Grid - Desktop */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {hackathonProjects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Award Badge */}
              {project.award && (
                <div className="absolute top-4 left-4 z-10 flex items-center space-x-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  <Trophy size={12} />
                  <span>{project.award}</span>
                </div>
              )}

              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Event Badge */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                  {project.event}
                </div>

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
                      className="px-3 py-1 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 text-xs rounded-full border border-gray-200 font-medium"
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
                    <ArrowUpRight size={14} className="ml-1 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
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
        <div className="md:hidden mb-20">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex space-x-6 pb-4" style={{ width: 'max-content' }}>
              {hackathonProjects.map((project, index) => (
                <motion.div
                  key={`mobile-${index}`}
                  className="group relative bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500"
                  style={{ width: '280px', flexShrink: 0 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  {/* Award Badge */}
                  {project.award && (
                    <div className="absolute top-4 left-4 z-10 flex items-center space-x-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      <Trophy size={12} />
                      <span>{project.award}</span>
                    </div>
                  )}

                  {/* Project Image */}
                  <div className="relative overflow-hidden h-40">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Event Badge */}
                    <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                      {project.event}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tech.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 text-xs rounded-full border border-gray-200 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-full">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center justify-between">
                      <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm font-medium group/link"
                      >
                        <span>View</span>
                        <ArrowUpRight size={12} className="ml-1 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
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

        {/* Achievements Summary */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { number: "3+", label: "Hackathons Participated" },
              { number: "1", label: "Winning Project" },
              { number: "2", label: "Finalist Positions" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
