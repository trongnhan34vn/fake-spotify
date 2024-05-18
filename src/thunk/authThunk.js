import { SIGNIN, SIGNUP } from "../api/services/authServices";
import { getAuthResponse } from "../redux/reducer/userSlice";


export const signup = (data) => {
  return async function (dispatch) {
    try {
      let response = await SIGNUP(data);
      dispatch(getAuthResponse(response));
    } catch (error) {
      dispatch(getAuthResponse(error.response))
      console.log(error);
    }
  }
}

export const signin = (data) => {
  return async function (dispatch) {
    try {
      let response = await SIGNIN(data);
      dispatch(getAuthResponse(response));
    } catch (error) {
      dispatch(getAuthResponse(error.response))
      console.log(error);
    }
  }
}