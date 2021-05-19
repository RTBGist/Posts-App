import React from 'react';
import Post from './Post';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {PostInterface} from "../interfaces";


const Posts: React.FC = () => {
    const posts = useTypedSelector(state => state.posts.posts)

    if(!posts.length) {
        return (<h5>Постов пока нет...</h5>)
    }

    return (
        <>
            {posts.map((post: PostInterface) => <Post key={post.id} post={post} />)}
        </>
    )
}

export default Posts;