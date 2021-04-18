import * as types from './../constants/ActionType';

export const showLogin=()=>{
    return{
        type:types.SHOW_MODAL_LOGIN
    }
}

export const showRegister=()=>{
    return{
        type:types.SHOW_MODAL_REGISTER
    }
}

export const closeLogin=()=>{
    return{
        type:types.CLOSE_MODAL_LOGIN
    }
}