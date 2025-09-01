import React from "react";
import { Icon } from "@iconify/react";

function HomePage() {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center w-full h-screen overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black text-white"
    >
      {/* Glowing radial background */}
      <div className="absolute inset-0 z-0">
        <div className="w-[200%] h-[200%] animate-pulse-fast bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent opacity-40 blur-3xl" />
      </div>

      {/* Hero Content */}
      <div className="z-10 px-4 text-center max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-500 to-blue-500 animate-glow">
          Diego Mwesigwa
        </h1>
        <p className="mt-3 text-lg md:text-xl text-slate-300 font-medium">
          Poet · Actor · Writer · Entertainment Lawyer
        </p>
        <p className="mt-4 text-base md:text-lg text-slate-400 max-w-2xl mx-auto">
          Also known as <span className="text-indigo-400 font-semibold">Diego the Dark Knight</span> — an award-winning creative force blending performance and law to amplify stories, justice, and identity across Uganda and beyond.
        </p>

        {/* Optional Call-to-Action */}
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#contact"
            className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 transition rounded-full text-white font-medium shadow-md"
          >
            Collaborate
          </a>
          <a
            href="#about"
            className="px-6 py-2 border border-indigo-400 hover:bg-indigo-800 transition rounded-full text-indigo-300 font-medium"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 text-indigo-400 text-center animate-bounce">
        <p className="text-sm mb-1 uppercase tracking-wider">Scroll Down</p>
        <Icon icon="line-md:arrow-down" className="w-6 h-6 mx-auto animate-pulse" />
      </div>
    </section>
  );
}

export default HomePage;
