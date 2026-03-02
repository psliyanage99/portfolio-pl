// src/App.jsx
import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Work from './components/Work/Work';
import Education from './components/Education/Education';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';
import ContactSection from './components/Contact/Contact';
import PortfolioFooter from './components/PortfolioFooter/PortfolioFooter';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Preloader from './components/Preloader/Preloader';
import './App.css';

function App() {
  // Simplify state: We only need to know if the preloader is finished
  const [isReady, setIsReady] = useState(false);

  return (
    <> 
      {/* 1. Show preloader until it calls onComplete */}
      {!isReady && (
        <Preloader 
          onComplete={() => setIsReady(true)} 
        />
      )}

      {/* 2. Content is hidden until isReady is true. 
          Using opacity + visibility for a smoother transition. */}
      <div 
        className="App min-h-screen transition-all duration-500" 
        style={{ 
          opacity: isReady ? 1 : 0,
          visibility: isReady ? 'visible' : 'hidden',
          transform: isReady ? 'translateY(0)' : 'translateY(10px)'
        }}
      >
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