import React from 'react';
import { motion } from 'framer-motion';

const GalleryHero = () => {
  return (
    <section className="min-h-[60vh] flex items-center justify-center py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-[#e1e1dd] mb-6">
            Gallery
          </h1>
          <p className="text-lg md:text-xl text-[#71716f] max-w-3xl mx-auto leading-relaxed">
            A visual journey through performances, achievements, and moments that define 
            the artistic and professional legacy of Diego Mwesigwa.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryHero;