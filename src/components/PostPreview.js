import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

const PostPreview = ({ title, brief, publishDate, tags, image }) => {
    return (
        <div className="flex h-64">
            <div className="w-1/3">
                <GatsbyImage image={image} />
            </div>
            <div className="w-2/3">
                <h2>{title}</h2>
                <p>{brief}</p>
            </div>
        </div>
    );
};

export default PostPreview;
