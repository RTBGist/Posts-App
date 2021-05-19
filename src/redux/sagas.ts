import {takeEvery, put, call, all} from 'redux-saga/effects'
import {PostsActionTypes} from "./postsReducer";
import {hideLoader, showAlert, showLoader} from "./appReducer";


function* sagaWatcher(): Generator {
    yield takeEvery(PostsActionTypes.REQUEST_POSTS, sagaWorker)
}

function* sagaWorker(): Generator {
    try {
        yield put(showLoader())
        const payload = yield call(fetchPosts)
        yield put({type: PostsActionTypes.FETCH_POSTS, payload})
        yield put(hideLoader())
    } catch (e) {
        yield put(showAlert('Что-то пошло не так'))
        yield put(hideLoader())
    }


}

async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    return await response.json()
}

export default function* rootSaga(): Generator {
    yield all([
        sagaWatcher()
    ])
}

