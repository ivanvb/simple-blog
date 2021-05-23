import React from 'react';
import PostPreview from './PostPreview';
import classnames from 'classnames';
import { titleToSlug } from '../util/index';

const PostPreviewList = ({ posts, grid }) => {
    return (
        <ul
            className={classnames(
                grid ? 'grid grid-cols-1 md:grid-cols-2 gap-10' : 'w-full md:w-2/3 divide-y'
            )}
        >
            {posts.map((post, i) => {
                return (
                    <li
                        key={i}
                        className={classnames({
                            'pt-12': i !== 0 && !grid,
                            'pb-12': i !== posts.length - 1 && !grid,
                            'border-b pb-10': grid,
                        })}
                    >
                        <PostPreview
                            title={post.title}
                            publishDate={post.publicationDate}
                            brief={post.brief.brief}
                            tags={post.tags.map(({ title }) => title)}
                            link={titleToSlug(post.title)}
                        />
                    </li>
                );
            })}
        </ul>
    );
};

export default PostPreviewList;
