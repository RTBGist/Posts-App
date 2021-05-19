import React from 'react';
import {PostInterface} from "../interfaces";

type PostProps = {
    post: PostInterface
}

const Post: React.FC<PostProps> = ({post}) => {
    return (
        <div className="card">
            <div className="card-body">
                <h2>{post.title}</h2>
            </div>
        </div>
    );
};

export default Post;