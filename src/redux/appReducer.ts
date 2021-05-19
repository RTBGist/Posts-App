import {
    AppStateInterface,
    HideAlertInterface,
    HideLoaderInterface,
    ShowAlertInterface,
    ShowLoaderInterface
} from "../interfaces";
import {Dispatch} from "redux";

export enum AppActionTypes {
    SHOW_LOADER = 'app/SHOW_LOADER',
    HIDE_LOADER = 'app/HIDE_LOADER',
    SHOW_ALERT = 'app/SHOW_ALERT',
    HIDE_ALERT = 'app/HIDE_ALERT',
}

export type AppActions = ShowLoaderInterface | HideLoaderInterface | ShowAlertInterface | HideAlertInterface

const initialState: AppStateInterface = {
    loading: false,
    alert: null
}

export const appReducer = (state: AppStateInterface = initialState, action: AppActions) => {
    switch (action.type) {
        case AppActionTypes.SHOW_LOADER:
            return {...state, loading: true}
        case AppActionTypes.HIDE_LOADER:
            return {...state, loading: false}
        case AppActionTypes.SHOW_ALERT:
            return {...state, alert: action.payload}
        case AppActionTypes.HIDE_ALERT:
            return {...state, alert: null}
        default: return state
    }
}


// ACTION CREATORS
export const showLoader = (): AppActions => ({type: AppActionTypes.SHOW_LOADER});
export const hideLoader = (): AppActions => ({type: AppActionTypes.HIDE_LOADER});
export const hideAlert = (): AppActions => ({type: AppActionTypes.HIDE_ALERT});

// THUNK CREATORS
export const showAlert = (payload: string): any => {
    return (dispatch: Dispatch<AppActions>) => {
        dispatch({type: AppActionTypes.SHOW_ALERT, payload})

        setTimeout(() => {
            dispatch(hideAlert())
        }, 3000)
    }
};
