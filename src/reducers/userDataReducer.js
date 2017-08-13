import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from '../constants/actionTypes'

const initialState = {
    users: [],
    isFetching: true
};

export default function userDataReducer(state = initialState, action) {
    switch (action.type) {

        case FETCH_USERS_REQUEST: 
            return Object.assign({}, state, {
                isFetching: true
            })

        case FETCH_USERS_SUCCESS: 
            return Object.assign({}, state, {
                users: action.data,
                isFetching: false
            })

        default:
            return state;
    }
}
