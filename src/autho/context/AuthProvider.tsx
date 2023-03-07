import React, { PropsWithChildren, Reducer, useReducer } from 'react';
import { AuthContext } from './AuthContext';
import { authReducer, doLogin, doLogout, IAction } from './authReducer';
//lA INTERROGACION DETERMINA UE EL ATRIBUTO user es OPTATIVO
export interface IAuthState {
    logged:boolean;
    user?:IUsuario;
}
export interface IUsuario {
    id:string;
    name:string;
}
export const initialState:IAuthState={
    logged:false 
};

const init=():IAuthState=>{
    const usuarioStorage = localStorage.getItem('user');
    //JSON.parse transforma una secuencia JSON en un valor java script
    //proceso invero al JSON.stringfy
    const user:IUsuario | undefined=usuarioStorage!==null?JSON.parse(usuarioStorage) as IUsuario:undefined;
    return {
       
        logged:!!user,
        user:user,
    }
}//init

export const AuthProvider:React.FC<PropsWithChildren> = (props) => {
  
    const [authstate,dispatch] = useReducer<Reducer<IAuthState,IAction>,IAuthState>(authReducer,initialState,init);
    /* (state: IAuthState | undefined, action: IAction) => IAuthState, 
    IAuthState>(authReducer,initialState,init);*/
    const login = (name='') => {
        const user:IUsuario={id:'ABC',name:name};
        // JSON.stringify(user)   método estático convierte un valor de JavaScript en una cadena JSON
        localStorage.setItem('user',JSON.stringify(user));
        dispatch(doLogin(user));   
    }//login

    const logout=()=>{
        localStorage.removeItem('user');
        dispatch(doLogout());
    }//logout

    return (   
        <AuthContext.Provider value={{...authstate, login:login,logout:logout}}>
            {props.children}
        </AuthContext.Provider>
   
  )
}
