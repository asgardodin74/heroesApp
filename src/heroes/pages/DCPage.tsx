import { HeroList } from '../components/HeroList';

export const DCPage:React.FunctionComponent = () => { 
    return (
          <>
            <h1>DC comics</h1>
            <hr />
            <HeroList publisher='DC Comics'/>
          </>
  )
}//DCPage
