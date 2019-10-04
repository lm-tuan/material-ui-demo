import * as types from './../contants/typeAction';

const initalState = {
  userRegister:null,
  registered:false
} 
export function registration(state = {}, action) {
    switch (action.type) {
      case types.REGISTER_REQUEST:
        console.log(action);
        return { ...state};
      case types.REGISTER_SUCCESS:
        console.log(action);
        return {...state, userRegister:action.user,registered:true};
      case types.REGISTER_FAILURE:
        return {...state};
      default:
        return state
    }
  }

  export default registration;