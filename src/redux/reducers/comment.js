import {
    FETCH_COMMENTS_REDUCER
} from "../types"

const commentInitialState = {
    allComments: [],
    isFetching: true,
    searchEmail: '',
    filterComment: false    
}

const commentReducer = (state = commentInitialState ,action) => {
    switch (action.type){
        case FETCH_COMMENTS_REDUCER:
            return {
                ...state,
                allComments: action.payload,
                isFetching: action.isFetching
            }
        default:
            break;
        
    }

    return state;
}


export default commentReducer;