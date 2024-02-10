import {
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_REQUEST,
  USER_AUTH_SUCCESS,
  USER_AUTH_FAILURE,
} from "../Constants/User";

const userInitialState = {
  User: {},
  isLoading: false,
  success: "",
  failure: "",
};

const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: "Login Successfully",
        User: action.payload,
      };

    case LOGIN_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        failure: action.payload,
      };

    case USER_AUTH_SUCCESS:
      return {
        ...state , 
        User : action.payload,
      }

    case USER_AUTH_FAILURE:
      return{
        ...state,
        failure : action.payload,
      }

    default:
      return state;
  }
};

export { userReducer };
