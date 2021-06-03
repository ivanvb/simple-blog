import { graphql } from 'gatsby';
import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { markdownOptions, H1 } from '../components/base/index';
import Seo from '../components/Seo';

const AboutPage = ({ data }) => {
    const {
        contentfulAboutPage: { content, photo },
    } = data;
    return (
        <>
            <Seo title="About" />
            <GatsbyImage
                image={photo.gatsbyImageData}
                alt={photo.description}
                className="h-80 w-full mb-4 about-mobile-gatsby-image"
                objectFit="cover"
                imgClassName="filter grayscale"
            />
            <div className="container md:pt-12">
                <GatsbyImage
                    image={photo.gatsbyImageData}
                    alt={photo.description}
                    className="h-96 w-96 float-right ml-10 hidden about-desktop-gatsby-image"
                    objectFit="cover"
                    imgClassName="filter grayscale"
                />
                <div>
                    <H1>About the Author</H1>
                    {renderRichText(content, markdownOptions)}
                </div>
            </div>
        </>
    );
};

export const query = graphql`
    query {
        contentfulAboutPage {
            content {
                raw
            }
            photo {
                gatsbyImageData(width: 800)
                description
            }
        }
    }
`;

export default AboutPage;
