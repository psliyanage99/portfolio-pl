// // TechCard.jsx (New file)
// import React from 'react';
// // Import all necessary icons from react-icons/fa and other packs (if used)
// import { FaPlug, FaReact, FaNodeJs, FaAws, FaDocker, FaJs, FaPython, FaDatabase } from 'react-icons/fa';

// // Map icon names to their imported components
// const iconMap = {
//     FaPlug, FaReact, FaNodeJs, FaAws, FaDocker, FaJs, FaPython, FaDatabase
//     // Add other icons as needed
// };

// const TechCard = ({ techName, techIcon }) => {
//     const IconComponent = iconMap[techIcon];

//     return (
//         <div className="flex flex-col items-center justify-center flex-shrink-0 w-24 h-24 p-2 rounded-xl 
//                         bg-gray-800 border border-violet-700/50 shadow-lg 
//                         transition duration-200 transform hover:scale-105">
            
//             {/* Icon Box */}
//             <div className="w-10 h-10 bg-violet-800 rounded-lg flex items-center justify-center 
//                             mb-1 shadow-md rotate-[-5deg] transform"> {/* Added rotation for style */}
//                 {IconComponent && <IconComponent className="w-6 h-6 text-violet-300" />}
//             </div>
            
//             {/* Technology Name */}
//             <p className="text-xs font-semibold text-gray-200 uppercase tracking-wider text-center">
//                 {techName}
//             </p>
//         </div>
//     );
// };

// export default TechCard;