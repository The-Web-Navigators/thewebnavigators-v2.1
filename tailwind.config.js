/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class', // Use class-based dark mode
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist', ...defaultTheme.fontFamily.sans],
      },
      fontWeight: {
        thin: 100,      // Thin
        extraLight: 200, // UltraLight
        light: 300,     // Light
        medium: 500,    // Medium
        semiBold: 600,  // SemiBold
        bold: 700,      // Bold
        extraBold: 800, // UltraBlack
        black: 900,     // UltraBlack
      },
      colors: {
        // Light Theme Colors
        'primary-light': '#ffffff', // Light background
        'secondary-light': '#f0f0f0', // Slightly darker than primary
        'tertiary-light': '#e0e0e0', // Even darker
        'accent-light': '#007bff', // Accent color (e.g., blue)
        'text-light': '#000000', // Main text color

        // Dark Theme Colors
        'primary-dark': '#000000', // Dark background
        'secondary-dark': '#1a1a1a', // Slightly lighter than primary
        'tertiary-dark': '#333333', // Even lighter
        'accent-dark': '#ff5722', // Accent color (e.g., orange)
        'text-dark': '#ffffff', // Main text color
      },
      animation: {
        gradient: "gradient 8s linear infinite",
        grid: "grid 15s linear infinite",
        "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
        slide: "slide var(--speed) ease-in-out infinite alternate",
        meteor: "meteor 5s linear infinite",
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
        orbit: "orbit calc(var(--duration)*1s) linear infinite",
      },
      keyframes: {
        gradient: {
          to: {
            backgroundPosition: "var(--bg-size) 0",
          },
        },
        grid: {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        },
        "spin-around": {
          "0%": {
            transform: "translateZ(0) rotate(0)",
          },
          "15%, 35%": {
            transform: "translateZ(0) rotate(90deg)",
          },
          "65%, 85%": {
            transform: "translateZ(0) rotate(270deg)",
          },
          "100%": {
            transform: "translateZ(0) rotate(360deg)",
          },
        },
        slide: {
          to: {
            transform: "translate(calc(100cqw - 100%), 0)",
          },
        },
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: 1 },
          "70%": { opacity: 1 },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: 0,
          },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
        orbit: {
          "0%": {
            transform:
              "rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)",
          },
          "100%": {
            transform:
              "rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)",
          },
        },
      },
    },
  },
  plugins: [],
}
