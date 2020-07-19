const { consoleLog } = require("./cartReducer");

const initState = {

  categories: [
    { name: 'chocolate', displayName: 'Chocolate' },
    { name: 'fruit', displayName: 'Fruit' },
    { name: 'exploding', displayName: 'Exploding' }
  ],
  currentCategory: 'exploding',
};

const reducer = (state = initState, action) => {
  console.log('catergories reducer. Boom.');
  console.log('categories Reducer state', state)
  // let newState = { ...state };

  const { type, payload } = action;


  switch (type) {
    case 'CONSOLE_LOG': 
      console.log('categories');
      break;
    case 'CHANGE_CATEGORY':
      console.log('inside change Category and payload', payload)
      state.currentCategory = payload;
      break;
    case 'ADD_CATEGORY':
      state.categories.push(payload);
      break;
    default:
      break;
  }

  return state;

};

export default reducer; 