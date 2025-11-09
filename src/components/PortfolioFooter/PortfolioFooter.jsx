import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { quickLinks, socialMedia, themeOptions } from "../../data/data";

// --- ThemeOption Subcomponent ---
const ThemeOption = ({ theme, label, icon: Icon, isActive, onClick }) => {
  const { theme: currentTheme } = useTheme();
  const isLight = currentTheme === "light";
  
  return (
    <div
      onClick={() => onClick(theme)}
      data-theme={theme}
      className={`flex items-center gap-3 p-3 sm:p-4 rounded-xl cursor-pointer transition-all duration-300 ease-in-out 
        
        /* Default Styles (Light Theme Base) */
        border-2 border-gray-300 bg-white text-gray-900
        
        /* Dark Theme Overrides */
        dark:border-white/10 dark:bg-white/5 dark:text-white
        
        /* Active State */
        ${
          isActive
            ? "bg-indigo-600/20 dark:bg-indigo-600/20 border-violet-700 dark:border-violet-700"
            : "hover:bg-gray-100 dark:hover:bg-white/10 hover:border-indigo-500/40"
        }`}
    >
      <div className="relative flex-shrink-0 w-5 h-5 border-2 border-indigo-400 rounded-full flex items-center justify-center">
        {isActive && <div className="w-2.5 h-2.5 bg-indigo-400 rounded-full" />}
      </div>
      <div className="w-6 h-6 flex items-center justify-center text-lg text-indigo-400">
        <Icon />
      </div>
      <span
        className={`flex-1 text-sm font-medium ${
          isActive ? "text-white" : "text-gray-600 dark:text-gray-400"
        }`}
      >
        {label}
      </span>
    </div>
  );
};

// --- Main Footer Component ---
const PortfolioFooter = () => {
  const { theme, setTheme } = useTheme();
  const [newsletterEmail, setNewsletterEmail] = React.useState("");

  const isDark = theme !== "light";

  const handleThemeChange = (selectedTheme) => setTheme(selectedTheme);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      alert(`Thanks for subscribing with ${newsletterEmail}!`);
      setNewsletterEmail("");
    }
  };

  // --- Dynamic Tailwind Utilities ---

  // Consistent gradient for titles/accents
  const titleGradient = "bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent";
  const footerGridClass = "grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.2fr]";

  return (
    <section
      className={`relative overflow-hidden border-t border-indigo-300/10 transition-all duration-500 ${
        // Theme-aware section background
        isDark ? "bg-[#010412] text-gray-300" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 z-10 bg-gradient-to-r from-violet-400 via-purple-500 to-pink-500" />

      {/* Background Blur Circles */}
      <div className="absolute w-[400px] h-[400px] rounded-full blur-[80px] opacity-15 top-[-200px] left-[-200px] bg-gradient-to-br from-[#420578] to-[#4d1189]" />
      <div className="absolute w-[400px] h-[400px] rounded-full blur-[80px] opacity-15 bottom-[-200px] right-[-200px] bg-gradient-to-br from-[#420379] to-[#4d058d]" />

      {/* Footer Content */}
      <div className="container mx-auto px-6 sm:px-8 md:px-12 max-w-8xl relative z-10 pt-16 pb-8 md:py-16 lg:py-12">
        <div 
          className={`${footerGridClass} gap-8 lg:gap-14 mb-10 border-b border-gray-200 dark:border-white/10 pb-10 transition-colors duration-300`}
        >
          {/* Brand Section */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <div className="group cursor-pointer">
              <div 
                className={`text-2xl sm:text-3xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}
              >
                <span className={titleGradient}>PORTFOLIO</span>
                <span className="text-violet-400 group-hover:text-pink-400 transition-colors duration-300">.PL</span>
              </div>
            </div>

            <p className="text-sm leading-relaxed mb-6 mt-4 text-gray-600 dark:text-gray-400 transition-colors duration-300">
              A passionate Full Stack Developer dedicated to turning ideas into
              seamless digital experiences with clean code and modern web
              technologies.
            </p>

            {/* Newsletter */}
            <div className="mt-6">
              <h3 className={`text-lg font-bold mb-3 ${titleGradient}`}>Stay Updated</h3>
              <form
                onSubmit={handleNewsletterSubmit}
                className="flex gap-2 mt-3"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                  className="flex-1 p-3 border rounded-xl text-sm transition-colors
                             bg-gray-100 border-gray-300 text-gray-900
                             dark:bg-white/5 dark:border-white/10 dark:text-white 
                             focus:border-indigo-500 focus:ring-indigo-500"
                />
                <button
                  type="submit"
                  className="px-5 py-3 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 hover:shadow-lg hover:shadow-[#667eea]/30"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className={`text-lg font-bold mb-5 ${titleGradient}`}>Quick Links</h3>
            <div className="flex flex-col space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2 py-1 group hover:text-indigo-600 dark:hover:text-white hover:translate-x-1 transition-all"
                >
                  <span className="w-0 h-0.5 bg-gradient-to-r from-[#667eea] to-[#764ba2] transition-all duration-300 group-hover:w-5"></span>
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div className="col-span-1">
            <h3 className={`text-lg font-bold mb-5 ${titleGradient}`}>Connect</h3>
            <div className="grid grid-cols-3 sm:grid-cols-3 gap-3">
              {socialMedia.map(({ icon: Icon, title, href }) => (
                <a
                  key={title}
                  href={href}
                  title={title}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 flex items-center justify-center rounded-xl relative overflow-hidden group transition-all duration-300 cursor-pointer 
                    bg-gray-100 dark:bg-white/5 border-2 border-gray-800 dark:border-[#667eea]/30 
                    hover:border-indigo-500 dark:hover:border-[#667eea] hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/10`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#667eea] to-[#764ba2] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Icon
                    className="w-5 h-5 relative z-50 text-violet-900 dark:text-gray-300 group-hover:text-white transition-colors"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Theme Switcher */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <h3 className={`text-lg font-bold mb-5 ${titleGradient}`}>Theme</h3>
            <div className="flex flex-col space-y-3">
              {themeOptions.map((option) => (
                <ThemeOption
                  key={option.theme}
                  theme={option.theme}
                  label={option.label}
                  icon={option.icon}
                  isActive={theme === option.theme}
                  onClick={handleThemeChange}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-center items-center pt-2 ">
          <p className="text-sm text-gray-600 dark:text-gray-500 text-center transition-colors duration-300">
            &copy; 2025 Portfolio.Pl. All rights reserved. Crafted with{" "}
            <span className="text-pink-400">❤️</span> by{" "}
            <span className="font-medium text-violet-500">Praneeth Liyanage</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PortfolioFooter;