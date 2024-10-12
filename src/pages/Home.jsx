// src/pages/Home.js
"use client";

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
import { Link } from 'react-router-dom';
import { NumberTickerComponent } from '../components/react/NumberTickerComponent';
import Portfolio from "./Portfolio";
import WhatWeDo from "./WhatWeDo";
import MeetTheTeam from "../components/react/MeetTheTeam";

import RedWaveVPLogo from '../assets/images/redwavevp-logo.png';
import JpLewisLogo from '../assets/images/jplewis-logo.jpeg';
import SponsorProLogo from '../assets/images/SponsorPro-logo.png';
import Testimonials from "../components/react/Testimonials";

const avatarUrls = [
    "https://avatars.githubusercontent.com/u/16860528",
    "https://avatars.githubusercontent.com/u/20110627",
    "https://avatars.githubusercontent.com/u/106103625",
    "https://avatars.githubusercontent.com/u/59228569",
];

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
                    <ShimmerButtonComponent className="px-4 py-4 lg:px-8" buttonText="Get Started" onClick={toggleTheme} />
                    <Link to="/portfolio" className="px-4 py-4 lg:px-8 rounded-full text-primary-dark dark:text-primary-light bg-secondary-light dark:bg-secondary-dark whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight inline-flex items-center gap-1">
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
                <h2 className="text-sm font-semibold text-gray-400 text-center">TRUSTED BY CLIENTS FROM AROUND THE WORLD</h2>
                <div className="mt-6">
                    <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-16 [&_path]:fill-white">
                        <Link to='https://guwi-dashboard-v2-1.vercel.app/' target="_blank" className="font-medium flex flex-col items-center">
                            <div>
                                <span className=" text-green-600">Gu</span>
                                <span className="dark:text-primary-light">-Wi</span>
                            </div>
                            <span className="text-[8px] dark:text-primary-light">Gutters & Windows</span>
                        </Link>
                        <Link to='https://threadlab.com.au/' target="_blank" className="dark:text-primary-light"><span>Thread<b>Lab.</b></span></Link>
                        <Link to='https://redwavevp.com/' target="_blank" className="flex items-center gap-2">
                            <img src={RedWaveVPLogo} className="w-8" alt='' />
                            <div className="flex flex-col text-[10px]">
                                <span className="dark:text-primary-light uppercase">Redwave</span>
                                <span className="dark:text-primary-light uppercase">Venture Partners</span>
                            </div>
                        </Link>
                        <Link to='https://jplewisgroup.com/' target="_blank" className="flex items-center gap-2">
                            <img src={JpLewisLogo} className="h-10 w-10 object-contain rounded-full" alt='' />
                            <div className="flex flex-col text-[10px]">
                                <span className="dark:text-primary-light uppercase">Jp Lewis Group</span>
                                <span className="dark:text-primary-light uppercase">LLC</span>

                            </div>
                        </Link>
                        <Link to='https://sponsorpro-70d8f.web.app/' target="_blank" className="flex items-center gap-2">
                            <img src={SponsorProLogo} className="h-8" alt='' />
                            <span className="dark:text-primary-light">Sponsor<b>Pro</b></span>
                        </Link>
                    </div>
                </div>
            </section>

            <WhatWeDo />

            <Portfolio />

            <MeetTheTeam />

            <Testimonials/>

        </main>
    );
}
