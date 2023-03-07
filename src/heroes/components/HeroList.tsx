import { getHeroesByPublisher } from '../helpers';
import { HeroCard } from './HeroCard';
import { useMemo } from 'react';
import React from 'react';

interface IHeroList {
  publisher:string;
}
export const HeroList:React.FC<IHeroList> = ({publisher}) => {
    //utilizamos useMemo para que no se dispare el renderizado una y otra vez
    //tan solo cuando cambien las dependencias (publisher)
    const heroes=useMemo(()=>getHeroesByPublisher(publisher),[publisher]);
    return (
            <div className="row rows-cols-1 row-cols-md-3 g-3">
                      {
                        heroes.map(heroe=>{
                        return (<HeroCard
                                     /*{...heroe}*/
                                     key={heroe.id}
                                     data={heroe}
                                    
                                />)
                    })}    
            </div>
  )
}//HeroList
       
