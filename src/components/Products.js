import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import { consoleLog } from '../store/cartReducer';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});



function Products(props) {

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  

  let productsHTML = [];

  for (let i = 0; i < props.products.length; i++) {

    if (props.products[i].category === props.currentCategory)
      productsHTML.push(
        <Card className='card'>
          <Typography className=  {classes.pos} color="textSecondary"key={i}>
            {props.products[i].name}
          </Typography>
          <p>${props.products[i].price}</p>
          <Button onClick={(e) => {
            props.dispatch({
              type: 'ADD_TO_CART',
              payload: props.products[i],
            })
          }}>
            Add to Cart
          </Button>
        </Card>
      );
  }
  return (
    <>
        <h3>Sweets</h3>
        <div className='sweetsCards'>
        {productsHTML}
        </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  products: state.products.products,
  currentCategory: state.categories.currentCategory,
  cartCount: state.cart.cartCount
});

export default connect(mapStateToProps)(Products);