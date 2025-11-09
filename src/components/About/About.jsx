import React from "react";
import "./About.css";
import about from "../../assets/about.jpg";
import CounterSection from "../CounterSection/CounterSection";
import SkillsSlider from "../SkillsSlider/SkillsSlider";
import { useTheme } from "../../context/ThemeContext";

const About = () => {
  const { theme } = useTheme();

  return (
    <section
      id="about"
      className={`relative min-h-screen py-20 px-6 overflow-hidden transition-colors duration-500 ${
        theme === "dark"
          ? "bg-[#010412] text-gray-300"
          : "bg-gray-50 text-gray-900"
      }`}
    >
      <h2 className="text-4xl font-bold text-center capitalize">about me</h2>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 lg:px-8 flex flex-col md:flex-row items-start justify-between md:py-16 lg:py-12 gap-10 md:gap-12">
        {/* Left Image */}
        <div
          className={`relative w-full sm:w-72 md:w-80 lg:w-90 h-auto sm:h-96 md:h-100 lg:h-110 rounded-3xl shadow-lg overflow-hidden bg-transparent border mt-8 md:mt-0 ${
            theme === "dark" ? "border-[#667eea]/30" : "border-violet-400/80"
          }`}
        >
          <img
            src={about}
            alt="Praneeth Liyanage"
            className="w-full h-full object-cover rounded-4xl relative p-5"
          />
        </div>

        {/* Right Text */}
        <div className="flex-1 text-center md:text-left mb-12 md:mb-0 lg:ml-30">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold capitalize tracking-wider">
            Building Scalable Digital Solutions with Innovation
          </h3>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed mt-6 max-w-2xl sm:max-w-4xl mx-auto md:mx-0">
            I'm Praneeth Sandaruwan, a software engineer with a passion for
            building impactful and seamless digital experiences. With a strong
            focus on full-stack development, I enjoy transforming creative ideas
            into functional, user-friendly web applications that make a
            difference.
          </p>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed mt-6 max-w-2xl sm:max-w-4xl mx-auto md:mx-0">
            My technical journey has equipped me with hands-on experience in
            Java Spring Boot, ReactJS, Node.js, Tailwind CSS, Bootstrap, and
            MySQL. I’m deeply passionate about learning modern technologies and
            designing clean, efficient code that balances performance with
            simplicity.
          </p>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed mt-6 max-w-2xl sm:max-w-4xl mx-auto md:mx-0">
            I believe that great software combines thoughtful design, solid
            architecture, and attention to detail. When I’m not coding, I love
            exploring emerging frameworks, enhancing my UI/UX skills, and
            contributing to meaningful tech initiatives.
          </p>

          <div className="mt-16 md:mt-20 lg:mt-16 sm:mt-18">
            <CounterSection />
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-center capitalize mt-10">
        Technical Skills
      </h2>

      <div className="mt-8">
        <SkillsSlider />
      </div>
    </section>
  );
};

export default About;
