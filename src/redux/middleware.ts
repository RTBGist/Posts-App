import {PostsActionTypes} from "./postsReducer";
import {AppActions, showAlert} from "./appReducer";
import {Dispatch, Middleware} from "redux";


const forbidden = ['fuck', 'spam']

export const forbiddenWordsMiddleware: Middleware = api => next => action => {
    const dispatch: Dispatch<AppActions> = api.dispatch

    if(action.type === PostsActionTypes.CREATE_POST) {
        const found = forbidden.filter((word) => action.payload.title.includes(word))

        if(found.length) {
            dispatch(showAlert('Вы используете запрещенные слова'))
        }
    }
    return next(action);
};