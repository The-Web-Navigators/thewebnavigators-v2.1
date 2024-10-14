import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import SEO from '../components/react/SEO';
import { AnimatedBeamMultipleOutput } from "../components/examples/animated-beam-multiple-outputs";
import { AnimatedListComponent } from "../components/examples/animated-list";
import { IconCloudComponent } from '../components/react/IconCloudComponent';
import { OrbitingCirclesComponent } from '../components/react/OrbitingCirclesComponent';
import { FileTreeComponent } from '../components/react/FileTreeComponent';


export default function WhatWeDo() {
  const location = useLocation();

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
          <div className='w-full h-fit flex flex-col'>
            <motion.h2
              className="bg-gradient-to-br from-black to-black/40 dark:from-white dark:to-white/40 bg-clip-text text-5xl font-medium leading-none tracking-tighter text-transparent sm:text-5xl md:text-6xl lg:text-7xl capitalize text-center xl:text-start"
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
              At The Web Navigators, we don’t just build web solutions — we empower your business with cutting-edge digital experiences, scaling your brand to new heights.
            </motion.h3>
          </div>
        </div>

        <div className='pt-32 pb-32 w-full min-h-max flex flex-col xl:flex-row gap-0 xl:gap-24 items-center justify-center'>
          <div className='xl:w-1/2 h-[fit] flex flex-col'>
            <motion.h2
              className="bg-gradient-to-br from-black to-black/40 dark:from-white dark:to-white/40 bg-clip-text text-5xl font-medium leading-none tracking-tighter text-transparent sm:text-5xl md:text-6xl lg:text-7xl capitalize text-center xl:text-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 1, delay: 0.4 }}>
              Design & Code Excellence
            </motion.h2>
            <motion.h3
              className="mt-2 text-lg tracking-tight text-gray-400 md:text-xl text-center xl:text-start"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeInOut", duration: 1, delay: 0.2 }}>
              We craft scalable, high-performance web applications using the latest technologies like React, Tailwind, and beyond—bringing your ideas to life with clean, powerful code.
            </motion.h3>
          </div>
          <FileTreeComponent />
        </div>

        <div className='w-full min-h-max flex flex-col-reverse xl:flex-row gap-0 xl:gap-24 relative items-center justify-center'>
          <div className='absolute inset-0 z-30 bg-transparent'></div>
          <AnimatedListComponent className="border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
          <div className='w-full h-fit flex flex-col'>
            <motion.h2
              className="bg-gradient-to-br from-black to-black/40 dark:from-white dark:to-white/40 bg-clip-text text-5xl font-medium leading-none tracking-tighter text-transparent sm:text-5xl md:text-6xl lg:text-7xl capitalize text-center xl:text-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 1, delay: 0.4 }}>
              Real-Time Experiences
            </motion.h2>
            <motion.h3
              className="mt-2 text-lg tracking-tight text-gray-400 md:text-xl text-center xl:text-start"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeInOut", duration: 1, delay: 0.2 }}>
              Deliver dynamic, real-time web applications that keep users engaged and connected—our expertise ensures your app is always responsive and lightning-fast.
            </motion.h3>
          </div>
        </div>

        <div className='pb-18 w-full min-h-max flex flex-col xl:flex-row gap-0 xl:gap-24 items-center justify-center'>
          <div className='w-full hit flex flex-col'>
            <motion.h2
              className="bg-gradient-to-br from-black to-black/40 dark:from-white dark:to-white/40 bg-clip-text text-5xl font-medium leading-none tracking-tighter text-transparent sm:text-5xl md:text-6xl lg:text-7xl capitalize text-center xl:text-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 1, delay: 0.4 }}>
              API Integrations at Scale
            </motion.h2>
            <motion.h3
              className="mt-2 text-lg tracking-tight text-gray-400 md:text-xl text-center xl:text-start"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeInOut", duration: 1, delay: 0.2 }}>
              Unlock seamless functionality across platforms with our robust API integrations. From simple to complex systems, we ensure everything works in perfect harmony.
            </motion.h3>
          </div>
          <AnimatedBeamMultipleOutput className="border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_0%,#000_0%)] group-hover:scale-105" />
        </div>

        <div className='w-full min-h-max flex flex-col-reverse xl:flex-row gap-0 xl:gap-24 items-center justify-center'>
          <OrbitingCirclesComponent />
          <div className='w-full h-fit flex flex-col'>
            <motion.h2
              className="bg-gradient-to-br from-black to-black/40 dark:from-white dark:to-white/40 bg-clip-text text-5xl font-medium leading-none tracking-tighter text-transparent sm:text-5xl md:text-6xl lg:text-7xl capitalize text-center xl:text-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 1, delay: 0.4 }}>
              Streamlined Code, Superior Performance
            </motion.h2>
            <motion.h3
              className="mt-2 text-lg tracking-tight text-gray-400 md:text-xl text-center xl:text-start"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeInOut", duration: 1, delay: 0.2 }}>
              We enhance your existing code, improving efficiency, scalability, and performance—ensuring your application is future-proof and ready for growth.
            </motion.h3>
          </div>
        </div>
      </section>
    </>
  )
}
