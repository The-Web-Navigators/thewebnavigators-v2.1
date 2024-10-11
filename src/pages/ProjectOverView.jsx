import React from 'react';
import { Link, useParams } from 'react-router-dom'; // Import useParams
import { usePortfolio } from '../contexts/PortfolioContext';
import { useTheme } from '../contexts/ThemeContext';
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
    const { isDarkMode } = useTheme();

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
                        <p className='mt-2 text-xs dark:text-white/40 inline-flex items-center justify-center gap-1'>
                            {projectItem.review.platform === 'Upwork' && (
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18" height="18" viewBox="0 0 50 50">
                                    <path fill='green' d="M 1 9 C 0.448 9 0 9.448 0 10 L 0 24.115234 C 0 30.276234 4.6829844 35.631469 10.833984 35.980469 C 16.730984 36.314469 21.747875 32.176391 22.796875 26.650391 C 23.366875 27.420391 23.94625 28.135969 24.53125 28.792969 L 21.001953 43.771484 C 20.932953 44.069484 21.002406 44.380094 21.191406 44.621094 C 21.382406 44.859094 21.670563 45 21.976562 45 L 27.095703 45 C 27.559703 45 27.959406 44.687328 28.066406 44.236328 C 28.687406 41.615328 29.660969 37.508156 30.542969 33.785156 L 31.453125 34.3125 C 33.618125 35.4335 35.815 36 38 36 C 45.192 36 50.926 29.641 49.875 22.25 C 49.179 17.354 45.414078 13.318344 40.580078 12.277344 C 34.951078 11.064344 29.525359 13.949141 27.193359 18.744141 C 27.193359 18.744141 26.934562 19.318578 26.726562 19.892578 C 25.076563 17.046578 24.107609 14.094078 23.599609 11.955078 C 23.414609 11.175078 23.137469 9.762875 23.105469 9.671875 C 22.966469 9.268875 22.589109 9 22.162109 9 L 17 9 C 16.448 9 16 9.448 16 10 L 16 24.300781 C 16 26.649781 14.287219 28.750516 11.949219 28.978516 C 9.2672187 29.240516 7 27.13 7 24.5 L 7 10 C 7 9.448 6.552 9 6 9 L 1 9 z M 38 19 C 40.757 19 43 21.243 43 24 C 43 26.757 40.757 29 38 29 C 35.775 29 33.713531 27.658281 32.269531 26.488281 C 32.796531 24.263281 33.15025 22.773047 33.15625 22.748047 C 33.72425 20.541047 35.717 19 38 19 z"></path>
                                </svg>
                            )}
                            {projectItem.review.platform === 'LinkedIn' && (
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18" height="18" viewBox="0 0 48 48">
                                    <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
                                </svg>
                            )}
                            Client From {projectItem.review.platform}
                        </p>
                        <div className="tracking-tight dark:text-gray-300">{projectItem.review.reviewBody}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
