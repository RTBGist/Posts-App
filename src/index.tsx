import React from 'react';
import {render} from 'react-dom';
import App from './App';
import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./redux/rootReducer";
import {Provider} from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import {forbiddenWordsMiddleware} from "./redux/middleware";
import createSagaMiddleware from "redux-saga"
import rootSaga from "./redux/sagas";


const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, sagaMiddleware, forbiddenWordsMiddleware)))

sagaMiddleware.run(rootSaga)

const app = (
    <Provider store={store}>
        <App />
    </Provider>
)



render(app, document.getElementById('root'));
