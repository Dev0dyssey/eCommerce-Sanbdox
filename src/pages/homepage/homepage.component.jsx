import React from "react";
import Directory from "../../components/directory/directory.component";

import "./homepage.style.scss";

const HomePage = () => (
  // IF WE DO NOT NEED LOGIC WE CAN "RETURN" DIRECTLY INSIDE THE METHOD
  // ALLOWS FOR METHOD = () => (CONTENT)
  // ALTERNATIVE TO METHOD = () => {LOGIC---RETURN(CONTENT)}
  <div className="homepage">
    <Directory />
  </div>
);

export default HomePage;
