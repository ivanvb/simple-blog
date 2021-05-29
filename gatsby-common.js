const React = require('react');
const Layout = require('./src/templates/Layout').default;
const { ThemeProvider } = require('./src/context/ThemeContext');

module.exports.wrapPageElement = ({ element, props }) => {
    return (
        <Layout narrowFooter={/^\/blog\/posts/.test(props.location.pathname)} {...props}>
            {element}
        </Layout>
    );
};

module.exports.wrapRootElement = ({ element }) => {
    return <ThemeProvider>{element}</ThemeProvider>;
};
