import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

function ContactPage() {
  const pageVariants = {
    initial: { opacity: 0, y: 50 },
    in: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
    out: { opacity: 0, y: -50, transition: { duration: 0.5, ease: "easeIn" } },
  };

  const contactInfo = [
    {
      icon: "mdi:email",
      label: "Email",
      value: "diegomwesigwa278@gmail.com",
      link: "mailto:diegomwesigwa278@gmail.com",
      accent: "indigo"
    },
    {
      icon: "mdi:instagram",
      label: "Instagram",
      value: "@diego_thedarkknight",
      link: "https://www.instagram.com/diego_thedarkknight/",
      accent: "purple"
    },
    {
      icon: "mdi:twitter",
      label: "X (Twitter)",
      value: "@DiegoMwesigwa",
      link: "https://twitter.com/DiegoMwesigwa",
      accent: "fuchsia"
    },
    {
      icon: "mdi:tiktok",
      label: "TikTok",
      value: "@diego.thedark.knight",
      link: "https://www.tiktok.com/@diego.thedark.knight",
      accent: "indigo"
    },
    {
      icon: "mdi:linkedin",
      label: "LinkedIn",
      value: "Diego Mwesigwa",
      link: "https://www.linkedin.com/in/diego-mwesigwa-8a4bb6108/",
      accent: "purple"
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section
      id='contact'
      className="container mx-auto p-8 bg-black/40 backdrop-blur-md rounded-2xl shadow-2xl text-center"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-fuchsia-500 bg-clip-text animate-glow">
        Get in Touch
      </h1>
      <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
        For collaborations, bookings, or legal inquiries, feel free to reach out through any of the following channels.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {contactInfo.map((info) => (
          <motion.div
            key={info.label}
            className={`rounded-xl p-6 bg-gradient-to-br from-black/60 to-${info.accent}-900/30 shadow-xl border border-${info.accent}-500/40 backdrop-blur-md flex flex-col items-center`}
            whileHover={{ translateY: -5, scale: 1.03 }}
          >
            <Icon icon={info.icon} className={`text-4xl mb-4 text-${info.accent}-300`} />
            <h2 className={`text-2xl font-semibold text-${info.accent}-200 mb-3`}>{info.label}</h2>
            <a
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-block text-gray-300 hover:text-${info.accent}-400 transition-colors font-medium`}
            >
              {info.value}
            </a>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 bg-black/40 p-8 rounded-xl backdrop-blur-md border border-indigo-700/40">
        <h2 className="text-2xl font-semibold text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-fuchsia-500 bg-clip-text mb-4">
          Business Hours
        </h2>
        <p className="text-gray-300">
          Available for consultations and bookings Monday through Friday, 9:00 AM - 5:00 PM EAT
        </p>
      </div>

      <div className="mt-8 flex justify-center space-x-4">
        <button
          onClick={() => scrollToSection('home')}
          className="bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 text-white px-6 py-2 rounded-md hover:from-fuchsia-500 hover:to-indigo-500 transition-colors font-medium"
        >
          Back to Top
        </button>
      </div>
    </motion.section>
  );
}

export default ContactPage;
