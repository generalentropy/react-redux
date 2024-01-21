const initialStateAuth = {
  isLogged: false,
};

export default function authReducer(state = initialStateAuth, action) {
  switch (action.type) {
    case "auth/login":
      return { ...state, isLogged: true };

    case "auth/logout":
      return { ...state, isLogged: false };

    default:
      return state;
  }
}

export function login() {
  return { type: "auth/login" };
}

export function logout() {
  return { type: "auth/logout" };
}
