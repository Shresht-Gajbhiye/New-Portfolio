// components/Projects.jsx
import React, { useState, useEffect, useRef } from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Shoppe-Ecommerce",

      description:
        "A modern full-stack eCommerce platform with secure authentication, Razorpay payments, product management, order tracking, and an intuitive admin dashboard. Built for scalability, performance, and a seamless shopping experience.",
      tech: ["React.js", "Express.js", "MongoDB", "Node.js"],
      images: [
        "https://res.cloudinary.com/dpvashxyn/image/upload/v1782331946/Screenshot_2026-06-25_013607_t8evfn.png",
        "https://res.cloudinary.com/dpvashxyn/image/upload/v1782332170/Screenshot_2026-06-25_013722_gtk6xf.png",
        "https://res.cloudinary.com/dpvashxyn/image/upload/v1782332230/Screenshot_2026-06-25_013753_uo07zl.png",
        "https://res.cloudinary.com/dpvashxyn/image/upload/v1782332288/Screenshot_2026-06-25_013816_dxzyns.png",
      ],
      liveUrl: "https://shoppe-brown.vercel.app/",
    },
    {
      id: 2,
      title: "Recipe Search",
      description:
        "A Modern Recipe Discovery Application That Allows Users To Search Thousands Of Recipes, Explore Detailed Cooking Instructions, View Ingredients, And Discover New Dishes Through A Clean And Responsive Interface Powered By Real-Time API Data.",
      tech: ["React.js", "JavaScript", "Tailwind CSS", "REST API"],
      images: [
        "https://res.cloudinary.com/dpvashxyn/image/upload/v1782332473/Screenshot_2026-06-25_014724_r3rkkw.png",
        "https://res.cloudinary.com/dpvashxyn/image/upload/v1782332515/Screenshot_2026-06-25_014759_et7izy.png",
      ],
      liveUrl: "https://food-search-omega.vercel.app/",
    },
    {
      id: 3,
      title: "Live TV Streaming",
      description:
        "A Modern Live TV Streaming Platform Built With React.js That Allows Users To Watch Live Channels Through Embedded YouTube Streams, Explore Content Categories, And Enjoy A Smooth And Responsive Viewing Experience Across Devices.",
      tech: ["React.js", "JavaScript", "Tailwind CSS", "Tailwind"],
      images: [
        "https://res.cloudinary.com/dpvashxyn/image/upload/v1782332758/Screenshot_2026-06-25_015154_t7pxcr.png",
        "https://res.cloudinary.com/dpvashxyn/image/upload/v1782332792/Screenshot_2026-06-25_015258_mwzmj7.png",
      ],
      liveUrl: "#",
    },
  ];

  const [activeProject, setActiveProject] = useState(0);
  const [activeImage, setActiveImage] = useState(0);
  const [autoPlayPaused, setAutoPlayPaused] = useState(false);
  const projectTouchStart = useRef(0);
  const imageTouchStart = useRef(0);
  const pauseTimerRef = useRef(null);

  // Auto-play projects (respects pause)
  useEffect(() => {
    if (autoPlayPaused) return;
    const timer = setInterval(() => {
      setActiveProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [activeProject, autoPlayPaused]);

  useEffect(() => {
    setActiveImage(0);
  }, [activeProject]);

  // Pause auto-play for 10 seconds
  const pauseAutoPlay = () => {
    setAutoPlayPaused(true);
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    pauseTimerRef.current = setTimeout(() => {
      setAutoPlayPaused(false);
    }, 10000);
  };

  const nextProject = () => {
    pauseAutoPlay();
    setActiveProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };
  const prevProject = () => {
    pauseAutoPlay();
    setActiveProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextImage = () => {
    pauseAutoPlay();
    setActiveImage((prev) =>
      prev === projects[activeProject].images.length - 1 ? 0 : prev + 1,
    );
  };
  const prevImage = () => {
    pauseAutoPlay();
    setActiveImage((prev) =>
      prev === 0 ? projects[activeProject].images.length - 1 : prev - 1,
    );
  };

  const handleProjectSwipe = (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = projectTouchStart.current - endX;
    if (diff > 40) nextProject();
    else if (diff < -40) prevProject();
  };

  const handleImageSwipe = (e) => {
    e.stopPropagation();
    const endX = e.changedTouches[0].clientX;
    const diff = imageTouchStart.current - endX;
    if (diff > 40) nextImage();
    else if (diff < -40) prevImage();
  };

  const currentProject = projects[activeProject];

  return (
    <section id="projects" className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.2em] text-blue-400 uppercase mb-3">
            My Work
          </h2>
          <h3 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Featured{" "}
            <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">
              Projects
            </span>
          </h3>
          <div className="w-24 h-1.5 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>

        <div
          className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden"
          onTouchStart={(e) =>
            (projectTouchStart.current = e.touches[0].clientX)
          }
          onTouchEnd={handleProjectSwipe}
        >
          <div className="flex flex-col md:flex-row">
            {/* Image Section */}
            <div
              className="relative w-full md:w-1/2 h-64 md:h-96 overflow-hidden group"
              onTouchStart={(e) => {
                e.stopPropagation();
                imageTouchStart.current = e.touches[0].clientX;
              }}
              onTouchEnd={handleImageSwipe}
            >
              <img
                key={`${activeProject}-${activeImage}`}
                src={currentProject.images[activeImage]}
                alt={currentProject.title}
                className="w-full h-full object-contain transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

              {/* Image Navigation Arrows */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full opacity-0 group-hover:opacity-100 transition-all"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full opacity-0 group-hover:opacity-100 transition-all"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Image dots */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {currentProject.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveImage(i);
                      pauseAutoPlay();
                    }}
                    className={`h-2 rounded-full transition-all ${activeImage === i ? "w-6 bg-blue-500" : "w-2 bg-white/50"}`}
                  />
                ))}
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <div key={activeProject} className="animate-slide-up">
                <h4 className="text-3xl font-bold text-white mb-4">
                  {currentProject.title}
                </h4>
                <p className="text-slate-300 mb-8">
                  {currentProject.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-10">
                  {currentProject.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-1.5 text-sm text-blue-300 bg-blue-500/10 border border-blue-500/20 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={currentProject.liveUrl}
                  onClick={(e) => e.stopPropagation()}
                  className="inline-block w-full md:w-auto text-center px-8 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-xl transition-all hover:-translate-y-1"
                >
                  🚀 View Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project Navigation */}
        <div className="flex justify-center items-center gap-4 mt-10">
          <button
            onClick={prevProject}
            className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all"
          >
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div className="flex gap-3">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setActiveProject(i);
                  pauseAutoPlay();
                }}
                className={`h-2.5 rounded-full transition-all ${activeProject === i ? "w-10 bg-gradient-to-r from-blue-500 to-purple-500" : "w-2.5 bg-slate-700 hover:bg-slate-500"}`}
              />
            ))}
          </div>

          <button
            onClick={nextProject}
            className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all"
          >
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
