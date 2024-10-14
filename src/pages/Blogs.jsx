import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate
import SEO from '../components/react/SEO';
import { createClient } from 'contentful';

export default function Blogs() {
    const location = useLocation();
    const navigate = useNavigate(); // Initialize the navigate function
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Contentful client setup
        const client = createClient({
            space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
            accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
            host: process.env.REACT_APP_CONTENTFUL_PREVIEW === 'true' ? 'preview.contentful.com' : 'cdn.contentful.com'
        });

        // Fetch blog posts from Contentful
        client.getEntries({ content_type: 'pageBlogPost' })
            .then((response) => {
                setBlogs(response.items);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching blogs:', error);
                setError('Failed to load blogs. Please try again later.');
                setLoading(false);
            });
    }, []);

    const handleBlogClick = (slug) => {
        navigate(`/blogs/${slug}`); // Navigate to the blog post detail page
    };

    return (
        <>
            {location.pathname === '/blogs' && (
                <SEO
                    title="Blogs - The Web Navigators"
                    description="Explore insights and tips on web development, design, and app solutions."
                    keywords="web development, web applications, business solutions, web design, app development, tech blogs, The Web Navigators"
                    ogType="website"
                    ogUrl="https://thewebnavigators.com/blogs"
                    ogImage="https://thewebnavigators.com/og-image.png"
                    twitterCard="summary_large_image"
                    twitterImage="https://thewebnavigators.com/twitter-image.png"
                />
            )}
            <div className='mt-20 container mx-auto px-6 lg:px-0 grid grid-cols-1 xl:grid-cols-4'>
                <div className='xl:col-span-3 min-h-screen'>
                    <h1 className='bg-gradient-to-br from-black to-black/40 dark:from-white dark:to-white/40 bg-clip-text text-5xl font-medium leading-none tracking-tighter text-transparent sm:text-5xl md:text-6xl lg:text-7xl capitalize'>Blogs</h1>

                    {loading && <p>Loading...</p>}
                    {error && <p className='text-red-500'>{error}</p>}

                    {!loading && !error && blogs.length === 0 && (
                        <p>No blogs available at the moment.</p>
                    )}

                    {!loading && !error && blogs.map((blog) => (
                        <div
                            key={blog.sys.id}
                            className='mt-4 grid grid-cols-1 xl:grid-cols-8 items-start gap-4 shadow-lg p-2 rounded-lg cursor-pointer group'
                            onClick={() => handleBlogClick(blog.fields.slug)}>
                            <div className='xl:col-span-2'>
                                <img
                                    className='w-full h-36 object-cover rounded-lg group-hover:scale-95 transition-all ease-in-out duration-300'
                                    src={blog.fields.featuredImage?.fields.file.url}
                                    alt={blog.fields.title}
                                />
                            </div>
                            <div className='xl:col-span-6 flex flex-col items-start gap-2'>
                                <h2 className='bg-gradient-to-br from-black to-black/40 dark:from-white dark:to-white/40 bg-clip-text text-2xl font-medium leading-none tracking-tighter text-transparent capitalize'>
                                    {blog.fields.title}
                                </h2>
                                <p className='text-xs font-light tracking-tight text-gray-400'>
                                    {blog.fields.shortDescription}
                                </p>
                                <p className='text-xs text-gray-500'>
                                    Published on: {new Date(blog.fields.publishedDate).toLocaleDateString()}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
