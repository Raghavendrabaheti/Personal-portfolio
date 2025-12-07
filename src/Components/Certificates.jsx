import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, Award as AwardIcon, ExternalLink, Download } from 'lucide-react';

// Manually import certificates
import certificate1 from '../assets/Certificates/CSS.png';
import certificate2 from '../assets/Certificates/js.png';
import certificate3 from '../assets/Certificates/MySQL.png';
import certificate4 from '../assets/Certificates/Mernstack.jpg';
import certificate5 from '../assets/Certificates/ndr.jpeg';
import certificate6 from '../assets/Certificates/sql2.jpg';
import certificate7 from '../assets/Certificates/cybersecurity.jpg';

const certificatesData = [
  { name: 'Cybersecurity Certificate', url: certificate7, color: 'from-blue-500 to-cyan-500' },
  { name: 'MERN Stack Certificate', url: certificate4, color: 'from-purple-500 to-pink-500' },
  { name: 'CSS Certificate', url: certificate1, color: 'from-yellow-400 to-orange-500' },
  { name: 'JavaScript Certificate', url: certificate2, color: 'from-orange-500 to-red-500' },
  { name: 'MySQL Certificate', url: certificate3, color: 'from-emerald-500 to-teal-500' },
  { name: 'NDR Certificate', url: certificate5, color: 'from-red-500 to-pink-500' },
  { name: 'SQL Certificate', url: certificate6, color: 'from-indigo-500 to-purple-500' },
];

const Certificates = () => {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    setCertificates(certificatesData);
  }, []);

  return (
    <section id="certificates" className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 py-20">
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
            <Award size={16} className="text-gray-600" />
            <span className="text-sm font-medium text-gray-600">Achievements</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Certifications
            <br />
            <span className="text-gray-500">& Credentials</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gray-900 to-gray-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            A testament to my commitment to continuous learning and professional development
          </p>
        </motion.div>

        {/* Scrollable Container */}
        <div className="w-full overflow-x-auto scrollbar-hide pb-4">
          <div className="flex gap-6 px-4">
            {certificates.map((certificate, index) => (
              <motion.div
                key={index}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 min-w-[280px] sm:min-w-[300px] lg:min-w-[320px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Gradient Border */}
                <div className={`absolute inset-0 bg-gradient-to-r ${certificate.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} 
                     style={{ padding: '2px' }}></div>
                
                <div className="relative bg-white rounded-3xl h-full">
                  {/* Certificate Image */}
                  <div className="relative overflow-hidden h-48 bg-gray-50">
                    <img
                      src={certificate.url}
                      alt={certificate.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Badge */}
                    <div className="absolute top-4 left-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${certificate.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <AwardIcon size={24} className="text-white" />
                      </div>
                    </div>

                    {/* View Button */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={certificate.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/90 backdrop-blur-sm text-gray-700 rounded-full hover:bg-white transition-colors duration-200"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>

                  {/* Certificate Info */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-300">
                      {certificate.name}
                    </h3>
                    
                    {/* Download Button */}
                    <a
                      href={certificate.url}
                      download
                      className="inline-flex items-center justify-center w-full px-4 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group/btn"
                    >
                      <Download size={16} className="mr-2 group-hover/btn:translate-y-0.5 transition-transform duration-200" />
                      <span className="text-sm font-medium">Download Certificate</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View All Certificates CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 border-2 border-gray-200 text-gray-700 rounded-2xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 hover:scale-105 group"
          >
            <Award size={18} className="mr-2" />
            <span>Interested in verified credentials?</span>
            <ExternalLink size={16} className="ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;