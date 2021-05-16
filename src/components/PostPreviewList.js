import React from 'react';
import PostPreview from './PostPreview';
import classnames from 'classnames';
import { titleToSlug } from '../util/index';

const PostPreviewList = ({ posts }) => {
    return (
        <ul className="w-full md:w-2/3 divide-y">
            {posts.map((post, i) => {
                return (
                    <li
                        key={i}
                        className={classnames({
                            'pt-12': i !== 0,
                            'pb-12': i !== posts.length - 1,
                        })}
                    >
                        <PostPreview
                            title={post.title}
                            publishDate={post.publicationDate}
                            brief={post.brief.brief}
                            tags={post.tags.map(({ title }) => title)}
                            image={post.headlineImage.gatsbyImageData}
                            link={titleToSlug(post.title)}
                        />
                    </li>
                );
            })}
        </ul>
    );
};

export default PostPreviewList;
