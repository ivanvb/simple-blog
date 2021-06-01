import React from 'react';
import { graphql } from 'gatsby';
import Quote from '../components/Quote';
import RecentPosts from '../components/RecentPosts';
import Seo from '../components/Seo';

const IndexPage = ({ data }) => {
    const { contentfulHeroQuote: quoteData } = data;
    return (
        <>
            <Seo title="Home" socialTitle="Simple Blog: Just a Template" />
            <div>
                <Quote
                    text={quoteData.text.text}
                    author={quoteData.author}
                    backgroundImage={quoteData.backgroundImage.gatsbyImageData}
                />
                <RecentPosts />
            </div>
        </>
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
