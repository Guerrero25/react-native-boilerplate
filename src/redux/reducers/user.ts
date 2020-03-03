import { combineReducers } from "redux";
/* Types */
import { LOGIN, LOGOUT } from "../constans";

const authenticated = (
  state: boolean = false,
  action: ReduxAction
): boolean => {
  switch (action.type) {
    case LOGIN:
      return true;

    case LOGOUT:
      return false;

    default:
      return state;
  }
};

const token = (state: string = "", action: ReduxAction): string => {
  switch (action.type) {
    default:
      return state;
  }
};

const data = (state: User = null, action: ReduxAction): User => {
  switch (action.type) {
    case LOGIN:
      return action.data;

    case LOGOUT:
      return null;

    default:
      return state;
  }
};

const user = combineReducers({ authenticated, token, data });

export type UserReducer = ReturnType<typeof user>;

export default user;
