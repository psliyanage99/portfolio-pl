// src/sections/Education/Education.jsx

import React, { useState } from "react";
import EducationCard from "../../components/EducationCard/EducationCard";
import { educationData } from "../../data/data";
import MoreEducationdetails from "../MoreEducationdetails/MoreEducationdetails";
import { useTheme } from "../../context/ThemeContext";

const Education = () => {
  const { theme } = useTheme();
  const isLight = theme === "light";

  const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedEducation, setSelectedEducation] = useState(null);
  
    const openModal = (education) => {
      setSelectedEducation(education);
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
      setSelectedEducation(null);
  }

  const sectionBg = isLight
    ? "bg-gray-50 text-gray-900"
    : "bg-[#010412] text-white";

  const headingText = isLight ? "text-gray-900" : "text-gray-300";
  const subText = isLight ? "text-gray-700" : "text-gray-300";

  return (
    <section
      id="education"
      className={`education-background relative min-h-screen py-20 px-6  transition-colors duration-500 ${sectionBg}`}
    >
      <div className="container mx-auto max-w-8xl relative z-10  md:px-8 lg:px-8   md:py-16 lg:py-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className={`text-4xl font-bold capitalize ${headingText}`}>
            Education
          </h1>
          <p className={`text-xl mt-4 ${subText}`}>
            My academic journey and achievements
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 md:mt-5 lg:mt-4">
          {educationData.map((item) => (
            <EducationCard 
              key={item.id} {...item}
              onViewDetails={() => openModal(item)}
              />
          ))}
        </div>
      </div>

      <MoreEducationdetails 
        isOpen={isModalOpen}
        onClose={closeModal}
        education={selectedEducation}
      />
    </section>
  );
};

export default Education;
