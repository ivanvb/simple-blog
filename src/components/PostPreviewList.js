import React from 'react';
import PostPreview from './PostPreview';

const PostPreviewList = ({ posts }) => {
    return (
        <ul className="w-2/3 divide-y">
            {posts.map((post, i) => {
                return (
                    <li key={i} className="py-12 font-serif">
                        <PostPreview
                            title={post.title}
                            publishDate={post.publicationDate}
                            brief={post.brief.brief}
                            tags={post.tags.map(({ title }) => title)}
                            image={post.headlineImage.gatsbyImageData}
                        />
                    </li>
                );
            })}
        </ul>
    );
};

export default PostPreviewList;
