import React from 'react';
import Logo from './icons/Logo';
import { Link } from 'gatsby';
import { HiOutlineMenu } from 'react-icons/hi';
import { CgClose } from 'react-icons/cg';
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

const MobileLinks = () => {
    const [isOpen, setOpen] = React.useState(false);

    return (
        <>
            <button onClick={() => setOpen((prev) => !prev)} className="md:hidden">
                {isOpen ? <CgClose size={28} /> : <HiOutlineMenu size={28} />}
            </button>
            {isOpen && (
                <ul className="md:hidden space-y-6 absolute top-full left-0 bg-primary-bg w-full pb-8 -mt-1 shadow-b">
                    {links.map((link, i) => (
                        <li key={i} className="container">
                            <Link to={link.link}>{link.label}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};
const Navbar = () => {
    return (
        <div className="container py-8 w-full container flex justify-between items-center sticky md:relative top-0 bg-primary-bg z-50">
            <Link to="/">
                <Logo className="h-6" />
            </Link>
            <nav className="flex items-center space-x-4">
                <DesktopLinks />
                <ThemeToggler />
                <MobileLinks />
            </nav>
        </div>
    );
};

export default Navbar;
