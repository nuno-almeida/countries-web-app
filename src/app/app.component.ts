import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, NgbModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  authService = inject(AuthService);
  isAuth = computed(() =>  this.authService.authentication().isAuthenticated);
  expandMobileMenu = false;

   toggleMobileMenu(): void {
    this.expandMobileMenu = !this.expandMobileMenu;
   }

   logout(): void {
    this.authService.logout();
  }
}
