import Axios from 'axios';
import {
    LOGIN_USER,
    LOGOUT_USER,
    REGISTER_USER,
    AUTH_USER
} from './type'
import { USER_SERVER } from '../components/Config'

export function registerUser(dataToSubmit) {
    const request = Axios.post(`${USER_SERVER}/register`, dataToSubmit)
    .then(response => response.data);

    return {
        type : REGISTER_USER,
        payload : request
    };
}