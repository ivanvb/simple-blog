import React from 'react';
import PostPreview from './PostPreview';

const PostPreviewList = ({ posts }) => {
    return (
        <ul>
            {posts.map((post, i) => {
                return (
                    <li key={i}>
                        <PostPreview title={post.title} />
                    </li>
                );
            })}
        </ul>
    );
};

export default PostPreviewList;
