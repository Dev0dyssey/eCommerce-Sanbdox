import React from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";

function App() {
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
      </Switch>
    </div>
  );
}

export default App;
