import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { NavComponent } from './pages/nav/nav.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [ 
    {path: 'home', component: HomeComponent, canActivate: [ AuthGuard ] },
    {path: 'nav', component: NavComponent },
    {path: 'about', component: AboutComponent },
    {path: 'registro', component: RegistroComponent },
    {path: 'login', component: LoginComponent },
    {path: '**', component: HomeComponent, pathMatch: 'full'}
];
