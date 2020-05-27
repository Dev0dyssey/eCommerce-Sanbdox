import { takeEvery } from "redux-saga/effects";

import ShopActionTypes from "./shop.types";

export function* fetchCollectionsAsync() {
  // All generator functions MUST have yields in them!
  yield console.log("I am a running function!");
}

export function* fetchCollectionsStart() {
  yield takeEvery(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}
