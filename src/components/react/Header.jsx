import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';


export default function Header() {
    const { isDarkMode, toggleTheme } = useTheme();

    const [navbarVisible, setNavbarVisible] = useState(false);

    // Effect to toggle body scroll
    useEffect(() => {
        if (navbarVisible) {
            document.body.style.overflow = 'hidden'; // Disable scrolling
        } else {
            document.body.style.overflow = ''; // Re-enable scrolling
        }

        // Cleanup function to reset body scroll when component unmounts
        return () => {
            document.body.style.overflow = '';
        };
    }, [navbarVisible]);

    // Toggle navbar visibility
    const toggleNavBar = useCallback(() => {
        setNavbarVisible(prev => !prev);
    }, []);

    // Function to close the navbar
    const closeNavBar = useCallback(() => {
        setNavbarVisible(false);
    }, []);

    return (
        <>
            <header className='w-full h-16 fixed top-0 z-50 backdrop-blur-[12px] bg-transparent'>
                <section className='container h-full mx-auto px-2 py-2 xl:px-0 flex items-center justify-between gap-6'>
                    <Link to='/' target='_self' onClick={closeNavBar} id='company-logo' className='inline-flex items-center gap-2 text-tertiary-dark dark:text-tertiary-light'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="currentColor"><path d="M2.002 9.538c-.023.411.207.794.581.966l7.504 3.442 3.442 7.503c.164.356.52.583.909.583l.057-.002a1 1 0 0 0 .894-.686l5.595-17.032c.117-.358.023-.753-.243-1.02s-.66-.358-1.02-.243L2.688 8.645a.997.997 0 0 0-.686.893z" /></svg>
                        <span className='text-md tracking-tight text-balance font-medium'>The Web Navigators</span>
                    </Link>
                    <div className="ml-auto h-full items-center gap-8 hidden md:flex">
                        <Link className="text-sm text-tertiary-dark dark:text-tertiary-light" to="/what-we-do" onClick={closeNavBar}>What We Do?</Link>
                        <Link className="text-sm text-tertiary-dark dark:text-tertiary-light" to="/portfolio" onClick={closeNavBar}>Portfolio</Link>
                        {/* <Link className="text-sm text-tertiary-dark dark:text-tertiary-light" to="/blogs" onClick={closeNavBar}>Blogs</Link> */}
                        <div className="text-sm text-tertiary-dark dark:text-tertiary-light bg-secondary-light dark:bg-secondary-dark px-4 py-2 rounded-md font-medium transition-colors cursor-pointer" onClick={() => { closeNavBar(); window.tidioChatApi.show(); window.tidioChatApi.open(); }}>
                            Talk To Us
                        </div>
                    </div>
                    <div className='flex items-center justify-between gap-4'>
                        <div className={`inline-flex items-center justify-between w-8 h-8 rounded-full shadow-lg p-[4px] cursor-pointer text-black dark:text-white bg-secondary-light dark:bg-secondary-dark`} onClick={toggleTheme}>
                            {!isDarkMode && (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                                </svg>
                            )}
                            {isDarkMode && (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                                </svg>
                            )}
                        </div>
                        <div className="flex sm:hidden flex-col gap-1 items-start cursor-pointer"
                            onClick={toggleNavBar}
                            role="button"
                            aria-expanded={navbarVisible}
                            aria-label="Toggle navigation menu">
                            <div className={`bg-black dark:bg-white transition-all ease-in-out duration-200 ${navbarVisible ? 'w-[22px] h-[2px] transform translate-x-0 translate-y-[5px] rotate-45' : 'w-[22px] h-[2px]'}`}></div>
                            <div className={`bg-black dark:bg-white transition-all ease-in-out duration-200 ${navbarVisible ? 'w-0 h-0' : 'w-[16px] h-[2px]'}`}></div>
                            <div className={`bg-black dark:bg-white transition-all ease-in-out duration-200 ${navbarVisible ? 'w-[22px] h-[2px] transform translate-x-0 -translate-y-[5px] -rotate-45' : 'w-[10px] h-[2px]'}`}></div>
                        </div>
                    </div>
                </section>
                <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-200/30 to-neutral-200/0"></hr>
            </header>
            <nav className={`fixed left-0 top-16 z-50 h-screen w-full overflow-auto bg-transparent backdrop-blur-[12px] md:-translate-x-full transition-transform ease-in-out duration-500 ${navbarVisible ? 'pointer-events-auto transform-none' : 'pointer-events-none transform -translate-x-full'}`}>
                <div className="flex flex-col items-start gap-4 uppercase font-extralight">
                    <Link className="w-full text-lg text-tertiary-dark dark:text-tertiary-light border-grey-dark p-4 border-b-[0.50px] border-tertiary-light dark:border-tertiary-dark" to="/what-we-do" onClick={closeNavBar}>What We Do?</Link>
                    <Link className="w-full text-lg text-tertiary-dark dark:text-tertiary-light border-grey-dark p-4 border-b-[0.50px] border-tertiary-light dark:border-tertiary-dark" to="/portfolio" onClick={closeNavBar}>Portfolio</Link>
                    {/* <Link className="w-full text-lg text-tertiary-dark dark:text-tertiary-light border-grey-dark p-4 border-b-[0.50px] border-tertiary-light dark:border-tertiary-dark" to="/blogs" onClick={closeNavBar}>Blogs</Link> */}
                    <div className="w-full text-lg text-tertiary-dark dark:text-tertiary-light border-grey-dark p-4 border-b-[0.50px] border-tertiary-light dark:border-tertiary-dark" onClick={() => {
                        closeNavBar();
                        window.tidioChatApi.show();
                        window.tidioChatApi.open();
                    }}>Talk To Us</div>
                </div>
            </nav>
        </>
    );
}
