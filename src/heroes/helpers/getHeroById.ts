import { heroes } from '../data/heroes';
import { IHeroe } from '../components';
export interface IHeroCompleto extends IHeroe {
 origenes?:string;
}
export interface IEnDato<P> {
  dato:P 
}
type IConDato<P> =  P & { dato:string}
 
// eslint-disable-next-line
const EnDato:IEnDato<IHeroCompleto> = {
  dato:heroes[0]
};
// eslint-disable-next-line
const ConDato:IConDato<IHeroCompleto> = {
  ...heroes[0],
  dato:'el datos'
}

//He tenido que  poner a la funcion que id puede ser undefined porque sino 
//cascaba en el componente superior que lo llamaba.
export const getHeroById = (id:string | undefined):IHeroe|undefined=> {
  return   heroes.find(heroe=>heroe.id===id); 
}//getHeroById
