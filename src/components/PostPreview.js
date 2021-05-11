import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

const PostPreview = ({ title, brief, publishDate, tags, image }) => {
    return (
        <div className="cursor-pointer">
            <span className="opacity-50 block text-sm">{publishDate}</span>
            <h2 className="font-bold text-2xl tracking-wide my-2">{title}</h2>
            <p className="leading-8 tracking-wide">{brief}</p>
        </div>
    );
};

export default PostPreview;
