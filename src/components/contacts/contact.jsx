import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

function ContactPage() {
  const contactInfo = [
    {
      icon: "mdi:email",
      label: "Email",
      value: "diegomwesigwa278@gmail.com",
      link: "mailto:diegomwesigwa278@gmail.com",
      description: "Professional inquiries & collaborations"
    },
    {
      icon: "mdi:instagram",
      label: "Instagram",
      value: "@diego_thedarkknight",
      link: "https://www.instagram.com/diego_thedarkknight/",
      description: "Behind the scenes & daily updates"
    },
    {
      icon: "mdi:twitter",
      label: "X (Twitter)",
      value: "@DiegoMwesigwa",
      link: "https://twitter.com/DiegoMwesigwa",
      description: "Thoughts & industry insights"
    },
    {
      icon: "mdi:tiktok",
      label: "TikTok",
      value: "@diego.thedark.knight",
      link: "https://www.tiktok.com/@diego.thedark.knight",
      description: "Creative content & performances"
    },
    {
      icon: "mdi:linkedin",
      label: "LinkedIn",
      value: "Diego Mwesigwa",
      link: "https://www.linkedin.com/in/diego-mwesigwa-8a4bb6108/",
      description: "Professional network & legal services"
    }
  ];

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-[#e1e1dd] mb-6">
            Let's Connect
          </h1>
          <p className="text-lg md:text-xl text-[#71716f] max-w-3xl mx-auto leading-relaxed">
            Whether you're looking for legal counsel, creative collaboration, or simply want to connect, 
            I'm here to help bring your vision to life.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <motion.a
              key={info.label}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30 hover:border-indigo-500/40 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <Icon 
                  icon={info.icon} 
                  className="text-5xl text-indigo-400 mb-4 group-hover:text-indigo-300 transition-colors duration-300" 
                />
                <h3 className="text-2xl font-semibold text-[#e1e1dd] mb-2">
                  {info.label}
                </h3>
                <p className="text-[#bcbcb8] mb-3 font-medium">
                  {info.value}
                </p>
                <p className="text-sm text-[#71716f] leading-relaxed">
                  {info.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Business Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-700/30 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-light text-[#e1e1dd] mb-6">
            Business Hours
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-medium text-indigo-400 mb-3">Legal Consultations</h3>
              <p className="text-[#bcbcb8] leading-relaxed">
                Monday - Friday<br />
                9:00 AM - 5:00 PM EAT
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-indigo-400 mb-3">Creative Projects</h3>
              <p className="text-[#bcbcb8] leading-relaxed">
                Flexible scheduling<br />
                Available for bookings
              </p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-[#71716f] mb-8">
            Ready to start a conversation?
          </p>
          <motion.a
            href="mailto:diegomwesigwa278@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-transparent border-2 border-[#e1e1dd] text-[#e1e1dd] px-8 py-4 rounded-lg text-lg font-medium hover:bg-[#e1e1dd] hover:text-[#090A17] transition-all duration-300"
          >
            <Icon icon="mdi:email" className="text-xl" />
            Send Email
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactPage;
