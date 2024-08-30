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
import TextReveal from "../components/magicui/text-reveal";
import Marquee from "../components/magicui/marquee";


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
        Get Started
      </span>
    </ShimmerButton>
  );
}

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

const firstRow = reviews.slice(0, Math.ceil(reviews.length / 2));
const secondRow = reviews.slice(Math.ceil(reviews.length / 2));

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt={name} src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">{name}</figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm dark:text-white">{body}</blockquote>
    </figure>
  );
};

const MarqueeDemo = () => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-black"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-black"></div>
    </div>
  );
};

export default function Home() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <main className='mx-auto flex-1 min-h-screen'>
      <section id='hero' className='relative pt-32 mx-auto h-screen px-6 text-center md:px-8 flex flex-col items-center gap-6 overflow-hidden'>
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
          <ShimmerButtonDemo toggleTheme={toggleTheme} />
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
              <MarqueeDemo />
            </div>
          </div>
        </div>
      </section>

      <section className='container mx-auto'>
       
      </section>

      <section id='text-reveal' className='z-10 flex min-h-[16rem] items-center justify-center rounded-lg bg-white dark:bg-black'>
        <TextReveal text="&quot;Starting from scratch, we design and develop websites tailored precisely to your needs.&quot;" />
      </section>
    </main>
  );
}
