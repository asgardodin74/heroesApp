import { useContext,PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../autho';

export const PublicRoute:React.FC<PropsWithChildren> = (props) => {

   const { logged } = useContext(AuthContext)
   return (!logged) ? <>{props.children}</>:<Navigate to='/marvel'/>
   
}//PoublicRoute
