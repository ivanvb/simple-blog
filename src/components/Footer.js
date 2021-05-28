import React from 'react';
import classnames from 'classnames';

const Footer = ({ narrowFooter = false }) => {
    return (
        <footer className="container pb-6 text-sm mt-auto">
            <span className={classnames({ 'blogpost-px': narrowFooter })}>
                Copyright© 2021 - present
            </span>
        </footer>
    );
};

export default Footer;
