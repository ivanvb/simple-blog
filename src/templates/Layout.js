import React from 'react';
import Footer from '../components/Footer';
import '../styles/tailwind/build.css';

const Layout = ({ children }) => {
    return (
        <>
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
