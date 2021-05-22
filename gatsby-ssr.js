const React = require('react');
const Layout = require('./src/templates/Layout');

exports.wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>;
};
