import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import profilePic from "../assets/profile.jpeg";

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
                <span className="text-gray-900">DevOps Engineer</span> &
                <br />
                <span className="text-black">Full Stack Developer</span>
              </p>
              <p className="text-xl text-gray-600 max-w-lg leading-relaxed font-light">
                I craft scalable digital experiences with clean code, robust architecture,
                and seamless deployment pipelines that transform ideas into reality.
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
              href="/Raghavendraa.pdf"
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
              { number: "5+", label: "Projects" },
              { number: "10+", label: "Hackathons" },
              { number: "7+", label: "Certificates" }
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
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative">
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-gray-100">
              <img
                src={profilePic}
                alt="Raghavendra Baheti"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl -z-10 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl -z-10"></div>
            <div className="absolute -top-2 -left-2 w-12 h-12 bg-white rounded-xl shadow-lg -z-10"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
