import { combineReducers } from 'redux';
import AppReducer, { appStateIF } from './AppReducer';
import NavigationReducer from './NavigationReducer';
import ProductReduce from './ShoppingReducer';
import UserReducer from './UserReducer';

export default combineReducers({ app: AppReducer, nav: NavigationReducer, shoppingReducer: ProductReduce, 
    userReducer: UserReducer });
