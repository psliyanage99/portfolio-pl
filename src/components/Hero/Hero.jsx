// src/sections/Hero/Hero.jsx

import React, { Fragment } from "react";
import "./Hero.css";
import { FaDownload, FaEnvelope } from "react-icons/fa";
import AnimatedTitle from "../utils/AnimatedTitle";
import myProfileImage from "../../assets/profile.png";
import SocialIcons from "../SocialIcons/SocialIcons";
import { useTheme } from "../../context/ThemeContext";
import ScrollIndicator from "../ScrollIndicator/ScrollIndicator";

const Hero = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Fragment>
      <section
        id="home"
        className="hero-section relative min-h-screen flex items-center justify-center pt-16 pb-12 overflow-hidden transition-colors duration-500"
      >
        {/* Background Image and Overlay */}
        <div
          className={`absolute inset-0 bg-[url('./assets/hero_bg.jpg')] bg-cover bg-center bg-no-repeat ${
            isDark ? "bg-slate-950 bg-blend-overlay" : "bg-white bg-blend-soft-light"
          }`}
        />
        <div
          className={`absolute inset-0 ${
            isDark ? "bg-slate-950 opacity-70" : "bg-white opacity-70"
          }`}
        />

        {/* Content Container */}
        <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-8 py-10 md:py-16 lg:py-20 lg:mb-16 md:mb-15 sm:mb-12">
          {/* Left Content */}
          <div className="w-full md:w-1/2 flex-1 text-center md:text-left mb-12 md:mb-0 md:mr-10 lg:mr-20 order-2 md:order-none">
            {/* Intro Text */}
            <h3
              className={`text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-wider ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Hello, I'm
            </h3>

            {/* Main Name */}
            <h1
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold capitalize tracking-widest mt-3 leading-tight ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Praneeth <br /> Sandaruwan <br /> Liyanage
            </h1>

            {/* Animated Role Title */}
            <div className="mt-4 md:mt-6 sm:text-2xl md:text-3xl lg:text-3xl">
              <AnimatedTitle />
            </div>

            {/* Description */}
            <p
              className={`text-sm sm:text-base md:text-lg leading-relaxed mt-6 max-w-xl sm:max-w-2xl mx-auto md:mx-0 ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Passionate about building seamless, user-focused digital experiences
              that combine creativity, performance, and functionality while
              crafting innovative web solutions that inspire meaningful
              connections.
            </p>

            {/* Social Icons */}
            <div className="mt-6">
              <SocialIcons />
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mt-8">
              {/* Download CV */}
              <button
                className={`flex items-center justify-center w-full sm:w-auto min-w-[170px] py-3 px-6 rounded-full font-semibold text-sm sm:text-base md:text-sm shadow-md transition-all duration-300 focus:outline-none cursor-pointer
                  bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 
                  hover:from-violet-500 hover:via-purple-500 hover:to-pink-500 
                  shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 hover:scale-105 group`}
              >
                <FaDownload className="w-5 h-5 mr-2 md:mr-1 md:w-4 md:h-4" />
                DOWNLOAD CV
              </button>

              {/* Hire Me */}
              <a
                href="#contact"
                className={`flex items-center justify-center w-full sm:w-auto min-w-[160px] py-3 px-8 rounded-full font-semibold text-sm sm:text-base md:text-sm shadow-md transition-colors duration-300 focus:outline-none cursor-pointer
                  ${
                    isDark
                      ? "bg-transparent border-2 border-violet-900 text-violet-300 hover:bg-violet-950 hover:text-white"
                      : "bg-transparent border-2 border-violet-600 text-violet-600 hover:bg-violet-50 hover:text-violet-700"
                  }`}
              >
                <FaEnvelope className="w-5 h-5 mr-2" />
                HIRE ME
              </a>
            </div>
          </div>

          {/* Right Content (Profile Image) */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-0 pt-0 mb-5 md:mt-2 order-1 md:order-none">
            <div
              className={`relative w-64 h-70 sm:w-72 sm:h-96 md:w-80 md:h-[26rem] lg:w-96 lg:h-[30rem] rounded-3xl shadow-lg border overflow-hidden bg-transparent transition-colors duration-500 ${
                isDark ? "border-[#667eea]/30" : "border-violet-300/80"
              }`}
            >
              {/* Decorative Blurs */}
              <div
                className={`absolute top-0 -left-10 w-32 h-20 rounded-b-4xl blur-xl animate-blob ${
                  isDark
                    ? "bg-violet-900 opacity-40"
                    : "bg-violet-300 opacity-50"
                }`}
              />
              <div
                className={`absolute bottom-0 -right-10 w-32 h-20 rounded-b-4xl blur-xl animate-blob animation-delay-1000 ${
                  isDark ? "bg-slate-800 opacity-40" : "bg-gray-300 opacity-50"
                }`}
              />

              {/* Profile Image */}
              <img
                src={myProfileImage}
                alt="Praneeth Liyanage"
                className="w-full h-full object-cover rounded-2xl relative"
              />
            </div>
          </div>
        </div>
        <div className="">
          <ScrollIndicator />
        </div>
      </section>
    </Fragment>
  );
};

export default Hero;
