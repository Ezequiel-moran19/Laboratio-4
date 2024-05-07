import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { addDoc, collection } from 'firebase/firestore';
import { AuthServise } from '../../services/auth.service.';
import Swal from 'sweetalert2';
import { using } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent{
  
  usuario: UsuarioModel = new UsuarioModel;
  usuarioTest = false;

  public countLogin:number = 0;

  constructor(private router: Router, private firestore: Firestore, private authService: AuthServise) {}
  
  errorMessage: string = ''; // Propiedad para almacenar el mensaje de error

  async Login(form: NgForm) {
    if (form.invalid) { return; }

    this.authService.mostrarMensajeCarga();

    try {

      await this.authService.logInWithEmailAndPassword(this.usuario);
      
      await this.guardarUsuarioFire(this.usuario);

      Swal.close();

      this.router.navigate(['/home']);

    } catch (error: any) { 
       this.authService.manejarError(error);
    }
  }
  
  async guardarUsuarioFire(usuario: UsuarioModel){
    const userData = { ...usuario };

    let col = collection(this.firestore, 'logins');
    await addDoc(col, {fecha: new Date(), "user": userData});
  }

  cancelLogin() {
    this.router.navigate(['/home']);
  }

  autocompletarUsuario() {
    if (this.usuarioTest) {
      this.usuario.email = 'test@test.com';
      this.usuario.password = '123321';
    } else {
      this.usuario.email = '';
      this.usuario.password = '';
    }
  }

}
  /*
  GetData(){
    let col = collection(this.firestore, "logins");

    const observable = collectionData(col);

    observable.subscribe((respuesta) => {
       this.loginCollection = respuesta;

       this.countLogin = this.loginCollection.length;

       console.log(respuesta);
    })
  }*/