import { CanActivateFn, Router } from '@angular/router';
import { AuthServise } from '../services/auth.service.';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard{

  constructor(private authService: AuthServise, private router: Router) {}

  canActivate(): boolean {
    
    if (this.authService.autenticarUsuario()) {
      return true;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}