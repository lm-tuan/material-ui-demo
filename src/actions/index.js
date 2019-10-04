import * as types from './../contants/typeAction';
export const registerRequest = (user) => {
    return {
        type:types.REGISTER_REQUEST,
        user
    }
}

export const registerSuccess = (user) => {
    return {
        type:types.REGISTER_SUCCESS,
        user
    }
}

export const registerFailure = (error) => {
    return {
        type:types.REGISTER_FAILURE,
        error
    }
}

export const loginRequest = (user) => {
    return {
        type:types.LOGIN_REQUEST,
        user
    }
}

export const loginSuccess= (user) => {
    return {
        type:types.LOGIN_SUCCESS,
    }
}
export const saveToken= (token) => {
    return {
        type:types.SAVE_TOKEN,
        token
    }
}
export const deleteToken= () => {
    return {
        type:types.DELETE_TOKEN,
        
    }
}

export const loginFailure = (error) => {
    return {
        type:types.LOGIN_FAILURE,
        error
    }
}
