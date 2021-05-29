import React from 'react';
import classnames from 'classnames';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ThemeContext } from '../context/ThemeContext';
import { DARK } from '../util/theme';
import '../styles/tailwind/build.css';

const Layout = ({ narrowFooter, children }) => {
    const { theme } = React.useContext(ThemeContext);
    return (
        <>
            <Navbar />
            <main className={classnames('flex-1 flex flex-col', { dark: theme === DARK })}>
                {children}
            </main>
            <Footer narrowFooter={narrowFooter} />
        </>
    );
};

export default Layout;
