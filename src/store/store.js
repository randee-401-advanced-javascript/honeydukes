import { createStore, combineReducers, applyMiddleware } from 'redux';

import cartReducer from './cart/cartReducer';
import categoriesReducer from './categories/categoriesReducer';
import productsReducer from './products/productsReducer';
import thunk from './MiddleWare/thunk'
import { composeWithDevTools } from 'redux-devtools-extension';



let reducers = {
  cart: cartReducer,
  categories: categoriesReducer,
  products: productsReducer,
};

const store = () => createStore(combineReducers(reducers), composeWithDevTools(applyMiddleware(thunk)));

export default store();


