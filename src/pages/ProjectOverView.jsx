import React from 'react';
import { Link, useParams } from 'react-router-dom'; // Import useParams
import { usePortfolio } from '../contexts/PortfolioContext';
import { SafariComponent } from '../components/react/SafariComponent';

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

export default function ProjectOverView() {
    const { projectTitle } = useParams(); // Get the projectTitle from the URL
    const portfolioItems = usePortfolio();

    // Optionally find the project item by title if needed
    const projectItem = portfolioItems.find(item => createSlug(item.title) === projectTitle);

    return (
        <div className="mt-16 container mx-auto px-6 md:px-8">
            {projectItem && <SafariComponent src={projectItem.imgSrc} url={projectItem.href} />}
            <div className='grid grid-cols-1 xl:grid-cols-4 gap-12 xl:gap-2 pt-12'>
                <div className='xl:col-span-3 flex flex-col gap-6'>
                    <div>
                        <label htmlFor="projectTitle" className='text-gray-600 text-[14px]'>Project Title</label>
                        <h3 className="max-w-sm text-balance font-bold text-neutral-900 dark:text-white text-xl md:text-3xl">
                            {projectItem.title}
                        </h3>
                    </div>
                    <div>
                        <label htmlFor="projectDescription" className='text-gray-600 text-[14px]'>Project Description</label>
                        <p className='mt-2 tracking-tight dark:text-gray-300'>
                            {projectItem.description}
                        </p>
                    </div>
                    <Link to={projectItem.href} target='_blank' className="cursor-pointer flex h-10 w-40 items-center justify-center rounded-full bg-neutral-800 text-base font-semibold text-white transition ease-out hover:ring-2 hover:ring-neutral-900 hover:ring-offset-2 dark:bg-white dark:text-black dark:hover:ring-white dark:hover:ring-offset-black lg:h-12 lg:text-base">
                        <span className="tracking-tight">Live Preview</span>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
                            <path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
                        </svg>
                    </Link>
                </div>
                <div className='xl:col-span-1'>
                    <h3 className="max-w-sm text-balance font-medium text-neutral-900 dark:text-white text-sm md:text-base">
                        Feedback
                    </h3>
                    <div className='mt-2 border p-4 rounded-lg'>
                        <div className="flex flex-row items-center gap-2">
                            <img className="rounded-full w-8 h-8 object-cover" alt={projectItem.review.clientName} src={projectItem.review.clientProfilePhoto} />
                            <div className="flex flex-col">
                                <figcaption className="text-sm font-medium dark:text-white">{projectItem.review.clientName}</figcaption>
                                <p className="text-xs font-medium dark:text-white/40">{projectItem.review.clientUsername}</p>
                            </div>
                        </div>
                        <div className="mt-2 tracking-tight dark:text-gray-300">{projectItem.review.reviewBody}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
