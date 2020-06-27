import React from "react";
import Directory from "../../components/directory/directory.component";

import { HomePageContainer } from "./homepage.styles";

const HomePage = () => (
  // IF WE DO NOT NEED LOGIC WE CAN "RETURN" DIRECTLY INSIDE THE METHOD
  // ALLOWS FOR METHOD = () => (CONTENT)
  // ALTERNATIVE TO METHOD = () => {LOGIC---RETURN(CONTENT)}
  <HomePageContainer>
    <Directory />
  </HomePageContainer>
);

export default HomePage;
