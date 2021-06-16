import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import { GET_ERRORS, SET_CURRENT_USER } from "./types";

// Register User

export const registerUser = (userData, history) => dispatch => {

  axios
<<<<<<< HEAD
    .post('api/users/register', values)
    .then((res) => history.push("/login"))
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
=======
    .post('api/users/register', userData)
    .then(res => history.push('/login'))
    .catch(err =>
      {
        console.log(err)
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      }

>>>>>>> 692ef66e42e71820e62a7039aca3758ade9afdb3
    );
};

// Login - Get User Token
<<<<<<< HEAD
export const loginUser = (userData, history) => (dispatch) => {
  axios
    .post('api/users/login', userData)
    .then((res) => {
=======

export const loginUser = (userData,history) => dispatch => {
  
  axios
    .post('api/users/login', userData)
    .then(res => {

>>>>>>> 692ef66e42e71820e62a7039aca3758ade9afdb3
      // Save to localStorage
      const { token } = res.data;
      // Set token to ls
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);

      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
<<<<<<< HEAD
      history.push("/home")
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
=======


      console.log("done")

      history.push('/dashboard')
    }).catch(err => {
      console.log(err)
      // dispatch({
      //   type: GET_ERRORS,
      //   payload: err.response.data
      // })
    }
      
>>>>>>> 692ef66e42e71820e62a7039aca3758ade9afdb3
    );
};

// Set logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

// Log user out
export const logoutUser = (history) => (dispatch) => {
  // Remove token from localStorage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
