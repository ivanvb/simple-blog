import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import classnames from 'classnames';
import { toggleMode, DARK, LIGHT, getInitialColorMode } from '../util/theme';

const ThemeToggler = () => {
    const [theme, setTheme] = React.useState(getInitialColorMode());
    const [loaded, setLoaded] = React.useState(false);

    React.useEffect(() => setLoaded(true), []);
    React.useEffect(() => {
        toggleMode(theme);
    }, [theme]);

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
