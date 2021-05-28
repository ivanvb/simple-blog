import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { toggleMode, DARK, LIGHT, getInitialColorMode } from '../util/theme';

const ThemeToggler = () => {
    const [theme, setTheme] = React.useState(getInitialColorMode());

    React.useEffect(() => {
        toggleMode(theme);
    }, [theme]);

    return (
        <button onClick={() => setTheme((prev) => (prev === DARK ? LIGHT : DARK))}>
            {theme === DARK ? <FiSun size={24} /> : <FiMoon size={24} />}
        </button>
    );
};

export default ThemeToggler;
