const React = require('react');
const Layout = require('./src/templates/Layout').default;

exports.wrapPageElement = ({ element, props }) => {
    return (
        <Layout narrowFooter={/^\/blog\/posts/.test(props.location.pathname)} {...props}>
            {element}
        </Layout>
    );
};
