
let initState = {

  products: [
    
  ],
  
};


export default (state=initState, action) => {
  const {type, payload} = action;

  switch(type) {
    case 'GET_PRODUCTS':
      return payload;
    case 'ADD_PRODUCT':
      return payload;
    default: 
      return state;
  }
}

// const initState = {

//   products: [
//     {name: 'Fizzing Whizbees', category: 'exploding', price: '3.50', inStock: 73,},
//     {name: 'Peppermint toads', category: 'chocolate', price: '2.50', inStock: 73,},
//     {name: 'Pink Coconut Ice', category: 'exploding', price: '4.25', inStock: 73,},
//     {name: 'Fudge Flies', category: 'chocolate', price: '4.00', inStock: 73,},
//     {name: 'Jelly Slugs', category: 'fruit', price: '1.75', inStock: 73,},
//     {name: 'Exploding Bon-Bons', category: 'exploding', price: '4.75', inStock: 73,},
//     {name: 'Cauldron Cakes', category: 'chocolate', price: '3.75', inStock: 73,},
//     {name: 'Tooth Splintering Strong Mints', category: 'exploding', price: '2.50', inStock: 73,},
//     {name: 'Shock-O-Choc', category: 'chocolate', price: '2.50', inStock: 73,}
//   ],
  
// };

// const reducer = (state = initState, action) => {
//   let newState = { ...state };

//   switch (action.type) {
//     case 'ADD_PRODUCT':
//       newState.allProducts.push(action.payload);
//       break;
//     case 'CONSOLE_LOG':
//       console.log('Products. Boom.');
//       break;
//     default: 
//       break;
//   }

//   return newState;
// }

// export default reducer