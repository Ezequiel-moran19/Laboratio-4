import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { AuthServise } from '../../services/auth.service.';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, LoginComponent, CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  isAuthenticated: boolean = false;

  constructor(private router: Router, public authService: AuthServise) {}

  ngOnInit() {
    // Suscribirse al Observable para obtener cambios en la autenticación
    this.authService.autenticarUsuario().subscribe((authenticated: boolean) => {
      this.isAuthenticated = authenticated;
    });
  }

  async logOut() {
    try {
      await this.authService.logOut();
      this.router.navigateByUrl('/login');
    } catch (error) {
      console.log(error);
    } 
  }
}
