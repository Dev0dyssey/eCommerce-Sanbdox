import React, { useState, useEffect } from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sing-in-and-sign-up/sing-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

const App = () => {
  // User authenticated session persistence
  // App remembers the signed in user via Firebase
  // Maintains the signed in user data until the user signs out
  // Persistence of user logged in details can be changed within the Firebase console
  // Subscriber always listening to the auth()
  // Auth() send the user authenticated object{} back every time
  // Open subscription;  always listening to the Google Firebase for user changes
  // Remains open as long as the Component remains mounted to the DOM
  // Need to unsubscribe once the component unmounts from the DOM to prevent memory leaks within the Application
  const [currentUser, setUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      setUser(user);
      createUserProfileDocument(user);
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <div>
      {/* SWITCH RENDERS THE VERY FIRST PATH IT MATCHES AND NOTHING ELSE */}
      {/* IN THE CASE BELOW "/" IS THE FIRST MATCHING ROUTE, SO "/HATS" WILL NOT BE RENDERED */}
      {/* EXACT PARAMETER STILL ALLOWS TO NAVIGATE TO THE SPECIFIC PATH */}
      {/* SWITCH IS A GOOD WAY TO FOLLOW A LOGICAL ROUTING PATTERN */}
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
};

export default App;
