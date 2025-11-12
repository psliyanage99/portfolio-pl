import React from "react";
// Components & Assets (Kept only what's used or needed for data structure)
import PortFolio from '../assets/portfolio_site.png'; 
import BillingSystem from '../assets/billing_system.jpg';
import resource_mockup from '../assets/resource_mockup.jpg';

// --- Icon Imports ---

// Fa (Font Awesome) - Used for nav and general icons
import {
    FaHome, 
    FaUser, 
    FaBriefcase, 
    FaGraduationCap, 
    FaCode, 
    FaEnvelope,
    FaDatabase, 
    FaGitAlt,   
    FaAws,      
    FaPlug,     
    FaJava,  
    FaGithub, 
    FaLinkedinIn, 
    FaFacebookF, 
    FaInstagram, 
    FaYoutube, 
    FaSun, 
    FaMoon,
    FaAdjust,
} from "react-icons/fa";

import {FaXTwitter} from "react-icons/fa6"
// Si (Simple Icons) - Used for specific technologies
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiBootstrap,
    SiTailwindcss,
    SiReact,
    SiFigma,
    SiNodedotjs,
    SiPython,
    SiSpring,    
    SiPostman,
    SiJson,
    SiMysql,
    SiSqlite,
    SiGithub,
    SiDotnet,    
} from "react-icons/si";


// --- SKILLS DATA ---
export const skillsData = [
    { name: "HTML", icon: <SiHtml5 /> },
    { name: "CSS", icon: <SiCss3 /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "Bootstrap", icon: <SiBootstrap /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "React JS", icon: <SiReact /> },
    { name: "Figma", icon: <SiFigma /> },
    { name: "Node JS", icon: <SiNodedotjs /> },
    { name: "Python", icon: <SiPython /> },
    { name: "Java", icon: <FaJava /> },
    { name: "Spring Boot", icon: <SiSpring /> },
    { name: "REST API", icon: <FaPlug /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "JSON", icon: <SiJson /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "MSSQL", icon: <FaDatabase /> }, 
    { name: "SQLite", icon: <SiSqlite /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <SiGithub /> },
    { name: "AWS", icon: <FaAws /> },
];

// --- NAVIGATION DATA ---
export const navItems = [
    { id: "home", label: "Home", icon: <FaHome /> },
    { id: "about", label: "About", icon: <FaUser /> },
    { id: "work", label: "Work", icon: <FaBriefcase /> },
    { id: "education", label: "Education", icon: <FaGraduationCap /> },
    { id: "projects", label: "Projects", icon: <FaCode /> },
    { id: "contact", label: "Contact", icon: <FaEnvelope /> },
];

// --- EXPERIENCE DATA ---
export const experienceData = [
    {
        jobTitle: "Full Stack Engineer",
        // companyName: "Seeking New Opportunities",
        dateRange: "Open to Work",
        description: "Motivated Full Stack Engineer passionate about building high-performance web applications using modern technologies. Experienced in developing scalable front-end and back-end solutions, optimizing performance, and delivering seamless user experiences.",
        technologies: ["React", "Spring Boot", "MySQL", "AWS", "Docker", "Git", "REST API", "..."],
        type: "CURRENT",
        location: "Remote / Open to Relocation", 
        responsibilities: [ 
            "Develop responsive and dynamic web applications using React and Spring Boot.",
            "Design and integrate RESTful APIs with secure authentication and optimized performance.",
            "Implement CI/CD pipelines and containerized deployments with Docker and AWS.",
            "Collaborate on UI/UX improvements and ensure cross-platform compatibility.",
        ],
        skills: ["HTML", "CSS", "JavaScript", "JSP", "React", "Bootstrap", "Tailwind", "Node.js", "Java", "Spring Boot", "RESTful APIs", "MySQL", "MongoDB", "Firebase", "AWS", "Docker", "Postman", "Jira", "Asana", "Git", "GitHub", "Visual Studio Code", "Eclipse IDE", "IntelliJ IDEA"], 
    },
    {
        jobTitle: "Intern Software Developer",
        companyName: "Bluechip Technology Asia (Pvt) Ltd",
        dateRange: "Jun 2023 - Jan 2024",
        description: "Contributed to developing full-stack web applications, integrating modern front-end and back-end technologies to deliver responsive and efficient digital solutions.",
        technologies: ["React.js", "Node.js", "Firebase", "MongoDB", "SQL", "Git", "Bootstrap", "..."],
        type: "PAST",
        location: "Remote", 
        responsibilities: [
            "Developed responsive and interactive web applications using React.js, ensuring cross-browser compatibility and reusability with Bootstrap UI components.",
            "Built backend services using Node.js to connect client-side interfaces with server-side logic for efficient data processing.",
            "Implemented Firebase for authentication, real-time database management, and cloud functions.",
            "Integrated MongoDB and SQL databases to manage both structured and unstructured data efficiently.",
            "Collaborated in a version-controlled environment using Git and GitHub, maintaining clean code practices and supporting team-based development.",
        ],
        skills: ["React.js", "Node.js", "Firebase", "MongoDB", "SQL", "Bootstrap", "Git", "GitHub"], 
    },
    
];

