import {
    LOGIN_USERS_TYPE
} from "../types"

export function LOGIN_USER_ACTION(userData){
    return {
        type: LOGIN_USERS_TYPE,
        payload: userData
    }
}
