import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, effect, inject } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  // TODO change to private
  authService = inject(AuthService);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  isAuth = this.authService.authentication().isAuthenticated;

  constructor() {
    // NOTE at this moment the effect() API is still in developer preview
    // in a real scenario this should be done based on the response of the login method
    effect(() => {
      if (this.authService.authentication().isAuthenticated) {
        const redirectUrl =
          this.activatedRoute.snapshot.queryParams['redirectUrl'] || '';
        this.router.navigateByUrl(redirectUrl);
      }
    });
  }

  login() {
    this.authService.login('user', 'pass');
  }
}
