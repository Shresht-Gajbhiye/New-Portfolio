// components/Skills.jsx
import React from "react";

const Skills = () => {
  // Skills data array
  const skillCategories = [
    {
      title: "Frontend Architecture",
      icon: "🎨",
      skills: [
        {
          name: "React.js",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        },
        {
          name: "Redux",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
        },
        {
          name: "Tailwind CSS",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        },
        {
          name: "HTML5",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
        },
      ],
    },
    {
      title: "Backend Engineering",
      icon: "⚙️",
      skills: [
        {
          name: "Node.js",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "Express.js",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
        },
        {
          name: "REST APIs",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
        },
        {
          name: "JavaScript",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        },
      ],
    },
    {
      title: "Database & Cloud",
      icon: "🗄️",
      skills: [
        {
          name: "MongoDB",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
        },
        {
          name: "Mongoose",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg",
        },
        {
          name: "Cloudinary",
          logo: "https://cdn.worldvectorlogo.com/logos/cloudinary-2.svg",
        },
      ],
    },
    {
      title: "Tools & Deployment",
      icon: "🛠️",
      skills: [
        {
          name: "Git",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
        },
        {
          name: "GitHub",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
        },
        {
          name: "VS Code",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
        },
        {
          name: "Vercel",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
        },
        {
          name: "Render",
          logo: "https://cdn.simpleicons.org/render",
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 relative overflow-hidden bg-slate-950"
    >
      {/* Background Glowing Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-scale">
          <h2 className="text-sm font-extrabold tracking-[0.2em] text-blue-400 uppercase mb-3 drop-shadow-md">
            Technical Arsenal
          </h2>
          <h3 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Skills &{" "}
            <span className="text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text drop-shadow-sm">
              Technologies
            </span>
          </h3>
          <div className="w-24 h-1.5 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="relative bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.2)] group overflow-hidden"
            >
              {/* Subtle hover gradient inside card */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              {/* Category Title - Added justify-center */}
              <div className="flex items-center justify-center gap-4 mb-8 relative z-10 text-center">
                <div className="w-12 h-12 flex shrink-0 items-center justify-center rounded-2xl bg-white/5 border border-white/10 shadow-inner text-2xl group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h4 className="text-2xl font-bold text-slate-100 tracking-wide group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-200 group-hover:to-purple-200 group-hover:bg-clip-text transition-all duration-300">
                  {category.title}
                </h4>
              </div>

              {/* Skill Pills - Added justify-center */}
              <div className="flex flex-wrap justify-center gap-4 relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-3 px-5 py-3 bg-slate-900/60 rounded-xl border border-white/5 hover:border-blue-500/50 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 hover:-translate-y-1 hover:shadow-[0_8px_16px_-6px_rgba(59,130,246,0.3)] transition-all duration-300 cursor-default group/skill"
                  >
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-7 h-7 sm:w-8 sm:h-8 group-hover/skill:scale-110 group-hover/skill:rotate-3 transition-all duration-300 drop-shadow-md shrink-0"
                      style={
                        skill.name === "GitHub" ||
                        skill.name === "Vercel" ||
                        skill.name === "Express.js"
                          ? {
                              filter:
                                "invert(1) drop-shadow(0 0 2px rgba(255,255,255,0.3))",
                            }
                          : {}
                      }
                    />
                    <span className="text-sm sm:text-base font-semibold text-slate-300 group-hover/skill:text-white transition-colors duration-300 tracking-wide whitespace-nowrap">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
