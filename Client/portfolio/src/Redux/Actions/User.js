import {
  LOGIN_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  USER_AUTH_REQUEST,
  USER_AUTH_FAILURE,
  USER_AUTH_SUCCESS,
} from "../Constants/User";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.withCredentials = true;

const loginUser = (formData, navigate) => async (dispatch) => {
  dispatch({ type: LOGIN_USER_REQUEST });
  try {
    const response = await axios.post("admin/sign-in", formData);
    if (response.data.success) {
      dispatch({ type: LOGIN_USER_SUCCESS, payload: response.data.User });
      navigate("/admin/dashboard");
    } else {
      dispatch({ type: LOGIN_USER_FAILURE, payload: response.data.message });
    }
  } catch (error) {
    dispatch({
      type: LOGIN_USER_FAILURE,
      payload: error.response.data.message,
    });
  }
};

const checkUserAuthentication = () => async (dispatch) => {
  dispatch({ type: USER_AUTH_REQUEST });
  try {
    const response = await axios.get("admin/check-auth");
    if (response.data.success) {
      dispatch({ type: USER_AUTH_SUCCESS, payload: response.data.User });
    } else {
      dispatch({ type: USER_AUTH_FAILURE, payload: response.data.message });
    }
  } catch (error) {
    dispatch({ type: USER_AUTH_FAILURE, payload: error.response.data.message });
  }
};

export { loginUser , checkUserAuthentication };
