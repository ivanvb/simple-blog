import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

const Quote = ({ backgroundImage, text, author }) => {
    return (
        <div className="relative h-64 md:h-104 w-full flex items-center justify-center">
            <div className="absolute h-full w-full">
                <GatsbyImage
                    className="h-full w-full xl:-ml-4"
                    image={backgroundImage}
                    objectFit="cover"
                    imgClassName="filter brightness-50"
                    alt=""
                />
            </div>
            <figure className="relative z-10 w-128 text-white container md:px-0">
                <blockquote className="text-xl md:text-2xl mb-2 tracking-wide">{text}</blockquote>
                <figcaption className="text-base md:text-lg">— {author}</figcaption>
            </figure>
        </div>
    );
};

export default Quote;
