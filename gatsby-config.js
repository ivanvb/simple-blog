process.env.NODE_ENV !== 'production' &&
    require('dotenv').config({
        path: `.env.development`,
    });
module.exports = {
    siteMetadata: {
        title: 'simple-blog',
    },
    plugins: [
        {
            resolve: 'gatsby-source-contentful',
            options: {
                accessToken: process.env.ACCESS_TOKEN,
                spaceId: process.env.SPACE_ID,
            },
        },
        'gatsby-plugin-image',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sitemap',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/images/',
            },
            __key: 'images',
        },
    ],
    flags: {
        // FAST_DEV: true,
        // DEV_SSR: true,
        PARALLEL_SOURCING: true,
        PRESERVE_FILE_DOWNLOAD_CACHE: true,
        PRESERVE_WEBPACK_CACHE: true,
    },
};
