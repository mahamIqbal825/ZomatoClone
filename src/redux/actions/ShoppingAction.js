import * as types from './types';
import { API_SERVICE } from '../../utils/API'

export const addCart = (payload) => dispatch => {
    dispatch({ type: types.ADD_CART_SUCCESS, payload: payload });
}


export const getCart = () => async dispatch => {
    try {
        const result = await API_SERVICE('orders/cart', {}, 'GET')
        const { status, data } = result
        if (status === 1 && data.products ) {
            dispatch({ type: types.GET_CART_SUCCESS, payload: data });
        }
    } catch (e){
        console.log(e);
    }
    
}


