// src/App.jsx

import React from 'react';
// 1. Import the ThemeProvider you created
import { useTheme } from './context/ThemeContext'; 
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Work from './components/Work/Work';
import Education from './components/Education/Education';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';
import ContactSection from './components/Contact/Contact';
import PortfolioFooter from './components/PortfolioFooter/PortfolioFooter';
import './App.css'
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
function App() {
  return (
    // 2. Wrap your entire application structure with ThemeProvider
    <> 
      {/* 3. The 'dark' or 'light' class will be applied to the <html> tag by ThemeProvider's useEffect */}
      <div className="App min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Work />
          <Education />
          <ProjectsSection />
          <ContactSection />
        </main>

        <ScrollToTop />
        
        <PortfolioFooter />
      </div>
    </>
  );
}

export default App;