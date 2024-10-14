import React from 'react';
import { useLocation } from 'react-router-dom';
import SEO from '../components/react/SEO';

export default function Blogs() {
    const location = useLocation();

    return (
        <>
            {location.pathname === '/blogs' && (
                <SEO
                    title="Blogs - The Web Navigators"
                    description="Explore insights and tips on web development, design, and app solutions. Navigating the Web’s Meteor Showers to help businesses and individuals excel online."
                    keywords="web development, web applications, business solutions, web design, app development, tech blogs, The Web Navigators"
                    ogType="website"
                    ogUrl="https://thewebnavigators.com"  // Update to specific blogs URL
                    ogImage="https://thewebnavigators.com/og-image.png"
                    twitterCard="summary_large_image"
                    twitterImage="https://thewebnavigators.com/twitter-image.png"
                />
            )}
            <div className='mt-20 container mx-auto px-6 lg:px-0 grid grid-cols-4'>
                <div className='col-span-3 min-h-screen'></div>
            </div>
        </>
    )
}
