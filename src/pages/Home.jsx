// src/pages/Home.js
import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { ChevronRight } from "lucide-react";
import { cn } from "../lib/utils";
import AnimatedGradientText from "../components/magicui/animated-gradient-text";

const AnimatedGradientTextDemo = () => {
  return (
    <div className="z-10 flex items-center justify-center">
      <AnimatedGradientText>
        🎉 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
        <span className={cn(`inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`)}>
          Introducing Magic UI
        </span>
        <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out" />
      </AnimatedGradientText>
    </div>
  );
}

export default function Home() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <main className='mx-auto flex-1 overflow-hidden bg-primary-light dark:bg-primary-dark min-h-screen transition-colors ease-in-out duration-500'>
      <section id='hero' className='relative mx-auto mt-32 max-w-[80rem] px-6 text-center md:px-8'>
        <AnimatedGradientTextDemo />
        <motion.h1 
          className='bg-gradient-to-br from-black to-black/40 dark:from-white dark:to-white/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent sm:text-6xl md:text-7xl lg:text-8xl transition-opacity ease-in-out duration-500'
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
        >
          Magic UI is the new way
          <br className="hidden md:block" />
          to build landing pages.
        </motion.h1>
        <button 
          onClick={toggleTheme} 
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors ease-in-out duration-500"
        >
          Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
        </button>
      </section>
    </main>
  );
}
