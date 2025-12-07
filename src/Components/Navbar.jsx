import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Github, Linkedin } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <motion.nav 
      className="fixed top-0 left-0 w-full z-50 py-3 px-6"
      animate={{
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(20px)',
        boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.05)' : '0 2px 10px rgba(0, 0, 0, 0.03)',
        borderBottomWidth: scrolled ? '1px' : '0',
        borderColor: 'rgba(0, 0, 0, 0.05)',
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo/Brand */}
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-8 h-8 bg-gradient-to-br from-gray-900 to-gray-700 rounded-lg flex items-center justify-center mr-3">
            <span className="text-white font-bold text-sm">R</span>
          </div>
          <span className="text-lg font-semibold text-gray-900 tracking-tight">Raghavendra</span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <div className="flex items-center space-x-1 bg-gray-50/50 rounded-full px-2 py-1">
            {["Home", "About", "Work", "Projects", "Contact"].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-full transition-all duration-300 hover:bg-white hover:shadow-sm"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Social Links & Mobile Menu */}
        <div className="flex items-center space-x-3">
          <div className="hidden md:flex items-center space-x-2">
            <a
              href="https://github.com/Raghavendrabaheti"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-full transition-all duration-200"
            >
              <Github size={16} />
            </a>
            <a
              href="https://linkedin.com/in/raghavendra-baheti-909109244"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-full transition-all duration-200"
            >
              <Linkedin size={16} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-full transition-all duration-200"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-50"
          >
            <div className="max-w-7xl mx-auto px-6 py-6">
              <div className="space-y-3">
                {["Home", "About", "Work", "Projects", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block px-4 py-3 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-all duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
              <div className="flex items-center space-x-3 pt-6 border-t border-gray-100 mt-6">
                <a
                  href="https://github.com/Raghavendrabaheti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-full transition-all duration-200"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://linkedin.com/in/raghavendra-baheti-909109244"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-full transition-all duration-200"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;