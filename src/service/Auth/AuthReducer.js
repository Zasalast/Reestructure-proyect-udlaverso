import { handleActions } from "redux-actions";

export const INITIAL_STATE = {
  authentication: false,
  loading: false,
};

const reducer = handleActions(
  {
    AUTH: {
      LOGIN: (state, { payload: {} }) => ({ ...state, loading: true }),
      LOGIN_RESPONSE: {
        next(state, { payload: { token } }) {
          return { ...state, token, authentication: true };
        },
        throw(state, action) {
          return { ...state };
        },
      },

      LOGOUT: (state, { payload: {} }) => ({ ...state, loading: true }),
      LOGOUT_RESPONSE: {
        next(state, { payload: {} }) {
          return { ...state, token: null, authentication: false };
        },
        throw(state, action) {
          return { ...state };
        },
      },
      LOADING: {
        next(state, { payload: { token } }) {
          return { ...state, token, loading: true, authentication: true };
        },
        throw(state, action) {
          return { ...state };
        },
      },
    },
  },
  INITIAL_STATE
);

export default reducer;
