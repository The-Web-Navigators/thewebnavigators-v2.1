import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedBeamMultipleOutput } from "../components/examples/animated-beam-multiple-outputs";
import { AnimatedListDemo } from "../components/examples/animated-list";
import { IconCloudComponent } from '../components/react/IconCloudComponent';
import { OrbitingCirclesComponent } from '../components/react/OrbitingCirclesComponent';
import { GlobeComponent } from '../components/react/GlobeComponent';

export default function WhatWeDo() {
  return (
    <section className='mt-32 container mx-auto px-6 md:px-8'>
      <div className='w-full min-h-max flex flex-col-reverse xl:flex-row gap-0 xl:gap-24'>
        <GlobeComponent />
        <div className='w-full flex flex-col justify-center'>
          <motion.h2
            className="bg-gradient-to-br from-black to-black/40 dark:from-white dark:to-white/40 bg-clip-text text-5xl font-medium leading-none tracking-tighter text-transparent sm:text-5xl md:text-6xl lg:text-7xl capitalize"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 0.4 }}>
            What We Do?
          </motion.h2>
          <motion.h3
            className="mt-2 mb-8 text-lg tracking-tight text-gray-400 md:text-xl"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 0.2 }}>
            At The Web Navigators, we don’t just build web solutions — we empower your business with cutting-edge digital experiences, scaling your brand to new heights.
          </motion.h3>
        </div>
      </div>

      <div className='w-full min-h-max flex flex-col xl:flex-row gap-0 xl:gap-24'>
        <div className='w-full flex flex-col justify-center'>
          <motion.h2
            className="bg-gradient-to-br from-black to-black/40 dark:from-white dark:to-white/40 bg-clip-text text-5xl font-medium leading-none tracking-tighter text-transparent sm:text-5xl md:text-6xl lg:text-7xl capitalize"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 0.4 }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 dark:text-primary-light">
              <path fillRule="evenodd" d="M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
            </svg>
            Design & Code Excellence
          </motion.h2>
          <motion.h3
            className="mt-2 text-lg tracking-tight text-gray-400 md:text-xl"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 0.2 }}>
            We craft scalable, high-performance web applications using the latest technologies like React, Tailwind, and beyond—bringing your ideas to life with clean, powerful code.
          </motion.h3>
        </div>
        <IconCloudComponent />
      </div>

      <div className='w-full min-h-max flex flex-col-reverse xl:flex-row gap-0 xl:gap-24'>
        <AnimatedListDemo className="border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
        <div className='w-full flex flex-col justify-center'>
          <motion.h2
            className="bg-gradient-to-br from-black to-black/40 dark:from-white dark:to-white/40 bg-clip-text text-5xl font-medium leading-none tracking-tighter text-transparent sm:text-5xl md:text-6xl lg:text-7xl capitalize"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 0.4 }}>
            Real-Time Experiences
          </motion.h2>
          <motion.h3
            className="mt-2 text-lg tracking-tight text-gray-400 md:text-xl"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 0.2 }}>
            Deliver dynamic, real-time web applications that keep users engaged and connected—our expertise ensures your app is always responsive and lightning-fast.
          </motion.h3>
        </div>
      </div>

      <div className='w-full min-h-max flex flex-col xl:flex-row gap-0 xl:gap-24'>
        <div className='w-full flex flex-col justify-center'>
          <motion.h2
            className="bg-gradient-to-br from-black to-black/40 dark:from-white dark:to-white/40 bg-clip-text text-5xl font-medium leading-none tracking-tighter text-transparent sm:text-5xl md:text-6xl lg:text-7xl capitalize"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 0.4 }}>
            API Integrations at Scale
          </motion.h2>
          <motion.h3
            className="mt-2 text-lg tracking-tight text-gray-400 md:text-xl"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 0.2 }}>
            Unlock seamless functionality across platforms with our robust API integrations. From simple to complex systems, we ensure everything works in perfect harmony.
          </motion.h3>
        </div>
        <AnimatedBeamMultipleOutput className="border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_0%,#000_0%)] group-hover:scale-105" />
      </div>

      <div className='w-full min-h-max flex flex-col-reverse xl:flex-row gap-0 xl:gap-24'>
        <OrbitingCirclesComponent />
        <div className='w-full flex flex-col justify-center'>
          <motion.h2
            className="bg-gradient-to-br from-black to-black/40 dark:from-white dark:to-white/40 bg-clip-text text-5xl font-medium leading-none tracking-tighter text-transparent sm:text-5xl md:text-6xl lg:text-7xl capitalize"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 0.4 }}>
            Streamlined Code, Superior Performance
          </motion.h2>
          <motion.h3
            className="mt-2 text-lg tracking-tight text-gray-400 md:text-xl"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 1, delay: 0.2 }}>
            We enhance your existing code, improving efficiency, scalability, and performance—ensuring your application is future-proof and ready for growth.
          </motion.h3>
        </div>
      </div>
    </section>
  )
}
