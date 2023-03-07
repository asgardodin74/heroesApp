import { useLocation, useNavigate } from 'react-router-dom';
import { useField } from '../../hooks/useField';
import queryString from 'query-string';
import { getHeroesByName } from '../helpers/getHeroesByName';
import { HeroCard } from '../components/HeroCard';

interface ISearchData {
  searchText?: string 
}

const getStringValueOrUndefined = (valor: string | (string | null)[] | null):string | undefined=>{
if (valor !==null) {
  if (typeof valor === 'string') return valor;
  else if (valor.length > 0 && typeof valor[0] === 'string') return valor[0];
  else return undefined;
}
}//getStringValueOrUndefined

export const SearchPage = () => {

      const navigate=useNavigate();
      //obtenemos la ruta de url
      //Este gancho devuelve el locationobjeto actual. Esto puede ser útil si desea
      // realizar algún efecto secundario siempre que cambie la ubicación actual.
      const location=useLocation();
      //recortamos y nos quedamos con la parte seleccionada
      const {q=''}=queryString.parse(location.search);
      const consulta = getStringValueOrUndefined(q);
      const heroes=getHeroesByName(consulta);
      const showSearch=(q !== null && q.length===0);
      const showError=(q !=null && q.length>0 &&  heroes.length===0);
      const{searchText,onInputChange}= useField<ISearchData>({
          searchText:consulta,
        },'searchText' );
      const onSearchSubmit:React.FormEventHandler<HTMLFormElement>=(event)=>{
          event.preventDefault();          
          //trim() borra espacios alante y atras
          // if(searchText.trim().length<=1) return;
          navigate(`?q=${searchText}`)
      }//onSearchSubmit
      
      return (
            <>
              <h1>Search</h1>
              <hr />
              <div className="row">
                  <div className="col-5">
                    <h4>Searching</h4>
                    <hr />
                    <form  onSubmit={onSearchSubmit}>
                        <input 
                              type="text"
                              placeholder="Search a hero"
                              className="form-control"
                              name="searchText"
                              autoComplete="off"
                              value={searchText}
                              onChange={onInputChange}
                        />
                        <button
                            className="btn btn-outline-primary mt-1">
                          Search
                        </button>
                    </form>
                  </div>
                  <div className="col-7">
                    <h4>Results</h4>
                    <hr />
                    {/* {
                      (q==='')
                      ? (<div className="alert alert-primary">
                          Search a hero
                        </div>):
                      (heroes.length===0) && (<div className="alert alert-danger">
                            No hero with <b>{q}</b>
                        </div>)
                      } */}
                    <div className="alert alert-primary animate__animated animate__fadeInLeft"
                         style={{display: showSearch ? '' : 'none'}}>
                      Search a hero
                    </div>
                    <div className="alert alert-danger animate__animated animate__fadeInRight" style={{display: showError ? '': 'none'}}>
                          No hero with <b>{q}</b>
                    </div>
                   {
                         heroes.map(hero=>{
                            return <HeroCard key={hero.id} data={hero} {...hero}  />
                          })      
                    }                     
                    </div>
               </div>
            </>
        )
}//Search
