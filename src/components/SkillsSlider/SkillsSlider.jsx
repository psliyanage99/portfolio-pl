// src/sections/SkillsSection/SkillsSlider.jsx

import React from "react";
import { motion } from "framer-motion";
import { skillsData } from "../../data/data";
import { useTheme } from "../../context/ThemeContext";
import "./SkillsSlider.css";

const duplicatedSkills = [...skillsData, ...skillsData];

const iconVariants = {
  initial: { scale: 1, rotate: 0, opacity: 1 },
  hover: {
    scale: 1.25,
    rotate: 10,
    opacity: 1,
    filter: "drop-shadow(0px 0px 12px rgba(139,92,246,0.8))",
    transition: { type: "spring", stiffness: 300, damping: 15 },
  },
};

const SkillsSlider = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="container mx-auto px-6 lg:mt-10">
      <div
        className="relative max-w-8xl mx-auto overflow-hidden py-4"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, white 20%, white 80%, transparent)",
        }}
      >
        <div className="flex space-x-4 w-max slide-left-animation">
          {duplicatedSkills.map((skill, index) => (
            <motion.div
              key={`${skill.name}-${index}`}
              className={`
                flex-shrink-0 w-32 h-36 p-4 rounded-xl 
                flex flex-col items-center justify-center text-center relative 
                overflow-hidden transition-all duration-300 group 
                ${
                  isDark
                    ? "bg-gray-900 hover:shadow-2xl hover:shadow-violet-600/40 border border-gray-700/50"
                    : "border-2 border-[#667eea]/30"
                }
              `}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className={`
                  absolute inset-0 rounded-xl border border-transparent 
                  group-hover:border-violet-500/70 transition-all duration-300 z-0
                  ${!isDark ? "group-hover:border-violet-400" : ""}
                `}
              />

              <motion.div
                className={`
                  text-5xl mb-3 transition-colors duration-300 z-10 p-2 rounded-2xl
                  ${
                    isDark
                      ? "text-violet-400 group-hover:text-violet-400 bg-gray-700"
                      : "text-violet-900 group-hover:text-violet-600 bg-gray-200"
                  }
                `}
                variants={iconVariants}
                initial="initial"
                whileHover="hover"
              >
                {skill.icon}
              </motion.div>

              <motion.p
                className={`
                  text-sm font-medium transition-colors duration-300 z-10
                  ${
                    isDark
                      ? "text-gray-400 group-hover:text-white"
                      : "text-gray-700 group-hover:text-violet-700"
                  }
                `}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {skill.name}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSlider;
