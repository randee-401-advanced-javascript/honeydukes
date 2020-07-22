// const { consoleLog } = require("./cartReducer");

const initState = {

  categoriesList: [
    {name: 'exploding'}
  ],
  currentCategory: 'exploding',
};



const reducer = (state = initState, action) => {
  console.log('inside cat reducer')

  const { type, payload } = action;

  switch (type) {
    case 'GET_CATEGORY':
      console.log('insdie cat reducer case GET_CAT payload', payload)
      return payload; 
    case 'CHANGE_CATEGORY':
      return payload;
    case 'ADD_CATEGORY':
      return payload;
    default:
      console.log('insdie cat reducer default case')
      break;
  }

  return state;

};

export default reducer; 