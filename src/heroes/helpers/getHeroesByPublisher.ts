import { IHeroe } from '../components';
import {heroes} from '../data/heroes';
//Componente devuelve la lista de heroes filtrada por compañia
export const getHeroesByPublisher = (publisher:string):IHeroe[] => {
  
    const validPublishers=['DC Comics','Marvel Comics']
    if(!validPublishers.includes(publisher))
        throw new Error(`S{publisher} is not a valid publisher`);
    return heroes.filter( heroe=>heroe.publisher===publisher);
}//getHeroesByPublisher
