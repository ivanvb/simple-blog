process.env.NODE_ENV !== 'production' &&
    require('dotenv').config({
        path: `.env.development`,
    });

module.exports = {
    siteMetadata: {
        title: 'Simple Blog',
        description: `A very simple personal page that includes a blog, all developed using Gatsby.`,
        author: `Simple Blog`,
        keywords: ['gatsby', 'blog', 'react'],
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
        // 'gatsby-plugin-sitemap',
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
                defaults: {
                    formats: [`auto`, `webp`],
                    placeholder: `blurred`,
                    quality: 50,
                    breakpoints: [378, 768, 1080, 1366, 1920],
                    backgroundColor: `transparent`,
                    tracedSVGOptions: {},
                    blurredOptions: {},
                    jpgOptions: {},
                    pngOptions: {},
                    webpOptions: {},
                    avifOptions: {},
                },
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/images/',
            },
            __key: 'images',
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'src/images/icon.png',
            },
        },
    ],
    flags: {
        // FAST_DEV: true,
        // DEV_SSR: true,
        // PARALLEL_SOURCING: true,
        // PRESERVE_FILE_DOWNLOAD_CACHE: true,
        // PRESERVE_WEBPACK_CACHE: true,
    },
};
