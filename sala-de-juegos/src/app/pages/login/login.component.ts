import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  
  usuario: UsuarioModel = new UsuarioModel;

  constructor(private router: Router) {}
  
  ngOnInit() {

    this.usuario.email = 'eze@gmail.com';
    this.usuario.password = '123321';
  }

  cancelLogin() {
    this.router.navigate(['/home']);
  }
}
