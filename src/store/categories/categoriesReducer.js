// const { consoleLog } = require("./cartReducer");

const initState = {

  categories: [
  ],
  currentCategory: 'exploding',
};



const reducer = (state = initState, action) => {
  console.log('inside cat reducer')

  const { type, payload } = action;

  switch (type) {
    case 'CHANGE_CATEGORY':
      return payload;
    case 'ADD_CATEGORY':
      return payload;
    default:
      break;
  }

  return state;

};

export default reducer; 