// components/HeroPage.jsx
import React from "react";
import MyPhoto from "../../assets/MyPhoto.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 pt-20 pb-10 relative z-10"
    >
      {/* Main Responsive Container */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="order-1 lg:order-2 relative animate-fade-scale">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-2xl opacity-30 animate-pulse-slow"></div>

          <div className="relative p-1 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 animate-pulse-glow shadow-[0_0_60px_rgba(59,130,246,0.5)] hover:shadow-[0_0_80px_rgba(139,92,246,0.7)] transition-shadow duration-700 ease-in-out">
            <div className="bg-slate-900 rounded-full p-1.5">
              <img
                src={MyPhoto}
                alt="Shresht Gajbhiye"
                className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-slate-900 shadow-inner"
              />
            </div>
          </div>
        </div>

        <div className="order-2 lg:order-1 text-center lg:text-left max-w-2xl">
          {/* Premium Badge */}
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md animate-fade-scale">
            <span className="text-xs font-medium text-blue-400 tracking-widest uppercase">
              🚀 Open to New Opportunities
            </span>
          </div>

          {/* Greeting */}
          <h2 className="text-xl md:text-2xl text-slate-300 mb-2 font-light animate-fade-scale">
            Hi, I'm{" "}
            <span className="text-white font-semibold">Shresht Gajbhiye</span>{" "}
            👋
          </h2>

          {/* Animated Gradient Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-[length:200%_auto] text-transparent bg-clip-text pb-2 leading-tight animate-gradient">
            Full Stack Engineer
          </h1>

          {/* Underline (Desktop: Left, Mobile: Center) */}
          <div className="w-24 h-1.5 mb-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto lg:mx-0 animate-pulse-slow"></div>

          <p className="text-base md:text-lg text-slate-300 mb-10 leading-relaxed font-light animate-fade-scale">
            Crafting <span className="text-white font-medium">scalable</span>{" "}
            and high-performance applications with the MERN Stack. Transforming
            complex challenges into elegant,{" "}
            <span className="text-blue-400">user-centric solutions</span>.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-fade-scale">
            <a
              href="/Resume_MERN.pdf"
              target="_blank"
              className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all duration-300 shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2"
            >
              <span>Download Resume</span>
            </a>
            <a
              href="#projects"
              className="w-full sm:w-auto px-8 py-3 border border-slate-600 hover:border-blue-400 text-white rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>View My Work</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
