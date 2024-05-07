import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: 
  [ provideRouter(routes),
    importProvidersFrom(provideFirebaseApp(() => 
    initializeApp({
      "projectId":"sala-de-juegos-b28cc",
      "appId":"1:858083035067:web:95589b6d5977fe7337269e",
      "storageBucket":"sala-de-juegos-b28cc.appspot.com",
      "apiKey":"AIzaSyDidlKUzuX44ngMwZzzCquTCwsCCspjkL4",
      "authDomain":"sala-de-juegos-b28cc.firebaseapp.com",
      "messagingSenderId":"858083035067"}))),
    importProvidersFrom(provideAuth(() => getAuth())),
    importProvidersFrom(provideFirestore(() => getFirestore()))]
};

/*

npm install firebase
ng add @angular/fire
*/