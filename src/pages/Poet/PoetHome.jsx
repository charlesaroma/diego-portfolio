import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

function PoetHome() {
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
      id="poet"
      className="min-h-[calc(100vh-4rem)] container mx-auto lg:pt-20 p-4 sm:p-6 lg:p-8 bg-black/40 backdrop-blur-md rounded-2xl shadow-2xl text-center flex flex-col"
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
          className="w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-purple-500/40 shadow-xl mb-6"
        >
          <img
            src="https://ik.imagekit.io/ldeismm29/Diego-Portfolio/IMG_1187.JPG?updatedAt=1749769754490"
            alt="Diego Mwesigwa - Poet"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <Icon icon="mdi:feather" className="text-4xl sm:text-5xl text-purple-400 mb-3" />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-500 bg-clip-text mb-3">
          Diego The Dark Knight: The Poet
        </h1>
        <p className="text-base sm:text-lg text-gray-300 max-w-2xl mb-4">
          An award-winning spoken-word artist whose powerful performances and thought-provoking 
          narratives have captivated audiences across Uganda and beyond. Through his unique blend 
          of rhythm, depth, and storytelling, Diego explores themes of identity, justice, and the 
          human experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mt-4">
        <motion.div
          className="rounded-xl p-4 sm:p-6 bg-gradient-to-br from-black/60 to-purple-900/30 shadow-xl border border-purple-500/40 backdrop-blur-md flex flex-col items-center"
          whileHover={{ translateY: -5 }}
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-purple-300 mb-2">Featured Works</h2>
          <ul className="text-gray-400 mb-3 space-y-1 text-left">
            <li>• "REBELLION" - Intro track for Rebellion Album</li>
            <li>• "The Long Cry" - Published in The Antonym</li>
            <li>• "If this is me" - Published in The Antonym</li>
            <li>• APVA Award-winning Spoken Word Video</li>
            <li>• Upcoming Book: "In the Dark of the Knight"</li>
          </ul>
          <button
            onClick={() => navigate('/#projects')}
            className="inline-block bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white px-4 py-2 rounded-md hover:from-fuchsia-500 hover:to-purple-500 transition-colors font-medium cursor-pointer"
          >
            Explore Poems
          </button>
        </motion.div>
        <motion.div
          className="rounded-xl p-4 sm:p-6 bg-gradient-to-br from-black/60 to-purple-900/30 shadow-xl border border-purple-500/40 backdrop-blur-md flex flex-col items-center"
          whileHover={{ translateY: -5 }}
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-purple-300 mb-2">Performances & Events</h2>
          <p className="text-gray-400 mb-3">
            From national stages to international platforms, Diego's spoken-word performances 
            have left lasting impressions. Book him for your next event or explore his 
            upcoming performances.
          </p>
          <div className="space-y-3">
            <button
              onClick={() => navigate('/#contact')}
              className="inline-block bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white px-4 py-2 rounded-md hover:from-fuchsia-500 hover:to-purple-500 transition-colors font-medium cursor-pointer"
            >
              Book a Performance
            </button>
            <p className="text-sm text-gray-500">
              "Words that resonate with the soul"
            </p>
          </div>
        </motion.div>
      </div>

      <div className="mt-auto pt-6 flex justify-center">
        <button
          onClick={() => navigate('/')}
          className="bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white px-5 py-2 rounded-md hover:from-fuchsia-500 hover:to-purple-500 transition-colors font-medium cursor-pointer"
        >
          Back to Home
        </button>
      </div>
    </motion.section>
  );
}

export default PoetHome;