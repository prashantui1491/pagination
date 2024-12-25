import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE} from './constants'

const intialState = {
    isLaoding: false,
    user: null,
    error: null
}

const authReducer = (state = intialState, action) => {

    switch(action.type){
        case LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            }

        case LOGIN_SUCCESS:
            return {
                ...state,
                isLaoding: false,
                user: action.payload
            }
        
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state
    }

}

export default authReducer