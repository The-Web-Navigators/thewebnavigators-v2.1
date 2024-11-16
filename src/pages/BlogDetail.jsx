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

    return (
        <div className='min-h-screen'>
            {loading && (
                <div role="status" className='mt-96 w-fit mx-auto'>
                    <svg aria-hidden="true" className="inline w-5 h-5 text-black animate-spin fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                    <span className="sr-only">Loading...</span>
                </div>
            )}
            {!loading && !error && (
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
                    <div className='mt-20 container mx-auto px-6 xl:px-0 grid grid-cols-1 xl:grid-cols-10'>
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
            )}
        </div>
    );
}
