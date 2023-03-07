import { Reducer } from 'react';
import {ACCION_LOGIN, ACCION_LOGOUT, TACCION_AUTH} from '../types/types';
import { IAuthState, initialState, IUsuario } from './AuthProvider';
export interface IAction {
    type:TACCION_AUTH;
    payload?:IUsuario
}

export const doLogin = (usuario:IUsuario):IAction =>{
    return {
        type:ACCION_LOGIN,
        payload:usuario
    }
}

export const doLogout = ():IAction => {
    return {type:ACCION_LOGOUT}
}

export const authReducer:Reducer<IAuthState,IAction>=( state=initialState,action)=>{
    
    switch(action.type){
        case ACCION_LOGIN:
            return {
                ...state,
                logged:true,
                user:action.payload
            };
        case ACCION_LOGOUT:
            return{
                logged:false,
                //el name deja de existir
            };        
        default:
            return state;
    }
}//   authReducer