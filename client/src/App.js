import React, { useEffect } from "react";
import "./App.css";

import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sing-in-and-sign-up/sing-in-and-sign-up.component";
import CheckoutPage from "./pages/checkout/checkout.component";

import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";

const App = ({ checkUserSession, currentUser }) => {
  // User authenticated session persistence
  // App remembers the signed in user via Firebase
  // Maintains the signed in user data until the user signs out
  // Persistence of user logged in details can be changed within the Firebase console
  // Subscriber always listening to the auth()
  // Auth() send the user authenticated object{} back every time
  // Open subscription;  always listening to the Google Firebase for user changes
  // Remains open as long as the Component remains mounted to the DOM
  // Need to unsubscribe once the component unmounts from the DOM to prevent memory leaks occurring within the Application
  useEffect(
    () => {
      checkUserSession();
    },
    [checkUserSession]
  );

  return (
    <div>
      {/* SWITCH RENDERS THE VERY FIRST PATH IT MATCHES AND NOTHING ELSE */}
      {/* IN THE CASE BELOW "/" IS THE FIRST MATCHING ROUTE, SO "/HATS" WILL NOT BE RENDERED */}
      {/* EXACT PARAMETER STILL ALLOWS TO NAVIGATE TO THE SPECIFIC PATH */}
      {/* SWITCH IS A GOOD WAY TO FOLLOW A LOGICAL ROUTING PATTERN */}
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
          }
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
