import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const socialLinks = [
  { icon: "mdi:instagram", href: "https://www.instagram.com/diego_thedarkknight/", label: "Instagram", color: "#E4405F" },
  { icon: "mdi:tiktok", href: "#", label: "TikTok", color: "#000000" },
  { icon: "mdi:twitter", href: "https://twitter.com/DiegoMwesigwa", label: "X", color: "#000000" },
  { icon: "mdi:linkedin", href: "https://www.linkedin.com/in/diego-mwesigwa-8a4bb6108/", label: "LinkedIn", color: "#0A66C2" },
  { icon: "mdi:facebook", href: "#", label: "Facebook", color: "#1877F2" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {
      icon: () => (
        <Icon icon="lets-icons:home-duotone" width={24} height={24} />
      ),
      label: "Home",
      path: "/",
    },
    {
      icon: () => <Icon icon="ic:twotone-camera" width="24" height="24" />,
      label: "Portfolio",
      path: "/portfolio",
    },
    {
      icon: () => (
        <Icon icon="solar:gallery-wide-bold-duotone" width={24} height={24} />
      ),
      label: "Gallery",
      path: "/gallery",
    },
    {
      icon: () => <Icon icon="mdi:contacts" width="24" height="24" />,
      label: "Contact",
      path: "/contact",
    },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      x: 20,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <div 
        className="absolute top-0 w-full py-4 flex px-4 items-center justify-between transition-all duration-300 z-50 lg:mx-0 lg:top-0 lg:rounded-none"
      >
        {/* Logo */}
        <Link to="/" className="z-50 lg:hidden">
          <motion.h1
            className="text-3xl font-bold text-indigo-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            DM
          </motion.h1>
        </Link>
        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="z-50 p-2 rounded-full bg-indigo-400/10 border border-indigo-400/10 backdrop-blur-lg lg:hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={isMenuOpen ? { rotate: 180 } : { rotate: 0 }}
          transition={{ duration: 0.3 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={isMenuOpen ? "close" : "menu"}
              initial={{ opacity: 0, rotate: -180 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? (
                <Icon icon="mdi:close" className="w-8 h-8 text-indigo-400" />
              ) : (
                <Icon icon="mdi:menu" className="w-6 h-6 text-indigo-400" />
              )}
            </motion.div>
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="fixed inset-0 z-40 bg-black backdrop-blur-lg lg:hidden"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <motion.div
              className="flex flex-col items-start justify-center w-full px-12 h-full"
              variants={menuVariants}
            >
              <div className="flex flex-col gap-8 mb-12">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    variants={itemVariants}
                    custom={index}
                  >
                    <NavLink
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center gap-4 font-medium transition-all duration-200 relative group ${
                          isActive
                            ? "text-white text-2xl"
                            : "text-gray-400 text-xl hover:text-indigo-400"
                        }`
                      }
                    >
                      <span className="relative">
                        {typeof item.icon === "function" ? (
                          <item.icon />
                        ) : (
                          React.createElement(item.icon, {
                            size: 24,
                            strokeWidth: 2,
                          })
                        )}
                        <motion.span
                          className="absolute inset-0 bg-indigo-400/10 rounded-full scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100"
                          transition={{ duration: 0.3 }}
                        />
                      </span>
                      <span className="relative">
                        {item.label}
                        <motion.span
                          className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full"
                          transition={{ duration: 0.3 }}
                        />
                      </span>
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <motion.div className="flex gap-4 pt-6" variants={itemVariants}>
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                    whileHover={{ scale: 1.1 }}
                    variants={itemVariants}
                  >
                    <motion.div
                      className="w-10 h-10 rounded-full bg-gray-800/50 flex items-center justify-center
                        border border-indigo-400/40 transition-all duration-300
                        group-hover:border-indigo-500/50"
                    >
                      <Icon 
                        icon={social.icon}
                        className="w-6 h-6 text-indigo-400 transition-colors duration-300 group-hover:text-indigo-300"
                      />
                    </motion.div>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Desktop Navigation */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 hidden lg:block">
        <div className="px-6 py-2 backdrop-blur-lg bg-gray-900 rounded-full shadow-md border border-gray-800">
          <div className="flex items-center justify-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex flex-col items-center transition-all duration-200 ${
                    isActive
                      ? "text-indigo-300"
                      : "text-indigo-400 hover:text-indigo-300"
                  }`
                }
              >
                {typeof item.icon === "function" ? (
                  <item.icon />
                ) : (
                  React.createElement(item.icon, { size: 20, strokeWidth: 2 })
                )}
                <span className="text-[10px] mt-1">{item.label}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
