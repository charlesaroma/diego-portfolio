import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

function ActorHome() {
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
      id="actor"
      className="min-h-screen container mx-auto lg:pt-18 p-4 sm:p-6 lg:p-8 bg-black/40 backdrop-blur-md rounded-2xl shadow-2xl text-center flex flex-col"
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
          className="w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-fuchsia-500/40 shadow-xl mb-6"
        >
          <img
            src="https://ik.imagekit.io/ldeismm29/Diego-Portfolio/IMG_9705.JPG?updatedAt=1749769205036"
            alt="Diego Mwesigwa - Actor"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <Icon icon="mdi:drama-masks" className="text-4xl sm:text-5xl text-fuchsia-400 mb-3" />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-fuchsia-400 via-pink-400 to-purple-500 bg-clip-text mb-3">
          Diego Mwesigwa: The Actor
        </h1>
        <p className="text-base sm:text-lg text-gray-300 max-w-2xl mb-4">
          A versatile actor with a decade of experience in Ugandan television and theater. 
          Diego brings depth and authenticity to every role, captivating audiences with his 
          powerful performances and commanding stage presence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mt-4">
        <motion.div
          className="rounded-xl p-4 sm:p-6 bg-gradient-to-br from-black/60 to-fuchsia-900/30 shadow-xl border border-fuchsia-500/40 backdrop-blur-md flex flex-col items-center"
          whileHover={{ translateY: -5 }}
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-fuchsia-300 mb-2">Notable Roles</h2>
          <ul className="text-gray-400 mb-3 space-y-1 text-left">
            <li>• Leading roles in top Ugandan TV series</li>
            <li>• Theater productions</li>
            <li>• Film appearances</li>
            <li>• Voice acting</li>
            <li>• Commercial work</li>
          </ul>
          <a href="https://www.imdb.com/name/nm16775523/" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white px-4 py-2 rounded-md hover:from-purple-500 hover:to-fuchsia-500 transition-colors font-medium cursor-pointer">
            View IMDb Profile
          </a>
        </motion.div>
        <motion.div
          className="rounded-xl p-4 sm:p-6 bg-gradient-to-br from-black/60 to-fuchsia-900/30 shadow-xl border border-fuchsia-500/40 backdrop-blur-md flex flex-col items-center"
          whileHover={{ translateY: -5 }}
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-fuchsia-300 mb-2">Performance Gallery</h2>
          <p className="text-gray-400 mb-3">
            Explore Diego's diverse acting portfolio, from dramatic roles to comedic performances, 
            showcasing his range and versatility as an actor.
          </p>
          <div className="space-y-3">
            <button
              onClick={() => navigate('/#contact')}
              className="inline-block bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white px-4 py-2 rounded-md hover:from-purple-500 hover:to-fuchsia-500 transition-colors font-medium cursor-pointer"
            >
              Request Portfolio
            </button>
            <p className="text-sm text-gray-500">
              "Bringing stories to life through authentic performances"
            </p>
          </div>
        </motion.div>
      </div>

      <div className="mt-auto pt-6 flex justify-center">
        <button
          onClick={() => navigate('/')}
          className="bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white px-5 py-2 rounded-md hover:from-purple-500 hover:to-fuchsia-500 transition-colors font-medium cursor-pointer"
        >
          Back to Home
        </button>
      </div>
    </motion.section>
  );
}

export default ActorHome;