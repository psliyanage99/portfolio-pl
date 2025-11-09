// src/sections/Work/Work.jsx
import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import './Work.css';
import TimelineItem from '../TimelineItem/TimelineItem';
import { experienceData } from '../../data/data';
import MoreWorkdetails from '../MoreWorkdetails/MoreWorkdetails';

const Work = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);

  const openModal = (experience) => {
    setSelectedExperience(experience);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedExperience(null);
  };

  return (
    <section
      id="work"
      className={`bg-[#010412] py-16 px-4 min-h-screen overflow-hidden relative ${
        isLight ? 'bg-gray-50' : ''
      }`}
    >
      <div className="text-center mb-20 animate-fade-in-down">
        <h2
          className={`text-4xl font-bold text-center capitalize ${
            isLight ? 'text-gray-900' : 'text-gray-300'
          }`}
        >
          Experience
        </h2>
        <p className={`text-xl mt-4 ${isLight ? 'text-gray-700' : 'text-gray-300'}`}>
          My professional journey and achievements
        </p>
      </div>

      <div className="relative container mx-auto max-w-5xl">
        {/* 1. Vertical Timeline Line */}
        <div
          className={`absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-0.5 
                     hidden md:block /* 🚀 FIX: Hidden on mobile, visible from md breakpoint */
                     animate-line-draw origin-top ${
            isLight ? 'bg-gray-400' : 'bg-white/60'
          }`}
          style={{ animationDuration: '2s' }}
        ></div>

        <div className="space-y-12 md:space-y-20 relative">
          {experienceData.map((item, index) => {
            const isLeftAligned = index % 2 === 0;
            return (
              <div key={index} className="relative">
                {/* 2. Timeline Dot */}
                <div
                  className="absolute left-1/2 top-1/2 md:top-12 transform -translate-x-1/2 -translate-y-1/2 z-30 
                             hidden md:flex /* 🚀 FIX: Hidden on mobile, visible from md breakpoint */
                             items-center justify-center"
                >
                  <div
                    className="relative w-4 h-4 rounded-full bg-violet-900 shadow-lg animate-dot-pop opacity-0"
                    style={{
                      animationDelay: `${index * 0.3 + 0.2}s`,
                      animationFillMode: 'forwards',
                    }}
                  >
                    <span className="absolute inset-0 rounded-full bg-white/50 animate-pulse-ring"></span>
                  </div>
                </div>

                <TimelineItem
                  {...item}
                  isLeftAligned={isLeftAligned}
                  index={index}
                  type={item.type || (index === 0 ? 'CURRENT' : 'PAST')}
                  onViewDetails={() => openModal(item)}
                />
              </div>
            );
          })}
        </div>
      </div>

      <MoreWorkdetails
        isOpen={isModalOpen}
        onClose={closeModal}
        experience={selectedExperience}
      />
    </section>
  );
};

export default Work;