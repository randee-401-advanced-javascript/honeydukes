

const initState = {
  cartContents: [],
  cartCount: 0,
}

const reducer = (state = initState, action) => {
  console.log('cart reducer was called. boom');

  let newState = { ...state }

  switch (action.type) {

    case 'CONSOLE_LOG': 
      console.log('cart');
      break;

    case 'ADD_TO_CART': 
      newState.cartContents.push(action.payload);
      newState.cartCount++;
      break;

    case 'REMOVE_FROM_CART':
      newState.cartCount--;
      newState.cartContents = newState.cartContents.filter((val) => {
        return val.name !== action.payload;
      });
      break;
    
      default:
        break;
  }

  return newState;
};

const consoleLog = (dispatch) => {
  return dispatch({ type: 'CONSOLE_LOG' });
}

const add = (product) => {
  return { type: 'ADD_TO_CART', payload: product };
};

export default reducer;
export { consoleLog, add };