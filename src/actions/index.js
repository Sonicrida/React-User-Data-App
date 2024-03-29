import axios from 'axios';
import { FETCH_USERS_REQUEST, FETCH_USERS_FAILURE, FETCH_USERS_SUCCESS } from '../constants/actionTypes';

export const fetchUserData = endpoint => {
    return dispatch => {
        dispatch(requestUserData());
        axios.get(endpoint).then(response => {
            dispatch({
                type: FETCH_USERS_SUCCESS,
                data: response
            });
        });
    };
};

export const requestUserData = () => {
    return {
        type: FETCH_USERS_REQUEST
    };
};
