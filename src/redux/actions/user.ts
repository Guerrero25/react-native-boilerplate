import { LOGIN, LOGOUT } from "../constans";

export function login(user: User): ReduxAction {
  return {
    type: LOGIN,
    data: user
  };
}

export function logout(): ReduxAction {
  return {
    type: LOGOUT
  };
}
