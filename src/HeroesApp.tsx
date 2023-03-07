import { AuthProvider } from './autho';
import { AppRouter } from './router/AppRouter';

export const HeroesApp = () => {
  return (
            <>
                <AuthProvider>
                    <AppRouter/>
                </AuthProvider>
            </>
  )
}//HeroesApp
