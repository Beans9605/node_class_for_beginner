import {
    LOGIN_USER,
    REGISTER_USER,
    LOGOUT_USER,
    AUTH_USER
} from '../_actions/type'

export default function(state={}, action) {
    switch (action.type) {
        case REGISTER_USER:
            return {...state, registerSuccess : action.payload}
        case LOGIN_USER :
            return {...state, loginSuccess : action.payload}
        case LOGOUT_USER :
            return {...state}
        case AUTH_USER :
            return {...state, userData : action.payload}
        default:
            return state;
    }
}