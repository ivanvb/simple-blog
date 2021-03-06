import { graphql } from 'gatsby';
import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { markdownOptions, H1 } from '../components/base/index';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import Seo from '../components/Seo';
import InlineTags from '../components/InlineTags';

const BlogPost = ({ data }) => {
    const post = data.contentfulBlogpost;

    return (
        <>
            <Seo
                title={post.title}
                description={post.brief.brief}
                image={{
                    src: post?.headlineImage?.gatsbyImageData?.images?.fallback?.src?.replace(
                        '//',
                        'https://'
                    ),
                }}
            />
            <article className="flex flex-col items-center">
                <GatsbyImage
                    image={post.headlineImage.gatsbyImageData}
                    className="h-64 md:h-80 lg:h-96 mb-3 md:mb-6 max-w-400"
                    alt={post.headlineImage.description}
                />

                <div className="container">
                    <div className="blogpost-px">
                        <span className="text-secondary-accent inline-block mb-1">
                            {post.publicationDate}
                        </span>
                        <H1>{post.title}</H1>
                        <div className="-mt-2 mb-4">
                            <InlineTags tags={post.tags.map((tag) => tag.title)} variant="md" />
                        </div>

                        {renderRichText(post.content, markdownOptions)}
                    </div>
                </div>
            </article>
        </>
    );
};

export const query = graphql`
    query($title: String!) {
        contentfulBlogpost(title: { eq: $title }) {
            title
            publicationDate(formatString: "ddd, MMM DD, YYYY")
            brief {
                brief
            }
            headlineImage {
                gatsbyImageData(width: 1600, quality: 100)
                description
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
                        description
                    }
                }
            }
        }
    }
`;

export default BlogPost;
