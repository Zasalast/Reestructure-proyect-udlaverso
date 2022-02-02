import { fork, all } from "redux-saga/effects";

import AuthSaga from "../service/Auth/AuthSaga";

export default function* rootSaga() {
  yield all([fork(AuthSaga)]);
}
