import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import axios from 'axios';

import * as actions from '../store/categories/categoriesActions.js'

console.log('inside cat.js')

function Categories(props) {
  console.log('looking for state.categories', props);


  const {getCat} = props;


  useEffect(() => {
    getCat();
  },[getCat]);

  console.log('cat.js props.cat', props.categoriesList)

  let categoryHTML = [];

  console.log('inside categories.js props.categories', props.categoriesList)

  for (let i = 0; i < props.categoriesList.length; i++) categoryHTML.push(
      <Button
        key={i}
        variant='contained'
        color='secondary'
        onClick={(e) => {
          props.dispatch({
            type: 'CHANGE_CATEGORY',
            payload: props.categoriesList[i].name,
          });
        }}
        >
          {props.categoriesList[i].displayName || props.categoriesList[i].name}
      </Button>
    );
    return <>{categoryHTML}</>;
}



const mapStateToProps = (state) => {
  //categorieslist is coming in here
  console.log('state.categories inside mapStateToProps in cat.js', state.categories)
  return {
    categoriesList: state.categories.categoriesList,
  }
};

const mapDispatchToProps = (dispatch, getState) => ({
  getCat: data => dispatch(actions.getCat(data)),

})

export default connect(mapStateToProps, mapDispatchToProps)(Categories);