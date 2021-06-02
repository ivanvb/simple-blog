process.env.NODE_ENV !== 'production' &&
    require('dotenv').config({
        path: `.env.development`,
    });

const { titleToSlug } = require('./src/util/index');

const siteUrl = process.env.GATSBY_URL;
module.exports = {
    siteMetadata: {
        title: 'Simple Blog',
        description: `A very simple personal page that includes a blog, all developed using Gatsby.`,
        author: `Simple Blog`,
        keywords: ['gatsby', 'blog', 'react'],
        siteUrl: siteUrl,
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
        {
            resolve: 'gatsby-plugin-sitemap',
            options: {
                query: `
                    {
                        allSitePage{
                            nodes{
                                path
                            }
                        }
                        allContentfulBlogpost{
                            edges{
                                node{
                                    title
                                    updatedAt
                                }
                            }
                        }
                    }
                    
                `,
                resolveSiteUrl: () => siteUrl,
                resolvePages: ({
                    allSitePage: { nodes: allPages },
                    allContentfulBlogpost: { edges: allPosts },
                }) => {
                    allPosts.forEach(({ node }) => {
                        const found = allPages.find(({ path }) => {
                            if (path.includes(titleToSlug(node.title))) {
                                return true;
                            }
                        });

                        if (!!found) {
                            found.updatedAt = node.updatedAt;
                        }
                    });

                    return allPages.map((page) => {
                        return { ...page };
                    });
                },
                serialize: ({ path, updatedAt }) => {
                    return {
                        url: path,
                        lastmod: updatedAt,
                    };
                },
            },
        },
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
            icon: './src/images/favicon.svg',
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
                icon: './src/images/icon.png',
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
