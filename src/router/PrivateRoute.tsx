import { useContext,PropsWithChildren } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../autho';

/*   
   (props:{ children?: ReactNode }, context?: any) => ReactElement<any, any> | null 
 */  
export const PrivateRoute:React.FC<PropsWithChildren> = (props)=>{
   const { logged } = useContext(AuthContext);
   //Esto lo hacemos para cuando el usuario hace logout
   //y sale de la sesion, cuando vuelva la web recuerde 
   //donde se habia quedado
   const {pathname,search}=useLocation();
   const lastPath=pathname+search;
   localStorage.setItem('lastPath',lastPath);
   return (logged) ? <>{props.children}</>:<Navigate to='/login'/>
   
}//PrivateRoute

