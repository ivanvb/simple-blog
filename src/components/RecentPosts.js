import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PostPreviewList from './PostPreviewList';
import { H1 } from './base/index';

const RecentPosts = () => {
    const {
        allContentfulBlogpost: { edges: recentPosts },
    } = useStaticQuery(graphql`
        query {
            allContentfulBlogpost(limit: 4, sort: { fields: publicationDate, order: DESC }) {
                edges {
                    node {
                        title
                        publicationDate(formatString: "ddd, MMM DD, YYYY")
                        brief {
                            brief
                        }
                        tags {
                            title
                        }
                    }
                }
            }
        }
    `);
    return (
        <section className="container py-12">
            <H1>Recent Posts</H1>
            <PostPreviewList posts={recentPosts.map(({ node }) => node)} grid />
        </section>
    );
};

export default RecentPosts;
