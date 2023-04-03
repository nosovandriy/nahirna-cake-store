/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      tablet: "640px",
      laptop: "1024px",
      desktop: "1200px",
      desktopHD: "1440px",
    },
    extend: {
      gridTemplateAreas: {
        "hero-mob": ["image carousel", "text text"],
        "hero-desk": ["text image carousel"],
        "about-mob": ["small-image image", "text text"],
        "about-desk": ["small-image image text"],
      },
      gridTemplateColumns: {
        "hero-mob": "50% 50%",
        "hero-tab": "60% 40%",
        "hero-desk": "40% 35% 25%",
        "about-mob": "35% 65%",
        "about-tab": "40% 60%",
        "about-desk": "24% 38.5% 37.5%",
      },
      gridTemplateRows: {
        "hero-mob": "1fr",
      },
      colors: {
        themeBrown: {
          20: "#DFD9D7",
          50: "#81675F",
          100: "#624137",
          120: "#3C2A1C",
        },
        themeCaramel: "#FDFAF5",
        themeGray: {
          0: "#FFFFFF",
          10: "#F0F1F5",
          20: "#D5D6DC",
          30: "#A9AEB0",
          40: "#66676B",
          60: "#40404B",
          100: "#121214",
        },
      },
      fontFamily: {
        title: ["var(--font-sofia)"],
        text: ["var(--font-inter)", "sans-serif"],
      },
      animation: {
        fadeIn: "fadeIn 1s",
        bounce:
          "bounce 0.5s alternate cubic-bezier(0.95, 0.05, 0.795, 0.035) infinite",
        slideUp: "slideUp 0.5s",
        slideUpEaseInOut: "slideUp 0.5s ease-in-out",
        slideUpCubiBezier: "slideUp 1s cubic-bezier(0.165, 0.84, 0.44, 1)",
        spinSlow: "spin 30s linear infinite",
        zoomIn: "zoomIn 1s",
      },
      animationDelay: {
        0: "0s",
        2: "0.2s",
        4: "0.4s",
        6: "0.6s",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideUp: {
          from: { transform: "translateY(100%)" },
          to: { transform: "translateY(0)" },
        },
        bounce: {
          from: { transform: "translateY(10px)" },
          to: { transform: "translateY(0)" },
        },
        zoomIn: {
          from: { transform: "scale(0)" },
          to: { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@savvywombat/tailwindcss-grid-areas"),
  ],
};
