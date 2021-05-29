import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import classnames from 'classnames';
import { DARK, LIGHT } from '../util/theme';
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggler = () => {
    const { theme, loaded, setTheme } = React.useContext(ThemeContext);

    return (
        <button
            onClick={() => setTheme((prev) => (prev === DARK ? LIGHT : DARK))}
            className={classnames(
                'transition-opacity duration-150',
                loaded ? 'opacity-100' : 'opacity-0 pointer-events-none'
            )}
        >
            {theme === DARK ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>
    );
};

export default ThemeToggler;
