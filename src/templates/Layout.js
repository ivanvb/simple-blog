import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/tailwind/build.css';

const Layout = ({ narrowFooter, children }) => {
    return (
        <>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer narrowFooter={narrowFooter} />
        </>
    );
};

export default Layout;
