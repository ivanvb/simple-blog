const React = require('react');
const Layout = require('./src/templates/Layout').default;
const { setInitialColor, DARK, LIGHT } = require('./src/util/theme');

const MagicScriptTag = () => {
    const colorFunction = setInitialColor
        .toString()
        .replace(/this\.LIGHT/g, `'${LIGHT}'`)
        .replace(/this\.DARK/g, `'${DARK}'`);

    const codeToRunOnClient = `
(${colorFunction})()
  `;
    // eslint-disable-next-line react/no-danger
    return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};

exports.onRenderBody = ({ setPreBodyComponents }) => {
    setPreBodyComponents(<MagicScriptTag />);
};

exports.wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>;
};
