import React from 'react';
import { useLocation } from 'react-router-dom';
import Marquee from "../components/magicui/marquee";
import { motion } from 'framer-motion';
import { usePortfolio } from '../contexts/PortfolioContext';

function Portfolio() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const portfolioItems = usePortfolio();

  const renderPortfolioItem = (item) => (
    <a key={item.href} className="xl:w-[400px] flex flex-col gap-2 group relative overflow-hidden cursor-pointer" href={item.href}>
      <img src={item.imgSrc} alt={item.alt} width="500" height="300" className="size-full object-cover max-h-[300px] rounded-xl" />
      <div className="flex flex-col">
        <div className="group inline-flex items-center gap-1 text-[14px] xl:text-xl font-semibold text-neutral-700 dark:text-neutral-300 duration-200 hover:text-neutral-700 dark:hover:text-neutral-200">
          {item.title}
        </div>
        <p className="text-neutral-400 text-[10px] xl:text-sm">
          {item.description.length > 80 ? `${item.description.substring(0, 80)} ...` : item.description}
        </p>
      </div>
    </a>
  );

  return (
    <section id="portfolio" className="mt-28">
      <motion.h2
        className="bg-gradient-to-br from-black to-black/40 dark:from-white dark:to-white/40 bg-clip-text text-center py-2 text-5xl font-medium text-transparent tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 0.4 }}>
        Portfolio
      </motion.h2>
      <motion.h3
        className="mt-2 text-lg tracking-tight text-gray-400 text-balance text-center md:text-xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 0.2 }}>
        Explore our portfolio of innovative, successful projects.
      </motion.h3>
      {isHome ? (
        <div className="mt-8 relative flex flex-col">
          <div className="flex overflow-hidden p-2 max-w-screen">
            <Marquee pauseOnHover className="[--duration:60s]">
              {portfolioItems.map(renderPortfolioItem)}
            </Marquee>
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/6 bg-gradient-to-r from-primary-light dark:from-primary-dark"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/5 bg-gradient-to-l from-primary-light dark:from-primary-dark"></div>
        </div>
      ) : (
        <motion.div
          className="mt-8 grid grid-cols-2 xl:grid-cols-3 gap-6 container mx-auto px-6 md:px-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1, delay: 0.8 }}>
          {portfolioItems.map(renderPortfolioItem)}
        </motion.div>
      )}
    </section>
  );
}

export default Portfolio;   
