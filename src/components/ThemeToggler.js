import React from 'react';
import { toggleMode, DARK, LIGHT, getInitialColorMode } from '../util/theme';

const ThemeToggler = () => {
    const [theme, setTheme] = React.useState(getInitialColorMode());

    React.useEffect(() => {
        toggleMode(theme);
    }, [theme]);

    return (
        <button onClick={() => setTheme((prev) => (prev === DARK ? LIGHT : DARK))}>
            <p>T</p>
        </button>
    );
};

export default ThemeToggler;
