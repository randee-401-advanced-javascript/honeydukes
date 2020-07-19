import axios from 'axios';

export const get = () => async dispatch => {
  let results = await axios.get('https://lab07-09.herokuapp.com/products');
  dispatch(createInitialList(results.data.products));
}

const createInitialList = payload => {
  return {
    type: 'GET_PRODUCTS',
    payload
  }
}

export const add = payload => {
  return {
    type: 'ADD_PRODUCT',
    payload
  }
}