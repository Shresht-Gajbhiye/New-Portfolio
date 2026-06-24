// components/Footer.jsx

import React from "react";
import { FaGithub, FaLinkedinIn, FaEnvelope, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-slate-950">
      {/* Glow Effects */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <h2 className="text-4xl font-extrabold">
            <span className="text-white">SG</span>
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              .
            </span>
          </h2>

          <p className="mt-4 max-w-md text-slate-400">
            Building modern, scalable and high-performance web applications.
          </p>

          {/* Navigation */}
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            <a
              href="#home"
              className="text-slate-400 transition hover:text-blue-400"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-slate-400 transition hover:text-blue-400"
            >
              About
            </a>

            <a
              href="#skills"
              className="text-slate-400 transition hover:text-blue-400"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="text-slate-400 transition hover:text-blue-400"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="text-slate-400 transition hover:text-blue-400"
            >
              Contact
            </a>
          </div>

          {/* Social Icons */}
          <div className="mt-8 flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/shresht-gajbhiye/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:text-blue-400"
            >
              <FaLinkedinIn size={18} />
            </a>

            <a
              href="mailto:shresht88@gmail.com"
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-purple-400 hover:text-purple-400"
            >
              <FaEnvelope size={18} />
            </a>
          </div>

          {/* Divider */}
          <div className="my-10 h-px w-full max-w-3xl bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* Copyright */}
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Shresht Gajbhiye. All Rights Reserved.
          </p>

          {/* Back To Top */}
          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="mt-6 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transition-all duration-300 hover:scale-110"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
