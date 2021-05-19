import {AppActionTypes} from "./redux/appReducer";
import {PostsActionTypes} from "./redux/postsReducer";

export interface PostInterface {
    title: string,
    id: number | string
}

// App Reducer
export interface AppStateInterface {
    loading: boolean,
    alert: null | string
}

export interface ShowLoaderInterface {
    type: AppActionTypes.SHOW_LOADER
}
export interface HideLoaderInterface {
    type: AppActionTypes.HIDE_LOADER
}
export interface ShowAlertInterface {
    type: AppActionTypes.SHOW_ALERT,
    payload: string | null
}
export interface HideAlertInterface {
    type: AppActionTypes.HIDE_ALERT
}


// Posts Reducer
export interface PostsStateInterface {
    posts: PostInterface[];
    fetchedPosts: PostInterface[]
}

export interface CreatePostInterface {
    type: PostsActionTypes.CREATE_POST
    payload: PostInterface
}

export interface FetchPostsInterface {
    type: PostsActionTypes.FETCH_POSTS,
    payload: PostInterface[]
}

