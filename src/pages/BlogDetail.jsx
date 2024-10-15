import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { createClient } from 'contentful';
import SEO from '../components/react/SEO';
import RichText from '../components/react/RichText'; // Import the RichText component

export default function BlogDetail() {
    const { slug } = useParams();
    const [blog, setBlog] = useState(null);
    const [author, setAuthor] = useState(null); // State to store author data
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Contentful client setup
        const client = createClient({
            space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
            accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
            host: process.env.REACT_APP_CONTENTFUL_PREVIEW === 'true' ? 'preview.contentful.com' : 'cdn.contentful.com'
        });

        // Fetch the blog post by slug
        client.getEntries({
            content_type: 'pageBlogPost',
            'fields.slug': slug, // Filter by slug
        })
            .then((response) => {
                if (response.items.length > 0) {
                    const blogPost = response.items[0];
                    setBlog(blogPost);

                    // Fetch the author information
                    const authorId = blogPost.fields.author.sys.id;
                    client.getEntry(authorId).then((authorEntry) => {
                        setAuthor(authorEntry);
                    }).catch((error) => {
                        console.error('Error fetching author:', error);
                    });
                } else {
                    setError('Blog not found');
                }
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching blog:', error);
                setError('Failed to load blog. Please try again later.');
                setLoading(false);
            });
    }, [slug]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p className='text-red-500'>{error}</p>;

    return (
        <>
            <SEO
                title={blog.fields.title}
                description={blog.fields.shortDescription}
                keywords="web development, web applications, business solutions, web design, app development, tech blogs, The Web Navigators"
                ogType="article"
                ogUrl={`https://thewebnavigators.com/blogs/${slug}`}
                ogImage={blog.fields.featuredImage?.fields.file.url}
                twitterCard="summary_large_image"
                twitterImage={blog.fields.featuredImage?.fields.file.url}
            />
            <div className='mt-20 container mx-auto px-6 lg:px-0 grid grid-cols-1 xl:grid-cols-10'>
                <div className='xl:col-span-2'></div>
                <div className='xl:col-span-6'>
                    <h1 className='bg-gradient-to-br from-black to-black/40 dark:from-white dark:to-white/40 bg-clip-text text-3xl font-medium leading-none tracking-tighter text-transparent sm:text-4xl md:text-5xl lg:text-6xl capitalize'>{blog.fields.title}</h1>
                    <img
                        className='w-full h-[450px] object-cover rounded-lg mt-4'
                        src={blog.fields.featuredImage?.fields.file.url}
                        alt={blog.fields.title}
                    />
                    <p className='mt-4 text-sm text-gray-500'>
                        Published By: {author?.fields?.name || 'The Web Navigators'} on {new Date(blog.fields.publishedDate).toLocaleDateString('en-GB').replace(/\//g, '-')}
                    </p>
                    <div className='mt-6'>
                        {/* Use RichText component to render blog content */}
                        <RichText content={blog.fields.content} />
                    </div>
                </div>
                <div className='xl:col-span-2'></div>
            </div>
        </>
    );
}