// --- EDUCATION DATA ---
export const educationData = [
    {
        id: 1,
        institution: "Faculty of Technology, University of Colombo",
        degree: "Bachelor of Information and Communication Technology",
        dateRange: "2020 - 2025",
        location: "Colombo, Sri Lanka",
        description: "Graduated with an Bachelor’s Degree in Information and Communication Technology(Honours), specializing in Software Engineering, Data Science, and Cloud Computing.",
        status: "Completed",
        coursework: ["Data Structures and Algorithms", "Object-Oriented Programming", "Database Management Systems", "Software Engineering", "Web Application Development", "Mobile Application Development", 
            "Computer Networks", "Operating Systems", "Human-Computer Interaction", "Discrete Mathematics", "Bioinformatics", "Application Laboratory", "IT Project Management", "Information System Security", 
            "Information System Modeling", "Multimedia and Web Design", "IT Systems Acquisition", "Agile Software Development", "ICT Innovation", "Digital Forensics", "Essentials ICT and Social Computing", 
            "Information Systems Management", "Systems & Network Administration", "Professional Practice in ICT", "Introduction to Software Quality Assurance", "Graphic Design and Creative Development", 
            "Enterprise Resource Planning Systems", "Introduction to GIS and Remote Sensing", "Data Analytics and Business Intelligence", "Software Quality Management and Test Automation"],
        achievements:[
            'Final Year Research Project: Mobile-Based Disease Detection System for Tomato Leaves',
            "Active member of Member of INTSEC - By UOC and SEDS Club",
        ],
        skills:["HTML", "CSS", "JavaScript", "Flutter", "Android", "C", "Python", "Java", "DSA", "OOP"],
        certificates: [
            { 
                name: "Bachelor of Information and Communication Technology Honours - Degree Certificate", 
                link: "https://drive.google.com/file/d/1Lhb2dd0YVObh0KtjTWtJNpNhyGBAifa-/preview" 
            },
        ],
        icon: <FaGraduationCap />,
    },
    {
        id: 2,
        institution: "H/ Rajapaksha Central Collage, Weeraketiya",
        degree: "G.C.E. Advanced Level Examination, 2018 August - Technology Stream",
        dateRange: "2016 - 2018",
        location: "Weeraketiya, Sri Lanka",
        description: "Successfully completed the Advanced Level examination in the Technology stream, emphasizing Engineering Technology and Information Technology.",
        status: "Completed",
        subjects:["Engineering Technology - B", "Science For Technology - B", "Information and Communication Technology - B", "General Information Technology - A"],
        achievements:[
            "District Rank: 19", 
            "Z-score: 1.6704 in Engineering Technology",
        ],
        certificates: [
            { 
                name: "G.C.E. Advanced Level (2019) - Results Schedule", 
                link: "https://drive.google.com/file/d/139MhljBND_89qsw7o0HUwd9_W5Wzik7A/preview" 
            },
            { 
                name: "G.I.T. Examination (2018) - Results Schedule", 
                link: "https://drive.google.com/file/d/13DfEUM_8w1sHLYZBEi6OQZedwkGqfQLa/preview"
            },
        ],
        icon: <FaGraduationCap />,
    },
    {
        id: 3,
        institution: "H/Godavanagoda Junior College, Tangalle",
        degree: "G.C.E. Ordinary Level Examination, 2015 December",
        dateRange: "2005 - 2015",
        location: "Tangalle, Sri Lanka",
        description: "Successfully completed the Ordinary Level examination with excellent results, demonstrating strong academic performance and dedication.",
        status: "Completed",
        subjects:["Buddhism", "Sinhala", "Mathematics", "Science", "ICT", "History", "English", "Art", "Citizenship education"],
        icon: <FaGraduationCap />,
    },
];

