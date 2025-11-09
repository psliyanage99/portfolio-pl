import React,{ useState } from "react";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaTimes,
  FaAngleRight,
  FaGraduationCap,
  FaCheck,
  FaMedal,
  FaFileAlt,
  FaEye,

} from "react-icons/fa";

import CertificateViewer from '../CertificateViewer/CertificateViewer';

const MoreEducationdetails = ({ isOpen, onClose, education }) => {
  if (!isOpen || !education) return null;

  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const openViewer = (Certificates) => { // Use 'certificateData' to avoid confusion
    // FIX 2a: Set the specific certificate data (not the component)
    setSelectedCertificate(Certificates); 
    setIsViewerOpen(true);
  };

  const closeViewer = () => {
    setIsViewerOpen(false);
    setSelectedCertificate(null);
  };

  const {
    id,
    institution,
    degree,
    dateRange,
    location,
    description,
    coursework,
    subjects,
    achievements,
    certificates,
    skills,
  } = education;


  return (
    <div className="more-education fixed inset-0 z-50 bg-blend-color bg-opacity-70 flex items-center justify-center p-4 backdrop-blur-2xl">
      {/* Modal Content */}
      <div
        className="
          bg-gray-900/60 light:bg-white text-white light:text-gray-900 rounded-3xl shadow-2xl w-full max-w-4xl 
          duration-300 scale-100 border border-violet-800/50 light:border-violet-300/80
          overflow-hidden
        "
      >
        {/* Header */}
        <div className="pl-6 pr-6 pt-10 pb-10 border-b rounded-t-3xl border-gray-700 light:border-gray-300 flex justify-between items-start sticky top-0 bg-gray-900 light:bg-white z-10">
          <div className="flex items-center">
            {/* Icon */}
            <div className="flex-shrink-0 w-12 h-12 mr-4 bg-gradient-to-r from-violet-600 to-purple-600 rounded-lg flex items-center justify-center text-white shadow-lg">
              <FaGraduationCap className="w-6 h-6 text-violet-300" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white light:text-gray-900">
                {institution}
              </h2>
              <p className="text-md text-gray-400 light:text-gray-600">
                {degree}
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

        {/* Body - Scrollable Content */}
        <div
          className="
            p-6 z-20 max-h-[80vh] overflow-y-auto backface-hidden transform transition-all custom-scrollbar 
            rounded-b-3xl
          "
        >
          {/* Duration & Location */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-gray-600/20 light:bg-gray-100 p-6 rounded-xl flex items-center">
              <FaCalendarAlt className="w-5 h-5 mr-3 text-violet-300 flex-shrink-0" />
              <div className="space-y-2">
                <p className="text-sm uppercase text-gray-200 light:text-gray-600 font-semibold ">
                  DURATION
                </p>
                <p className="text-sm text-white light:text-gray-900 font-medium">
                  {dateRange}
                </p>
              </div>
            </div>

            <div className="bg-gray-600/20 light:bg-gray-100 p-6 rounded-xl flex items-center">
              <FaMapMarkerAlt className="w-5 h-5 mr-3 text-violet-300 flex-shrink-0" />
              <div className="space-y-2">
                <p className="text-sm uppercase text-gray-200 light:text-gray-600 font-semibold">
                  LOCATION
                </p>
                <p className="text-sm text-white light:text-gray-900 font-medium">
                  {location}
                </p>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-light light:text-violet-700 mb-4">
              About
            </h3>
            <p className="text-gray-300 light:text-gray-700 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Coursework - In University */}
          {id === 1 && (
            <div>
              <h3 className="text-xl font-bold text-light light:text-violet-700 mb-4">
                Coursework
              </h3>
              <div className="grid grid-cols-3 md:grid-cols-3 gap-4 mb-8 mt-4">
                {coursework &&
                  coursework.map((course, index) => (
                    <span
                      key={index}
                      className="bg-gray-600/20 light:bg-gray-100 p-4 rounded-xl flex items-center border-l-2 border-violet-500 hover:bg-gray-800 hover:translate-x-3 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 cursor-pointer"
                    >
                      {course}
                    </span>
                  ))}
              </div>
            </div>
          )}

          {/* Subjects - In A/L */}
          {subjects && (
            <div>
              <h3 className="text-xl font-bold text-light light:text-violet-700 mb-4">
                  Subjects
              </h3>
              <div className="grid grid-cols-3 md:grid-cols-3 gap-4 mb-8">
                {subjects &&
                  subjects.map((subject, index) => (
                    <span
                      key={index}
                      className="text-sm h-full p-4 bg-gray-600/20 light:bg-gray-100 rounded-xl flex self-center hover:bg-gray-800 hover:translate-x-2 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 cursor-pointer"
                    >
                      <FaCheck className="text-pink-300 mr-2 items-start"/>
                      {subject}
                    </span>
                  ))}
              </div>
            </div>
          )}

          {/* Achievements */}
          {achievements && (
            <div className="mb-8">
              <div className="flex">
                <FaMedal className="mr-2 h-6 w-6 text-violet-400"/>
                <h3 className="text-xl font-bold text-light light:text-violet-700 mb-4">
                  Achievements
                </h3>
              </div>
              <ul className="list-none space-y-3 items-center">
                {achievements.map((ach, index) => (
                  <li
                    key={index}
                    className="flex  text-gray-300 light:text-gray-700 items-center-safe"
                  >
                    <FaAngleRight className="w-5 h-5 mr-2 mt-1 text-pink-300" />
                    <span className="text-sm">{ach}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Skills */}
          {skills && (
            <div>
              <h3 className="text-lg font-bold text-violet-400 light:text-violet-700 mb-3">
                Skills Acquired
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-700 light:bg-gray-200 text-gray-200 light:text-gray-800 border border-gray-600 light:border-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* --- NEW CERTIFICATES SECTION --- */}
          {certificates && (
            <div className="mb-8">
                <div className="flex items-center mb-4 mt-8">
                    <FaFileAlt className="mr-2 h-6 w-6 text-violet-400" />
                    <h3 className="text-xl font-bold text-light light:text-violet-700">
                        Certificates
                    </h3>
                </div>
                
                <div className="list-none space-y-3">
                    {certificates.map((cert, index) => (
                        <a 
                            key={index}
                            // FIX 3: Removed navigation link and replaced with role="button"
                            role="button"
                            onClick={(e) => {
                                // Prevent the link from triggering navigation (though role="button" helps)
                                e.preventDefault(); 
                                // FIX 2b: Pass the correct data object 'cert'
                                openViewer(cert); 
                            }}
                            // Removed target="_blank" and rel="noopener noreferrer" as it is now an internal action
                            className="
                                flex justify-between items-center p-6 rounded-xl cursor-pointer transition-all duration-300 ease-in-out
                                bg-gray-800/80 border border-gray-700 text-gray-200 
                                hover:bg-gray-700/80 hover:border-violet-500 hover:shadow-md hover:shadow-violet-500/10
                            "
                        >
                            <span className="flex items-center text-md font-medium">
                                <FaFileAlt className="w-4 h-4 mr-3 text-violet-400 flex-shrink-0" />
                                {cert.name}
                            </span>
                            <FaEye className="w-4 h-4 text-gray-500 group-hover:text-violet-300 transition-colors duration-200" />
                        </a>
                    ))}
                </div>
            </div>
          )}
        </div>
        <CertificateViewer
            isViewerOpen={isViewerOpen}
            viewerOnClose={closeViewer}
            certificates={selectedCertificate}
        />
      </div>
    </div>
  );
};

export default MoreEducationdetails;
