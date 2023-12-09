import { Injectable, signal } from '@angular/core';
import { Auth } from '../models/auth';

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authentication = signal<Auth>({
    isAuthenticated: !!localStorage.getItem('login'),
    user: { id: localStorage.getItem('userid') || '' },
  });

  login(userId: string, password: string) {
    if (
      userId === localStorage.getItem('userid') &&
      password === localStorage.getItem('pass')
    ) {
      localStorage.setItem('login', 'true');

      this.authentication.set({
        isAuthenticated: true,
        user: { id: userId },
      });

      return {
        ok: true,
        message: '',
      };
    }

    return {
      ok: false,
      message: 'Invalid credentials',
    };
  }

  logout() {
    localStorage.removeItem('login');

    this.authentication.set({
      isAuthenticated: false,
      user: { id: '' },
    });
  }

    // NOTE this is just a demo example
  async register(userId: string, password: string) {
      await delay(2000);
      
      localStorage.setItem("login", "true");
      localStorage.setItem("userid", userId);
      localStorage.setItem("pass", password);

      return true
    };
}
