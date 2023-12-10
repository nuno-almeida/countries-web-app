import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  private authService = inject(AuthService);

  registerForm = new FormGroup(
    {
      userid: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    },
    { validators: [this.passwordMatchValidator()] }
  );

  status = { ok: true, message: '' };
  isLoading = false;
  isFormSubmitted = false;

  get formControls() {
    return this.registerForm.controls;
  }

  showPasswordMismatchError(): boolean {
    if (
      this.formControls.password.errors ||
      this.formControls.confirmPassword.errors
    ) {
      return false;
    }

    return (
      this.registerForm.errors && this.registerForm.errors.passwordMismatch
    );
  }

  passwordMatchValidator(): ValidatorFn {
    return (currentControl: AbstractControl): ValidationErrors | null => {
      const match =
        currentControl.get('password')!.value ===
        currentControl.get('confirmPassword')!.value;
      if (match) {
        return null;
      } else {
        return { passwordMismatch: true };
      }
    };
  }

  onSubmit(): void {
    this.isFormSubmitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    this.isLoading = true;
    this.registerForm.disable();

    const rawValue = this.registerForm.getRawValue();
    this.authService
      .register(rawValue.userid!, rawValue.password!)
      .then((response) => {
        this.status.message = response.message;
        this.status.ok = response.ok;
        this.isLoading = false;
        !this.status.ok && this.registerForm.enable();
      });
  }
}
