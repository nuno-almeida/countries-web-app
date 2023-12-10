import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const authService = inject(AuthService);

  const isAuthenticated = authService.authentication().isAuthenticated;

  if (!isAuthenticated) {
    const router = inject(Router);
    router.navigate(['/login'], { queryParams: { redirectUrl: state.url } });
  }

  return true;
};
