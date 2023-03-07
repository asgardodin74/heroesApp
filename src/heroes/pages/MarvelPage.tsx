import { HeroList } from '../components/HeroList';

export const MarvelPage:React.FunctionComponent = () => {
  return (
          <>
            <h1>Marvel comics</h1>
            <hr />
            <HeroList publisher='Marvel Comics'/>
        </>
  )
}
