export const ACCION_LOGIN = '[Auth] Login';
export const ACCION_LOGOUT = '[Auth] Logout';
export type TACCION_AUTH = '[Auth] Login' | '[Auth] Logout';

// Esto casca ,!!!!
// export type TACCION_AUTH = ACCION_LOGIN | ACCION_LOGOUT ;
///GENERICOS 
// function echo<T>(arg: T) : T {
//     return arg;
//     }
//     let a = echo<number>(1); // El typeof es Number
//     let b = echo<String>("Hola mundo"); // El typeof es String