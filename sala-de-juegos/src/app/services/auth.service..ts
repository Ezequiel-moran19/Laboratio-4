import { inject, Injectable } from "@angular/core";
import { Auth, authState } from "@angular/fire/auth";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { UsuarioModel } from "../models/usuario.model";
import { Observable } from "rxjs/internal/Observable";
import { map } from "rxjs";
import Swal from "sweetalert2";

@Injectable({
    providedIn: 'root'
  })
  
export class AuthServise {

    constructor(private auth: Auth) {}

    usuario: UsuarioModel = new UsuarioModel;
  
    autenticarUsuario(): Observable<boolean> {
      return authState(this.auth).pipe(map(user => !!user));
    }
    
    signUpWithEmailAndPassword(usuario: UsuarioModel) {
      return createUserWithEmailAndPassword(
        this.auth,
        usuario.email,
        usuario.password
      );
    }

    logInWithEmailAndPassword(usuario: UsuarioModel) {
    return signInWithEmailAndPassword(
        this.auth,
        usuario.email,
        usuario.password
     );
    }

    logOut(){
        return this.auth.signOut();
    }

     mostrarMensajeCarga() {
      Swal.fire({
        allowOutsideClick:false,
        title: 'info',
        text: 'Espere por favor'
      })
      Swal.showLoading();
    }
    
     manejarError(error: any) {
      console.error(error);
       Swal.fire({
        title: 'Error',
        text: 'Ha ocurrido un error.',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    } 

}