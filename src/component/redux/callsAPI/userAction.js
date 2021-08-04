import { fetch_user_failure, fetch_user_request, fetch_user_success } from "./userType"
import axios from "axios"

export const fetchUserRequest = () => {
    return {
        type: fetch_user_request
    }
}
export const fetchUserSuccess = (user) => {
    return{
        type: fetch_user_success,
        payload: user
    }
}
export const fetchUserFailure = (error) => {
    return{
        type: fetch_user_failure,
        payload: error
    }
}

export const fetchUser = () => {
    return (dispatch) => {
        dispatch(fetchUserRequest)
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            const user = response.data
            dispatch(fetchUserSuccess(user))
        })
        .catch(error=>{
            const errMSG = error.message
            dispatch(fetchUserFailure(errMSG))
        })
    }
}