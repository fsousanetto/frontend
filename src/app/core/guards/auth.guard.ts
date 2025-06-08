import { inject} from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

const AuthGuard: CanActivateFn = () => {

  const authService = inject(AuthService);
  const router = inject(Router);

  const isLoged = authService.isLoged();
  console.log('AuthGuard: Usuário está logado?', isLoged);

  if (authService.isLoged()) {
    return true;
  } else {
    router.navigate(['/auth/login']);
    return false;
  }
};

export default AuthGuard;
