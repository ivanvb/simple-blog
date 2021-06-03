import React from 'react';
import { Link } from 'gatsby';
import InlineTags from './InlineTags';

const PostPreview = ({ title, brief, publishDate, tags, link }) => {
    return (
        <Link to={link}>
            <span className="text-secondary-accent block text-sm">{publishDate}</span>
            <h2 className="font-bold text-2xl tracking-wide mt-2 mb-2">{title}</h2>
            <InlineTags tags={tags} />
            <p className="leading-8 tracking-wide pb-2 mt-3">{brief}</p>
        </Link>
    );
};

export default PostPreview;
