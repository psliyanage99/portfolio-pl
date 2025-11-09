import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { theme } = useTheme();
    
    
    const isDark = theme !== 'light';

    
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    // Show button if page is scrolled down more than 300px
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        // Cleanup the event listener when the component unmounts
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    aria-label="Scroll to top"
                    className={`
                        p-4 rounded-xl shadow-lg transition-opacity duration-300 transform 
                        flex items-center justify-center text-violet-600/80 cursor-pointer
                        
                        /* Theme-based appearance */
                        ${isDark
                            ? 'border border-violet-600/80 hover:bg-violet-600 hover:text-white hover:drop-shadow-2xl hover:shadow-violet-600/70' 
                            : 'border border-violet-700 hover:bg-violet-800 hover:text-white'
                        }
                        
                        opacity-100 hover:scale-105 active:scale-95
                    `}
                >
                    <FaArrowUp className="w-5 h-5" />
                </button>
            )}
        </div>
    );
};

export default ScrollToTop;