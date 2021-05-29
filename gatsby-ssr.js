const React = require('react');
const Layout = require('./src/templates/Layout').default;
const {
    setInitialColor,
    getInitialColorMode,
    toggleMode,
    DARK,
    LIGHT,
} = require('./src/util/theme');

const MagicScriptTag = () => {
    // Replaces every instance of the LIGHT variable with its literal value
    const initialColorFunction = getInitialColorMode
        .toString()
        .replace(/LIGHT/g, `'${LIGHT}'`)
        .replace(/DARK/g, `'${DARK}'`);

    const colorFunction = setInitialColor
        .toString()
        .replace(/LIGHT/g, `'${LIGHT}'`)
        .replace(/DARK/g, `'${DARK}'`);

    const toggleFnc = toggleMode
        .toString()
        .replace(/LIGHT/g, `'${LIGHT}'`)
        .replace(/DARK/g, `'${DARK}'`);

    // Instead of hardcoding the function as a string we take advantage of the Function.toString method
    const codeToRunOnClient = `
    ${toggleFnc}
    ${initialColorFunction}
    (${colorFunction})()
  `;

    // eslint-disable-next-line react/no-danger
    return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};

exports.onRenderBody = ({ setPreBodyComponents }) => {
    setPreBodyComponents(<MagicScriptTag />);
};

exports.wrapPageElement = ({ element, props }) => {
    return (
        <Layout narrowFooter={/^\/blog\/posts/.test(props.location.pathname)} {...props}>
            {element}
        </Layout>
    );
};
