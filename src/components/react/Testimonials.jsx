import { cn } from "../../lib/utils";
import React from 'react';
import { MarqueeComponent } from '../../components/react/MarqueeComponent';
import { usePortfolio } from '../../contexts/PortfolioContext';
import { Link } from "react-router-dom";

// Utility function to create slugs
const createSlug = (title) => {
    return title
      .toLowerCase() // Convert to lowercase
      .trim() // Trim whitespace from both ends
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/[^\w-]+/g, '') // Remove all non-word characters (except hyphens)
      .replace(/--+/g, '-') // Replace multiple hyphens with a single hyphen
      .replace(/^-+|-+$/g, ''); // Remove hyphens from the beginning and end
  };

export default function Testimonials() {
    const portfolioItems = usePortfolio();

    const reviewItems = portfolioItems?.map((item, index) => {
        // Truncate reviewBody if longer than 80 characters
        const reviewText =
            item.review.reviewBody.length > 80
                ? `${item.review.reviewBody.slice(0, 80)}... Read more`
                : item.review.reviewBody;

        return (
            <Link to={`/portfolio/${createSlug(item.title)}`} key={index} className={cn(
                "relative w-80 cursor-pointer overflow-hidden rounded-xl border p-4",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]")}>
                <div className="flex flex-row items-center gap-2">
                    <img className="rounded-full" width="32" height="32" alt={item.review.clientName} src={item.review.clientProfilePhoto} />
                    <div className="flex flex-col">
                        <figcaption className="text-sm font-medium dark:text-white">{item.review.clientName}</figcaption>
                        <p className="text-xs font-medium dark:text-white/40">{item.review.clientUsername}</p>
                    </div>
                </div>
                <blockquote className="mt-2 text-xs dark:text-white">{reviewText}</blockquote>
                <img src={item.imgSrc} className="mt-2 rounded-lg" alt="" />
            </Link>
        );
    });

    return (
        <section id='testimonials' className='mt-44 px-6'>
            <h2 className="mb-4 text-5xl font-bold leading-[1.2] bg-gradient-to-br from-black to-black/40 dark:from-white dark:to-white/40 bg-clip-text py-2 tracking-tighter text-transparent text-center">
                What People Are Saying
            </h2>
            <h3 className="mx-auto mb-8 max-w-lg text-balance text-center text-lg font-normal tracking-tight text-gray-400">
                Don't just take our word for it. Here's what <strong>real people</strong> are saying about our work.
            </h3>
            <MarqueeComponent marqueeItems={reviewItems} />
        </section>
    );
}