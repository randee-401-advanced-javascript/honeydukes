import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import axios from 'axios';

import * as actions from '../store/categories/categoriesActions.js'

console.log('inside cat.js')

function Categories(props) {
  console.log('looking for state.categories', props);


  const {getCat, potatoCat} = props;


  useEffect(() => {
    getCat();
  },[getCat]);

  console.log('cat.js potatoCat', potatoCat)

  let categoryHTML = [];

  console.log('inside categories.js categories', potatoCat.length)

  for (let i = 0; i < potatoCat.length; i++) {
  
  console.log('inside for loop', potatoCat[i])
  categoryHTML.push(
    potatoCat[i].name
  //     <Button
  //       key={i}
  //       variant='contained'
  //       color='secondary'
  //       onClick={(e) => {
  //         props.dispatch({
  //           type: 'CHANGE_CATEGORY',
  //           payload: props.categoriesList[i].name,
  //         });
  //       }}
  //       >
  //         {props.categoriesList[i].displayName || props.categoriesList[i].name}
  //     </Button>
    );
      }
    return <>{categoryHTML}</>;
}



const mapStateToProps = (state) => {
  //categorieslist is coming in here
  console.log('state.categories inside mapStateToProps in cat.js', state.categories)
  return {
    potatoCat: state.categories,
  }
};

const mapDispatchToProps = (dispatch, getState) => ({
  getCat: data => dispatch(actions.getCat(data)),

})

export default connect(mapStateToProps, mapDispatchToProps)(Categories);