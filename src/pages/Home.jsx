// src/pages/Home.js
"use client";
import { cn } from "../lib/utils";

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

// Magic UI Components
import RetroGrid from "../components/magicui/retro-grid";
import Meteors from "../components/magicui/meteors";

import AvatarCircles from "../components/magicui/avatar-circles";

// Import Components
import { AnimatedGradientTextComponent } from '../components/react/AnimatedGradientTextComponent';
import { ShimmerButtonComponent } from '../components/react/ShimmerButtonComponent';
import { MarqueeComponent } from '../components/react/MarqueeComponent';
import { Link } from 'react-router-dom';
import { NumberTickerComponent } from '../components/react/NumberTickerComponent';
import Portfolio from "./Portfolio";
import WhatWeDo from "./WhatWeDo";
import MeetTheTeam from "../components/react/MeetTheTeam";

const avatarUrls = [
    "https://avatars.githubusercontent.com/u/16860528",
    "https://avatars.githubusercontent.com/u/20110627",
    "https://avatars.githubusercontent.com/u/106103625",
    "https://avatars.githubusercontent.com/u/59228569",
];

// Reviews
const reviews = [
    {
        clientName: "Andrew Davies",
        clientUsername: "@andrewdavies", // Derived from clientName
        reviewBody: 'Very fast turnaround, did the job as requested, no issues or problems, would use again',
        clientProfilePhoto: 'https://www.upwork.com/profile-portraits/c1ETy2V41TYEMbK_UkE4Gp_QndW-EkANRhGmDwftqk6BJiP7PAXAAoDxfQp2xhzsPG',
        projectScreenshot: "https://magicui.design/showcase/aomni.png", // Reuse URL
    },
    {
        clientName: "Yang Henry",
        clientUsername: "@yanghenry", // Derived from clientName
        reviewBody: 'Very Patient and talented. This work was extended for a month because I was continuously asking for changes, but Jatin was always very patient and successfully completed all the work that I asked for. I really appreciate his hard work. Meanwhile, he spent a lot of time communicating with me regarding to the project. His way of expressing was pretty clear and polite. I would highly recommend hiring him for your project.',
        clientProfilePhoto: 'https://www.upwork.com/profile-portraits/c1fFy29XOhI1nk0OdyqgvxMfhOyg-aWJmjGg4cnQa0VtDzHjSj5Qi_9CSboencGoR_',
        projectScreenshot: "https://magicui.design/showcase/cognosys.png", // Reuse URL
    },
    {
        clientName: "Yang Henry",
        clientUsername: "@yanghenry", // Derived from clientName
        reviewBody: 'Jatin has done a great job on my full stack development project. My project is really big but he managed to get every step done perfectly. Also he is always full of pashion & his working speed is fast. He has professional skills and knowledge that allow him to finish complicated tasks. I Really enjoy the experience working with him and will continue working with him on the further changes.',
        clientProfilePhoto: 'https://www.upwork.com/profile-portraits/c1fFy29XOhI1nk0OdyqgvxMfhOyg-aWJmjGg4cnQa0VtDzHjSj5Qi_9CSboencGoR_',
        projectScreenshot: "https://magicui.design/showcase/infisical.png", // Reuse URL
    },
    {
        clientName: "Yang Henry",
        clientUsername: "@yanghenry", // Derived from clientName
        reviewBody: 'I really like the work Jatin has provided. Will release further tasks to him. I really love the work Jatin has provided. He is offering fast & reliable service. He has good knowledge in building a highly-customized website, and I will be working with him more in the future',
        clientProfilePhoto: 'https://www.upwork.com/profile-portraits/c1fFy29XOhI1nk0OdyqgvxMfhOyg-aWJmjGg4cnQa0VtDzHjSj5Qi_9CSboencGoR_',
        projectScreenshot: "https://magicui.design/showcase/llmreport.png", // Reuse URL
    },
    {
        clientName: "Preeti Bhatia",
        clientUsername: "@preetibhatia", // Derived from clientName
        reviewBody: 'Very helpful and very cooperative Thanks Jatin',
        clientProfilePhoto: 'https://www.upwork.com/profile-portraits/c1fBOi4SiUsSNS9jy3lx3VBFjcjj3UnBB_csPdbCTJLbcd2pzUZPxs-foYXB4OubXG',
        projectScreenshot: "https://magicui.design/showcase/zen-browser.png", // Reuse URL
    },
    {
        clientName: "Yerramsetti Chalapathi Rao",
        clientUsername: "@yerramsetti", // Derived from clientName
        reviewBody: 'Jatin Dahiya did exactly what we requested in exactly the right timeframe. Excellent work. A++++',
        clientProfilePhoto: 'https://www.upwork.com/profile-portraits/c1I_JxYtVJPTMbBitDrSeJKXOHzne_45DqldomE3a7gUsLD6XbBAGeAE84bI3qnaP1',
        projectScreenshot: "https://magicui.design/showcase/aomni.png", // Reuse URL
    },
    {
        clientName: "James Lewis",
        clientUsername: "@jameslewis", // Derived from clientName
        reviewBody: 'Excellent work!!!! He gave me exactly what I requested. I am looking forward to using him again in the future🙂',
        clientProfilePhoto: 'https://www.upwork.com/profile-portraits/c1bjAY_NmGz9vYWUYzM-JJ-w4wRshV971Y5xntNd-S1gRQtJ9jXr8IvpcydUBQ9Oyl',
        projectScreenshot: "https://magicui.design/showcase/aomni.png", // Reuse URL
    },
    {
        clientName: "Yerramsetti Chalapathi Rao",
        clientUsername: "@yerramsetti", // Derived from clientName
        reviewBody: 'Jatin Dahiya was great! Completed my task really quickly and was very knowledgeable. Highly recommend!',
        clientProfilePhoto: 'https://www.upwork.com/profile-portraits/c1I_JxYtVJPTMbBitDrSeJKXOHzne_45DqldomE3a7gUsLD6XbBAGeAE84bI3qnaP1',
        projectScreenshot: "https://magicui.design/showcase/zen-browser.png", // Reuse URL
    },
    {
        clientName: "Faizy Jamal",
        clientUsername: "@faizyjamal", // Derived from clientName
        reviewBody: 'I want to thank Jatin, for all the hard work he has done. From start to finish there was always a strong level of respect & understanding for the goal at hand. Working closely with him really took our programming to the next level!! He thinks about problems, finds solutions, and has awesome morale. Great communication, great working skills in outreach, and high work quality and efficiency. He had a DEEP understanding of what work was needed and performed above and BEYOND expectations. The tone of his communication was wonderful and emotionally engaging on all levels. To top it off, his experience is incredibly professional, fast, and reliable. Thank You Again, Faizy Jamal',
        clientProfilePhoto: 'https://www.upwork.com/profile-portraits/c1HW5mZiPPNrTd3O4xUkXnpJ3TN6h7BM5gLrDfD51D2rsNS0f0FhTkSiv4IpDrZ5g-',
        projectScreenshot: "https://magicui.design/showcase/aomni.png", // Reuse URL
    },
    {
        clientName: "Caroline Swamidoss",
        clientUsername: "@carolineswamidoss", // Derived from clientName
        reviewBody: 'Jatin incorporated all the changes that I wanted in the website. He was professional and responded very quickly. I highly recommend him! He is very good at designing websites. I would definitely work with him again. He worked on a Sunday and gave me the desired outcomes for my website',
        clientProfilePhoto: 'https://www.upwork.com/profile-portraits/c1fQHdjbJpBBR474f7aJUnbgBVriwUjJoeizS5Hr00DsVHe9CBAkagrqpZ-1rPQOie',
        projectScreenshot: "https://magicui.design/showcase/zen-browser.png", // Reuse URL
    },
    {
        clientName: "Gavin Gene",
        clientUsername: "@gavingene", // Derived from clientName
        reviewBody: 'Jatin did everything asked of him and more. This small project was completed without a hitch. The front end and the database are functioning properly. Jatin was attentive and understood my requests and asked questions when necessary. We will continue to work with Jatin in the future and I recommend him to anyone looking for a reliable developer.',
        clientProfilePhoto: 'https://www.upwork.com/profile-portraits/c1OEhIAyRd2T5jeUFUcKETENrfxCJEbSryKZUq0vPN_LNmPzW74wW8O6SWQGbN_RPh',
        projectScreenshot: "https://magicui.design/showcase/aomni.png", // Reuse URL
    },
];

