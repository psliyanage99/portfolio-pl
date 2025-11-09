// src/components/TimelineItem/TimelineItem.jsx
import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { FaBriefcase } from 'react-icons/fa';

const TimelineItem = ({
  jobTitle,
  companyName,
  dateRange,
  description,
  technologies,
  isLeftAligned,
  index,
  type,
  onViewDetails,
}) => {
  const { theme } = useTheme(); 
  const isLight = theme === 'light';

  const animationDelay = `${index * 0.3}s`;

  const badgeColor =
    type === 'CURRENT'
      ? isLight
        ? 'bg-red-500 text-white'
        : 'bg-red-700/70 text-red-300'
      : isLight
      ? 'bg-gray-300 text-gray-800'
      : 'bg-gray-700 text-gray-400';

  return (
    <div className={`flex w-full justify-center md:${isLeftAligned ? 'justify-start' : 'justify-end'}`}>
      <div
        className={`md:group md:relative w-full max-w-sm md:max-w-md rounded-2xl p-6 shadow-lg backdrop-blur-sm
          ${isLight ? 'bg-white border-1 border-[#667eea]/30 shadow-gray-700/50' : 'bg-gray-900'}
          ${isLeftAligned ? 'md:mr-12' : 'md:ml-12'}
          opacity-0 animate-fade-scale-in
          hover:shadow-2xl hover:scale-105
          transition-all duration-500 ease-out`}
        style={{
          animationDelay,
          animationFillMode: 'forwards',
        }}
      >
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div
            className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-violet-600 to-purple-600 rounded-lg flex items-center justify-center text-white shadow-lg"
          >
            <FaBriefcase className="w-6 h-6 text-violet-300" />
          </div>

          <span
            className={`text-xs font-bold uppercase px-3 py-1 rounded-full tracking-widest ${badgeColor}`}
          >
            {type}
          </span>
        </div>

        <h3
          className="text-lg font-bold mb-1 text-center md:text-left"
          style={{ color: '#6b6fda' }}
        >
          {jobTitle}
        </h3>

        <p
          className={`font-medium text-sm mb-2 text-center md:text-left ${
            isLight ? 'text-gray-700' : 'text-gray-300'
          }`}
        >
          {companyName}
        </p>

        <div className="mb-3 text-center md:text-left">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-white text-xs font-semibold animate-pulse-glow"
            style={{
              background: 'linear-gradient(135deg, #6b6fda 0%, #8b7fd9 100%)',
              animationDelay: `${parseFloat(animationDelay) + 0.2}s`,
            }}
          >
            {dateRange}
          </span>
        </div>

        <p
          className={`text-sm leading-relaxed mb-4 text-center md:text-left ${
            isLight ? 'text-gray-600' : 'text-gray-400'
          }`}
        >
          {description}
        </p>

        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
          {technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 cursor-default opacity-0 animate-fade-in-up ${
                isLight ? 'bg-gray-200 text-gray-800' : 'bg-gray-700 text-gray-200'
              }`}
              style={{
                animationDelay: `${parseFloat(animationDelay) + 0.3 + techIndex * 0.1}s`,
                animationFillMode: 'forwards',
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6">
          <button
            onClick={onViewDetails}
            className="text-indigo-600 hover:text-indigo-700 font-semibold text-sm transition duration-150 flex items-center focus:outline-none cursor-pointer"
          >
            More Details <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
