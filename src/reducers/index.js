import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import reducerAuth from "../service/Auth/AuthReducer";
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";
import { auth } from "../service/Auth//AuthActions";
export const UserReducer = () => {};
export const CopyReducer = (state) => {};
const todoApp = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth: reducerAuth,
    copy: [],
    user: null,
    todos,
    visibilityFilter,
  });
const rootReducer = (history) => {
  return (state, action) => {
    if (action.type === auth.logout) state = undefined;
    return todoApp(history)(state, action);
  };
};
export { rootReducer };
