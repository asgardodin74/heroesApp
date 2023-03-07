import { Route,Routes} from 'react-router-dom';
import { LoginPage } from '../autho';
import { HeroesRoutes } from '../heroes/routes/HeroesRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
export const AppRouter = () => {
  return (
          <>
              <Routes>  
                  {/* Esto lo hacemos porque una vez esta autenticado el usuario 
                  no tendria que poder escribir en url login y que le llevara    */}
                    <Route path="/login" element={
                      <PublicRoute>
                        <LoginPage/>
                      </PublicRoute>
                        }/>
                    {/* La manera en que conseguimos hacer las rutas privadas */}
                    <Route path="/*" element={
                                <PrivateRoute>
                                    <HeroesRoutes/>
                                </PrivateRoute>
                    }/>    
              </Routes>      
          </>
  )
}//AppRouter
