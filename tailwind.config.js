/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class', // Use class-based dark mode
  content: ["./src/**/*.{html,js,jsx,mjs}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['geistsans', ...defaultTheme.fontFamily.sans],
      },
      fontWeight: {
        'ultralight': 100,
        'light': 300,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
        'ultrablack': 800,
      },
    },
  },
  plugins: [],
}
