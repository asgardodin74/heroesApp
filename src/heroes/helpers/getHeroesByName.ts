import { IHeroe } from '../components';
import {heroes} from '../data/heroes';
//Componente devuelve el heroe por nombre
export const getHeroesByName= (name=''):IHeroe[] => {
    name=name.toLocaleLowerCase().trim();
    if(name.length===0) return [];
    return heroes.filter(
        hero=>hero.superhero.toLocaleLowerCase().includes(name)
    ) 
}//getHeroesByName
