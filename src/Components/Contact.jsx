import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Zap } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 flex flex-col items-center justify-center px-6 py-20"
    >
      <div className="max-w-6xl mx-auto w-full">

        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2 mb-6">
            <Zap size={16} className="text-gray-600" />
            <span className="text-sm font-medium text-gray-600">Get In Touch</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Let's Build Something
            <br />
            <span className="text-gray-500">Amazing Together</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gray-900 to-gray-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Let's Connect</h3>

              {[
                { icon: Mail, title: "Email", content: "raghavbaheti1224@gmail.com", href: "mailto:raghavbaheti1224@gmail.com" },
                { icon: Phone, title: "Phone", content: "+91 7733 XX XXXX", href: "tel:+91XXXXXXXXXX" },
                { icon: MapPin, title: "Location", content: "Udaipur, Rajasthan, India", href: "#" }
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:scale-105 transition-all duration-300 group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-12 h-12 bg-gray-900 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-semibold">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.content}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-gray-600 text-sm leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects,
                or just having a chat about technology and innovation. Don't hesitate to reach out!
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full bg-gray-50 border border-gray-200 text-gray-900 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full bg-gray-50 border border-gray-200 text-gray-900 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-gray-50 border border-gray-200 text-gray-900 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  placeholder="Project Discussion"
                  className="w-full bg-gray-50 border border-gray-200 text-gray-900 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  placeholder="Tell me about your project..."
                  rows="5"
                  className="w-full bg-gray-50 border border-gray-200 text-gray-900 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 resize-none"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;