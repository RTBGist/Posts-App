import {
    CreatePostInterface, FetchPostsInterface,
    PostInterface, PostsStateInterface,
} from "../interfaces";

export enum PostsActionTypes {
    CREATE_POST = 'posts/CREATE_POST',
    FETCH_POSTS = 'posts/FETCH_POSTS',
    REQUEST_POSTS = 'posts/REQUEST_POST'
}

export type PostsActions = CreatePostInterface | FetchPostsInterface

const initialState: PostsStateInterface = {
    posts: [],
    fetchedPosts: []
}

export const postsReducer = (state: PostsStateInterface = initialState, action: PostsActions) => {
    switch (action.type) {
        case PostsActionTypes.CREATE_POST:
            return {...state, posts: [...state.posts, action.payload]}
        case PostsActionTypes.FETCH_POSTS:
            return {...state, fetchedPosts: action.payload}
        default: return state
    }
}


// ACTION CREATORS
export const createPost = (payload: PostInterface) => ({type: PostsActionTypes.CREATE_POST, payload})
export const fetchPosts = () => ({type: PostsActionTypes.REQUEST_POSTS})
