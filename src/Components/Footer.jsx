import React from "react";
import { motion } from "framer-motion";
import { Heart, ArrowUp, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/Raghavendrabaheti", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/raghavendra-baheti-909109244", label: "LinkedIn" },
    { icon: Mail, href: "mailto:raghavendrab1804@gmail.com", label: "Email" }
  ];

  const navigationLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">

          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl flex items-center justify-center mr-3">
                <span className="text-white font-bold">R</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">Raghavendra Baheti</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Passionate DevOps and Software Engineer crafting scalable solutions
              with modern technologies and automation.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-full transition-all duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <nav className="space-y-3">
              {navigationLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Get In Touch
            </h3>
            <div className="space-y-3 text-sm text-gray-600">
              <p>Udaipur, Rajasthan, India</p>
              <a
                href="mailto:raghavendrab1804@gmail.com"
                className="block hover:text-gray-900 transition-colors duration-200"
              >
                raghavendrab1804@gmail.com
              </a>
              <p className="text-xs text-gray-500 mt-4">
                Available for freelance opportunities
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

            {/* Copyright */}
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span>&copy; {currentYear} Raghavendra Baheti.</span>
              <span>Made with</span>
              <Heart size={14} className="text-red-500 animate-pulse" />
              <span>in India</span>
            </div>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-full transition-all duration-200 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Back to Top</span>
              <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform duration-200" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;