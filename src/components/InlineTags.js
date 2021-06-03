import React from 'react';
import { Link } from 'gatsby';

const InlineTags = ({ tags, max = 3 }) => {
    return (
        <ul className="flex space-x-3">
            {tags.slice(0, max).map((tag, i) => (
                <li key={i} className="">
                    <Link
                        to={`/blog/${tag.toLowerCase()}`}
                        className="bg-primary-text bg-opacity-70 text-primary-bg text-xs px-2 py-0.5 rounded-lg"
                    >
                        {tag}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default InlineTags;
