import React from 'react';
import { Link } from 'gatsby';

const PostPreview = ({ title, brief, publishDate, tags, link }) => {
    return (
        <Link to={link}>
            <span className="opacity-50 block text-sm">{publishDate}</span>
            <h2 className="font-bold text-2xl tracking-wide my-2">{title}</h2>
            <p className="leading-8 tracking-wide">{brief}</p>
        </Link>
    );
};

export default PostPreview;
