import React from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

// Specific React syntax to import SVG images
import { ReactComponent as Logo } from "../../assets/crown_logo.svg";

// import "./header.styles.scss";
import {
  HeaderContainer,
  LogoContainer,
  OptionContainer,
  OptionLink,
} from "./header.styles";

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/shop">CONTACT</OptionLink>
      {currentUser ? (
        <OptionLink as="div" onClick={() => auth.signOut()}>
          {" "}
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink className="option" to="/signin">
          SIGN IN
        </OptionLink>
      )}
      <CartIcon />
    </OptionContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

// {value: { value }} a way to destructure nested components
const mapStateToProps = createStructuredSelector({
  // state(root-reducer) -> user (user within the combineReducer{} in root-reducer) -> currentUser (coming from user.reducer.jsx INITIAL_STATE. Gives us the 'null' initial state value)
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
