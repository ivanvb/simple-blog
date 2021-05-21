const path = require('path');
const { paginate } = require('gatsby-awesome-pagination');
const { titleToSlug } = require('./src/util/index');

async function createPostPages(graphql, actions) {
    const ITEMS_PER_PAGE = 2;
    const POST_PAGE_PREFIX = 'blog';

    const template = path.resolve('./src/templates/ArticleList.js');
    const blogPosts = await graphql(`
        {
            allContentfulBlogpost {
                edges {
                    node {
                        title
                        tags {
                            title
                        }
                    }
                }
            }
        }
    `);

    let tags = new Set();
    blogPosts.data.allContentfulBlogpost.edges.forEach(({ node }) => {
        node.tags.forEach((tag) => tags.add(tag.title));
    });
    tags = Array.from(tags);

    const tagsContextData = [
        {
            name: 'All',
            url: `/${POST_PAGE_PREFIX}/all`,
            total: blogPosts.data.allContentfulBlogpost.edges.length,
        },
        ...tags.map((tag) => ({
            name: tag,
            url: `/${POST_PAGE_PREFIX}/${tag.toLowerCase()}`,
            total: blogPosts.data.allContentfulBlogpost.edges.filter(({ node }) => {
                return node.tags.map(({ title }) => title).includes(tag);
            }).length,
        })),
    ];

    paginate({
        createPage: actions.createPage,
        items: blogPosts.data.allContentfulBlogpost.edges,
        itemsPerPage: ITEMS_PER_PAGE,
        pathPrefix: `/${POST_PAGE_PREFIX}/all`,
        component: template,
        context: {
            regex: '/.*/',
            tags: tagsContextData,
        },
    });

    tags.forEach((tag) => {
        paginate({
            createPage: actions.createPage,
            items: blogPosts.data.allContentfulBlogpost.edges.filter(({ node }) => {
                for (const t of node.tags) {
                    if (t.title === tag) return true;
                }

                return false;
            }),
            itemsPerPage: ITEMS_PER_PAGE,
            pathPrefix: `/${POST_PAGE_PREFIX}/${tag.toLowerCase()}`,
            component: template,
            context: {
                regex: `/${tag}/`,
                tags: tagsContextData,
            },
        });
    });
}

async function createIndividualPostPages(graphql, actions) {
    const template = path.resolve('./src/templates/BlogPost.js');
    const blogPosts = await graphql(`
        {
            allContentfulBlogpost {
                edges {
                    node {
                        title
                        tags {
                            title
                        }
                    }
                }
            }
        }
    `);

    blogPosts.data.allContentfulBlogpost.edges.forEach(({ node }) => {
        actions.createPage({
            path: titleToSlug(node.title),
            context: {
                title: node.title,
            },
            component: template,
        });
    });
}

exports.createPages = async ({ graphql, actions }) => {
    return Promise.all([
        createPostPages(graphql, actions),
        createIndividualPostPages(graphql, actions),
    ]);
};
