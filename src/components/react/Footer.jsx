import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div className="mt-32 relative rounded-md">
            <div className="relative overflow-hidden rounded-xl p-0">
                <div className="px-7 md:px-10">
                    <div className="flex flex-col items-center justify-center gap-y-3 border-b border-dashed border-slate-400/20 py-10 lg:flex-row lg:items-center lg:justify-between">
                        <h3 className="max-w-sm text-balance text-center text-2xl font-bold text-neutral-900 dark:text-white md:text-start md:text-4xl">
                            Still have questions?
                        </h3>
                        <div className="flex flex-col items-center justify-center gap-x-5 gap-y-2 py-4 sm:flex-row">
                            <div className="cursor-pointer flex h-10 w-40 items-center justify-center rounded-full bg-neutral-800 text-base font-semibold text-white transition ease-out hover:ring-2 hover:ring-neutral-900 hover:ring-offset-2 dark:bg-white dark:text-black dark:hover:ring-white dark:hover:ring-offset-black lg:h-12 lg:text-base" onClick={() => {
                                window.tidioChatApi.show();
                                window.tidioChatApi.open();
                            }}>
                                <span className="tracking-tight">Let's Chat</span>
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
                                    <path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
                                </svg>
                            </div>
                            <Link to="/" className="flex h-10 w-40 items-center justify-center rounded-full border text-sm font-semibold text-neutral-900 transition ease-out hover:bg-neutral-200/30 dark:text-white dark:hover:bg-neutral-700/30 lg:h-12 lg:text-base">
                                <span className="tracking-tight">Request Demo</span>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col py-10 md:flex-row md:items-center md:justify-between">
                        <div className="flex flex-col items-start justify-start gap-y-5">
                            <div>
                                <Link to="/" className="flex items-center gap-x-2.5 text-tertiary-dark dark:text-tertiary-light">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="currentColor"><path d="M2.002 9.538c-.023.411.207.794.581.966l7.504 3.442 3.442 7.503c.164.356.52.583.909.583l.057-.002a1 1 0 0 0 .894-.686l5.595-17.032c.117-.358.023-.753-.243-1.02s-.66-.358-1.02-.243L2.688 8.645a.997.997 0 0 0-.686.893z" /></svg>
                                    <span className='text-md tracking-tight text-balance font-medium'>The Web Navigators</span>
                                </Link>
                                <p className="mt-1 tracking-tight text-neutral-500 dark:text-white text-sm">
                                    Navigating Web's waves with ease
                                </p>
                            </div>
                            <p className="text-sm tracking-tight text-neutral-500 dark:text-neutral-400 sm:text-center">
                                © {new Date().getFullYear()} All rights reserved.
                            </p>
                        </div>
                        <div className="pt-5 md:w-1/2">
                            <div className="flex items-center justify-between gap-x-3 px-0 lg:px-10">
                                <ul className="flex flex-col gap-y-2">
                                    <li className="group inline-flex cursor-pointer items-center justify-start gap-1 text-[15px]/snug font-medium text-neutral-400 duration-200 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200">
                                        <Link to="/">Home</Link>
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100">
                                            <path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
                                        </svg>
                                    </li>
                                    <li className="group inline-flex cursor-pointer items-center justify-start gap-1 text-[15px]/snug font-medium text-neutral-400 duration-200 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200">
                                        <Link to="/portfolio">Portfolio</Link>
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100">
                                            <path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
                                        </svg>
                                    </li>
                                    <li className="group inline-flex cursor-pointer items-center justify-start gap-1 text-[15px]/snug font-medium text-neutral-400 duration-200 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200">
                                        <Link to="/what-we-do">What We Do?</Link>
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100">
                                            <path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
                                        </svg>
                                    </li>
                                </ul>
                                <ul className="flex flex-col gap-y-2">
                                    <li className="group inline-flex cursor-pointer items-center justify-start gap-1 text-[15px]/snug font-medium text-neutral-400 duration-200 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200">
                                        <Link to="/blogs">Blogs</Link>
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100">
                                            <path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
                                        </svg>
                                    </li>
                                    <li className="group inline-flex cursor-pointer items-center justify-start gap-1 text-[15px]/snug font-medium text-neutral-400 duration-200 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200">
                                        <Link to="https://www.upwork.com/freelancers/~012d6eb926a1f7a86a" target='_blank'>Upwork Profile</Link>
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100">
                                            <path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
                                        </svg>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
