import { fetch_user_failure, fetch_user_request, fetch_user_success } from "./userType"

const initialState = {
    loading: true,
    user: [],
    error: ''
}

export const UserReduce = (state=initialState, action) => {
    switch(action.type){
        case fetch_user_request: return{
            ...state,
            loading: true
        }
        case fetch_user_success: return{
            ...state,
            loading: false,
            user: action.payload,
            error: ''
        }
        case fetch_user_failure: return{
            ...state,
            loading: false,
            user: '',
            error: action.payload
        }
        default: return state
    }
}