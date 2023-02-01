import * as types from '../actions/types';

const initialState = {
    AccessToken: null,
    Address: {}
};

const reducer = (state = initialState, action) => {


    switch (action.type) {

        case types.SET_USER_ACCESS_TOKEN:
            return Object.assign({}, state, {
                AccessToken: action.token
            });

        case types.DELETE_USER_ACCESS_TOKEN:
            return Object.assign({}, state, {
                AccessToken: null
            });

        case types.SET_USER_ADDRESS:
            return Object.assign({}, state, {
                Address: action.data
            });

        default:
            return state;
    }
};

export default reducer;
