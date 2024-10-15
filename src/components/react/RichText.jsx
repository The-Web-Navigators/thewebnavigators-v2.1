import React, { useEffect, useState } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { createClient } from 'contentful';

const RichText = ({ content }) => {
    const [assets, setAssets] = useState({});
    console.log(content)

    useEffect(() => {
        const client = createClient({
            space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
            accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
        });

        const fetchAssets = async () => {
            const assetPromises = content.content
                .filter((node) => node.nodeType === BLOCKS.EMBEDDED_ENTRY)
                .map((node) => {
                    const entryId = node.data.target.sys.id;
                    return client.getEntry(entryId).then((entry) => ({
                        id: entryId,
                        title: entry.fields.title || '',
                        content: entry.fields.content || {},
                        image: entry.fields.image || null,
                    }));
                });

            const fetchedAssets = await Promise.all(assetPromises);
            const assetsMap = fetchedAssets.reduce((acc, asset) => {
                acc[asset.id] = asset;
                return acc;
            }, {});
            setAssets(assetsMap);
        };

        if (content && content.content) {
            fetchAssets();
        }
    }, [content]);

    const options = {
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => (
                <p className="my-4 text-gray-600 leading-relaxed">{children}</p>
            ),
            [BLOCKS.HEADING_1]: (node, children) => <h1 className="text-2xl font-bold my-4">{children}</h1>,
            [BLOCKS.HEADING_2]: (node, children) => <h2 className="text-xl font-bold my-4">{children}</h2>,
            [BLOCKS.HEADING_3]: (node, children) => <h3 className="text-lg font-bold my-4">{children}</h3>,
            [BLOCKS.HEADING_4]: (node, children) => <h4 className="text-md font-bold my-4">{children}</h4>,
            [BLOCKS.HEADING_5]: (node, children) => <h5 className="text-sm font-bold my-4">{children}</h5>,
            [BLOCKS.HEADING_6]: (node, children) => <h6 className="text-xs font-bold my-4">{children}</h6>,
            [INLINES.HYPERLINK]: (node, children) => (
                <a href={node.data.uri} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                    {children}
                </a>
            ),
            [BLOCKS.EMBEDDED_ENTRY]: (node) => {
                const entryId = node.data.target.sys.id;
                const entry = assets[entryId];

                if (entry) {
                    return (
                        <div className="my-8">
                            <h3 className="text-xl font-bold">{entry.title}</h3>
                            {entry.image && entry.image.fields && (
                                <img
                                    src={`https:${entry.image.fields.file.url}`}
                                    alt={entry.image.fields.title || "Embedded image"}
                                    className="w-full h-[500px] object-cover rounded-lg"
                                />
                            )}
                            {entry.content && entry.content.content && (
                                <div className="mt-4">
                                    {documentToReactComponents(entry.content, options)}
                                </div>
                            )}
                        </div>
                    );
                }

                return <p>Loading...</p>;
            },
            [BLOCKS.QUOTE]: (node, children) => (
                <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">
                    {children}
                </blockquote>
            ),
            [BLOCKS.UL_LIST]: (node, children) => (
                <ul className="list-disc pl-5 my-4">
                    {children}
                </ul>
            ),
            [BLOCKS.OL_LIST]: (node, children) => (
                <ol className="list-decimal pl-5 my-4">
                    {children}
                </ol>
            ),
            [BLOCKS.LIST_ITEM]: (node, children) => <li className="my-2">{children}</li>,
        },
    };

    // Ensure content is valid before rendering
    if (!content || !content.content) {
        return <p>No content available.</p>;
    }

    return <div>{documentToReactComponents(content, options)}</div>;
};

export default RichText;
