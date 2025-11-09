import React, { useEffect } from 'react';
import './ScrollIndicator.css'

const ScrollIndicator = () => {
    // Scroll handler (similar to your previous component)
    const handleScroll = () => {
        window.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    };

    return (
        // Outer Container (scroll-container)
        <div 
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer z-20 group"
            onClick={handleScroll}
        >
            
            {/* Floating Particles Group (particles) */}
            <div className="custom-particles-group w-full h-full absolute">
                <div className="custom-particle" style={{ left: '20%', animationDelay: '0s' }}></div>
                <div className="custom-particle" style={{ left: '50%', animationDelay: '1s' }}></div>
                <div className="custom-particle" style={{ left: '80%', animationDelay: '2s' }}></div>
            </div>

            {/* Liquid Container (liquid-container) */}
            <div className="custom-liquid-container w-20 h-20 relative flex items-center justify-center">
                
                {/* Outer Glow Circle (glow-circle) */}
                <div className="custom-glow-circle absolute w-full h-full"></div>
                
                {/* Liquid Drop (liquid-drop) */}
                <div className="custom-liquid-drop relative w-[30px] h-10 shadow-xl">
                    {/* Light spot handled via custom CSS ::before */}
                </div>
                
                {/* Ripple Effect (ripple) */}
                <div className="custom-ripple absolute bottom-[-5px]"></div>
            </div>

            {/* Chevron Arrows (chevron-container) */}
            <div className="custom-chevron-container mt-5 flex flex-col space-y-[-8px]">
                <div className="custom-chevron" style={{ animationDelay: '0s' }}></div>
                <div className="custom-chevron" style={{ animationDelay: '0.3s' }}></div>
                <div className="custom-chevron" style={{ animationDelay: '0.6s' }}></div>
            </div>

            {/* Text Label (scroll-text) */}
            {/* <div className=" mt-3 text-xs font-semibold tracking-wider text-gray-300 uppercase">
                Explore More
            </div> */}
        </div>
    );
};

export default ScrollIndicator;