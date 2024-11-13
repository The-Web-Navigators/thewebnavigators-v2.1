import React from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import SEO from '../components/react/SEO';
import { AnimatedBeamMultipleOutput } from "../components/examples/animated-beam-multiple-outputs";
import { AnimatedListComponent } from "../components/examples/animated-list";
import { IconCloudComponent } from '../components/react/IconCloudComponent';
import { OrbitingCirclesComponent } from '../components/react/OrbitingCirclesComponent';
import { FileTreeComponent } from '../components/react/FileTreeComponent';
import { useTheme } from '../contexts/ThemeContext';

export default function WhatWeDo() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();


  return (
    <>
      {location.pathname === '/what-we-do' && (
        <SEO
          title="What We Do - The Web Navigators"
          description="Discover how The Web Navigators empower businesses with innovative web solutions. From design to development, we create exceptional digital experiences."
          keywords="web development, digital solutions, design excellence, real-time applications, API integrations, The Web Navigators"
          ogType="website"
          ogUrl="https://thewebnavigators.com/"
          ogImage="https://thewebnavigators.com/og-image.png"
          twitterCard="summary_large_image"
          twitterImage="https://thewebnavigators.com/twitter-image.png"
        />
      )}

      <section className='mt-32 container mx-auto px-6 lg:px-0'>
        <div className='w-full min-h-max flex flex-col-reverse xl:flex-row gap-0 xl:gap-24 items-center justify-center'>
          <IconCloudComponent />
          <div className='w-full h-fit flex flex-col items-center lg:items-start'>
            <motion.h2
              className="max-w-lg bg-gradient-to-br from-black to-black/40 dark:from-white dark:to-white/40 bg-clip-text text-5xl font-medium leading-none tracking-tighter text-transparent sm:text-5xl md:text-6xl lg:text-7xl capitalize text-center xl:text-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 1, delay: 0.4 }}>
              What We Do?
            </motion.h2>
            <motion.h3
              className="mt-2 mb-8 text-lg tracking-tight text-gray-400 md:text-xl text-center xl:text-start"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeInOut", duration: 1, delay: 0.2 }}>
              At The Web Navigators, we specialize in building - SaaS Platforms, Business Dashboards, Real-Time Chat Systems, AI Integrations, Custom Web Applications.
            </motion.h3>
            <motion.div
              className="cursor-pointer py-5 px-6 w-fit flex items-center justify-center rounded-full bg-neutral-800 text-base font-semibold text-white transition ease-out hover:ring-2 hover:ring-neutral-900 hover:ring-offset-2 dark:bg-white dark:text-black dark:hover:ring-white dark:hover:ring-offset-black lg:text-base" onClick={() => { window.tidioChatApi.show(); window.tidioChatApi.open(); }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 1, delay: 0.2 }}>
              <span className="tracking-tight">Let's Have a Chat</span>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="">
                <path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
              </svg>
            </motion.div>
          </div>
        </div>

        <div className='pt-32 pb-32 w-full min-h-max flex flex-col xl:flex-row gap-0 xl:gap-24 items-center justify-center'>
          <div className='xl:w-1/2 h-fit flex flex-col items-center lg:items-start'>
            <motion.h2
              className="max-w-lg bg-gradient-to-br from-black to-black/40 dark:from-white dark:to-white/40 bg-clip-text text-5xl font-medium leading-none tracking-tighter text-transparent sm:text-5xl md:text-6xl lg:text-7xl capitalize text-center xl:text-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 1, delay: 0.4 }}>
              Design & Code Excellence
            </motion.h2>
            <motion.h3
              className="mt-2 mb-8 text-lg tracking-tight text-gray-400 md:text-xl text-center xl:text-start"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeInOut", duration: 1, delay: 0.2 }}>
              We craft scalable, high-performance web applications using the latest technologies like React, Tailwind, and beyond—bringing your ideas to life with clean, powerful code.
            </motion.h3>
            <motion.div
              className="cursor-pointer py-5 px-6 w-fit flex items-center justify-center rounded-full bg-neutral-800 text-base font-semibold text-white transition ease-out hover:ring-2 hover:ring-neutral-900 hover:ring-offset-2 dark:bg-white dark:text-black dark:hover:ring-white dark:hover:ring-offset-black lg:text-base" onClick={() => { navigate('/portfolio') }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 1, delay: 0.2 }}>
              <span className="tracking-tight">View Past Projects</span>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="">
                <path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
              </svg>
            </motion.div>
          </div>
          <FileTreeComponent />
        </div>

        <div className='w-full min-h-max flex flex-col-reverse xl:flex-row gap-0 xl:gap-24 relative items-center justify-center'>
          <div className='absolute inset-0 z-30 bg-transparent'></div>
          <AnimatedListComponent className="border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
          <div className='w-full h-fit flex flex-col items-center lg:items-start'>
            <motion.h2
              className="max-w-lg bg-gradient-to-br from-black to-black/40 dark:from-white dark:to-white/40 bg-clip-text text-5xl font-medium leading-none tracking-tighter text-transparent sm:text-5xl md:text-6xl lg:text-7xl capitalize text-center xl:text-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 1, delay: 0.4 }}>
              Real-Time Experiences
            </motion.h2>
            <motion.h3
              className="mt-2 mb-8 text-lg tracking-tight text-gray-400 md:text-xl text-center xl:text-start"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeInOut", duration: 1, delay: 0.2 }}>
              Deliver dynamic, real-time web applications that keep users engaged and connected—our expertise ensures your app is always responsive and lightning-fast.
            </motion.h3>
            <motion.div
              className="cursor-pointer z-50 py-5 px-6 w-fit flex items-center justify-center rounded-full bg-neutral-800 text-base font-semibold text-white transition ease-out hover:ring-2 hover:ring-neutral-900 hover:ring-offset-2 dark:bg-white dark:text-black dark:hover:ring-white dark:hover:ring-offset-black lg:text-base" onClick={() => { window.tidioChatApi.show(); window.tidioChatApi.open(); }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 1, delay: 0.2 }}>
              <span className="tracking-tight">Realtime Web-Apps</span>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="">
                <path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
              </svg>
              <div className='inline-flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
                  <path fill="#ffa000" d="M25.01,8.565c-0.386-0.753-1.466-0.755-1.848,0l-2.347,4.426L15.404,2.547 c-0.471-0.874-1.798-0.653-1.952,0.325L8.003,37.997L30.25,18.75L25.01,8.565z"></path><path fill="#f57f17" d="M25.795 22.604L20.815 12.992 8.003 37.997z"></path><path fill="#ffca28" d="M35.859,11.838c-0.13-0.802-1.115-1.12-1.69-0.544L8.003,38.002l14.479,7.614 c0.917,0.512,2.034,0.512,2.951,0.001L40,38.005L35.859,11.838z"></path>
                </svg>
              </div>
            </motion.div>
          </div>
        </div>

        <div className='pb-18 w-full min-h-max flex flex-col xl:flex-row gap-0 xl:gap-24 items-center justify-center'>
          <div className='w-full hit flex flex-col items-center lg:items-start'>
            <motion.h2
              className="max-w-lg bg-gradient-to-br from-black to-black/40 dark:from-white dark:to-white/40 bg-clip-text text-5xl font-medium leading-none tracking-tighter text-transparent sm:text-5xl md:text-6xl lg:text-7xl capitalize text-center xl:text-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 1, delay: 0.4 }}>
              API Integrations at Scale
            </motion.h2>
            <motion.h3
              className="mt-2 mb-8 text-lg tracking-tight text-gray-400 md:text-xl text-center xl:text-start"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeInOut", duration: 1, delay: 0.2 }}>
              Unlock seamless functionality across platforms with our robust API integrations. From simple to complex systems, we ensure everything works in perfect harmony.
            </motion.h3>
            <motion.div
              className="cursor-pointer py-5 px-6 w-fit flex items-center justify-center rounded-full bg-neutral-800 text-base font-semibold text-white transition ease-out hover:ring-2 hover:ring-neutral-900 hover:ring-offset-2 dark:bg-white dark:text-black dark:hover:ring-white dark:hover:ring-offset-black lg:text-base" onClick={() => { window.tidioChatApi.show(); window.tidioChatApi.open(); }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 1, delay: 0.2 }}>
              <span className="tracking-tight">API Integrations</span>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="">
                <path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
              </svg>
              <div className='inline-flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
                  <path fill="#FFC107" d="M17 6L31 6 45 30 31 30z"></path><path fill="#1976D2" d="M9.875 42L16.938 30 45 30 38 42z"></path><path fill="#4CAF50" d="M3 30.125L9.875 42 24 18 17 6z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
                  <path fill="#2196f3" d="M37,45H11c-1.657,0-3-1.343-3-3V6c0-1.657,1.343-3,3-3h19l10,10v29C40,43.657,38.657,45,37,45z"></path><path fill="#bbdefb" d="M40 13L30 13 30 3z"></path><path fill="#1565c0" d="M30 13L40 23 40 13z"></path><path fill="#e3f2fd" d="M15 23H33V25H15zM15 27H33V29H15zM15 31H33V33H15zM15 35H25V37H15z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
                  <path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"></path><path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"></path><path fill="#cfd8dc" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"></path><path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"></path><path fill="#fff" fillRule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clipRule="evenodd"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill={!isDarkMode ? '#ffffff' : '#000000'} x="0px" y="0px" width="24" height="24" viewBox="0 0 30 30">
                  <path d="M 14.070312 2 C 11.330615 2 8.9844456 3.7162572 8.0390625 6.1269531 C 6.061324 6.3911222 4.2941948 7.5446684 3.2773438 9.3066406 C 1.9078196 11.678948 2.2198602 14.567816 3.8339844 16.591797 C 3.0745422 18.436097 3.1891418 20.543674 4.2050781 22.304688 C 5.5751778 24.677992 8.2359331 25.852135 10.796875 25.464844 C 12.014412 27.045167 13.895916 28 15.929688 28 C 18.669385 28 21.015554 26.283743 21.960938 23.873047 C 23.938676 23.608878 25.705805 22.455332 26.722656 20.693359 C 28.09218 18.321052 27.78014 15.432184 26.166016 13.408203 C 26.925458 11.563903 26.810858 9.4563257 25.794922 7.6953125 C 24.424822 5.3220082 21.764067 4.1478652 19.203125 4.5351562 C 17.985588 2.9548328 16.104084 2 14.070312 2 z M 14.070312 4 C 15.226446 4 16.310639 4.4546405 17.130859 5.2265625 C 17.068225 5.2600447 17.003357 5.2865019 16.941406 5.3222656 L 12.501953 7.8867188 C 12.039953 8.1527187 11.753953 8.6456875 11.751953 9.1796875 L 11.724609 15.146484 L 9.5898438 13.900391 L 9.5898438 8.4804688 C 9.5898438 6.0104687 11.600312 4 14.070312 4 z M 20.492188 6.4667969 C 21.927441 6.5689063 23.290625 7.3584375 24.0625 8.6953125 C 24.640485 9.696213 24.789458 10.862812 24.53125 11.958984 C 24.470201 11.920997 24.414287 11.878008 24.351562 11.841797 L 19.910156 9.2773438 C 19.448156 9.0113437 18.879016 9.0103906 18.416016 9.2753906 L 13.236328 12.236328 L 13.248047 9.765625 L 17.941406 7.0546875 C 18.743531 6.5915625 19.631035 6.4055313 20.492188 6.4667969 z M 7.5996094 8.2675781 C 7.5972783 8.3387539 7.5898438 8.4087418 7.5898438 8.4804688 L 7.5898438 13.607422 C 7.5898438 14.141422 7.8729844 14.635297 8.3339844 14.904297 L 13.488281 17.910156 L 11.34375 19.134766 L 6.6484375 16.425781 C 4.5094375 15.190781 3.7747656 12.443687 5.0097656 10.304688 C 5.5874162 9.3043657 6.522013 8.5923015 7.5996094 8.2675781 z M 18.65625 10.865234 L 23.351562 13.574219 C 25.490562 14.809219 26.225234 17.556313 24.990234 19.695312 C 24.412584 20.695634 23.477987 21.407698 22.400391 21.732422 C 22.402722 21.661246 22.410156 21.591258 22.410156 21.519531 L 22.410156 16.392578 C 22.410156 15.858578 22.127016 15.364703 21.666016 15.095703 L 16.511719 12.089844 L 18.65625 10.865234 z M 15.009766 12.947266 L 16.78125 13.980469 L 16.771484 16.035156 L 14.990234 17.052734 L 13.21875 16.017578 L 13.228516 13.964844 L 15.009766 12.947266 z M 18.275391 14.853516 L 20.410156 16.099609 L 20.410156 21.519531 C 20.410156 23.989531 18.399687 26 15.929688 26 C 14.773554 26 13.689361 25.54536 12.869141 24.773438 C 12.931775 24.739955 12.996643 24.713498 13.058594 24.677734 L 17.498047 22.113281 C 17.960047 21.847281 18.246047 21.354312 18.248047 20.820312 L 18.275391 14.853516 z M 16.763672 17.763672 L 16.751953 20.234375 L 12.058594 22.945312 C 9.9195938 24.180312 7.1725 23.443687 5.9375 21.304688 C 5.3595152 20.303787 5.2105423 19.137188 5.46875 18.041016 C 5.5297994 18.079003 5.5857129 18.121992 5.6484375 18.158203 L 10.089844 20.722656 C 10.551844 20.988656 11.120984 20.989609 11.583984 20.724609 L 16.763672 17.763672 z"></path>
                </svg>
              </div>
            </motion.div>
          </div>
          <AnimatedBeamMultipleOutput className="border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_0%,#000_0%)] group-hover:scale-105" />
        </div>

        <div className='w-full min-h-max flex flex-col-reverse xl:flex-row gap-0 xl:gap-24 items-center justify-center'>
          <OrbitingCirclesComponent />
          <div className='w-full h-fit flex flex-col items-center lg:items-start'>
            <motion.h2
              className="max-w-lg bg-gradient-to-br from-black to-black/40 dark:from-white dark:to-white/40 bg-clip-text text-5xl font-medium leading-none tracking-tighter text-transparent sm:text-5xl md:text-6xl lg:text-7xl capitalize text-center xl:text-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 1, delay: 0.4 }}>
              Streamlined Code, Superior Performance
            </motion.h2>
            <motion.h3
              className="mt-2 mb-8 text-lg tracking-tight text-gray-400 md:text-xl text-center xl:text-start"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeInOut", duration: 1, delay: 0.2 }}>
              We enhance your existing code, improving efficiency, scalability, and performance—ensuring your application is future-proof and ready for growth.
            </motion.h3>
            <motion.div
              className="cursor-pointer py-5 px-6 w-fit flex items-center justify-center rounded-full bg-neutral-800 text-base font-semibold text-white transition ease-out hover:ring-2 hover:ring-neutral-900 hover:ring-offset-2 dark:bg-white dark:text-black dark:hover:ring-white dark:hover:ring-offset-black lg:text-base" onClick={() => { window.tidioChatApi.show(); window.tidioChatApi.open(); }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 1, delay: 0.2 }}>
              <span className="tracking-tight">Something On Mind ?</span>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
