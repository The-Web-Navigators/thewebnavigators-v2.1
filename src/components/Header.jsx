import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
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
                <section className='container h-full mx-auto px-2 py-2 xl:px-0 flex items-center justify-between'>
                    <Link to='/' target='_self' onClick={closeNavBar} id='company-logo' className='inline-flex items-center gap-2 text-tertiary-dark dark:text-tertiary-light'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="currentColor"><path d="M2.002 9.538c-.023.411.207.794.581.966l7.504 3.442 3.442 7.503c.164.356.52.583.909.583l.057-.002a1 1 0 0 0 .894-.686l5.595-17.032c.117-.358.023-.753-.243-1.02s-.66-.358-1.02-.243L2.688 8.645a.997.997 0 0 0-.686.893z" /></svg>
                        <span className='text-md tracking-tight text-balance font-medium'>The Web Navigators</span>
                    </Link>
                    <div className="ml-auto h-full items-center gap-8 hidden md:flex">
                        {/* <Link className="text-sm text-tertiary-dark dark:text-tertiary-light" to="/solutions" onClick={closeNavBar}>Our Products</Link> */}
                        <Link className="text-sm text-tertiary-dark dark:text-tertiary-light" to="/what-we-do" onClick={closeNavBar}>What We Do?</Link>
                        <Link className="text-sm text-tertiary-dark dark:text-tertiary-light" to="/portfolio" onClick={closeNavBar}>Portfolio</Link>
                        <Link className="text-sm text-tertiary-dark dark:text-tertiary-light" to="/blogs" onClick={closeNavBar}>Blogs</Link>
                        <Link className="text-sm text-tertiary-dark dark:text-tertiary-light bg-secondary-light dark:bg-secondary-dark px-4 py-2 rounded-md font-medium transition-colors" to="/talk-to-us" onClick={closeNavBar}>Talk To Us</Link>
                    </div>
                    <div
                        className="flex sm:hidden flex-col gap-1 items-start cursor-pointer"
                        onClick={toggleNavBar}
                        role="button"
                        aria-expanded={navbarVisible}
                        aria-label="Toggle navigation menu">
                        <div className={`bg-black dark:bg-white transition-all ease-in-out duration-200 ${navbarVisible ? 'w-[22px] h-[2px] transform translate-x-0 translate-y-[5px] rotate-45' : 'w-[22px] h-[2px]'}`}></div>
                        <div className={`bg-black dark:bg-white transition-all ease-in-out duration-200 ${navbarVisible ? 'w-0 h-0' : 'w-[16px] h-[2px]'}`}></div>
                        <div className={`bg-black dark:bg-white transition-all ease-in-out duration-200 ${navbarVisible ? 'w-[22px] h-[2px] transform translate-x-0 -translate-y-[5px] -rotate-45' : 'w-[10px] h-[2px]'}`}></div>
                    </div>
                </section>
                <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-200/30 to-neutral-200/0"></hr>
            </header>
            <nav className={`fixed left-0 top-16 z-50 h-screen w-full overflow-auto bg-transparent backdrop-blur-[12px] md:-translate-x-full transition-transform ease-in-out duration-500 ${navbarVisible ? 'pointer-events-auto transform-none' : 'pointer-events-none transform -translate-x-full'}`}>
                <div className="flex flex-col items-start gap-4 uppercase font-extralight">
                    {/* <Link className="w-full text-lg text-tertiary-dark dark:text-tertiary-light border-grey-dark p-4 border-b-[0.50px] border-tertiary-light dark:border-tertiary-dark" to="/solutions" onClick={closeNavBar}>Our Products</Link> */}
                    <Link className="w-full text-lg text-tertiary-dark dark:text-tertiary-light border-grey-dark p-4 border-b-[0.50px] border-tertiary-light dark:border-tertiary-dark" to="/what-we-do" onClick={closeNavBar}>What We Do?</Link>
                    <Link className="w-full text-lg text-tertiary-dark dark:text-tertiary-light border-grey-dark p-4 border-b-[0.50px] border-tertiary-light dark:border-tertiary-dark" to="/portfolio" onClick={closeNavBar}>Portfolio</Link>
                    <Link className="w-full text-lg text-tertiary-dark dark:text-tertiary-light border-grey-dark p-4 border-b-[0.50px] border-tertiary-light dark:border-tertiary-dark" to="/blogs" onClick={closeNavBar}>Blogs</Link>
                    <Link className="w-full text-lg text-tertiary-dark dark:text-tertiary-light border-grey-dark p-4 border-b-[0.50px] border-tertiary-light dark:border-tertiary-dark" to="/talk-to-us" onClick={closeNavBar}>Talk To Us</Link>
                </div>
            </nav>
        </>
    );
}
