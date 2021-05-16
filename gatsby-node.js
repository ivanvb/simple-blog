const path = require('path');
const { paginate } = require('gatsby-awesome-pagination');

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
            url: `/${POST_PAGE_PREFIX}`,
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
        pathPrefix: `/${POST_PAGE_PREFIX}`,
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
                for (const t in node.tags) {
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

exports.createPages = async ({ graphql, actions }) => {
    return Promise.all([createPostPages(graphql, actions)]);
};
