// src/App.jsx

import React, { useState, useEffect } from 'react';
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
import Preloader from './components/Preloader/Preloader';

const statusMessagesData = [
    { text: '✓ Core modules loaded', class: 'success' },
    { text: '✓ Dependencies resolved', class: 'success' },
    { text: '⟳ Compiling components...', class: 'info' },
    { text: '✓ API connected', class: 'success' },
    { text: '✓ Assets optimized', class: 'success' },
    { text: '⟳ Finalizing interface build...', class: 'info' }
];

function App() {
  const [loadingProgress, setLoadingProgress] = useState(0);
    const [isLoaderVisible, setIsLoaderVisible] = useState(true);
    const [isFadingOut, setIsFadingOut] = useState(false);
    const [activeMessages, setActiveMessages] = useState([]);
    const [messageIndex, setMessageIndex] = useState(0);

    // --- LOADER LOGIC ---
    useEffect(() => {
        let progress = 0;
        const minimumDisplayTime = 3000; // Minimum 3 seconds display for reading messages
        const fadeDuration = 500;
        
        // --- Progress Interval ---
        const progressInterval = setInterval(() => {
            progress += Math.random() * 10;
            if (progress > 100) progress = 100;
            setLoadingProgress(progress);
        }, 100);

        // --- Message Display Logic ---
        const messageTimer = setInterval(() => {
            if (messageIndex < statusMessagesData.length) {
                const newMessage = statusMessagesData[messageIndex];
                setActiveMessages(prev => [...prev, newMessage]);
                setMessageIndex(prev => prev + 1);
            } else {
                clearInterval(messageTimer);
            }
        }, 500); // New message every 0.5s

        // --- Hiding Logic ---
        const hideTimer = setTimeout(() => {
            clearInterval(progressInterval);
            setLoadingProgress(100);

            setTimeout(() => {
                setIsFadingOut(true); 
                
                setTimeout(() => {
                    setIsLoaderVisible(false);
                }, fadeDuration);
            }, 800); // Delay before fade-out allows final message to show
        }, minimumDisplayTime);

        return () => {
            clearInterval(progressInterval);
            clearInterval(messageTimer);
            clearTimeout(hideTimer);
        };
    }, [messageIndex]);
  return (
    // 2. Wrap your entire application structure with ThemeProvider
    <> 
    {isLoaderVisible && (
                <Preloader 
                    progress={loadingProgress} 
                    fadeOut={isFadingOut} 
                    messages={activeMessages} 
                />
            )}
      {/* 3. The 'dark' or 'light' class will be applied to the <html> tag by ThemeProvider's useEffect */}
      <div className="App min-h-screen transition-colors duration-500" style={{ visibility: isLoaderVisible ? 'hidden' : 'visible' }}>
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