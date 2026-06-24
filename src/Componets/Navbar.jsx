// components/Navbar.jsx
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLetsTalk = () => {
    const email = "shresht88@gmail.com";
    const subject = "Let's Talk - Portfolio Inquiry";
    const body = `Hi Shresht,\n\nI would like to connect with you regarding your Work.`;

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 bg-transparent backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent tracking-tight">
          Shresht Gajbhiye
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/80">
          <a href="#home" className="hover:text-purple-600 transition">
            Home
          </a>
          <a href="#skills" className="hover:text-purple-600 transition">
            Skills
          </a>
          <a href="#projects" className="hover:text-purple-600 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-purple-600 transition">
            Contact
          </a>
          <button
            onClick={handleLetsTalk}
            className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm font-semibold shadow-md hover:shadow-lg transition"
          >
            Let's Talk
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl text-white/45 focus:outline-none transition-transform duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Icon me bhi slight rotation effect add kar sakte hain */}
          <div
            className={`transform transition-transform duration-300 ${isOpen ? "rotate-90" : "rotate-0"}`}
          >
            {isOpen ? "✕" : "☰"}
          </div>
        </button>
      </div>

      {/* Mobile Menu with Smooth Transition */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[400px] opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-6 space-y-4 text-center text-sm font-medium text-gray-700">
          <a
            href="#home"
            className="block hover:text-purple-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#skills"
            className="block hover:text-purple-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Skills
          </a>
          <a
            href="#projects"
            className="block hover:text-purple-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block hover:text-purple-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
          <button
            onClick={() => {
              handleLetsTalk();
              setIsOpen(false);
            }}
            className="w-full py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold shadow-md active:scale-95 transition-all"
          >
            Let's Talk
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
