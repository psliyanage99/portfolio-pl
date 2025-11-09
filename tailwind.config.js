// tailwind.config.js

// Using require syntax for CommonJS module format (typical for React/Vite/Tailwind setups)
/** @type {import('tailwindcss').Config} */
export default { // Use export default for Vite setups
  
  // ✅ FIX: Missing darkMode setting, critical for theme toggling
  // This tells Tailwind to use the presence of the 'dark' or 'light' 
  // class on the <html> element to determine the active theme.
  darkMode: 'class', 

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      // ✅ FIX: The 'colors' object needs to be inside 'extend'
      colors: { 
        grape: "var(--grape)",
      },
      // You can add other extensions here (spacing, fontSize, etc.)
    },
  },
  
  plugins: [],
};