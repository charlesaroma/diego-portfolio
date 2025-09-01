import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

const navLinks = [
  { name: "HOME", path: "/" },
  { name: "ABOUT", path: "/#about" },
  { name: "PROJECTS", path: "/#projects" },
  { name: "CONTACT", path: "/#contact" },
];

const socialLinks = [
  { href: "https://twitter.com/DiegoMwesigwa", icon: "mdi:twitter" },
  {
    href: "https://www.instagram.com/diego_thedarkknight/",
    icon: "mdi:instagram",
  },
  {
    href: "https://www.linkedin.com/in/diego-mwesigwa-8a4bb6108/",
    icon: "mdi:linkedin",
  },
  { href: "https://www.imdb.com/name/nm16775523/", icon: "cib:imdb" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();

  // Update active section based on scroll position or current route
  React.useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === '/') {
        const sections = document.querySelectorAll("section");
        const scrollPosition = window.scrollY + window.innerHeight / 3;

        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(section.id);
          }
        });
      }
    };

    // Set active section based on current route
    if (location.pathname !== '/') {
      setActiveSection(location.pathname.substring(1));
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  const handleNavigation = (path) => {
    if (path.startsWith('/#')) {
      // Handle hash navigation
      const sectionId = path.substring(2);
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      // Handle route navigation
      navigate(path);
    }
    setMenuOpen(false);
  };

  return (
    <header className="fixed w-full transition-all duration-300 z-40 bg-transparent shadow-lg border-b border-gray-900 backdrop-blur-2xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14 md:h-16">
        {/* Desktop Navbar */}
        <div className="lg:flex hidden items-center w-full justify-between">
          {/* Logo/Name */}
          <motion.button
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 40,
              damping: 25,
              delay: 1.3,
              duration: 1.5,
            }}
            onClick={() => handleNavigation('/')}
            className="flex items-center space-x-2 group cursor-pointer"
          >
            <div className="border-2 border-[#FF003C] rounded-xl p-2 flex items-center justify-center w-10 h-10">
              <span className="text-white text-xl font-bold">D</span>
            </div>
            <span className="bg-gradient-to-r from-red-800 to-gray-100 bg-clip-text text-transparent text-xl font-bold tracking-widest group-hover:text-white transition-colors">
              DIEGO
            </span>
          </motion.button>
          {/* Nav Links */}
          <motion.div
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 40,
              damping: 25,
              delay: 1.3,
              duration: 1.5,
            }}
            className="flex items-center space-x-8"
          >
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavigation(link.path)}
                className={`uppercase font-normal tracking-widest text-[0.8rem] transition-colors duration-200 px-2 py-1 border-b-2 cursor-pointer ${
                  activeSection === link.path.substring(1) || 
                  (link.path === '/' && location.pathname === '/')
                    ? "text-[#FF003C] border-[#FF003C]"
                    : "text-white border-transparent hover:text-[#FF003C] hover:border-[#FF003C]"
                }`}
              >
                {link.name}
              </button>
            ))}
          </motion.div>
          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 40,
              damping: 25,
              delay: 1.3,
              duration: 1.5,
            }}
            className="flex items-center space-x-4 ml-6"
          >
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#FF003C] transition-colors cursor-pointer"
              >
                <Icon icon={social.icon} className="w-5 h-5" />
              </a>
            ))}
          </motion.div>
        </div>
        {/* Mobile Navbar */}
        <div className="flex lg:hidden items-center w-full justify-between">
          {/* Logo/Name */}
          <button
            onClick={() => handleNavigation('/')}
            className="flex items-center space-x-2 group"
          >
            <div className="border-2 border-[#FF003C] rounded-xl p-2 flex items-center justify-center w-10 h-10">
              <span className="text-white text-xl font-bold cursor-pointer">
                D
              </span>
            </div>
            <span className="bg-gradient-to-r from-red-800 to-gray-100 bg-clip-text text-transparent text-xl font-bold tracking-widest group-hover:text-white transition-colors">
              DIEGO
            </span>
          </button>
          {/* Hamburger */}
          <button
            className="flex items-center justify-center w-10 h-10"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <Icon
              icon={menuOpen ? "mdi:close" : "mdi:menu"}
              className="w-7 h-7 text-white"
            />
          </button>
        </div>
      </div>
      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="lg:hidden bg-black/95 border-t border-gray-900 px-4 pb-4 pt-2">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavigation(link.path)}
                className={`uppercase font-semibold tracking-widest text-base transition-colors duration-200 px-2 py-1 border-b-2 ${
                  activeSection === link.path.substring(1) ||
                  (link.path === '/' && location.pathname === '/')
                    ? "text-[#FF003C] border-[#FF003C]"
                    : "text-white border-transparent hover:text-[#FF003C] hover:border-[#FF003C]"
                }`}
              >
                {link.name}
              </button>
            ))}
            <div className="flex justify-center items-center space-x-4 mt-2">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#FF003C] transition-colors"
                >
                  <Icon icon={social.icon} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
