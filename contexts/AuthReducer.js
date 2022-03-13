import React from "react";

// constants
const LOGIN_USER = "LOGIN_USER";
const LOGOUT_USER = "LOGOUT_USER";
const REGISTER_USER = "REGISTER_USER";
const CHECK_TOKEN = "CHECK_TOKEN";

const initialState = {
  isLoading: true,
  userName: null,
  userToken: null,
};

const loginReducer = (prevState, action) => {
  switch (action.type) {
    case CHECK_TOKEN:
      return {
        ...prevState,
        userToken: action.token,
        isLoading: false,
      };

    case LOGIN_USER:
      return {
        ...prevState,
        userName: action.id,
        userToken: action.token,
        isLoading: false,
      };

    case LOGOUT_USER:
      return {
        ...prevState,
        userName: null,
        userToken: null,
        isLoading: false,
      };

    case REGISTER_USER:
      return {
        ...prevState,
        userName: action.id,
        userToken: action.token,
        isLoading: false,
      };

    default:
      return prevState;
  }
};

export default { initialState, loginReducer };
