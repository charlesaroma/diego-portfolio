import React from "react";
import { motion } from "framer-motion";

const PortfolioHero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Glowing radial background */}
      <div className="absolute inset-0 z-0">
        <div className="w-[200%] h-[200%] animate-pulse-fast bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent opacity-40 blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-screen flex flex-col justify-center">
        {/* Decorative Elements */}
        <motion.div
          className="absolute left-4 sm:left-8 lg:left-12 top-1/4 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 border-l-2 border-t-2 border-indigo-500 opacity-30"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.div
          className="absolute right-4 sm:right-8 lg:right-12 bottom-1/4 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 border-r-2 border-b-2 border-indigo-500 opacity-30"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        />

        {/* Text Content */}
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-600 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Portfolio
          </motion.h1>
          
          <motion.div
            className="relative mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="h-[2px] w-16 sm:w-24 bg-indigo-500 absolute left-1/2 -translate-x-1/2" />
          </motion.div>

          <motion.p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 max-w-sm sm:max-w-xl lg:max-w-2xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Explore the multifaceted world of Diego Mwesigwa, where poetry meets performance, and law serves creativity across diverse artistic expressions.
          </motion.p>

          {/* Animated Scroll Indicator */}
          <motion.div
            className="absolute bottom-14 sm:bottom-16 md:bottom-20 lg:bottom-24 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-indigo-500 rounded-full p-2">
              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-indigo-500 rounded-full animate-bounce mx-auto" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;
