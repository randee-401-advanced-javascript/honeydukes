import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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

  for (let i = 0; i < props.products.length; i++) {
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
  products: state.products,
  currentCategory: state.currentCategory,
});

export default connect(mapStateToProps)(Products);