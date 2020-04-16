import React from "react";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart.actions";

import { ReactComponent as ShoppingIcon } from "../../assets/cart.svg";

import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = ({ cart: { cartItems } }) => ({
  //The below reducer is also a selector
  //Selector gets the entire state and slices/selects a small portion of that state to be used
  itemCount: cartItems.reduce(
    (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
    0
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
