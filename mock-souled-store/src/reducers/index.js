import { combineReducers } from 'redux';
import  getProductsReducer  from './productsReducer';

const rootReducer = combineReducers({
    products:getProductsReducer
});

export default rootReducer;