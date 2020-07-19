import React from 'react';
import { connect } from 'react-redux';
// import { makeStyles } from '@material-ui/core/styles';
// import Drawer from '@material-ui/core/Drawer';


function Cart(props) {

  let thingsToBuy = [];
  console.log('props.cart', props.cart.cartContents)

  for (let i = 0; i < props.cart.cartContents.length; i++) {
    thingsToBuy.push(
      <p className="cartItem" key={i}>
        {props.cart.cartContents[i].name}
      </p>
    )
  }

  console.log('things to buy', thingsToBuy)


  return(
    <>
    <p>{thingsToBuy}</p>
    </>
  )
}

const mapStateToProps = state => {
  return {
    product: state.product,
    cart: state.cart,
    cartCount: state.cartCount,
  }
}

export default connect (mapStateToProps)(Cart);
