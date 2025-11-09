// src/components/ProjectCard/ProjectCard.jsx

import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

const LiveIcon = () => <FaExternalLinkAlt className="w-4 h-4" />;
const CodeIcon = () => <FaGithub className="w-4 h-4" />;

const ProjectCard = ({ project }) => {
  const { theme } = useTheme();
  const isLight = theme === "light";

  const { id, title, date, type, description, image, techStack, liveLink, codeLink } = project;

  return (
    <div
      className={`group flex flex-col backdrop-blur-md rounded-[24px] overflow-hidden border transition-all duration-400 ease-in-out cursor-pointer relative 
      hover:-translate-y-2 hover:shadow-2xl
      ${
        isLight
          ? "bg-white border-violet-300/80 hover:border-violet-500 hover:shadow-violet-200/50"
          : "bg-gray-900 border-[#667eea]/30 hover:border-[#2e1065]/60 hover:shadow-[#667eea]/20"
      }`}
    >
      {/* Gradient Top Border */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px]
                   bg-gradient-to-r from-violet-400 via-purple-500 to-pink-500
                   transform scale-x-0 group-hover:scale-x-100 transition-transform duration-400 ease-in-out origin-left"
      ></div>

      {/* Image */}
      <div className="relative h-60 overflow-hidden p-5">
        <img
          src={image}
          alt={title}
          className="w-120 h-65 object-cover transition-transform duration-400 ease-in-out group-hover:scale-[1.08] rounded-t-[24px]"
        />
        <span
          className={`absolute top-4 right-4 px-4 py-2 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider
          ${isLight ? "bg-white/70 text-gray-900" : "bg-black/70 text-white"}`}
        >
          {type}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Title & Date */}
        <div className="flex justify-between items-start mb-2">
          <h3
            className={`text-2xl font-bold leading-tight pr-4 ${
              isLight ? "text-gray-900" : "text-white"
            }`}
          >
            {title}
          </h3>
          <span
            className={`text-xs font-semibold whitespace-nowrap pt-1 ${
              isLight ? "text-gray-500" : "text-gray-600"
            }`}
          >
            {date}
          </span>
        </div>

        {/* Description */}
        <p
          className={`text-sm leading-relaxed mb-5 line-clamp-3 ${
            isLight ? "text-gray-700" : "text-gray-400"
          }`}
        >
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className={`px-3 py-1 border rounded-lg text-xs font-semibold transition-all duration-300 ease-in-out hover:-translate-y-0.5
              ${
                isLight
                  ? "bg-violet-100 border-violet-300/80 text-violet-700 hover:bg-violet-200 hover:border-violet-400"
                  : "bg-[#667eea]/15 border-[#667eea]/30 text-[#a8b3ff] hover:bg-[#667eea]/25 hover:border-[#667eea]/50"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex mt-auto pt-2 gap-3">
          {/* Live Button */}
          {id === 1 && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 flex items-center justify-center p-3 rounded-xl text-sm font-semibold transition-all duration-300 ease-in-out hover:-translate-y-0.5
              ${
                isLight
                  ? "text-white bg-gradient-to-r from-violet-600 to-purple-600 hover:shadow-lg hover:shadow-violet-300/80"
                  : "text-white bg-gradient-to-r from-violet-600 to-purple-600 hover:shadow-lg hover:shadow-[#667eea]/40"
              }`}
            >
              <LiveIcon />
              <span className="ml-2">Live</span>
            </a>
          )}

          {/* Code Button */}
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 flex items-center justify-center p-3 rounded-xl text-sm font-semibold transition-all duration-300 ease-in-out hover:-translate-y-0.5
            ${
              isLight
                ? "text-gray-800 bg-gray-100 border border-violet-300/80 hover:bg-gray-200 hover:border-violet-400"
                : "text-white bg-[#667eea]/15 border border-[#667eea]/30 hover:bg-[#667eea]/25 hover:border-[#667eea]/50"
            }`}
          >
            <CodeIcon />
            <span className="ml-2">Code</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
