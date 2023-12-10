import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  isAuth = this.authService.authentication().isAuthenticated;

  loginForm = new FormGroup({
    userid: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  errorMessage = '';
  isLoading = false;
  isFormSubmitted = false;

  get formControls() { return this.loginForm.controls; }

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

  onSubmit(): void {
    this.isFormSubmitted = true;
    
    if (this.loginForm.invalid) {
      return;
    }

    this.errorMessage = '';
    this.isLoading = true;
    this.loginForm.disable();

    const rawValue = this.loginForm.getRawValue();
    this.authService.login(rawValue.userid!, rawValue.password!)
      .then(response => {
        if (!response.ok) {
          this.errorMessage = response.message;
          this.isLoading = false;
          this.loginForm.enable();
        }
      });
  }
}
