import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const images = [
  "https://ik.imagekit.io/ldeismm29/Diego-Portfolio/BG/IMG_0355.png?updatedAt=1756752208642",
  "https://ik.imagekit.io/ldeismm29/Diego-Portfolio/BG/IMG_7048.JPEG.jpg?updatedAt=1756752117608",
  "https://ik.imagekit.io/ldeismm29/Diego-Portfolio/BG/IMG_0388.png?updatedAt=1756752214427",
];

const socialLinks = [
  { icon: "mdi:instagram", href: "#", label: "Instagram", color: "#E4405F" },
  { icon: "mdi:twitter", href: "#", label: "X", color: "#000000" },
  { icon: "mdi:linkedin", href: "#", label: "LinkedIn", color: "#0A66C2" },
  { icon: "mdi:facebook", href: "#", label: "Facebook", color: "#1877F2" },
];

const professions = ["Poet", "Actor", "Writer", "Entertainment Lawyer"];

const transitionDuration = 5;

const HomeHero = () => {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [professionIndex, setProfessionIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!isHovered && images.length > 1) {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % images.length);
      }, transitionDuration * 1000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  // Typewriter effect
  useEffect(() => {
    const currentProfession = professions[professionIndex];
    let timeout;

    if (!isDeleting && displayText === currentProfession) {
      // Pause at end of word
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      // Move to next word
      setIsDeleting(false);
      setProfessionIndex((prev) => (prev + 1) % professions.length);
    } else {
      // Typing or deleting
      const speed = isDeleting ? 50 : 100;
      timeout = setTimeout(() => {
        setDisplayText((prev) => {
          if (isDeleting) {
            return currentProfession.substring(0, prev.length - 1);
          } else {
            return currentProfession.substring(0, prev.length + 1);
          }
        });
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, professionIndex]);

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Social Icons - Mobile Version */}
      <motion.div
        className="absolute bottom-4 left-0 right-0 z-30 flex md:hidden justify-center gap-3 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 1 }}
          >
            <motion.div
              className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center border border-indigo-500/40 transition-all duration-300 group-hover:border-indigo-400/50"
              whileHover={{ scale: 1.1 }}
            >
              <Icon
                icon={social.icon}
                className="w-4 h-4 text-indigo-400 transition-colors duration-300 group-hover:text-indigo-300"
              />
            </motion.div>
          </motion.a>
        ))}
      </motion.div>

      {/* Desktop Social Icons */}
      <motion.div
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 hidden md:flex flex-col gap-4 sm:gap-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 1 }}
            whileHover={{ x: 5 }}
          >
            <motion.div
              className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center border border-indigo-500/40 transition-all duration-300 group-hover:border-indigo-400/50"
              whileHover={{ scale: 1.1 }}
            >
              <Icon
                icon={social.icon}
                className="w-5 h-5 text-indigo-400 transition-colors duration-300 group-hover:text-indigo-300"
              />
            </motion.div>
            <motion.span
              className="absolute left-12 text-sm text-indigo-500/0 whitespace-nowrap transition-all duration-300 group-hover:text-indigo-400"
              initial={{ opacity: 0, x: -10 }}
              whileHover={{ opacity: 1, x: 0 }}
            >
              {social.label}
            </motion.span>
          </motion.a>
        ))}
      </motion.div>

      {/* Main Layout Container */}
      <div className="min-h-screen flex flex-col lg:flex-row">
        {/* Mobile Image Section - Show on mobile, hide on desktop */}
        <div className="flex lg:hidden items-end justify-center pt-16 px-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-[400px] mb-0"
          >
            <div className="relative w-full aspect-[5/6] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="w-full h-full relative"
                >
                  <img
                    src={images[current]}
                    alt="Diego Mwesigwa"
                    className="w-full h-full object-cover relative z-10"
                    loading={current === 0 ? "eager" : "lazy"}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#090A17]/60 z-20" />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Content Section - Takes left space on desktop */}
        <div className="flex-1 flex items-center justify-center lg:justify-start px-4 sm:px-8 lg:pl-20 xl:pl-32 pb-20">
          <motion.div
            className="text-center lg:text-left max-w-2xl z-10"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-light text-[#e1e1dd] mb-4 sm:mb-6">
              Diego Mwesigwa
            </h1>

            <div className="text-lg sm:text-xl lg:text-2xl font-medium mb-4 sm:mb-6 text-[#bcbcb8] min-h-[2rem] lg:min-h-[3rem]">
              <span>{displayText}</span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                className="inline-block ml-1 w-0.5 h-6 bg-[#bcbcb8]"
              />
            </div>

            <p className="text-sm sm:text-base lg:text-lg text-[#71716f] mb-6 sm:mb-8 max-w-xl lg:max-w-2xl mx-auto lg:mx-0">
              Through every character I embody and every story I tell, I seek to reveal the depth of
              human experience. My craft is about authenticity and connection.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 items-center justify-center lg:justify-start">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/portfolio"
                  className="bg-transparent cursor-pointer border-2 border-[#e1e1dd] text-[#e1e1dd] py-2 px-4 md:px-8 md:py-3 rounded-lg text-base sm:text-lg font-medium flex items-center w-auto justify-center"
                >
                  View Portfolio <Icon icon="mdi:arrow-right" className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="text-[#bcbcb8] cursor-pointer px-4 py-2 sm:px-6 md:px-8 md:py-3 rounded-lg text-base sm:text-lg font-normal flex items-center w-full sm:w-auto justify-center"
                >
                  Contact Me
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Desktop Image Section - Fixed to right side and bottom, show on desktop only */}
        <div className="hidden lg:flex items-end justify-end">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-[400px] xl:w-[500px] mb-0"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative w-full aspect-[5/6] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="w-full h-full relative"
                >
                  <img
                    src={images[current]}
                    alt="Diego Mwesigwa"
                    className="w-full h-full object-cover relative z-10"
                    loading={current === 0 ? "eager" : "lazy"}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#090A17]/60 z-20" />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;