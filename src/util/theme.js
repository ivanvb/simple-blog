module.exports.DARK = 'dark';
module.exports.LIGHT = 'light';

module.exports.setInitialColor = function () {
    function getInitialColorMode() {
        const persistedColorPreference = window.localStorage.getItem('color-mode');
        const hasPersistedPreference = typeof persistedColorPreference === 'string';
        // If the user has explicitly chosen light or dark,
        // let's use it. Otherwise, this value will be null.
        if (hasPersistedPreference) {
            return persistedColorPreference;
        }
        // If they haven't been explicit, let's check the media
        // query
        const mql = window.matchMedia('(prefers-color-scheme: dark)');
        const hasMediaQueryPreference = typeof mql.matches === 'boolean';
        if (hasMediaQueryPreference) {
            return mql.matches ? this.DARK : this.LIGHT;
        }
        // If they are using a browser/OS that doesn't support
        // color themes, let's default to 'light'.
        return this.LIGHT;
    }

    const colorMode = getInitialColorMode();
    const root = document.documentElement;
    root.style.setProperty('--primary-background', colorMode === this.LIGHT ? 'white' : 'black');
    root.style.setProperty('--primary-text', colorMode === this.LIGHT ? 'black' : 'white');
    root.style.setProperty('--primary-accent', colorMode === this.LIGHT ? 'black' : 'white');
};
