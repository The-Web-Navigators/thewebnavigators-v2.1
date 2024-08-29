// src/pages/Home.js
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

export default function Home() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className={`bg-white text-black dark:bg-gray-900 dark:text-white min-h-screen flex items-center justify-center`}>
      <div>
        <p>
          This component changes color based on the theme.
        </p>
        <button
          onClick={toggleTheme}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
        </button>
      </div>
    </div>
  );
}
