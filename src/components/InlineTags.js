import React from 'react';
import { Link } from 'gatsby';
import classnames from 'classnames';

const variants = {
    sm: 'text-xs px-2 py-0.5 rounded-lg',
    md: 'text-sm px-3 py-0.5 rounded-xl',
};

const InlineTags = ({ tags, max = 3, variant = 'sm' }) => {
    return (
        <ul className="flex space-x-3">
            {tags.slice(0, max).map((tag, i) => (
                <li key={i} className="">
                    <Link
                        to={`/blog/${tag.toLowerCase()}`}
                        className={classnames(
                            'bg-primary-text bg-opacity-70 text-primary-bg text-sm',
                            variants[variant]
                        )}
                    >
                        {tag}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default InlineTags;
