import { useNavigate } from 'react-router-dom';
import {useContext} from 'react';
import {AuthContext} from '../context/AuthContext';
export const LoginPage:React.FC = () => {

  const { login }=useContext(AuthContext);
  //El useNavigategancho devuelve una función que le permite navegar mediante programación
  const navigate=useNavigate();
  console.log('navigate',navigate);
  const onLogin=()=>{
        const lastPath=localStorage.getItem('lastPath') || '/';
        login('Aitor Madariaga');
        navigate(lastPath,{
            //impide la vuelta a la pagina anterior
            replace:true
        });
  }
   return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button 
            className="btn btn-primary"
            onClick={()=>onLogin()}
      >
        Login
      </button>
    </div>
  )
}//LoginPage
