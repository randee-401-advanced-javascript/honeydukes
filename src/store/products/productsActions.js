import axios from 'axios';

export const get = () => async dispatch => {
  let results = await axios.get('https://express-server-madisonstehle.herokuapp.com/api/v1/products');
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