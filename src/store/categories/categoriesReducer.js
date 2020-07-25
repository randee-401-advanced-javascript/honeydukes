const initState = {

  categoriesList: [

  ],
  currentCategory: 'exploding',
};



const reducer = (state = initState, action) => {

  const { type, payload } = action;

  switch (type) {
    case 'GET_CATEGORY':
      state.categoriesList = payload;
      console.log('insdie cat reducer', state.categoriesList)

      return state.categoriesList; 
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