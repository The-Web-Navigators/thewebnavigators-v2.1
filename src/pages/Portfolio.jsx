import React from 'react';
import { useLocation } from 'react-router-dom';
import Marquee from "../components/magicui/marquee";

const portfolioItems = [
  {
    href: '/showcase/aomni',
    imgSrc: 'https://magicui.design/showcase/aomni.png',
    alt: 'aomni.com',
    title: 'aomni.com',
    description: 'Raised seed round from notable investors.',
  },
  {
    href: '/showcase/cognosys',
    imgSrc: 'https://magicui.design/showcase/cognosys.png',
    alt: 'cognosys.com',
    title: 'cognosys.com',
    description: 'AI-powered business solutions.',
  },
  {
    href: '/showcase/infisical',
    imgSrc: 'https://magicui.design/showcase/infisical.png',
    alt: 'infisical.com',
    title: 'infisical.com',
    description: 'Secure secrets management for teams.',
  },
  {
    href: '/showcase/llmreport',
    imgSrc: 'https://magicui.design/showcase/llmreport.png',
    alt: 'llmreport.com',
    title: 'llmreport.com',
    description: 'Comprehensive language model analysis.',
  },
  {
    href: '/showcase/zen-browser',
    imgSrc: 'https://magicui.design/showcase/zen-browser.png',
    alt: 'zen-browser.com',
    title: 'zen-browser.com',
    description: 'A privacy-focused web browser.',
  },
];

function Portfolio() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const renderPortfolioItem = (item) => (
    <a key={item.href} className="flex flex-col gap-2 group relative overflow-hidden cursor-pointer" href={item.href}>
      <img
        src={item.imgSrc}
        alt={item.alt}
        width="500"
        height="300"
        className="size-full object-cover max-h-[300px] rounded-xl"
      />
      <div className="flex flex-col">
        <div className="group inline-flex items-center gap-1 text-xl font-semibold text-neutral-700 dark:text-neutral-300 duration-200 hover:text-neutral-700 dark:hover:text-neutral-200">
          {item.title}
        </div>
        <p className="text-neutral-400 text-sm">{item.description}</p>
      </div>
    </a>
  );

  return (
    <section id="portfolio" className="mt-32 container mx-auto px-6 md:px-8">
      <h2 className="bg-gradient-to-br from-black to-black/40 dark:from-white dark:to-white/40 bg-clip-text text-center py-2 text-5xl font-medium text-transparent tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
        Portfolio
      </h2>
      <h3 className="mt-2 text-lg tracking-tight text-gray-400 text-balance text-center md:text-xl">
        Companies choose Magic UI to build their landing pages.
      </h3>
      {isHome ? (
        <div className="mt-8 relative flex flex-col">
          <div className="flex overflow-hidden p-2 max-w-screen">
            <Marquee pauseOnHover className="[--duration:20s]">
              {portfolioItems.map(renderPortfolioItem)}
            </Marquee>
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/6 bg-gradient-to-r from-primary-light dark:from-primary-dark"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/5 bg-gradient-to-l from-primary-light dark:from-primary-dark"></div>
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-3 gap-6 container mx-auto">
          {portfolioItems.map(renderPortfolioItem)}
        </div>
      )}
    </section>
  );
}

export default Portfolio;
