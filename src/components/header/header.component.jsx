import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";

// Specific React syntax to import SVG images
import { ReactComponent as Logo } from "../../assets/crown_logo.svg";

import "./header.styles.scss";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logoContainer" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          {" "}
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  // state(root-reducer) -> user (user within the combineReducer{} in root-reducer) -> currentUser (coming from user.reducer.jsx INITIAL_STATE. Gives us the 'null' initial state value)
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
