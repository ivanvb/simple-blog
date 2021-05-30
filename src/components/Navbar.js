import React from 'react';
import Logo from './icons/Logo';
import { Link } from 'gatsby';
import { HiOutlineMenu } from 'react-icons/hi';
import { CgClose } from 'react-icons/cg';
import { useClickAway } from 'react-use';
import ThemeToggler from './ThemeToggler';

const links = [
    {
        label: 'Blog',
        link: '/blog/all',
    },
    {
        label: 'About',
        link: '/about',
    },
    {
        label: 'Contact',
        link: '/contact',
    },
];

const DesktopLinks = () => {
    return (
        <ul className="hidden md:flex space-x-10">
            {links.map((link, i) => (
                <li key={i}>
                    <Link to={link.link}>{link.label}</Link>
                </li>
            ))}
        </ul>
    );
};

const MobileLinks = ({ isMobileOpen, setMobileOpen }) => {
    return (
        <>
            <button onClick={() => setMobileOpen((prev) => !prev)} className="md:hidden ml-4">
                {isMobileOpen ? <CgClose size={28} /> : <HiOutlineMenu size={28} />}
            </button>
            {isMobileOpen && (
                <ul className="md:hidden space-y-6 absolute top-full left-0 bg-primary-bg w-full pb-8 -mt-1 shadow-b ml-0">
                    {links.map((link, i) => (
                        <li key={i} className="container">
                            <div className="inline-block" onClick={() => setMobileOpen(false)}>
                                <Link to={link.link}>{link.label}</Link>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};
const Navbar = () => {
    const [isMobileOpen, setMobileOpen] = React.useState(false);
    const ref = React.useRef();
    useClickAway(ref, () => setMobileOpen(false));

    return (
        <div className="py-5 w-full sticky top-0 bg-primary-bg z-50 shadow-lg md:shadow" ref={ref}>
            <div className="container flex justify-between items-center">
                <div onClick={() => setMobileOpen(false)}>
                    <Link to="/">
                        <Logo className="h-12" />
                    </Link>
                </div>
                <nav className="flex items-center md:space-x-4">
                    <DesktopLinks />
                    <ThemeToggler />
                    <MobileLinks isMobileOpen={isMobileOpen} setMobileOpen={setMobileOpen} />
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
