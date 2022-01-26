import { createStore } from "redux";
import { loadState, saveState } from "../utils/localStorage";
import throttle from "lodash/throttle";
import todoApp from "./../reducers/todos";
export const datePageWeb = () => {
  const persistedState = loadState();
  const store = createStore(todoApp, persistedState);
  //user contains the TOKEN
  store.subscribe(
    throttle(() => {
      saveState({
        user: store.getState().user,
        todos: store.getState().todos,
      });
    }, 1000)
  );
  return store;
};
