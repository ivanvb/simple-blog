import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';

export const Bold = ({ children }) => <span className="font-bold">{children}</span>;
export const Italic = ({ children }) => <span className="italic">{children}</span>;
export const Underline = ({ children }) => <span className="underline">{children}</span>;

export const Text = ({ children }) => <p className="leading-7 mb-6 tracking-wide">{children}</p>;

export const H1 = ({ children }) => (
    <h1 className="text-primary text-3xl lg:text-4xl font-light mb-3">{children}</h1>
);

export const H2 = ({ children }) => (
    <h2 className="text-primary text-2xl lg:text-3xl mb-2">{children}</h2>
);

export const H3 = ({ children }) => (
    <h3 className="text-primary text-xl lg:text-2xl mb-1">{children}</h3>
);

export const H4 = ({ children }) => (
    <h4 className="text-primary text-lg lg:text-xl font-light mb-1">{children}</h4>
);

export const H5 = ({ children }) => (
    <h5 className="text-primary text-base lg:text-lg mb-1">{children}</h5>
);

export const H6 = ({ children }) => (
    <h6 className="text-primary text-sm lg:text-base mb-1">{children}</h6>
);

export const Image = ({ image, alt }) => <GatsbyImage image={image} alt={alt} className="w-full" />;

export const Separator = () => <hr />;

export const ListItem = ({ children }) => <li className="-mb-6 pb-2">{children}</li>;

export const Link = ({ children, url }) => (
    <a href={url} className="underline">
        {children}
    </a>
);

export const markdownOptions = {
    renderMark: {
        [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
        [MARKS.UNDERLINE]: (text) => <Underline>{text}</Underline>,
        [MARKS.ITALIC]: (text) => <Italic>{text}</Italic>,
    },
    renderNode: {
        [BLOCKS.PARAGRAPH]: (node, children) => {
            return <Text>{children}</Text>;
        },
        [BLOCKS.EMBEDDED_ASSET]: (node) => {
            return (
                <Image
                    image={node.data.target.gatsbyImageData}
                    alt={node.data.target.description}
                />
            );
        },
        [BLOCKS.HEADING_1]: (node, children) => {
            return <H1>{children}</H1>;
        },
        [BLOCKS.HEADING_2]: (node, children) => {
            return <H2>{children}</H2>;
        },
        [BLOCKS.HEADING_3]: (node, children) => {
            return <H3>{children}</H3>;
        },
        [BLOCKS.HEADING_4]: (node, children) => {
            return <H4>{children}</H4>;
        },
        [BLOCKS.HEADING_5]: (node, children) => {
            return <H5>{children}</H5>;
        },
        [BLOCKS.HEADING_6]: (node, children) => {
            return <H6>{children}</H6>;
        },
        [BLOCKS.HR]: () => <Separator />,
        [BLOCKS.LIST_ITEM]: (node, children) => {
            return <ListItem>{children}</ListItem>;
        },
        [BLOCKS.UL_LIST]: (node, children) => {
            return <ul className="list-disc pl-4">{children}</ul>;
        },
        [BLOCKS.OL_LIST]: (node, children) => {
            return <ol className="list-decimal pl-4">{children}</ol>;
        },
        [INLINES.HYPERLINK]: (node, children) => {
            return <Link url={node.data.uri}>{children}</Link>;
        },
    },
};
