import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
      accent: "indigo",
    },
    {
      id: 2,
      title: "The Antonym Magazine Publications",
      type: "Poetry",
      description:
        "Poems 'The Long Cry' and 'If this is me' published in The Antonym Magazine.",
      link: "https://www.theantonymmag.com/tag/africa/",
      icon: "mdi:book-open-page-variant",
      accent: "purple",
    },
    {
      id: 3,
      title: "East African Poetic Battle",
      type: "Performance",
      description: "Performed at the East African Poetic Battle.",
      link: "https://www.facebook.com/poetichour/posts/meet-diego-mwesigwa-donald-aka-diego-the-dark-knight-the-fourth-competitor-in-th/618436930305174/",
      icon: "mdi:microphone-variant",
      accent: "fuchsia",
    },
    {
      id: 4,
      title: "APVA Award for Best Spoken Word Video",
      type: "Achievement",
      description: "Recipient of the APVA Award for Best Spoken Word Video.",
      link: "https://twitter.com/APVAofficial/status/1705941459629686843",
      icon: "mdi:trophy-award",
      accent: "indigo",
    },
    {
      id: 5,
      title: "In the Dark of the Knight",
      type: "Publication",
      description: "An upcoming book showcasing Diego's literary work.",
      link: null,
      icon: "mdi:book-education",
      accent: "purple",
    },
    {
      id: 6,
      title: "ALDEX Partners Legal Consultancy",
      type: "Legal",
      description:
        "Partner at ALDEX Partners, providing Entertainment legal services.",
      link: "http://aldexpartnersug.com/",
      icon: "mdi:scale-balance",
      accent: "indigo",
    },
    {
      id: 7,
      title: "IMDb Profile",
      type: "Acting",
      description: "Diego Mwesigwa's official IMDb profile.",
      link: "https://www.imdb.com/name/nm16775523/",
      icon: "mdi:drama-masks",
      accent: "fuchsia",
    },
  ];

  const [current, setCurrent] = useState(0);

  // Helper to get visible slides for large screens (centered)
  const getVisibleSlides = () => {
    if (window.innerWidth >= 1024) {
      // Show 3 slides: prev, current, next
      const prev = (current - 1 + projects.length) % projects.length;
      const next = (current + 1) % projects.length;
      return [projects[prev], projects[current], projects[next]];
    }
    // Show only the current slide on small screens
    return [projects[current]];
  };

  // Listen for resize to force re-render on screen size change
  const [, setScreen] = useState(window.innerWidth);
  React.useEffect(() => {
    const handleResize = () => setScreen(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % projects.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section
      id="projects"
      className="relative w-full min-h-[60vh] flex flex-col items-center justify-center py-16 bg-black/80 backdrop-blur-2xl"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-fuchsia-500 bg-clip-text animate-glow">
        Projects & Achievements
      </h1>

      <div className="relative w-full max-w-6xl mx-auto flex items-center justify-center">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-0 z-10 p-3 rounded-full bg-black/60 hover:bg-indigo-700/80 transition text-white shadow-lg cursor-pointer"
          aria-label="Previous Project"
        >
          <Icon icon="mdi:chevron-left" className="w-8 h-8" />
        </button>

        {/* Slides */}
        <div className="w-full flex items-center justify-center gap-4">
          {getVisibleSlides().map((project, idx) => {
            // For large screens, center slide is current, sides are faded/scaled
            let isCenter = project === projects[current];
            let isSide = !isCenter && getVisibleSlides().length > 1;
            return (
              <motion.div
                key={project.id}
                className={`
                  flex-1 min-w-0 max-w-lg
                  ${
                    isCenter
                      ? "scale-100 opacity-100 z-20"
                      : "scale-90 opacity-60 z-10"
                  }
                  transition-all duration-500
                  rounded-2xl p-6 md:p-10 bg-gradient-to-br from-black/80 to-${
                    project.accent
                  }-900/40 shadow-2xl border border-${
                  project.accent
                }-500/40 backdrop-blur-md flex flex-col items-center text-center
                `}
                style={{
                  marginLeft:
                    idx === 0 && getVisibleSlides().length > 1
                      ? "0"
                      : undefined,
                  marginRight:
                    idx === getVisibleSlides().length - 1 &&
                    getVisibleSlides().length > 1
                      ? "0"
                      : undefined,
                }}
              >
                <Icon
                  icon={project.icon}
                  className={`text-5xl md:text-6xl mb-6 text-${project.accent}-300 drop-shadow-lg`}
                />
                <h2
                  className={`text-2xl md:text-3xl font-bold mb-2 text-${project.accent}-200`}
                >
                  {project.title}
                </h2>
                <p className="text-base md:text-lg text-gray-400 mb-2">
                  {project.type}
                </p>
                <p className="text-lg text-gray-200 mb-6">
                  {project.description}
                </p>
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:from-fuchsia-500 hover:to-indigo-500 transition cursor-pointer"
                  >
                    View Details
                  </a>
                ) : (
                  <span className="inline-block bg-gray-700/50 text-gray-300 px-6 py-2 rounded-full cursor-not-allowed">
                    Coming Soon
                  </span>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-0 z-10 p-3 rounded-full bg-black/60 hover:bg-fuchsia-700/80 transition text-white shadow-lg cursor-pointer"
          aria-label="Next Project"
        >
          <Icon icon="mdi:chevron-right" className="w-8 h-8" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center mt-8 space-x-2">
        {projects.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
              idx === current
                ? "bg-gradient-to-r from-indigo-400 via-purple-400 to-fuchsia-500 shadow-lg scale-125"
                : "bg-gray-700"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectsPage;
