import React from "react";
import { TypeAnimation } from "react-type-animation";
import { useTheme } from "../../context/ThemeContext"; // ✅ Import ThemeContext

const AnimatedTitle = () => {
  const { theme } = useTheme(); // ✅ Access current theme ("light" or "dark")

  return (
    <TypeAnimation
      key={theme} // ✅ Forces re-render when theme changes
      className={`font-bold  duration-300 ${
        theme === "dark" ? "text-white" : "text-gray-700"
      }`}
      sequence={[
        "Software Engineer.",
        1000,
        "Full stack developer",
        1000,
        "Let's build something great together.",
        1000,
        "Transforming ideas into elegant solutions.",
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ display: "inline-block" }}
      repeat={Infinity}
    />
  );
};

export default AnimatedTitle;
