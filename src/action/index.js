import axios from 'axios';
import { setAuthToken } from '../Utils/setAuthToken';
export const user=(data)=>{
    return{
        type:"userl",
        payload:data
    }
}

// Login User
export const login = (userName, password) => async (dispatch) => {
  
    const body = { userName, password };
 
    try {
      const res = await axios.post("http://localhost:5433/api/auth/login", body);
  
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: res.data,
      });
     
      dispatch(loadUser());
    } catch (err) {
      const errors = err.response.data.errors;
      dispatch({
        type: "LOGIN_FAIL",
        payload: errors[0].msg,
      });
    }
  };

  //load User
  export const loadUser = () => async (dispatch) => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
  
    try {
      const res = await axios.get("http://localhost:5433/api/auth/load-user");
      
      dispatch({
        type: "USER_LOADED",
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: "AUTH_ERROR",
      });
    }
  };
  
  // Logout
export const logout = () => async (dispatch) => {
  console.log("logout")
  dispatch({ type: "LOGOUT" });
};