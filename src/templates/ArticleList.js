import { graphql } from 'gatsby';
import React from 'react';
import PostPreviewList from '../components/PostPreviewList';

const ArticleList = ({ data, pageContext }) => {
    const { humanPageNumber, numberOfPages, previousPagePath, nextPagePath, tags } = pageContext;
    const posts = data.allContentfulBlogpost.edges;

    return (
        <div className="container">
            <PostPreviewList posts={posts.map(({ node }) => node)} />
        </div>
    );
};

export const query = graphql`
    query($skip: Int!, $limit: Int!, $regex: String) {
        allContentfulBlogpost(
            skip: $skip
            limit: $limit
            sort: { fields: publicationDate, order: DESC }
            filter: { tags: { elemMatch: { title: { regex: $regex } } } }
        ) {
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
                    headlineImage {
                        gatsbyImageData(width: 350)
                    }
                }
            }
        }
    }
`;

export default ArticleList;
