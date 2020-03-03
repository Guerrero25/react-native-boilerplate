import { combineReducers } from "redux";
/* Reducers */
import user from "./user";

/* Exports reducer types */
export { UserReducer } from "./user";

const rootReducer = combineReducers({ user });

export type RootReducer = ReturnType<typeof rootReducer>;

export default rootReducer;
