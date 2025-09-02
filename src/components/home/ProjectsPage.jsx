import React, { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Rebellion Album Intro Track",
      type: "Poetry/Music",
      description:
        "Poem 'REBELLION' is the intro track to Rebellion Album by Rebel City Music.",
      link: "https://soundcloud.com/rebelxitymusic/rebellion-ft-diego-the-dark-knight",
      icon: "mdi:music",
    },
    {
      id: 2,
      title: "The Antonym Magazine Publications",
      type: "Poetry",
      description:
        "Poems 'The Long Cry' and 'If this is me' published in The Antonym Magazine.",
      link: "https://www.theantonymmag.com/tag/africa/",
      icon: "mdi:book-open-page-variant",
    },
    {
      id: 3,
      title: "East African Poetic Battle",
      type: "Performance",
      description: "Performed at the East African Poetic Battle.",
      link: "https://www.facebook.com/poetichour/posts/meet-diego-mwesigwa-donald-aka-diego-the-dark-knight-the-fourth-competitor-in-th/618436930305174/",
      icon: "mdi:microphone-variant",
    },
    {
      id: 4,
      title: "APVA Award for Best Spoken Word Video",
      type: "Achievement",
      description: "Recipient of the APVA Award for Best Spoken Word Video.",
      link: "https://twitter.com/APVAofficial/status/1705941459629686843",
      icon: "mdi:trophy-award",
    },
    {
      id: 5,
      title: "In the Dark of the Knight",
      type: "Publication",
      description: "An upcoming book showcasing Diego's literary work.",
      link: null,
      icon: "mdi:book-education",
    },
    {
      id: 6,
      title: "ALDEX Partners Legal Consultancy",
      type: "Legal",
      description:
        "Partner at ALDEX Partners, providing Entertainment legal services.",
      link: "http://aldexpartnersug.com/",
      icon: "mdi:scale-balance",
    },
    {
      id: 7,
      title: "IMDb Profile",
      type: "Acting",
      description: "Diego Mwesigwa's official IMDb profile.",
      link: "https://www.imdb.com/name/nm16775523/",
      icon: "mdi:drama-masks",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % projects.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + projects.length) % projects.length);

  const handleDragEnd = (event, info) => {
    const threshold = 50;
    if (info.offset.x > threshold) {
      prevSlide();
    } else if (info.offset.x < -threshold) {
      nextSlide();
    }
  };

  return (
    <section className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-[#e1e1dd] mb-6">
            Projects & Achievements
          </h2>
          <p className="text-lg md:text-xl text-[#71716f] max-w-3xl mx-auto leading-relaxed">
            A showcase of creative works, legal expertise, and artistic achievements 
            spanning poetry, performance, and entertainment law.
          </p>
        </motion.div>

        {/* Projects Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-gray-900/80 hover:bg-gray-800 border border-gray-700/50 text-[#e1e1dd] transition-all duration-300 hidden md:flex items-center justify-center"
            aria-label="Previous Project"
          >
            <Icon icon="mdi:chevron-left" className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-gray-900/80 hover:bg-gray-800 border border-gray-700/50 text-[#e1e1dd] transition-all duration-300 hidden md:flex items-center justify-center"
            aria-label="Next Project"
          >
            <Icon icon="mdi:chevron-right" className="w-6 h-6" />
          </button>

          {/* Project Cards */}
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
              animate={{ x: `-${current * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {projects.map((project, index) => (
                <div key={project.id} className="w-full flex-shrink-0 px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-gray-700/30 hover:border-indigo-500/40 transition-all duration-300 max-w-2xl mx-auto"
                  >
                    <div className="text-center">
                      <Icon
                        icon={project.icon}
                        className="text-6xl md:text-7xl text-indigo-400 mb-6 mx-auto"
                      />
                      <h3 className="text-2xl md:text-3xl font-semibold text-[#e1e1dd] mb-3">
                        {project.title}
                      </h3>
                      <p className="text-lg text-indigo-400 mb-4 font-medium">
                        {project.type}
                      </p>
                      <p className="text-[#bcbcb8] leading-relaxed mb-8 max-w-xl mx-auto">
                        {project.description}
                      </p>
                      {project.link ? (
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center gap-2 bg-transparent border-2 border-[#e1e1dd] text-[#e1e1dd] px-6 py-3 rounded-lg font-medium hover:bg-[#e1e1dd] hover:text-[#090A17] transition-all duration-300"
                        >
                          View Project
                          <Icon icon="mdi:arrow-top-right" className="w-4 h-4" />
                        </motion.a>
                      ) : (
                        <span className="inline-block bg-gray-700/50 text-[#71716f] px-6 py-3 rounded-lg">
                          Coming Soon
                        </span>
                      )}
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-12 gap-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === current
                    ? "bg-indigo-400 scale-125"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsPage;
