import { FETCH_USERS_FAILURE, FETCH_USERS_SUCCESS, FETH_USERS_REQUEST } from "./userType"

const initialState = {
    loading: false,
    users: [],
    error: ''
}

const userReducer = (state = initialState, action)=> {
    switch(action.type){
        case FETH_USERS_REQUEST: return {
            ...state,
            loading: true
        }
        case FETCH_USERS_SUCCESS: return {
            ...state,
            loading: false,
            users: action.payload,
            error: ''
        }
        case FETCH_USERS_FAILURE: return {
            ...state,
            loading: false,
            users: [],
            error: action.pyload
        }
        default: return state
    }
}

export default userReducer