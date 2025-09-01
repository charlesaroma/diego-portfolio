import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialLinks = [
    { 
      icon: "mdi:instagram", 
      href: "https://www.instagram.com/diego_thedarkknight/", 
      label: "Instagram",
      color: "#E4405F"
    },
    { 
      icon: "mdi:tiktok", 
      href: "#", 
      label: "TikTok",
      color: "#000000"
    },
    { 
      icon: "mdi:twitter", 
      href: "https://twitter.com/DiegoMwesigwa", 
      label: "X",
      color: "#000000"
    },
    { 
      icon: "mdi:facebook", 
      href: "#", 
      label: "Facebook",
      color: "#1877F2"
    },
    { 
      icon: "mdi:email", 
      href: "mailto:contact@diegomwesigwa.com", 
      label: "Email",
      color: "#EA4335"
    },
  ];

  const footerLinks = [
    {
      title: "Navigation",
      links: [
        { label: "Home", path: "/" },
        { label: "Portfolio", path: "/portfolio" },
        { label: "Gallery", path: "/gallery" },
        { label: "Contact", path: "/contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", path: "/privacy" },
        { label: "Terms of Service", path: "/terms" },
      ],
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-transparent border-t border-[#71716f]/20">
      {/* Decorative gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#090A17]/80 opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h2 className="text-3xl font-bold text-[#e1e1dd] mb-4">Diego Mwesigwa</h2>
            <p className="text-[#bcbcb8] mb-6 max-w-md">
              Also known as Diego the Dark Knight — an award-winning creative force blending 
              performance and law to amplify stories, justice, and identity across Uganda and beyond.
            </p>
          </motion.div>

          {/* Quick Links */}
          {footerLinks.map((section, index) => (
            <motion.div 
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-[#e1e1dd] font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link 
                      to={link.path}
                      className="text-[#bcbcb8] hover:text-[#e1e1dd] transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Social Links */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex gap-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-10 h-10 rounded-full bg-[#090A17]/50 flex items-center justify-center
                    border border-[#e1e1dd]/20 transition-all duration-300
                    group-hover:border-[#e1e1dd]/50 group-hover:bg-[#090A17]"
                  >
                    <Icon 
                      icon={social.icon}
                      className="w-5 h-5 text-[#e1e1dd] transition-colors duration-300 group-hover:text-[#bcbcb8]"
                    />
                  </div>
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-[#bcbcb8] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {social.label}
                  </span>
                </motion.a>
              ))}
            </div>
            
            <p className="text-[#71716f] text-sm">
              &copy; {new Date().getFullYear()} Diego Mwesigwa. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
