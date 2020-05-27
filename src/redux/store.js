import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import { fetchCollectionsStart } from "./shop/shop.sagas";

import rootReducer from "./root-reducer";

const sagaMiddleware = createSagaMiddleware();

const middleWares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middleWares.push(logger);
}

// ...middleWares and middleWares = [logger] allow for a greater degree of scalability
// Easier to add new property to the middleWares array[] when we want to pass more arguments into the applyMiddleware() method
export const store = createStore(rootReducer, applyMiddleware(...middleWares));

sagaMiddleware.run(fetchCollectionsStart);

export const persistor = persistStore(store);

export default { store, persistor };
