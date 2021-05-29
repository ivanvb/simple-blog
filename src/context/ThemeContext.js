import React, { useEffect, useState } from 'react';
import { getInitialColorMode, toggleMode } from '../util/theme';

export const ThemeContext = React.createContext();

export const ThemeProvider = (props) => {
    const [theme, setTheme] = useState(getInitialColorMode());
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        toggleMode(theme);
        if (!loaded) setLoaded(true);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, loaded, setTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
};
