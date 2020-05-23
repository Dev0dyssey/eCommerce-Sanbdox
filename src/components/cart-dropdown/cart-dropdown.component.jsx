import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import {
  CartDropdownDiv,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownDiv>
    <CartItems className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <EmptyMessage className="empty-message">
          Your cart is empty
        </EmptyMessage>
      )}
    </CartItems>
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </CartDropdownDiv>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

// If no second argument present on connect() i.e. mapDispatchToProps, connect() passes "dispatch" into the props
// Good to use in one of dispatch calls
// Can be seen when you console.log() all available props (i.e.: ...otherProps)
export default withRouter(connect(mapStateToProps)(CartDropdown));
