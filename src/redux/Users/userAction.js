import axios from "axios";
import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_SUCCESS,
  FETH_USERS_REQUEST,
} from "./userType";

export const fetchUsersRequest = () => {
  return {
    type: FETH_USERS_REQUEST,
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    axios
      .get("http://jsonplaceholder.typicode.com/users")
      .then((res) => {
          console.log(res.data)
        dispatch(fetchUsersSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchUsersFailure(err));
      });
  };
};
