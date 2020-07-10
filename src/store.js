import { createStore } from 'redux';

const initState = {
  cart:0,
  categories: [
    { name: 'chocolate', displayName: 'Chocolate'},
    { name: 'fruit', displayName: 'Fruit'},
    { name: 'exploding', displayName: 'Exploding'}
  ],
  products: [
    {name: 'Fizzing Whizbees', category: 'exploding', price: '3.50', inStock: 73,},
    {name: 'Peppermint toads', category: 'chocolate', price: '2.50', inStock: 73,},
    {name: 'Pink Coconut Ice', category: 'exploding', price: '4.25', inStock: 73,},
    {name: 'Fudge Flies', category: 'chocolate', price: '4.00', inStock: 73,},
    {name: 'Jelly Slugs', category: 'fruit', price: '1.75', inStock: 73,},
    {name: 'Exploding Bon-Bons', category: 'exploding', price: '4.75', inStock: 73,},
    {name: 'Cauldron Cakes', category: 'chocolate', price: '3.75', inStock: 73,},
    {name: 'Tooth Splintering Strong Mints', category: 'exploding', price: '2.50', inStock: 73,},
    {name: 'Shock-O-Choc', category: 'chocolate', price: '2.50', inStock: 73,}
  ],
  currentCategory: 'exploding',
  
};

const reducer = (state = initState, action) => {
  let newState = { ...state };

  switch (action.type) {
    case 'CHANGE_CATEGORY':
      newState.currentCategory = action.payload;
      break;
    case 'ADD_TO_CART':
      newState.cart ++;
      newState.products.inStock --; 
      break;
    default: 
      break;
  }

  return newState;
}

export default createStore(reducer)