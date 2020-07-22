import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import axios from 'axios';

import * as actions from '../store/categories/categoriesActions.js'

console.log('inside cat.js')

function Categories(props) {
  console.log('looking for state.categories', props);

  console.log('props in cat.js', props)

  const {getCat} = props;
  console.log(getCat());

  useEffect(() => {
    getCat();
  },[getCat]);

  let categoryHTML = [];

  console.log('inside categories.js props.categories', props.categoriesList)

  for (let i = 0; i <= props.categoriesList.length; i++) categoryHTML.push(
      <Button
        key={i}
        variant='contained'
        color='secondary'
        onClick={(e) => {
          props.dispatch({
            type: 'CHANGE_CATEGORY',
            payload: props.categories[i].name,
          });
        }}
        >
          {props.categories[i].displayName || props.categories[i].name}
      </Button>
    );
    return <>{categoryHTML}</>;
}



const mapStateToProps = (state) => {
  return {
    categoriesList: state.categories.categoriesList,
  }
};

const mapDispatchToProps = (dispatch, getState) => ({
  getCat: data => dispatch(actions.getCat(data)),

})

export default connect(mapStateToProps, mapDispatchToProps)(Categories);