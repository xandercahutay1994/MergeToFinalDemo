import { call, put } from "redux-saga/effects"
import axios from "axios"
import {
    FETCH_USERS_API
} from "../../api"
import {
    LOGIN_SUCCESS_REDUCER,
    LOGIN_FAILED_REDUCER
} from "../types"

export function* login_user({payload}){
    const { username, email } = payload
    const result = yield call(axios, FETCH_USERS_API);
    const users = result.data;
    let isMatch = false;

    for(let user of users){
        if(username === user.username && email === user.email){
            isMatch = true
        }
    }

    if(isMatch){
        yield put({
            type: LOGIN_SUCCESS_REDUCER,
            isAuthenticated: true
        })
    }else{
        yield put({
            type: LOGIN_FAILED_REDUCER,
            isAuthenticated: false
        })
    }
}

