import React from "react";
import "./homepage.style.scss";

const HomePage = () => (
  // IF WE DO NOT NEED LOGIC WE CAN "RETURN" DIRECTLY INSIDE THE METHOD
  // ALLOWS FOR METHOD = () => (CONTENT)
  // ALTERNATIVE TO METHOD = () => {LOGIC---RETURN(CONTENT)}
  <div className="homepage">
    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <h1 className="title">HATS</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">JACKETS</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">WOMENS</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">MENS</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
