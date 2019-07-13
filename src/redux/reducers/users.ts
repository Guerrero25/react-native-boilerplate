import { combineReducers } from "redux";
/* Types */
import { ReduxAction } from "../../types";

const authenticated = (state: boolean = false, action: ReduxAction) => {
  switch (action.type) {
    default:
      return state;
  }
};

const token = (state: string = "", action: ReduxAction) => {
  switch (action.type) {
    default:
      return state;
  }
};

const data = (state = null, action: ReduxAction) => {
  switch (action.type) {
    default:
      return state;
  }
};

const users = combineReducers({ authenticated, token, data });

export default users;
