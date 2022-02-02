import { logger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { routerMiddleware } from "connected-react-router";

import { loadState, saveState } from "../utils/localStorage";
import throttle from "lodash/throttle";
import rootSaga from "./Sagas";
import { rootReducer } from "./../reducers/index";

export const datePageWeb = (history) => {
  const sagaMiddleware = createSagaMiddleware();
  const routeMiddleware = routerMiddleware(history);
  let middleware = [sagaMiddleware, routeMiddleware];

  if (!false) middleware = [...middleware, logger];
  const persistedState = loadState();

  const store = createStore(
    rootReducer(history),
    composeWithDevTools(/* persistedState, */ applyMiddleware(...middleware))
  );
  //user contains the TOKEN
  /*  store.subscribe(
    throttle(() => {
      saveState({
        user: store.getState().user,
        todos: store.getState().todos,
      });
    }, 1000)
  ); */
  sagaMiddleware.run(rootSaga);
  return store;
};
