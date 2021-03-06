import { all, call, takeLatest, put, take } from "redux-saga/effects";

import UserActionTypes from "../user/user.types";
import { clearCart } from "./cart.action";

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSucces() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCES, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSucces)]);
}
