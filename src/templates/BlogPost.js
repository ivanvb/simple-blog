import { graphql } from 'gatsby';
import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { markdownOptions, H1 } from '../components/base/index';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

const BlogPost = ({ data }) => {
    const post = data.contentfulBlogpost;

    return (
        <article className="flex flex-col items-center">
            <GatsbyImage
                image={post.headlineImage.gatsbyImageData}
                className="h-64 md:h-80 lg:h-96 mb-3 md:mb-6 max-w-400 xl:-ml-4"
            />

            <div className="container">
                <div className="md:px-24">
                    <H1>{post.title}</H1>
                    {renderRichText(post.content, markdownOptions)}
                </div>
            </div>
        </article>
    );
};

export const query = graphql`
    query($title: String!) {
        contentfulBlogpost(title: { eq: $title }) {
            title
            publicationDate
            headlineImage {
                gatsbyImageData(width: 1600, quality: 100)
            }
            tags {
                title
            }
            content {
                raw
                references {
                    ... on ContentfulAsset {
                        __typename
                        contentful_id
                        gatsbyImageData(width: 1160)
                    }
                }
            }
        }
    }
`;

export default BlogPost;
