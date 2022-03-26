// constants
export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const REGISTER_USER = "REGISTER_USER";
export const RESTORE_TOKEN = "RESTORE_TOKEN";

const initialState = {
  isLoading: true,
  userName: null,
  userToken: null,
  isSignout: false,
};

const loginReducer = (prevState, action) => {
  switch (action.type) {
    case RESTORE_TOKEN:
      return {
        ...prevState,
        userToken: action.token,
        isLoading: false,
      };

    case LOGIN_USER:
      return {
        ...prevState,
        isSignout: false,
        userToken: action.token,
        userName: action.userName,
        isLoading: false,
      };

    case LOGOUT_USER:
      return {
        ...prevState,
        isSignout: true,
        userToken: null,
        isLoading: false,
      };

    case REGISTER_USER:
      return {
        ...prevState,
        userName: action.userName,
        userToken: action.token,
        isLoading: false,
      };

    default:
      return prevState;
  }
};

export { initialState, loginReducer };
