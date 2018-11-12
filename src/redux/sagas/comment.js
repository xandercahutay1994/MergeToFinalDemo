import { call, put } from "redux-saga/effects"
import axios from "axios"
import {
    FETCH_COMMENTS_API,
} from "../../api"
import {
    FETCH_COMMENTS_REDUCER
} from "../types"

export function* fetch_comments(){
    const result = yield call(axios, FETCH_COMMENTS_API);

    yield put({
        type: FETCH_COMMENTS_REDUCER,
        payload: result.data,
        isFetching: false
    })
}

