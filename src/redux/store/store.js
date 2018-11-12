import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga"
import commentReducer from "../reducers/comment"
import userReducer from "../reducers/user"
import rootWatcher from "../sagas/watchers"

const sagaMiddleware = createSagaMiddleware()

const store = createStore(combineReducers({
        comment: commentReducer,
        user: userReducer
    }),
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootWatcher)

export default store;