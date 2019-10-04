import * as types from './../contants/typeAction';



const LOGGED_IN = "LOGGED_IN";
const LOGGED_OUT = "LOGGED_OUT";
const LOGIN_ERROR = "LOGIN_ERROR";

var initialState = {

    token: null,
    status: LOGGED_OUT,
    isAuthenticated:false
  
};

const authenication = (state = initialState, action) => {
    switch (action.type) {

        case types.LOGIN_SUCCESS:  
          return {...state, status: LOGGED_IN,isAuthenticated:true};

        case types.SAVE_TOKEN:
          localStorage.setItem('token', action.token);
          return {...state, token: action.token,isAuthenticated:true};

        case types.DELETE_TOKEN:
          return {...state, token: null};

        case types.LOGOUT:    
          return {...state, status:LOGGED_OUT,isAuthenticated:false};

        case types.LOGIN_FAILURE: 
          return {...state, status: LOGIN_ERROR};
          
        default:
          return state;
      }
}
export default authenication;