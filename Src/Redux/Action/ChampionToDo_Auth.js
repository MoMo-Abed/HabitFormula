import {
  SIGNUPUSER,
  LOGIN_USER,
  REST_PASSWORD_FAIL,
  REST_PASSWORD_SUCC,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  SIGNUPUSER_FAIL,
  REST_PASSWORD,
  SIGN_OUT,
  FETCH_PROFILE,
  SIGNUPLOGINSUCC
} from "./types";

import { Actions } from "react-native-router-flux";
import axios from "axios";

export function UserLogin({ loginemail, loginpassword }) {
  return function(dispatch) {
    dispatch({ type: LOGIN_USER });
  };
}

const loginUserFail = dispatch => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });

  Actions.Main();
};

export function SignOut() {
  return function(dispatch) {
    dispatch({ type: SIGN_OUT });
  };
}

export function UserSignUp({ SignUpEmail, SignUpPassword }) {
  return function(dispatch) {
    dispatch({ type: SIGNUPUSER });
    firebase;
  };
}

const SignUpUserFail = dispatch => {
  dispatch({ type: SIGNUPUSER_FAIL });
};

const SignUploginUserSuccess = (dispatch, user) => {
  dispatch({
    type: SIGNUPLOGINSUCC,
    payload: user
  });

  Actions.Main();
};

export function RestPassword({ RestEmail }) {
  return function(dispatch) {
    dispatch({ type: REST_PASSWORD });
  };
}

const RestFail = dispatch => {
  dispatch({ type: REST_PASSWORD_FAIL });
};

const RestSucc = (dispatch, user) => {
  dispatch({
    type: REST_PASSWORD_SUCC,
    payload: user
  });

  Actions.EmailPass();
};

export function ProfileUpdate({ image, name, uid }) {
  const { currentUser } = firebase.auth();

  return () => {};
}

export const FetchProfile = () => {
  const { currentUser } = firebase.auth();

  return dispatch => {};
};
