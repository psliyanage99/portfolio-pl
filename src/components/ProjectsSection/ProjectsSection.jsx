import React, { useState, useMemo } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { PROJECTS, CATEGORIES } from "../../data/data";
import { useTheme } from "../../context/ThemeContext";

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const { theme } = useTheme();
  const isLight = theme === "light";

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return PROJECTS;
    return PROJECTS.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section
      id="projects"
      className={`py-20 px-6 min-h-screen transition-colors duration-500 ${
        isLight ? "bg-gray-50 text-gray-900" : "bg-[#010412] text-white"
      }`}
    >
      <div className="container mx-auto max-w-8xl relative z-10 px-6 md:px-8 lg:px-8 md:py-16 lg:py-12">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1
            className={`text-4xl font-bold capitalize ${
              isLight ? "text-gray-900" : "text-gray-300"
            }`}
          >
            Projects
          </h1>
          <p
            className={`text-xl mt-4 ${
              isLight ? "text-gray-700" : "text-gray-300"
            }`}
          >
            Bringing ideas to life through code and creativity
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          {CATEGORIES.map((category) => {
            const isActive = activeFilter === category.filter;
            return (
              <button
                key={category.filter}
                onClick={() => setActiveFilter(category.filter)}
                className={`relative px-7 py-3 rounded-full text-sm font-semibold cursor-pointer border transition-all duration-300 ease-in-out z-10 overflow-hidden
                  ${
                    isActive
                      ? isLight
                        ? "text-white bg-gradient-to-r from-violet-600 to-purple-600 border-violet-700"
                        : "text-white bg-gradient-to-r from-violet-600 to-purple-600 border-[#2e1065]"
                      : isLight
                      ? "text-gray-700 border-[#333] hover:text-violet-800 hover:border-violet-500"
                      : "text-gray-400 border-[#333] hover:text-white hover:border-[#2e1065]"
                  }`}
              >
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}

          {filteredProjects.length === 0 && (
            <div className="lg:col-span-3 text-center py-10">
              <p className={isLight ? "text-gray-700" : "text-gray-500"}>
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
