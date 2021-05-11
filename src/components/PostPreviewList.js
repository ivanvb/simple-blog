import React from 'react';
import PostPreview from './PostPreview';

const PostPreviewList = ({ posts }) => {
    return (
        <ul>
            {posts.map((post, i) => {
                return (
                    <li key={i}>
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