// --- PROJECTS DATA ---
export const PROJECTS = [
    {
        id: 1,
        title: 'PORTFOLIO.PL',
        date: 'October 2025',
        type: 'Web Application',
        category: 'web',
        description: 'A personal portfolio website with a sleek modern interface featuring smooth animations and a responsive layout.',
        image: PortFolio,
        techStack: ['React', 'Tailwind CSS', 'Vite', 'JavaScript/ES6+', 'React Context API', 'CSS3', 'EmailJS', 'GitHub Pages'],
        liveLink: '#',
        codeLink: 'https://github.com/psliyanage99/my-portfolio.git',
    },
    {
        id: 2,
        title: 'Billing & Sales Management System',
        date: 'September 2025',
        type: 'Web Application',
        category: 'web',
        description: 'Billing and sales management system for streamlined inventory, order processing, and sales tracking.',
        image: BillingSystem,
        techStack: ['React', 'Bootstrap', 'Spring Boot', 'Figma', 'MySQL', 'AWS S3', 'GitHub'],
        // liveLink: '#',
        codeLink: 'https://github.com/psliyanage99/billing-software.git',
    },
    {
        id: 3,
        title: 'Inventory Management System',
        date: 'June 2025',
        type: 'Web Application',
        category: 'web',
        description: 'Web application to manage inventory items with role-based authentication for admin and users.',
        image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=600&fit=crop',
        techStack: ['React', 'Spring Boot', 'MySQL', 'GitHub'],
        // liveLink: '#',
        codeLink: 'https://github.com/psliyanage99/inventory-management-system.git',
    },
    {
        id: 4,
        title: 'Resource Allocation System - UOC',
        date: 'June 2023',
        type: 'Web Application',
        category: 'web',
        description: 'This system is an online resource allocation system project. It includes all the features and functions needed to efficiently reserve and manage resources in our university such as labs, auditorium, playground, etc.',
        image: resource_mockup,
        techStack: ['HTML', 'CSS', 'Bootstrap', 'JQuery', 'PHP', 'GitHub'],
        // liveLink: '#',
        codeLink: 'https://github.com/psliyanage99/Resource_allocation_system.git',
    },
    
];

// --- CATEGORIES DATA ---
export const CATEGORIES = [
    { name: 'All', filter: 'all' },
    { name: 'Web Application', filter: 'web' },
    { name: 'Mobile Application', filter: 'mobile' },
    { name: 'Desktop Application', filter: 'desktop' },
];

export const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
];

export const socialMedia = [
    { icon: FaGithub, title: 'GitHub', href: 'https://github.com/psliyanage99' },
    { icon: FaLinkedinIn, title: 'LinkedIn', href: 'https://www.linkedin.com/in/praneeth-liyanage/' },
    { icon: FaXTwitter, title: 'X', href: 'https://x.com/praneethsb99' },
    { icon: FaFacebookF, title: 'Facebook', href: 'https://www.facebook.com/praneeth.sandaruwan.357' },
    { icon: FaInstagram, title: 'Instagram', href: 'https://www.instagram.com/praneeth.sl/' },
    // { icon: FaYoutube, title: 'YouTube', href: '#' },
];

export const themeOptions = [
    // { theme: 'default', label: 'Default', icon: FaAdjust },
    { theme: 'dark', label: 'Dark', icon: FaMoon },
    { theme: 'light', label: 'Light', icon: FaSun },
];