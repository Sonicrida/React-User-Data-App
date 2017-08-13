import * as actions from './actions';
import * as types from './constants/actionTypes';

describe('actions', () => {
    it('Should create an action to begin fetching data', () => {
        const expectedAction = {
            type: types.FETCH_USERS_REQUEST
        };
        expect(actions.requestUserData()).toEqual(expectedAction);
    });
});
