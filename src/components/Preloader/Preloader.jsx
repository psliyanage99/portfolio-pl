// src/components/Preloader/TerminalPreloader.jsx

import React, { useEffect, useRef } from 'react';
import './Preloader.css';
import { FaLaptopCode, FaWrench, FaServer, FaBolt } from 'react-icons/fa'; // Icons for tech icons

const statusMessagesData = [
    { text: '✓ Core modules loaded', delay: 300, class: 'success' },
    { text: '✓ Dependencies resolved', delay: 800, class: 'success' },
    { text: '⟳ Compiling components...', delay: 1300, class: 'info' },
    { text: '✓ API connected', delay: 1800, class: 'success' },
    { text: '✓ Assets optimized', delay: 2300, class: 'success' },
    { text: '⟳ Finalizing interface build...', delay: 2800, class: 'info' }
];

const Preloader = ({ progress, fadeOut, messages }) => {
    const binaryBgRef = useRef(null);
    const terminalOutputRef = useRef(null);

    // --- 1. Binary Rain Logic ---
    useEffect(() => {
        if (!binaryBgRef.current) return;
        const binaryBg = binaryBgRef.current;
        const binaryChars = '01';
        
        const createBinaryColumn = () => {
            const column = document.createElement('div');
            column.className = 'binary-column';
            column.style.left = Math.random() * 100 + '%';
            column.style.animationDuration = (Math.random() * 3 + 2) + 's';
            
            let text = '';
            for (let i = 0; i < 20; i++) {
                text += binaryChars[Math.floor(Math.random() * 2)] + '<br>';
            }
            column.innerHTML = text;
            
            binaryBg.appendChild(column);
            
            setTimeout(() => column.remove(), 5000);
        };
        
        // Create binary columns continuously (every 200ms)
        const intervalId = setInterval(createBinaryColumn, 200);
        
        return () => clearInterval(intervalId);
    }, []);

    // --- 2. Scroll Status Messages ---
    useEffect(() => {
        if (terminalOutputRef.current) {
            terminalOutputRef.current.scrollTop = terminalOutputRef.current.scrollHeight;
        }
    }, [messages]);


    // Determine progress bar width dynamically
    const progressBarWidth = Math.min(100, progress);

    return (
        <div 
            id="loader" 
            className={`loader-wrapper backdrop-blur-3xl ${fadeOut ? 'fade-out' : ''}`}
        >
            {/* Binary Background */}
            <div className="binary-bg" ref={binaryBgRef}></div>
            
            {/* Tech Icons Floating */}
            <div className="tech-icons">
                <FaBolt className="tech-icon" style={{ top: '10%', left: '15%', animationDelay: '0s' }} />
                <FaLaptopCode className="tech-icon" style={{ top: '70%', left: '80%', animationDelay: '1s' }} />
                <FaWrench className="tech-icon" style={{ top: '30%', left: '85%', animationDelay: '1.5s' }} />
                <FaServer className="tech-icon" style={{ top: '80%', left: '20%', animationDelay: '2s' }} />
            </div>
            
            {/* Terminal Container */}
            <div className="terminal-container backdrop-blur-2xl">
                {/* Terminal Header */}
                <div className="terminal-header">
                    <div className="terminal-btn btn-close"></div>
                    <div className="terminal-btn btn-minimize"></div>
                    <div className="terminal-btn btn-maximize"></div>
                </div>
                
                {/* Code Icon */}
                <div className="code-icon">
                    <div className="brackets">&lt;/&gt;</div>
                </div>
                
                {/* Terminal Output (Initial fixed lines) */}
                <div className="terminal-output">
                    <div className="terminal-line" style={{ animationDelay: '0.2s' }}>
                        <span className="prompt">$</span> Initializing system...
                    </div>
                    <div className="terminal-line" style={{ animationDelay: '0.5s' }}>
                        <span className="prompt">$</span> Loading core modules...
                    </div>
                    <div className="terminal-line" style={{ animationDelay: '0.8s' }}>
                        <span className="prompt">$</span> Connecting to resources...
                    </div>
                    <div className="terminal-line" style={{ animationDelay: '1.1s' }}>
                        <span className="prompt">$</span> Building interface<span className="cursor"></span>
                    </div>
                </div>
                
                {/* Status Messages (Dynamic output) */}
                <div className="status-messages" ref={terminalOutputRef}>
                    {messages.map((msg, index) => (
                        <div key={index} className={`status-line ${msg.class}`} style={{ animationDelay: '0.1s' }}>
                            {msg.text}
                        </div>
                    ))}
                </div>
                
                {/* Loading Bar */}
                <div className="loading-container">
                    <div className="loading-label">
                        <span>Loading Assets</span>
                        <span className="percentage">{Math.floor(progress)}%</span>
                    </div>
                    <div className="progress-bar-container">
                        {/* Progress bar controlled by React state */}
                        <div 
                            className="progress-bar" 
                            style={{ width: `${progressBarWidth}%` }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Preloader;