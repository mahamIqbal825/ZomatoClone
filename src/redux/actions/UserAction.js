import * as types from './types';


export const setTokenAction = (token) => dispatch => {
    dispatch({ type: types.SET_USER_ACCESS_TOKEN, token });
}

export const deleteTokenAction = () => dispatch => {
    dispatch({ type: types.DELETE_USER_ACCESS_TOKEN });
}

export const setUserAddress = (data) => dispatch => {
    dispatch({ type: types.SET_USER_ADDRESS, data });
}