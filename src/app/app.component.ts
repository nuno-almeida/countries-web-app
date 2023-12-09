import { Component, computed, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    NgbModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  
  isAuth = this.authService.authentication().isAuthenticated;
  expandMobileMenu = false;

  constructor() {
    // NOTE at this moment the effect() API is still in developer preview
    // in a real scenario this should be done based on the response of the login method
    effect(() => {
      if (!this.isAuth) {
        this.router.navigate(['/']);
      }
    });
  }

  toggleMobileMenu(): void {
    this.expandMobileMenu = !this.expandMobileMenu;
  }

  logout(): void {
    this.authService.logout();
  }
}
