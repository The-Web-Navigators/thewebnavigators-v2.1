// src/pages/Home.js
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

// Magic UI Components
import RetroGrid from "../components/magicui/retro-grid";
import Meteors from "../components/magicui/meteors";
import Marquee from "../components/magicui/marquee";
import AvatarCircles from "../components/magicui/avatar-circles";


// Import Components
import { AnimatedGradientTextComponent } from '../components/react/AnimatedGradientTextComponent';
import { ShimmerButtonComponent } from '../components/react/ShimmerButtonComponent';
import { MarqueeComponent } from '../components/react/MarqueeComponent';
import { BentoGridComponent } from '../components/react/BentoGridComponent';
import { Link } from 'react-router-dom';
import { NumberTickerComponent } from '../components/react/NumberTickerComponent';

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

const showcaseItems = [
    {
        href: '/showcase/aomni',
        imgSrc: 'https://magicui.design/showcase/aomni.png',
        alt: 'aomni.com',
        title: 'aomni.com',
        description: 'Raised seed round from notable investors.',
    },
    {
        href: '/showcase/aomni',
        imgSrc: 'https://magicui.design/showcase/cognosys.png',
        alt: 'aomni.com',
        title: 'aomni.com',
        description: 'Raised seed round from notable investors.',
    },
    {
        href: '/showcase/aomni',
        imgSrc: 'https://magicui.design/showcase/infisical.png',
        alt: 'aomni.com',
        title: 'aomni.com',
        description: 'Raised seed round from notable investors.',
    },
    {
        href: '/showcase/aomni',
        imgSrc: 'https://magicui.design/showcase/llmreport.png',
        alt: 'aomni.com',
        title: 'aomni.com',
        description: 'Raised seed round from notable investors.',
    },
    {
        href: '/showcase/aomni',
        imgSrc: 'https://magicui.design/showcase/zen-browser.png',
        alt: 'aomni.com',
        title: 'aomni.com',
        description: 'Raised seed round from notable investors.',
    },
    // Add more items here
];


const avatarUrls = [
    "https://avatars.githubusercontent.com/u/16860528",
    "https://avatars.githubusercontent.com/u/20110627",
    "https://avatars.githubusercontent.com/u/106103625",
    "https://avatars.githubusercontent.com/u/59228569",
];

