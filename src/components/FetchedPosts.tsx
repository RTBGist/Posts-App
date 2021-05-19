import React from 'react';
import Post from "./Post";
import {useDispatch} from "react-redux";
import {fetchPosts} from "../redux/postsReducer";
import {useTypedSelector} from "../hooks/useTypedSelector";
import Loader from "./Loader";


const FetchedPosts: React.FC = () => {
    const dispatch = useDispatch()
    const posts = useTypedSelector(state => state.posts.fetchedPosts)
    const loading = useTypedSelector(state => state.app.loading)

    const clickHandler = () => {
        dispatch(fetchPosts())
    }


    if(loading) {
        return (<Loader />)
    }

    if(!posts.length) {
        return (
            <>
                <h5>Постов пока нет...</h5>
                <button onClick={clickHandler} type="button" className="btn btn-primary">Загрузить</button>
            </>
        )
    }

    return (
        <>
            {posts.map((post: any) => <Post key={post.id} post={post} />)}
        </>
    )
};

export default FetchedPosts;