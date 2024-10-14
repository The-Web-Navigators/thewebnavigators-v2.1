import React, { useEffect, useState } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { createClient } from 'contentful';

const RichText = ({ content }) => {
    const [assets, setAssets] = useState({});

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
            [BLOCKS.PARAGRAPH]: (node) => (
                <p className="my-4 text-gray-600">{node.content.map((textNode) => textNode.value).join('')}</p>
            ),
            [BLOCKS.HEADING_1]: (node) => <h1 className="text-2xl font-bold my-4">{node.content[0]?.value}</h1>,
            [BLOCKS.HEADING_2]: (node) => <h2 className="text-xl font-bold my-4">{node.content[0]?.value}</h2>,
            [BLOCKS.HEADING_3]: (node) => <h3 className="text-lg font-bold my-4">{node.content[0]?.value}</h3>,
            [BLOCKS.HEADING_4]: (node) => <h4 className="text-md font-bold my-4">{node.content[0]?.value}</h4>,
            [BLOCKS.HEADING_5]: (node) => <h5 className="text-sm font-bold my-4">{node.content[0]?.value}</h5>,
            [BLOCKS.HEADING_6]: (node) => <h6 className="text-xs font-bold my-4">{node.content[0]?.value}</h6>,
            [INLINES.HYPERLINK]: (node) => (
                <a href={node.data.uri} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                    {node.content[0]?.value}
                </a>
            ),
            [BLOCKS.EMBEDDED_ENTRY]: (node) => {
                const entryId = node.data.target.sys.id;
                const entry = assets[entryId];

                if (entry) {
                    return (
                        <div className="my-8">
                            <h3 className="text-xl font-bold">{entry.title}</h3>
                            {entry.image && (
                                <img
                                    src={`https:${entry.image.fields.file.url}`}
                                    alt={entry.image.fields.title || "Embedded image"}
                                    className="w-full h-[500px] object-cover rounded-lg" // Full width, 500px height, cover
                                />
                            )}
                            {entry.content && entry.content.content && documentToReactComponents(entry.content)}
                        </div>
                    );
                }

                return <p>Loading...</p>; // Show loading text until the entry is fetched
            },
            [BLOCKS.QUOTE]: (node) => (
                <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">
                    {node.content.map((textNode) => textNode.value).join('')}
                </blockquote>
            ),
            [BLOCKS.UL_LIST]: (node) => (
                <ul className="list-disc pl-5 my-4">
                    {node.content.map((listItem, index) => (
                        <li key={index}>{documentToReactComponents(listItem.content)}</li>
                    ))}
                </ul>
            ),
            [BLOCKS.OL_LIST]: (node) => (
                <ol className="list-decimal pl-5 my-4">
                    {node.content.map((listItem, index) => (
                        <li key={index}>{documentToReactComponents(listItem.content)}</li>
                    ))}
                </ol>
            ),
        },
    };

    // Ensure content is valid before rendering
    if (!content || !content.content) {
        return <p>No content available.</p>;
    }

    return <div>{documentToReactComponents(content, options)}</div>;
};

export default RichText;