export default function Home() {
    const { toggleTheme } = useTheme();

    return (
        <main className='mx-auto flex-1 min-h-screen'>
            <section id='hero' className='relative pt-32 mx-auto h-screen px-6 md:px-8 flex flex-col items-center overflow-hidden'>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 1, delay: 0.4 }}>
                    <AnimatedGradientTextComponent text="The Web Navigators" />
                </motion.div>

                <motion.h1
                    className="bg-gradient-to-br from-black to-black/40 dark:from-white dark:to-white/40 bg-clip-text py-2 text-5xl font-medium leading-none tracking-tighter text-transparent text-center sm:text-6xl md:text-7xl lg:text-8xl"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ease: "easeInOut", duration: 1, delay: 0.2 }}>
                    Navigating the Web’s
                    <br className="hidden md:block" />{" "}
                    Meteor Showers
                </motion.h1>

                <motion.p
                    className="text-lg tracking-tight text-gray-400 md:text-xl text-balance text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 1, delay: 0.4 }}>
                    We help businesses and individuals develop web applications
                    <br className="hidden md:block" /> tailored to their unique needs.
                </motion.p>

                <motion.div
                    className='mt-4 inline-flex items-center gap-4'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 1, delay: 0.8 }}>
                    <ShimmerButtonComponent className="px-8 py-4" buttonText="Get Started" onClick={toggleTheme} />
                    <Link to="/" className="px-8 py-4 rounded-full text-primary-dark dark:text-primary-light bg-secondary-light dark:bg-secondary-dark whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight inline-flex items-center gap-1">
                        Browse Projects
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="ml-1 size-4 transition-all duration-300 ease-out group-hover:translate-x-1"><path d="m9 18 6-6-6-6"></path></svg>
                    </Link>
                </motion.div>

                <div className='mt-4 container flex flex-col items-center justify-center gap-2 sm:flex-row'>
                    <AvatarCircles numPeople={30} avatarUrls={avatarUrls} />
                    <div className='flex flex-col gap-x-2'>
                        <div className="mx-auto flex flex-row items-center justify-start">
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-orange-300">
                                <path d="M7.22303 0.665992C7.32551 0.419604 7.67454 0.419604 7.77702 0.665992L9.41343 4.60039C9.45663 4.70426 9.55432 4.77523 9.66645 4.78422L13.914 5.12475C14.18 5.14607 14.2878 5.47802 14.0852 5.65162L10.849 8.42374C10.7636 8.49692 10.7263 8.61176 10.7524 8.72118L11.7411 12.866C11.803 13.1256 11.5206 13.3308 11.2929 13.1917L7.6564 10.9705C7.5604 10.9119 7.43965 10.9119 7.34365 10.9705L3.70718 13.1917C3.47945 13.3308 3.19708 13.1256 3.25899 12.866L4.24769 8.72118C4.2738 8.61176 4.23648 8.49692 4.15105 8.42374L0.914889 5.65162C0.712228 5.47802 0.820086 5.14607 1.08608 5.12475L5.3336 4.78422C5.44573 4.77523 5.54342 4.70426 5.58662 4.60039L7.22303 0.665992Z" fill="currentColor"></path>
                            </svg>
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-orange-300">
                                <path d="M7.22303 0.665992C7.32551 0.419604 7.67454 0.419604 7.77702 0.665992L9.41343 4.60039C9.45663 4.70426 9.55432 4.77523 9.66645 4.78422L13.914 5.12475C14.18 5.14607 14.2878 5.47802 14.0852 5.65162L10.849 8.42374C10.7636 8.49692 10.7263 8.61176 10.7524 8.72118L11.7411 12.866C11.803 13.1256 11.5206 13.3308 11.2929 13.1917L7.6564 10.9705C7.5604 10.9119 7.43965 10.9119 7.34365 10.9705L3.70718 13.1917C3.47945 13.3308 3.19708 13.1256 3.25899 12.866L4.24769 8.72118C4.2738 8.61176 4.23648 8.49692 4.15105 8.42374L0.914889 5.65162C0.712228 5.47802 0.820086 5.14607 1.08608 5.12475L5.3336 4.78422C5.44573 4.77523 5.54342 4.70426 5.58662 4.60039L7.22303 0.665992Z" fill="currentColor"></path>
                            </svg>
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-orange-300">
                                <path d="M7.22303 0.665992C7.32551 0.419604 7.67454 0.419604 7.77702 0.665992L9.41343 4.60039C9.45663 4.70426 9.55432 4.77523 9.66645 4.78422L13.914 5.12475C14.18 5.14607 14.2878 5.47802 14.0852 5.65162L10.849 8.42374C10.7636 8.49692 10.7263 8.61176 10.7524 8.72118L11.7411 12.866C11.803 13.1256 11.5206 13.3308 11.2929 13.1917L7.6564 10.9705C7.5604 10.9119 7.43965 10.9119 7.34365 10.9705L3.70718 13.1917C3.47945 13.3308 3.19708 13.1256 3.25899 12.866L4.24769 8.72118C4.2738 8.61176 4.23648 8.49692 4.15105 8.42374L0.914889 5.65162C0.712228 5.47802 0.820086 5.14607 1.08608 5.12475L5.3336 4.78422C5.44573 4.77523 5.54342 4.70426 5.58662 4.60039L7.22303 0.665992Z" fill="currentColor"></path>
                            </svg>
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-orange-300">
                                <path d="M7.22303 0.665992C7.32551 0.419604 7.67454 0.419604 7.77702 0.665992L9.41343 4.60039C9.45663 4.70426 9.55432 4.77523 9.66645 4.78422L13.914 5.12475C14.18 5.14607 14.2878 5.47802 14.0852 5.65162L10.849 8.42374C10.7636 8.49692 10.7263 8.61176 10.7524 8.72118L11.7411 12.866C11.803 13.1256 11.5206 13.3308 11.2929 13.1917L7.6564 10.9705C7.5604 10.9119 7.43965 10.9119 7.34365 10.9705L3.70718 13.1917C3.47945 13.3308 3.19708 13.1256 3.25899 12.866L4.24769 8.72118C4.2738 8.61176 4.23648 8.49692 4.15105 8.42374L0.914889 5.65162C0.712228 5.47802 0.820086 5.14607 1.08608 5.12475L5.3336 4.78422C5.44573 4.77523 5.54342 4.70426 5.58662 4.60039L7.22303 0.665992Z" fill="currentColor"></path>
                            </svg>
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-orange-300">
                                <path d="M7.22303 0.665992C7.32551 0.419604 7.67454 0.419604 7.77702 0.665992L9.41343 4.60039C9.45663 4.70426 9.55432 4.77523 9.66645 4.78422L13.914 5.12475C14.18 5.14607 14.2878 5.47802 14.0852 5.65162L10.849 8.42374C10.7636 8.49692 10.7263 8.61176 10.7524 8.72118L11.7411 12.866C11.803 13.1256 11.5206 13.3308 11.2929 13.1917L7.6564 10.9705C7.5604 10.9119 7.43965 10.9119 7.34365 10.9705L3.70718 13.1917C3.47945 13.3308 3.19708 13.1256 3.25899 12.866L4.24769 8.72118C4.2738 8.61176 4.23648 8.49692 4.15105 8.42374L0.914889 5.65162C0.712228 5.47802 0.820086 5.14607 1.08608 5.12475L5.3336 4.78422C5.44573 4.77523 5.54342 4.70426 5.58662 4.60039L7.22303 0.665992Z" fill="currentColor"></path>
                            </svg>
                            <span className="ml-2 text-base font-bold text-tertiary-dark dark:text-tertiary-light">5.0</span>
                        </div>
                        <div class="inline-flex items-center text-xs text-tertiary-dark dark:text-tertiary-light">
                            <span className='whitespace-pre-wrap font-extrabold tracking-tighter'>
                                <NumberTickerComponent value="30" />
                            </span>
                            <span className='leading-snug tracking-tighter'>+ clients all over the world.</span>
                        </div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 1, delay: 0.8 }}>
                    <Meteors number={10} />
                </motion.div>

                <RetroGrid className='-z-10' />
            </section>

            <section id="clients" className="mt-32 container mx-auto px-6 md:px-8">
                <h2 className="text-sm font-semibold text-gray-400 text-center">TRUSTED BY TEAMS FROM AROUND THE WORLD</h2>
                <div className="mt-6">
                    <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-16 [&_path]:fill-white">
                        <li><img src="https://cdn.magicui.design/companies/Google.svg" className="h-8 w-28 px-2 dark:brightness-0 dark:invert" alt='' /></li>
                        <li><img src="https://cdn.magicui.design/companies/Microsoft.svg" className="h-8 w-28 px-2 dark:brightness-0 dark:invert" alt='' /></li>
                        <li><img src="https://cdn.magicui.design/companies/GitHub.svg" className="h-8 w-28 px-2 dark:brightness-0 dark:invert" alt='' /></li>
                        <li><img src="https://cdn.magicui.design/companies/Uber.svg" className="h-8 w-28 px-2 dark:brightness-0 dark:invert" alt='' /></li>
                        <li><img src="https://cdn.magicui.design/companies/Notion.svg" className="h-8 w-28 px-2 dark:brightness-0 dark:invert" alt='' /></li>
                    </ul>
                </div>
            </section>

            <section id="showcase" className='mt-32'>
                <h2 className="bg-gradient-to-br from-black to-black/40 dark:from-white dark:to-white/40 bg-clip-text py-2 text-5xl font-medium leading-none tracking-tighter text-transparent text-center sm:text-5xl md:text-6xl lg:text-7xl">
                    Showcase
                </h2>
                <h3 className="mt-2 text-lg tracking-tight text-gray-400 md:text-xl text-balance text-center">
                    Companies choose Magic UI to build their landing pages.
                </h3>
                <div className="mt-8 relative flex flex-col">
                    <div className="group flex overflow-hidden p-2 flex-row max-w-screen">
                        <div className="flex shrink-0 justify-around flex-row">
                            <Marquee pauseOnHover className="[--duration:20s]">
                                {showcaseItems.map((item, index) => (
                                    <a
                                        key={index}
                                        className="flex flex-col gap-2 group relative overflow-hidden cursor-pointer"
                                        href={item.href}
                                    >
                                        <img
                                            src={item.imgSrc}
                                            alt={item.alt}
                                            width="500"
                                            height="300"
                                            className="size-full object-cover max-h-[300px] rounded-xl"
                                        />
                                        <div className="flex flex-col">
                                            <div className="group inline-flex cursor-pointer items-center justify-start gap-1 duration-200 hover:text-neutral-700 dark:hover:text-neutral-200 text-xl font-semibold text-neutral-700 dark:text-neutral-300">
                                                {item.title}
                                                <svg
                                                    width="15"
                                                    height="15"
                                                    viewBox="0 0 15 15"
                                                    fill="currentColor"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="size-4 translate-x-0 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100"
                                                >
                                                    <path
                                                        d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                                                        fill="currentColor"
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <p className="text-neutral-400 text-sm">
                                                {item.description}
                                            </p>
                                        </div>
                                    </a>
                                ))}
                            </Marquee>
                        </div>
                    </div>
                    <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/12 bg-gradient-to-r from-primary-light dark:from-primary-dark"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/12 bg-gradient-to-l from-primary-light dark:from-primary-dark"></div>
                </div>
            </section>

            <section className='mt-32 container mx-auto px-6 md:px-8'>
                <BentoGridComponent />
            </section>

            <section id='testimonials' className='mt-32 container mx-auto px-6 md:px-8'>
                <h2 className="mb-4 text-5xl font-bold leading-[1.2] bg-gradient-to-br from-black to-black/40 dark:from-white dark:to-white/40 bg-clip-text py-2 tracking-tighter text-transparent text-center">What People Are Saying</h2>
                <h3 className="mx-auto mb-8 max-w-lg text-balance text-center text-lg font-normal tracking-tight text-gray-400">Don't just take our word for it. Here's what <strong>real people</strong> are saying about our work.</h3>
                <MarqueeComponent items={reviews} />
            </section>

        </main>
    );
}
