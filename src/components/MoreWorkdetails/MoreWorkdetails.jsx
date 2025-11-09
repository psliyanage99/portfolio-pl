import React from "react";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaTimes,
  FaAngleRight,
} from "react-icons/fa";

const MoreWorkdetails = ({ isOpen, onClose, experience }) => {
  if (!isOpen || !experience) return null;

  const {
    jobTitle,
    companyName,
    dateRange,
    location,
    description,
    responsibilities,
    skills,
  } = experience;

  return (
    // Modal Backdrop
    <div className="fixed inset-0 z-50 bg-blend-color-burn bg-opacity-70 flex items-center justify-center p-4 backdrop-blur-2xl">
      {/* Modal Content */}
      <div className="bg-gray-900/60 light:bg-white text-white light:text-gray-900 rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100 border border-violet-800/50 light:border-violet-300/80">
        {/* Header */}
        <div className="p-6 border-b border-gray-700 light:border-gray-300 flex justify-between items-start sticky top-0 bg-gray-900 light:bg-white z-10">
          <div className="flex items-center">
            {/* Icon */}
            <div className="flex-shrink-0 w-12 h-12 mr-4 bg-gradient-to-r from-violet-600 to-purple-600 rounded-lg flex items-center justify-center text-white shadow-lg">
              <FaBriefcase className="w-6 h-6 text-violet-300" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white light:text-gray-900">
                {jobTitle}
              </h2>
              <p className="text-sm text-gray-400 light:text-gray-600">
                {companyName}
              </p>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="text-gray-500 light:text-gray-700 hover:text-white light:hover:text-gray-900 transition duration-200 p-2 rounded-full hover:bg-gray-800 light:hover:bg-gray-100"
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {/* Duration & Location */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-gray-800 light:bg-gray-100 p-4 rounded-xl flex items-center">
              <FaCalendarAlt className="w-4 h-4 mr-3 text-violet-400 flex-shrink-0" />
              <div>
                <p className="text-xs uppercase text-gray-500 light:text-gray-600 font-semibold">
                  Duration
                </p>
                <p className="text-sm text-white light:text-gray-900 font-medium">
                  {dateRange}
                </p>
              </div>
            </div>

            <div className="bg-gray-800 light:bg-gray-100 p-4 rounded-xl flex items-center">
              <FaMapMarkerAlt className="w-4 h-4 mr-3 text-violet-400 flex-shrink-0" />
              <div>
                <p className="text-xs uppercase text-gray-500 light:text-gray-600 font-semibold">
                  Location
                </p>
                <p className="text-sm text-white light:text-gray-900 font-medium">
                  {location}
                </p>
              </div>
            </div>
          </div>

          {/* About the Role */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-violet-400 light:text-violet-700 mb-3">
              About the Role
            </h3>
            <p className="text-gray-300 light:text-gray-700 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Responsibilities */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-violet-400 light:text-violet-700 mb-3">
              Key Responsibilities
            </h3>
            <ul className="list-none space-y-3">
              {responsibilities &&
                responsibilities.map((res, index) => (
                  <li
                    key={index}
                    className="flex items-start text-gray-300 light:text-gray-700"
                  >
                    <FaAngleRight className="w-4 h-4 mr-2 mt-1 text-violet-400 flex-shrink-0" />
                    <span className="text-sm">{res}</span>
                  </li>
                ))}
            </ul>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-lg font-bold text-violet-400 light:text-violet-700 mb-3">
              Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills &&
                skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-700 light:bg-gray-200 text-gray-200 light:text-gray-800 border border-gray-600 light:border-gray-300"
                  >
                    {skill}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreWorkdetails;
