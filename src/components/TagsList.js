import React from 'react';
import { Link } from 'gatsby';

const TagsList = ({ tags }) => {
    return (
        <nav className="top-12 self-start w-full md:w-auto bg-white z-50 pt-4 pb-4 md:pt-0 md:pb-0 mb-8 md:mb-0 border-b md:border-b-0">
            <h3 className="text-xl font-bold mb-3">Categories</h3>
            <ul className="flex md:block w-auto overflow-x-auto flex-wrap">
                {tags.map((tag, i) => {
                    return (
                        <li key={i}>
                            <Link
                                to={tag.url}
                                className="px-6 block md:min-w-40 py-1 my-2 opacity-60 bg-gray-200 md:bg-transparent rounded-full md:rounded-none mr-3 md:mr-0"
                                activeClassName="bg-gray-400 md:bg-gray-200 md:rounded opacity-100"
                                partiallyActive
                            >
                                {tag.name}{' '}
                                <span className="tracking-wide inline-block ml-1">{`(${tag.total.toLocaleString()})`}</span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default TagsList;
