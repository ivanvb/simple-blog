import React from 'react';
import { Link } from 'gatsby';

const PaginationLink = ({ to, enabled, children }) => {
    return enabled ? (
        <Link to={to}>{children}</Link>
    ) : (
        <span className="opacity-30">{children}</span>
    );
};

const Pagination = ({ numberOfPages, currentPage, nextPage, previousPage }) => {
    return (
        <nav className="border-t">
            <ul className="flex space-x-3 justify-center mt-6">
                <li>
                    <PaginationLink enabled={currentPage !== 1} to={previousPage}>
                        Prev
                    </PaginationLink>
                </li>
                <li>{currentPage}</li>
                <li>
                    <PaginationLink enabled={currentPage !== numberOfPages} to={nextPage}>
                        Next
                    </PaginationLink>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
