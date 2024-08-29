import React from 'react'
import { useTheme } from '../contexts/ThemeContext'
import { Link } from 'react-router-dom';

export default function Header() {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <div className='w-full h-16 fixed z-50 backdrop-blur-[12px] bg-transparent'>
            <div className='container h-full mx-auto px-2 py-2 xl:px-0 flex items-center justify-between'>
                <Link to='/' target='_self' id='company-logo' className='inline-flex items-center gap-2 text-primary-dark dark:text-primary-light'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="currentColor">
                        <path d="M2.002 9.538c-.023.411.207.794.581.966l7.504 3.442 3.442 7.503c.164.356.52.583.909.583l.057-.002a1 1 0 0 0 .894-.686l5.595-17.032c.117-.358.023-.753-.243-1.02s-.66-.358-1.02-.243L2.688 8.645a.997.997 0 0 0-.686.893z" />
                    </svg>
                    <span className='text-md tracking-tight text-balance font-medium'>The Web Navigators</span>
                </Link>
                <div className="ml-auto flex h-full items-center gap-8">
                    <Link className="text-sm text-tertiary-dark dark:text-tertiary-light" to="/solutions">Our Products</Link>
                    <Link className="text-sm text-tertiary-dark dark:text-tertiary-light" to="/services">What We Do?</Link>
                    <Link className="text-sm text-tertiary-dark dark:text-tertiary-light" to="/clients">Past Work</Link>
                    <Link className="text-sm text-tertiary-dark dark:text-tertiary-light" to="/blogs">Blogs</Link>
                    <Link className="text-sm text-primary-dark dark:text-primary-light bg-secondary-light dark:bg-secondary-dark px-4 py-2 rounded-md font-medium transition-colors" to="/quote">
                        Get a Quote
                    </Link>
                </div>
            </div>
            <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-200/30 to-neutral-200/0"></hr>
        </div>
    )
}
