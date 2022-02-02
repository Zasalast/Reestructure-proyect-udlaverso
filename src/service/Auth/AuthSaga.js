import { put, takeLatest, all } from "redux-saga/effects";
//import { push } from "react-router-redux";
import { auth } from "./AuthActions";
import { postApi } from "../../common/ApiRequest";

function* login({ payload }) {
  console.log("loginloginloginloginloginlogin data login loginloginloginlogin");
  console.log(payload);
  const { email, password } = payload;
  console.log("loginloginloginloginloginlogin data login loginloginloginlogin");
  console.log(email, password, "email, password");
  console.log(payload, "data login");
  let data;
  try {
    data = yield postApi(
      "/auth/login",
      {
        email,
        password,
      },
      null
    ); /* Api.post("/auth/login", { email, password }); */
    console.log(data, "response = yield postApi");
  } catch (error) {
    console.log(
      error,
      " error response = yield Api.post(/auth/login, { email, password });"
    );
  }

  console.log("login auth saga", data, "login auth saga");
  console.log(payload);
  if (data) {
    console.log("entro a  put");
    console.log("entro a  put", data.data.access_token, "entro a  put");
    /* yield put(auth.loginResponse("asdasd")); */
    localStorage.setItem("token", data.data.access_token);
    yield put(auth.loginResponse(data.data.access_token));
  } else {
    /*   const err = new TypeError("ERROR_LOGIN");
    yield put(auth.loginResponse(err)); */
  }
}

/* function* signup({ payload }) {
  const { data } = payload;
  const response = yield Api.post("/auth/signup", data);
  if (response.ok) {
    console.log(response);
    yield put(auth.signupResponse(response.ok));
  } else {
    const err = new TypeError("ERROR_LOGIN");
    yield put(auth.signupResponse(err));
  }
} */
function* logout() {
  localStorage.removeItem("token");
}

function* ActionWatcher() {
  yield takeLatest(auth.login, login);
  // yield takeLatest(auth.signup, signup)
  yield takeLatest(auth.logout, logout);
}

export default function* rootSaga() {
  yield all([ActionWatcher()]);
}
