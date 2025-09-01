import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

function AboutPage() {
  const navigate = useNavigate();
  
  const pageVariants = {
    initial: { opacity: 0, y: 50 },
    in: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
    out: { opacity: 0, y: -50, transition: { duration: 0.5, ease: "easeIn" } },
  };

  const personalities = [
    {
      title: "The Lawyer",
      description:
        "Distinguished Entertainment Law specialist with a Master's from the University of Westminster.",
      path: "/lawyer",
      icon: "mdi:scale-balance",
      color: "indigo",
    },
    {
      title: "The Actor",
      description:
        "A versatile actor with a decade of experience in Ugandan television and theater.",
      path: "/actor",
      icon: "mdi:drama-masks",
      color: "purple",
    },
    {
      title: "The Poet",
      description:
        "Award-winning spoken-word artist whose powerful performances have captivated audiences.",
      path: "/poet",
      icon: "mdi:feather",
      color: "fuchsia",
    },
  ];

  const education = [
    {
      icon: "mdi:school",
      degree: "Master's Degree in Entertainment Law",
      place: "University of Westminster",
    },
    {
      icon: "mdi:certificate",
      degree: "Postgraduate Diploma in Law",
      place: "Makerere Law Development Centre",
    },
    {
      icon: "mdi:book-education",
      degree: "Bachelor's Degree in Law",
      place: "Makerere University",
    },
  ];

  return (
    <motion.section
      id="about"
      className="relative z-10 py-16 px-4 sm:px-6 lg:px-16 mx-auto bg-gradient-to-br from-gray-900/80 via-black/80 to-gray-900/80 backdrop-blur-md shadow-2xl"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-fuchsia-500 bg-clip-text animate-glow">
        About Diego
      </h1>

      {/* Personalities */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {personalities.map((item) => (
          <motion.div
            key={item.title}
            whileHover={{ y: -8, scale: 1.03 }}
            className={`rounded-2xl p-7 bg-black/40 shadow-xl border border-${item.color}-500/40 backdrop-blur-md transition flex flex-col items-center`}
          >
            <Icon icon={item.icon} className={`text-5xl mb-4 text-${item.color}-300`} />
            <h2 className={`text-xl font-bold mb-2 text-${item.color}-200`}>{item.title}</h2>
            <p className="text-gray-300 mb-6 text-center">{item.description}</p>
            <button
              onClick={() => navigate(item.path)}
              className={`px-5 py-2 rounded-md font-medium bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 text-white hover:from-fuchsia-500 hover:to-indigo-500 transition cursor-pointer`}
            >
              Learn More
            </button>
          </motion.div>
        ))}
      </div>

      {/* Education */}
      <div className="mb-16">
        <h2 className="text-3xl font-semibold text-center mb-8 text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-fuchsia-500 bg-clip-text">
          Education & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {education.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-gradient-to-br from-indigo-900/60 to-purple-900/30 rounded-xl p-7 shadow-lg border border-indigo-500/40 backdrop-blur-md"
            >
              <Icon icon={item.icon} className="text-4xl mb-3 text-indigo-300" />
              <div className="text-lg text-indigo-100 font-semibold mb-1 text-center">
                {item.degree}
              </div>
              <div className="text-indigo-400 text-sm text-center">
                {item.place}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Professional Journey */}
      <div className="bg-black/40 p-8 rounded-2xl shadow-xl border border-indigo-700/40 backdrop-blur-md mt-12">
        <h2 className="text-3xl font-semibold text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-fuchsia-500 bg-clip-text mb-6">
          Professional Journey
        </h2>
        <p className="text-lg text-gray-300 mb-4 leading-relaxed">
          Diego Donald Mwesigwa, known by his stage name{" "}
          <span className="text-indigo-300 font-medium">
            Diego the Dark Knight
          </span>
          , is an award-winning poet, actor, writer, and entertainment lawyer.
          His unique combination of creative and legal expertise has made him a
          standout figure in Uganda's entertainment scene.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed">
          Currently a partner at{" "}
          <a
            href="http://aldexpartnersug.com/"
            className="underline text-indigo-400 hover:text-fuchsia-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            ALDEX Partners
          </a>
          , Diego continues to provide top-tier legal support for creatives
          while performing and creating across poetry, acting, and advocacy.
        </p>
      </div>
    </motion.section>
  );
}

export default AboutPage;
