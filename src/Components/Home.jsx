import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import profilePic from "../assets/profile.jpeg";
import resumePdf from "../assets/Raghavendra.pdf";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-50 px-6 pt-20"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Content */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-6">
            <motion.div
              className="flex items-center space-x-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Sparkles size={16} className="text-gray-600" />
              <span className="text-sm font-medium text-gray-600 tracking-wide">Available for opportunities</span>
            </motion.div>

            <motion.h1
              className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Raghavendra
              <br />
              <span className="text-gray-500">Baheti</span>
            </motion.h1>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
                <span className="text-gray-900">Software Enthusiast</span> &
                <br />
                <span className="text-black">Backend Developer</span>
              </p>
              <p className="text-xl text-gray-600 max-w-lg leading-relaxed font-light">
              I love building systems that scale — from designing robust APIs to optimizing databases for real-world performance. Always learning, always improving.
               </p>

            </motion.div>
          </div>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <a
              href="#contact"
              className="group inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-2xl hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Let's Connect
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </a>

            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center px-8 py-4 border-2 border-gray-200 text-gray-700 rounded-2xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 hover:scale-105"
            >
              <Download size={16} className="mr-2 group-hover:animate-bounce" />
              Resume
            </a>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            className="flex gap-12 pt-8 border-t border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { number: "15+", label: "Projects" },
              { number: "20+", label: "Hackathons" },
              { number: "10+", label: "Certificates" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          className="flex justify-center lg:justify-end group"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative">
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-gray-100 group/image">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover/image:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              <img
                src={profilePic}
                alt="Raghavendra Baheti"
                className="w-full h-full object-cover group-hover/image:scale-110 transition-all duration-700"
              />
            </div>
            {/* Floating Elements with gradients */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-purple-200 to-pink-200 rounded-2xl -z-10 animate-pulse blur-sm"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-3xl -z-10 blur-sm"></div>
            <div className="absolute -top-2 -left-2 w-12 h-12 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg -z-10"></div>
            
            {/* Glow effect on hover */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-purple-500/30 via-transparent to-pink-500/30 blur-2xl -z-20"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
