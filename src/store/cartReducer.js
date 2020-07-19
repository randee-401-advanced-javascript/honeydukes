

const initState = {
  cartContents: [],
  cartCount: 0,
}

const reducer = (state = initState, action) => {
  console.log('cart reducer was called. boom');
  console.log('cart reducer action.type', action.type);
  console.log('cart reducer action.payload', action.payload);

  let newState = { ...state }

  switch (action.type) {

 
    case 'ADD_TO_CART': 
      console.log('insdie add to cart', action.payload)
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



const add = (product) => {
  console.log('inside ADD_TO_CART', product)
  return { type: 'ADD_TO_CART', payload: product };
};

export default reducer;
export { add };