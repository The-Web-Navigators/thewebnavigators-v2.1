// src/pages/Home.js
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { ChevronRight } from "lucide-react";
import { cn } from "../lib/utils";
import AnimatedGradientText from "../components/magicui/animated-gradient-text";
import RetroGrid from "../components/magicui/retro-grid";
import ShimmerButton from "../components/magicui/shimmer-button";
import Meteors from "../components/magicui/meteors";

const AnimatedGradientButton = () => {
  return (
    <div className="z-10 flex items-center justify-center">
      <AnimatedGradientText>
        🎉 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
        <span className={cn(`inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,)}>
          The Web Navigators
        </span>
        <ChevronRight className="ml-1 size-3 transition-transform ease-in-out duration-300 text-primary-dark dark:text-primary-light group-hover:translate-x-0.5" />
      </AnimatedGradientText>
    </div>
  );
}

const ShimmerButtonDemo = ({ toggleTheme }) => {
  return (
    <ShimmerButton className="shadow-2xl" onClick={toggleTheme}>
      <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
        Shimmer Button
      </span>
    </ShimmerButton>
  );
}

export default function Home() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <main className='mx-auto flex-1 overflow-hidden bg-primary-light dark:bg-primary-dark min-h-screen transition-colors ease-in-out duration-500'>
      <section id='hero' className='relative'>
        <motion.div
          className="text-lg tracking-tight text-gray-400 md:text-xl text-balance"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1, delay: 0.8 }}>
          <Meteors number={10} />
        </motion.div>
        <div className='container mx-auto mt-32 px-6 text-center md:px-8 flex flex-col items-center gap-6'>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 0.4 }}>
            <AnimatedGradientButton />
          </motion.div>
          <motion.h1
            className="bg-gradient-to-br from-black to-black/40 dark:from-white dark:to-white/40 bg-clip-text py-2 text-5xl font-medium leading-none tracking-tighter text-transparent sm:text-6xl md:text-7xl lg:text-8xl"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 0.2 }}>
            Magic UI is the new way
            <br className="hidden md:block" />
            to build landing pages.
          </motion.h1>

          <motion.p
            className="text-lg tracking-tight text-gray-400 md:text-xl text-balance"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 0.4 }}>
            Beautifully designed, animated components and templates built with<br className="hidden md:block" /> Tailwind CSS, React, and Framer Motion.
          </motion.p>
          <motion.div
            className="text-lg tracking-tight text-gray-400 md:text-xl text-balance"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 0.8 }}>
            <ShimmerButtonDemo toggleTheme={toggleTheme} />
          </motion.div>
        </div>
        <RetroGrid />
      </section>
      <section className='w-full h-[5000px]'></section>
    </main>
  );
}
