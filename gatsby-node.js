const path = require('path');
const { paginate } = require('gatsby-awesome-pagination');

async function createPostPages(graphql, actions) {
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

    paginate({
        createPage: actions.createPage,
        items: blogPosts.data.allContentfulBlogpost.edges,
        itemsPerPage: 3,
        pathPrefix: '/blog',
        component: template,
        context: {
            regex: '/.*/',
        },
    });

    let tags = new Set();
    blogPosts.data.allContentfulBlogpost.edges.forEach(({ node }) => {
        node.tags.forEach((tag) => tags.add(tag.title));
    });
    tags = Array.from(tags);

    tags.forEach((tag) => {
        paginate({
            createPage: actions.createPage,
            items: blogPosts.data.allContentfulBlogpost.edges.filter(({ node }) => {
                for (const t in node.tags) {
                    if (t.title === tag) return true;
                }

                return false;
            }),
            itemsPerPage: 3,
            pathPrefix: `/blog/${tag.toLowerCase()}`,
            component: template,
            context: {
                regex: `/${tag}/`,
            },
        });
    });
}

exports.createPages = async ({ graphql, actions }) => {
    return Promise.all([createPostPages(graphql, actions)]);
};
