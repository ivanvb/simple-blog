import React from 'react';
import { Link } from 'gatsby';
import classname from 'classnames';

const TagsList = ({ tags }) => {
    return (
        <nav className="sticky top-12 self-start">
            <h3 className="text-xl font-bold mb-3">Categories</h3>
            <ul>
                {tags.map((tag, i) => {
                    return (
                        <li key={i}>
                            <Link
                                to={tag.url}
                                className="px-3 block w-40 py-1 my-2 opacity-60"
                                activeClassName="bg-gray-200 rounded opacity-100"
                            >
                                {tag.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default TagsList;
