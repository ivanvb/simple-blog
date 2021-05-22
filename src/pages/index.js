import React from 'react';
import { graphql } from 'gatsby';
import Quote from '../components/Quote';

const IndexPage = ({ data }) => {
    const { contentfulHeroQuote: quoteData } = data;
    return (
        <div>
            <Quote
                text={quoteData.text.text}
                author={quoteData.author}
                backgroundImage={quoteData.backgroundImage.gatsbyImageData}
            />
        </div>
    );
};

export const query = graphql`
    query {
        contentfulHeroQuote {
            text {
                text
            }
            author
            backgroundImage {
                gatsbyImageData(width: 1140, placeholder: NONE)
            }
        }
    }
`;
export default IndexPage;
