import React from "react";

// constants
const LOGIN_USER = "LOGIN_USER";
const LOGOUT_USER = "LOGOUT_USER";
const REGISTER_USER = "REGISTER_USER";

const initialState = {
  isLoading: true,
  userName: null,
  userToken: null,
};

const loginReducer = (prevState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {};

    case LOGOUT_USER:
      return {};

    case REGISTER_USER:
      return {};

    default:
      return prevState;
  }
};

export default { initialState, loginReducer };
