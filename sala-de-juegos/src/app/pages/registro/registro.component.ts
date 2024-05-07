import { Component, inject, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import { Router, RouterLink } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthServise } from '../../services/auth.service.';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent{

  usuario: UsuarioModel = new UsuarioModel();

  constructor(private router: Router, private authService: AuthServise) {}

  async Register(form: NgForm) {
    if (form.invalid) { return; }

    this.authService.mostrarMensajeCarga();

    try {

      await this.authService.signUpWithEmailAndPassword(this.usuario);

      Swal.close();

      this.router.navigate(['/home']);
      
    } catch (error: any) {
      this.authService.manejarError(error);
    }
  }
  
  cancelLogin() {
    this.router.navigate(['/home']);
  }
}
