import React from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

function Categories(props) {
  let categoryHTML = [];

  console.log('inside categories.js')

  for (let i = 0; i< props.categories.length; i++) categoryHTML.push(
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
    categories: state.categories,
  }
};

export default connect(mapStateToProps)(Categories);