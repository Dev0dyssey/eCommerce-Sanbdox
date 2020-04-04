import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";

const middleWares = [logger];

// ...middleWares and middleWares = [logger] allow for a greater degree of scalability
// Easier to add new property to the middleWares array[] when we want to pass more arguments into the applyMiddleware() method
const store = createStore(rootReducer, applyMiddleware(...middleWares));

export default store;
