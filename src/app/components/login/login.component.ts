import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  private authService = inject(AuthService);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private formBuilder = inject(FormBuilder);

  isAuth = this.authService.authentication().isAuthenticated;

  loginForm!: FormGroup;
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

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userid: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    this.errorMessage = '';
    this.isFormSubmitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.isLoading = true;
    this.loginForm.disable();

    const rawValue = this.loginForm.getRawValue();
    const response = this.authService.login(rawValue.userid, rawValue.password);

    if (!response.ok) {
      this.errorMessage = response.message;
    }
  }
}
