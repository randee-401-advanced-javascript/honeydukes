import { createStore, combineReducers } from 'redux';

import cartReducer from './cart/cartReducer';
import categoriesReducer from './categories/categoriesReducer';
import productsReducer from './products/productsReducer';

let reducers = combineReducers({
  cart: cartReducer,
  categories: categoriesReducer,
  products: productsReducer,
});

export default createStore(reducers);