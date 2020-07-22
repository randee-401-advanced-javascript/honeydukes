import axios from 'axios';

export const getCat = () => async dispatch => {
  console.log('inside get in catActions.js')
  let res = await axios.get('https://express-server-madisonstehle.herokuapp.com/api/v1/categories');
  console.log('inside cat get function', res.data)

  dispatch(createCats(res.data));
}

const createCats = payload => {
  console.log('inside createCat')
  return {
    type: 'GET_CATEGORY',
    payload
  }
}