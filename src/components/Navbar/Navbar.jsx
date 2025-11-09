import React, { Fragment, useEffect, useState } from "react";
import { navItems } from "../../data/data";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { useTheme } from "../../context/ThemeContext";
import "./Navbar.css";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { theme } = useTheme();
  const isDark = theme === "dark" || theme === "default";

  const handleLinkClick = () => setMenuOpen(false);

  // Scroll listener for navbar and active section highlight
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = document.querySelectorAll("section");
      let current = "home";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 200) {
          current = section.id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dynamic theme-based styles
  const textColor = isDark ? "text-white" : "text-gray-900";
  const navBg = isDark
    ? scrolled
      ? "backdrop-blur-xl border-b border-violet-500/30 shadow-md shadow-violet-500/10"
      : "border-b border-violet-600/20 bg-transparent backdrop-blur-sm"
    : scrolled
    ? "backdrop-blur-xl border-b border-violet-300/40 shadow-md shadow-violet-300/10 bg-white/60"
    : "border-b border-violet-600/20 bg-transparent backdrop-blur-sm";

  const linkInactive = isDark
    ? "text-gray-300 hover:text-white"
    : "text-gray-700 hover:text-violet-700";

  const linkActive = isDark ? "text-white" : "text-violet-700 font-semibold";

  const gradientBtn =
    "bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 hover:from-violet-500 hover:via-purple-500 hover:to-pink-500";

  const mobileBg = isDark ? "bg-gray-950/95" : "bg-white/95";

  const mobileLink = (isActive) =>
    isActive
      ? isDark
        ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-500/30"
        : "bg-violet-100 text-violet-700 shadow-md"
      : isDark
      ? "bg-gray-800/50 text-gray-300 hover:bg-gray-800 hover:text-white"
      : "bg-gray-100 text-gray-800 hover:bg-gray-200 hover:text-violet-700";

  return (
    <Fragment>
      <nav
        className={`fixed top-0 w-full z-30 transition-all duration-500 ${navBg}`}
      >
        <div className="container mx-auto flex items-center justify-between px-6 py-4 md:py-5">
          {/* Logo */}
          <div className="group cursor-pointer">
            <div
              className={`text-2xl sm:text-3xl font-bold tracking-tight ${textColor}`}
            >
              <span className="bg-gradient-to-r from-violet-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x mr-0.5">
                PORTFOLIO
              </span>
              <span
                className={`transition-colors duration-300 ${
                  isDark
                    ? "text-violet-400 group-hover:text-pink-400"
                    : "text-violet-700 group-hover:text-pink-600"
                }`}
              >
                .PL
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-2 lg:space-x-3">
            {navItems.map((item, index) => (
              <li
                key={item.id}
                style={{ animationDelay: `${index * 100}ms` }}
                className="animate-fadeInDown"
              >
                <a
                  href={`#${item.id}`}
                  onClick={() => setActiveSection(item.id)}
                  className={`group relative flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ${
                    activeSection === item.id ? linkActive : linkInactive
                  }`}
                >
                  {activeSection === item.id && (
                    <span
                      className={`absolute inset-0 rounded-xl shadow-md shadow-violet-500/40 animate-fadeIn ${
                        isDark
                          ? "bg-gradient-to-r from-violet-600 to-purple-600"
                          : "bg-violet-100"
                      }`}
                    />
                  )}
                  <span
                    className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                      isDark
                        ? "bg-gradient-to-r from-violet-600/0 to-purple-600/0 group-hover:from-violet-600/15 group-hover:to-purple-600/15"
                        : "group-hover:bg-violet-100"
                    }`}
                  />
                  <span
                    className={`relative text-lg transition-transform duration-300 ${
                      activeSection === item.id
                        ? "scale-110"
                        : "group-hover:scale-110"
                    }`}
                  >
                    {item.icon}
                  </span>
                  <span className="relative">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>

          {/* Hire Me Button */}
          <a href="#contact">
          <button
            className={`hidden md:flex items-center gap-2 px-6 py-2.5 rounded-xl ${gradientBtn} text-white font-semibold text-sm transition-all duration-300 shadow-lg hover:scale-105 group`}
          >
            <span>Hire Me</span>
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
          </a>

          {/* Mobile Toggle */}
          <button
            className={`md:hidden relative w-10 h-10 z-40 flex items-center justify-center rounded-lg ${
              isDark
                ? "bg-violet-600/20 hover:bg-violet-600/30 text-white"
                : "bg-violet-100 hover:bg-violet-200 text-violet-800"
            } transition-all duration-300`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`absolute transition-all duration-300 ${
                menuOpen ? "rotate-180 opacity-0" : "rotate-0 opacity-100"
              }`}
            >
              <HiMenuAlt3 className="text-2xl" />
            </span>
            <span
              className={`absolute transition-all duration-300 ${
                menuOpen ? "rotate-0 opacity-100" : "-rotate-180 opacity-0"
              }`}
            >
              <HiX className="text-2xl" />
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed w-full top-[72px] z-40 transition-all duration-500 ${
            menuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            className={`absolute inset-0 ${mobileBg} backdrop-blur-md z-20`}
            onClick={() => setMenuOpen(false)}
          />
          <div className="relative h-full items-center justify-center overflow-y-auto z-50">
            <div className="flex flex-col items-center justify-center pt-8 pb-20 px-6 space-y-3">
              {navItems.map((item, index) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={handleLinkClick}
                  style={{ animationDelay: `${index * 80}ms` }}
                  className={`w-full max-w-md px-6 py-4 rounded-2xl font-semibold text-md transition-all duration-300 flex items-center justify-center gap-4 ${
                    menuOpen ? "animate-slideInRight" : ""
                  } ${mobileLink(activeSection === item.id)}`}
                >
                  <span
                    className={`text-xl transition-transform duration-300 ${
                      activeSection === item.id ? "scale-110" : ""
                    }`}
                  >
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </a>
              ))}

              {/* Mobile Hire Me */}
              <a href="#contact">
                <button
                  className={`w-full max-w-md mt-6 px-6 py-4 rounded-2xl ${gradientBtn} text-white font-bold text-lg transition-all duration-300 shadow-xl flex items-center justify-center gap-2 group ${
                    menuOpen ? "animate-slideInUp" : ""
                  }`}
                  onClick={handleLinkClick}
                  style={{ animationDelay: `${navItems.length * 80}ms` }}
                >
                  <span>Hire Me</span>
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
