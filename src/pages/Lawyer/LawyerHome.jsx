import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

function LawyerHome() {
  const navigate = useNavigate();
  
  const pageVariants = {
    initial: { opacity: 0, x: -100 },
    in: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
    out: { opacity: 0, x: 100, transition: { duration: 0.5, ease: "easeIn" } },
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section
      id="lawyer"
      className="min-h-screen lg:pt-18 container mx-auto p-4 sm:p-6 lg:p-8 bg-black/40 backdrop-blur-md rounded-2xl shadow-2xl text-center flex flex-col"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <div className="flex flex-col items-center mb-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-indigo-500/40 shadow-xl mb-6"
        >
          <img
            src="https://ik.imagekit.io/ldeismm29/Diego-Portfolio/IMG_7048.JPEG.jpg?updatedAt=1749769052962"
            alt="Diego Mwesigwa - Entertainment Lawyer"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <Icon icon="mdi:scale-balance" className="text-4xl sm:text-5xl text-indigo-400 mb-3" />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-700 bg-clip-text mb-3">
          Diego Mwesigwa: The Lawyer
        </h1>
        <p className="text-base sm:text-lg text-gray-300 max-w-2xl mb-4">
          A distinguished Entertainment Law specialist with a Master's Degree from the University of Westminster. 
          Diego combines his legal expertise with a deep understanding of the creative industry, providing 
          comprehensive legal counsel to artists, musicians, and filmmakers across Uganda and beyond.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mt-4">
        <motion.div
          className="rounded-xl p-4 sm:p-6 bg-gradient-to-br from-black/60 to-indigo-900/30 shadow-xl border border-indigo-500/40 backdrop-blur-md flex flex-col items-center"
          whileHover={{ translateY: -5 }}
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-indigo-300 mb-2">Legal Services</h2>
          <ul className="text-gray-400 mb-3 space-y-1 text-left">
            <li>• Contract Drafting & Review</li>
            <li>• Intellectual Property Protection</li>
            <li>• Entertainment Rights Management</li>
            <li>• Dispute Resolution</li>
            <li>• Industry Compliance</li>
          </ul>
          <button
            onClick={() => navigate('/#contact')}
            className="inline-block bg-gradient-to-r from-indigo-500 to-indigo-700 text-white px-4 py-2 rounded-md hover:from-indigo-700 hover:to-indigo-500 transition-colors font-medium cursor-pointer"
          >
            Schedule Consultation
          </button>
        </motion.div>
        <motion.div
          className="rounded-xl p-4 sm:p-6 bg-gradient-to-br from-black/60 to-indigo-900/30 shadow-xl border border-indigo-500/40 backdrop-blur-md flex flex-col items-center"
          whileHover={{ translateY: -5 }}
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-indigo-300 mb-2">ALDEX Partners</h2>
          <p className="text-gray-400 mb-3">
            As a partner at ALDEX Partners, Diego leads the entertainment law division, 
            providing specialized legal services to creatives and entertainment businesses.
          </p>
          <div className="space-y-3">
            <a href="http://aldexpartnersug.com/" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-indigo-500 to-indigo-700 text-white px-4 py-2 rounded-md hover:from-indigo-700 hover:to-indigo-500 transition-colors font-medium cursor-pointer">
              Visit ALDEX Partners
            </a>
            <p className="text-sm text-gray-500">
              "Empowering creatives through sound legal counsel"
            </p>
          </div>
        </motion.div>
      </div>

      <div className="mt-auto pt-6 flex justify-center">
        <button
          onClick={() => navigate('/')}
          className="bg-gradient-to-r from-indigo-500 to-indigo-700 text-white px-5 py-2 rounded-md hover:from-indigo-700 hover:to-indigo-500 transition-colors font-medium cursor-pointer"
        >
          Back to Home
        </button>
      </div>
    </motion.section>
  );
}

export default LawyerHome;