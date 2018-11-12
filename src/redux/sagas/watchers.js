import { takeLatest, takeEvery } from "redux-saga/effects" 
import {
    FETCH_COMMENTS_TYPE,
    LOGIN_USERS_TYPE
} from "../types"
import { 
    fetch_comments
 } from "./comment";
 import { 
    login_user
 } from "./user";

export default function* rootWatcher(){
    yield takeLatest(FETCH_COMMENTS_TYPE, fetch_comments)
    yield takeLatest(LOGIN_USERS_TYPE, login_user)
}