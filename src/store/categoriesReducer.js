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
  let newState = { ...state };

  switch (action.type) {
    case 'CONSOLE_LOG': 
      console.log('categories');
      break;
    case 'CHANGE_CATEGORY':
      newState.currentCategory = action.payload;
      break;
    case 'ADD_CATEGORY':
      newState.categories.push(action.payload);
      break;
    default:
      break;
  }

  return newState;

};

export default reducer; 