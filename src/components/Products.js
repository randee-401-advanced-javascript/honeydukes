import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { consoleLog } from '../store/cartReducer';

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

  function addToCart(indx){}
  function viewDetails(indx){}

  let productsHTML = [];
  console.log('inside products.js props.products', props.products.length);

  for (let i = 0; i < props.products.length; i++) {
    // console.log('props.products.category',props.products[i].category)
    // console.log('props.currentCatergory', props.currentCategory);
    if (props.products[i].category === props.currentCategory)
      productsHTML.push(
        <Card className='card'>
          <Typography className=  {classes.pos} color="textSecondary"key={i}>
            {props.products[i].name}
          </Typography>
          <Button>
            Add to Cart
          </Button>
        </Card>
      );
  }
  console.log('products.html', productsHTML);
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
  currentCategory: state.currentCategory,
});

export default connect(mapStateToProps)(Products);