import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroById } from '../helpers/getHeroById';
import { useMemo } from 'react';
//USE MEMO PARA MEMORIZAR VALORES
//USE CALL BACK PARA MEMORIZAR FUNCIONES
export const HeroePage:React.FunctionComponent = () => {
  //Devuelve la ruta del navegador
    const {id}=useParams();
    const navigate=useNavigate();
    //vamos a disparar la funcion getHeroByid si cambian sus dependencias(id)
    const hero=useMemo(()=>getHeroById(id),[id]);
    const onNavigateBack=()=>{
          //El -1 indica el nivel anterior en la ruta
          navigate(-1)
    }//getHeroById
    //Si no existe el heroe volvemos a la pagina anterior
    if(!hero) return <Navigate to='/marvel'/>;
    return (
            <div className="row mt-5">
              <div className="col-4">
                <img src={`/assets/heroes/${id}.jpg`} alt="no existe imagen"
                     className="img-thumbnail animate__animated animate__fadeInLeft"
                     />
              </div>
              <div className="col-8">
                <h3>{hero.superhero}</h3>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item"><b>Alter ego:</b>{hero.alter_ego}</li>
                  <li className="list-group-item"><b>Publisher:</b>{hero.publisher}</li>
                  <li className="list-group-item"><b>First Appearance:</b>{hero.first_appearance}</li>
                </ul>
                <h5 className="mt-3">Characters</h5>
                <p>{hero.characters}</p>
                <button 
                className="btn btn-outline-primary"
                onClick={onNavigateBack}
                >
                  regresar
                </button>
              </div>             
            </div>
  )
}//HeroePage
