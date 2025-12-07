import { motion } from "framer-motion";
import { Code, Database, Cloud, Cpu, Zap } from "lucide-react";

const About = () => {
  const skills = [
    { icon: Code, name: "Full-Stack Development", desc: "MERN Stack, React, Node.js", color: "from-blue-500 to-cyan-500" },
    { icon: Database, name: "Backend & Databases", desc: "Python, MongoDB, MySQL", color: "from-green-500 to-emerald-500" },
    { icon: Cloud, name: "DevOps & Cloud", desc: "AWS, Docker, CI/CD", color: "from-purple-500 to-pink-500" },
    { icon: Cpu, name: "Problem Solving", desc: "DSA, Algorithms, Python", color: "from-orange-500 to-red-500" },
  ];

  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 py-20"
    >
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
            <span className="text-sm font-medium text-gray-600">About Me</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Turning Ideas Into
            <br />
            <span className="text-gray-500">Digital Reality</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gray-900 to-gray-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* About Text */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <p className="text-xl text-gray-600 leading-relaxed font-light">
                Hi! I'm <span className="text-gray-900 font-semibold">Raghavendra Baheti</span>,
                a Computer Science student from <span className="text-gray-800 font-medium">Udaipur, India</span>,
                currently pursuing my degree at Techno India NJR.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                I specialize in <span className="text-gray-800 font-semibold">Backend Development using Python and Node.js</span> and have extensive experience in <span className="text-gray-800 font-semibold">DevOps</span> practices,
              </p>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="group relative p-8 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                <div className={`w-12 h-12 bg-gradient-to-br ${skill.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon size={24} className="text-white" />
                </div>
                <h3 className="text-gray-900 font-semibold mb-3 text-lg">{skill.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{skill.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Tech Stack */}
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold mb-10 text-gray-900">Technologies I Love Working With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["React", "Node.js", "MongoDB", "Python", "AWS", "Docker", "Python", "MySQL"].map((tech, index) => (
              <div key={index} className="px-6 py-3 bg-white text-gray-700 rounded-full text-sm font-medium border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-200 hover:scale-105">
                {tech}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
 