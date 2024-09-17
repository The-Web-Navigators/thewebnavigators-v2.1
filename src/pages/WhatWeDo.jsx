import React from 'react';
import { motion } from 'framer-motion';
import { BentoGridComponent } from '../components/react/BentoGridComponent';

export default function WhatWeDo() {
  return (
    <section className='mt-32 container mx-auto px-6 md:px-8'>
      <motion.h2
        className="bg-gradient-to-br from-black to-black/40 dark:from-white dark:to-white/40 bg-clip-text py-2 text-5xl font-medium leading-none tracking-tighter text-transparent text-center sm:text-5xl md:text-6xl lg:text-7xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 0.4 }}>
        What We Do?
      </motion.h2>
      <motion.h3
        className="mt-2 text-lg tracking-tight text-gray-400 md:text-xl text-balance text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 0.2 }}>
        At The Web Navigators, we drive digital success.
      </motion.h3>
      <motion.div
        className="mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 0.8 }}>
        <BentoGridComponent />
      </motion.div>
    </section>
  )
}
