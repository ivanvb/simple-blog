const { window, document } = require('browser-monads');

const DARK = 'dark';
const LIGHT = 'light';

function getInitialColorMode() {
    const persistedColorPreference = window.localStorage.getItem('color-mode');
    const hasPersistedPreference = typeof persistedColorPreference === 'string';

    if (hasPersistedPreference) {
        return persistedColorPreference;
    }

    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const hasMediaQueryPreference = typeof mql.matches === 'boolean';
    if (hasMediaQueryPreference) {
        return mql.matches ? DARK : LIGHT;
    }

    return LIGHT;
}

function setInitialColor() {
    const colorMode = getInitialColorMode();
    const root = document.documentElement;
    root.style.setProperty('--primary_background', colorMode === LIGHT ? 'white' : 'black');
    root.style.setProperty('--primary_text', colorMode === LIGHT ? 'black' : 'white');
    root.style.setProperty('--primary_accent', colorMode === LIGHT ? 'black' : 'white');
}

// Gets all the css variables defined in :root
// Obtained from https://stackoverflow.com/a/56250392
const cssVariables = [].slice
    .call(document.styleSheets)
    .map((styleSheet) => [].slice.call(styleSheet.cssRules))
    .flat()
    .filter((cssRule) => cssRule.selectorText === ':root')
    .map((cssRule) => cssRule.cssText.split('{')[1].split('}')[0].trim().split(';'))
    .flat()
    .filter((text) => text !== '')
    .map((text) => text.split(':'))
    .map((parts) => ({ key: parts[0].trim(), value: parts[1].trim() }))
    .reduce(
        (acc, curr) => {
            const id = curr.key.split('_')[0].replace(/--/, '');

            if (id === LIGHT) {
                acc[LIGHT].push(curr);
            } else if (id === DARK) {
                acc[DARK].push(curr);
            } else {
                acc.primary.push(curr);
            }

            return acc;
        },
        {
            [LIGHT]: [],
            [DARK]: [],
            primary: [],
        }
    );

function toggleMode(mode) {
    if (mode && cssVariables[mode]) {
        cssVariables[mode].forEach(({ key, value }) => {
            document.documentElement.style.setProperty(key.replace(mode, 'primary'), value);
            window.localStorage.setItem('color-mode', mode);
        });
    }
}

module.exports = { getInitialColorMode, toggleMode, setInitialColor, DARK, LIGHT };
