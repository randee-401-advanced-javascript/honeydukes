import axios from 'axios';

export const get = () => async dispatch => {
  let res = await axios.get('https://lab07-09.herokuapp.com/categories');
  console.log('inside cat get function', res.data)

  dispatch(createCats(res.data.categories));
}

const createCats = payload => {
  console.log('inside createCat')
  return {
    type: 'CHANGE_CATEGORIES',
    payload
  }
}