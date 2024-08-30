// src/pages/Home.js
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

// Magic UI Components
import RetroGrid from "../components/magicui/retro-grid";
import Meteors from "../components/magicui/meteors";

// Import Components
import { AnimatedGradientTextComponent } from '../components/react/AnimatedGradientTextComponent';
import { ShimmerButtonComponent } from '../components/react/ShimmerButtonComponent';
import { MarqueeComponent } from '../components/react/MarqueeComponent';
import { BentoGridComponent } from '../components/react/BentoGridComponent';
import { TextRevealComponent } from '../components/react/TextRevealComponent';

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "This is incredible. I'm absolutely blown away.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "This service is top-notch. Highly recommended!",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "Simply amazing. The best I've seen in a long time.",
    img: "https://avatar.vercel.sh/james",
  },
];

export default function Home() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <main className='mx-auto flex-1 min-h-screen'>
      <section id='hero' className='relative pt-32 mx-auto h-screen px-6 text-center md:px-8 flex flex-col items-center gap-6 overflow-hidden'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1, delay: 0.4 }}>
          <AnimatedGradientTextComponent text="The Web Navigators" />
        </motion.div>

        <motion.h1
          className="bg-gradient-to-br from-black to-black/40 dark:from-white dark:to-white/40 bg-clip-text py-2 text-5xl font-medium leading-none tracking-tighter text-transparent sm:text-6xl md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 1, delay: 0.2 }}>
          Navigating the Web’s
          <br className="hidden md:block" />{" "}
          Meteor Showers
        </motion.h1>

        <motion.p
          className="text-lg tracking-tight text-gray-400 md:text-xl text-balance"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1, delay: 0.4 }}>
          We help businesses and individuals develop web applications<br className="hidden md:block" /> tailored to their unique needs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1, delay: 0.8 }}>
          <ShimmerButtonComponent buttonText="Get Started" onClick={toggleTheme} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1, delay: 0.8 }}>
          <Meteors number={10} />
        </motion.div>

        <RetroGrid className='-z-10' />
      </section>

      <section id="clients" class="mx-auto max-w-[80rem] px-6 text-center md:px-8">
        <div class="py-14">
          <div class="mx-auto max-w-screen-xl px-4 md:px-8">
            <h2 class="text-sm font-semibold text-gray-600">TRUSTED BY TEAMS FROM AROUND THE WORLD</h2>
            <div class="mt-6">
              <ul class="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-16 [&_path]:fill-white">
                <li><img src="https://cdn.magicui.design/companies/Google.svg" className="h-8 w-28 px-2 dark:brightness-0 dark:invert" alt='' /></li>
                <li><img src="https://cdn.magicui.design/companies/Microsoft.svg" className="h-8 w-28 px-2 dark:brightness-0 dark:invert" alt='' /></li>
                <li><img src="https://cdn.magicui.design/companies/GitHub.svg" className="h-8 w-28 px-2 dark:brightness-0 dark:invert" alt='' /></li>
                <li><img src="https://cdn.magicui.design/companies/Uber.svg" className="h-8 w-28 px-2 dark:brightness-0 dark:invert" alt='' /></li>
                <li><img src="https://cdn.magicui.design/companies/Notion.svg" className="h-8 w-28 px-2 dark:brightness-0 dark:invert" alt='' /></li>
              </ul>
            </div>
            <div className='mt-6'>
              <MarqueeComponent items={reviews} />
            </div>
          </div>
        </div>
      </section>

      <section className='container mx-auto'>
        <BentoGridComponent />
      </section>

      <section id='text-reveal'>
        <TextRevealComponent text="&quot;Starting from scratch, we design and develop websites tailored precisely to your needs.&quot;" />
      </section>
    </main>
  );
}
