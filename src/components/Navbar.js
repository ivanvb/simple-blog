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

const MobileLinks = () => {
    const [isOpen, setOpen] = React.useState(false);
    const ref = React.useRef();
    useClickAway(ref, () => setOpen(false));

    return (
        <>
            <button onClick={() => setOpen((prev) => !prev)} className="md:hidden ml-4">
                {isOpen ? <CgClose size={28} /> : <HiOutlineMenu size={28} />}
            </button>
            {isOpen && (
                <ul
                    className="md:hidden space-y-6 absolute top-full left-0 bg-primary-bg w-full pb-8 -mt-1 shadow-b ml-0"
                    ref={ref}
                >
                    {links.map((link, i) => (
                        <li key={i} className="container">
                            <div className="inline-block" onClick={() => setOpen(false)}>
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
    return (
        <div className="py-5 w-full sticky top-0 bg-primary-bg z-50 shadow-lg md:shadow">
            <div className="container flex justify-between items-center">
                <Link to="/">
                    <Logo className="h-12" />
                </Link>
                <nav className="flex items-center md:space-x-4">
                    <DesktopLinks />
                    <ThemeToggler />
                    <MobileLinks />
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