const reviewItems = reviews.map((item, index) => {
    // Truncate reviewBody if longer than 80 characters
    const reviewText =
        item.reviewBody.length > 80
            ? `${item.reviewBody.slice(0, 80)}... Read more`
            : item.reviewBody;

    return (
        <figure
            key={index}
            className={cn(
                "relative w-80 cursor-pointer overflow-hidden rounded-xl border p-4",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <img className="rounded-full" width="32" height="32" alt={item.clientName} src={item.clientProfilePhoto} />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">{item.clientName}</figcaption>
                    <p className="text-xs font-medium dark:text-white/40">{item.clientUsername}</p>
                </div>
            </div>
            <blockquote className="mt-2 text-xs dark:text-white">{reviewText}</blockquote>
            <img src={item.projectScreenshot} className="mt-2 rounded-lg" alt="" />
        </figure>
    );
});

export default function Home() {
    const { toggleTheme } = useTheme();

    return (
        <main>
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 size-4 transition-all duration-300 ease-out group-hover:translate-x-1"><path d="m9 18 6-6-6-6"></path></svg>
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
                        <div className="inline-flex items-center text-xs text-tertiary-dark dark:text-tertiary-light">
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

            <WhatWeDo />

            <Portfolio />

            <MeetTheTeam />

            <section id='testimonials' className='mt-44 px-6'>
                <h2 className="mb-4 text-5xl font-bold leading-[1.2] bg-gradient-to-br from-black to-black/40 dark:from-white dark:to-white/40 bg-clip-text py-2 tracking-tighter text-transparent text-center">What People Are Saying</h2>
                <h3 className="mx-auto mb-8 max-w-lg text-balance text-center text-lg font-normal tracking-tight text-gray-400">Don't just take our word for it. Here's what <strong>real people</strong> are saying about our work.</h3>
                <MarqueeComponent marqueeItems={reviewItems} />
            </section>

        </main>
    );
}
