import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-400">
              About Diego
            </h2>
            <p className="text-slate-300 text-md md:text-lg leading-relaxed">
              Also known as <span className="text-indigo-400 font-semibold">Diego the Dark Knight</span> — 
              an award-winning creative force blending performance and law to amplify stories, justice, 
              and identity across Uganda and beyond.
            </p>
            <p className="text-slate-300 text-md md:text-lg leading-relaxed">
              A distinguished Entertainment Law specialist with a Master's Degree from the University of Westminster. 
              Diego combines his legal expertise with a deep understanding of the creative industry, providing 
              comprehensive legal counsel to artists, musicians, and filmmakers.
            </p>
            <p className="text-slate-300 text-md md:text-lg leading-relaxed">
              His journey spans poetry, acting, writing, and law — each discipline informing the others 
              to create a unique perspective on creativity, justice, and human expression.
            </p>
          </motion.div>
          
          {/* Photo Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-md mx-auto"
          >
            {/* Image container */}
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-xl border border-indigo-500/40">
              <motion.img
                src="/Diego.jpg"
                alt="Diego Mwesigwa"
                className="w-full h-full object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              />

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-indigo-400/40 rounded-tl-xl"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-indigo-400/40 rounded-br-xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
