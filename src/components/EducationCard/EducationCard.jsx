// src/components/EducationCard/EducationCard.jsx

import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaChevronRight } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

const EducationCard = ({
  institution,
  degree,
  dateRange,
  location,
  description,
  status,
  icon,
  onViewDetails
}) => {
  const { theme } = useTheme();
  const isLight = theme === "light";

  // ✅ Badge gradient configuration
  const statusConfig =
    status === "Ongoing"
      ? {
          badgeStyle: isLight
            ? { background: "linear-gradient(135deg, #f5576c 0%, #ff8597 100%)" }
            : { background: "linear-gradient(135deg, #4c1d95 0%, #f5576c 100%)" },
          badgeText: "Ongoing",
        }
      : {
          badgeStyle: isLight
            ? { background: "linear-gradient(135deg, #7c3aed 50%, #9333ea 80%)" }
            : { background: "linear-gradient(135deg, #7c3aed 50%, #9333ea 80%)" },
          badgeText: "Completed",
        };

  return (
    <div
      className={`group relative backdrop-blur-md rounded-3xl p-6 md:p-8 border transition-all duration-500 ease-out cursor-pointer 
        hover:scale-[1.02] hover:shadow-2xl hover:-translate-y-1 
        ${
          isLight
            ? "bg-white border-[#667eea]/30 drop-shadow-lg/30 shadow-gray-600 hover:bg-gray-100"
            : "bg-gray-900 border-[#667eea]/30 drop-shadow-lg/30 shadow-gray-600 hover:bg-gray-700 hover:shadow-[#667eea]/20"
        }
        /* 🚀 FIX 1: Make the card a Flex container to enable bottom alignment */
        flex flex-col h-full 
        `}
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-5">
        {/* Icon */}
        <div
          className={`w-15 h-15 rounded-xl flex items-center justify-center text-3xl shadow-lg border-2
            ${
              isLight ? "bg-gray-100 border-violet-300/80" : "bg-gray-900 border-[#667eea]/30"
            }`}
          style={{ boxShadow: "0 10px 30px rgba(75, 85, 99, 0.4)" }}
        >
          <span className={`${isLight ? "text-gray-500" : "text-gray-500"}`}>
            {icon}
          </span>
        </div>

        {/* Status Badge */}
        <span
          className="px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest text-white"
          style={statusConfig.badgeStyle}
        >
          {statusConfig.badgeText}
        </span>
      </div>

      {/* Institution & Degree (Content Wrapper) */}
      <div className="flex-grow">
          <h3
            className={`text-xl md:text-2xl font-bold mb-2 leading-tight text-left ${
              isLight ? "text-gray-900" : "text-white"
            }`}
          >
            {institution}
          </h3>
          <p
            className={`text-sm mb-5 text-left ${
              isLight ? "text-gray-700" : "text-white/90"
            }`}
          >
            {degree}
          </p>

          {/* Info Section */}
          <div className="flex flex-col gap-3 mb-5">
            <div
              className={`flex items-center gap-3 text-sm ${
                isLight ? "text-gray-700" : "text-white/80"
              }`}
            >
              <FaCalendarAlt
                className={`w-4 h-4 flex-shrink-0 ${
                  isLight ? "text-gray-700" : "text-white/90"
                }`}
              />
              <span>{dateRange}</span>
            </div>

            <div
              className={`flex items-center gap-3 text-sm ${
                isLight ? "text-gray-700" : "text-white/80"
              }`}
            >
              <FaMapMarkerAlt
                className={`w-4 h-4 flex-shrink-0 ${
                  isLight ? "text-gray-700" : "text-white/90"
                }`}
              />
              <span>{location}</span>
            </div>
          </div>

          {/* Description */}
          <p
            className={`text-sm leading-relaxed pt-4 mt-4 border-t text-left ${
              isLight
                ? "text-gray-600 border-violet-300/80"
                : "text-white/70 border-[#667eea]/30"
            }`}
          >
            {description}
          </p>
      </div>

      {/* View Details Button */}
      <button
        onClick={onViewDetails}
        className={`mt-6 px-5 py-3 border rounded-xl text-sm font-semibold transition-all duration-300 flex justify-center items-center gap-2 hover:translate-x-1
           w-full
          ${
            isLight
              ? "bg-gray-100 border-violet-300/80 text-gray-800 hover:bg-gray-200"
              : "bg-white/10 border-[#667eea]/30 text-white hover:bg-white/20"
          }`}
      >
        View Details
        <FaChevronRight className="w-3 h-3 transition-transform" />
      </button>
    </div>
  );
};

export default EducationCard;
