import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const achievements = [
  {
    year: "2023-Present",
    title: "ALDEX Partners",
    role: "Entertainment Law Partner",
    description: "Leading the entertainment law division, providing specialized legal services to creatives and entertainment businesses across Uganda.",
    highlight: "Legal Expertise in Entertainment Industry"
  },
  {
    year: "2022-2023",
    title: "University of Westminster",
    role: "Master's in Entertainment Law",
    description: "Advanced legal education specializing in entertainment law, intellectual property, and creative industry regulations.",
    highlight: "Master's Degree Achievement"
  },
  {
    year: "2020-Present",
    title: "Poetry & Performance",
    role: "Diego the Dark Knight",
    description: "Award-winning poet and performer, blending spoken word with theatrical performance to address social justice and identity themes.",
    highlight: "Creative Arts Recognition"
  },
  {
    year: "2019-Present",
    title: "Acting & Writing",
    role: "Actor & Writer",
    description: "Versatile performer in theater and film, also crafting compelling narratives that bridge entertainment and social commentary.",
    highlight: "Multi-disciplinary Artist"
  }
];

const skills = [
  "Entertainment Law", "Contract Drafting", "IP Protection",
  "Poetry", "Acting", "Writing",
  "Public Speaking", "Legal Consultation", "Creative Direction"
];

const PortfolioDetails = () => {
  return (
    <section className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        {/* Introduction */}
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-indigo-400 mb-6">
            Journey Through Excellence
          </h2>
          <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto">
            Diego Mwesigwa, a multifaceted creative professional, bridging the worlds of law, literature, and performance to create meaningful impact across Uganda's creative landscape.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-indigo-500/30 md:before:mx-auto md:before:left-0 md:before:right-0">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="flex items-center w-full md:w-1/2">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 border-2 border-indigo-500 z-10 md:mx-auto group-hover:bg-indigo-500 transition-colors duration-300">
                  <Icon icon="mdi:arrow-right" className="w-4 h-4 text-indigo-500 group-hover:text-gray-900" />
                </div>
                <div className="flex-1 ml-4 md:ml-0 md:px-8">
                  <div className="p-4 bg-black/50 rounded-lg border border-gray-800/20 group-hover:border-indigo-500/50 transition-all duration-300">
                    <span className="text-sm text-indigo-400">{achievement.year}</span>
                    <h3 className="text-xl font-bold text-indigo-300 mt-2">{achievement.title}</h3>
                    <p className="text-slate-300 font-medium">{achievement.role}</p>
                    <p className="text-slate-400 mt-2">{achievement.description}</p>
                    <span className="inline-block mt-3 text-sm font-medium text-indigo-400">{achievement.highlight}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-indigo-400 mb-8 text-center">
            Areas of Expertise
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="p-4 bg-black/50 rounded-lg border border-gray-800/20 hover:border-indigo-500/50 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p className="text-slate-300 text-center font-medium">{skill}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioDetails;
