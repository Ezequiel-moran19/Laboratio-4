import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./pages/nav/nav.component";
import { HomeComponent } from "./pages/home/home.component";
import { RegistroComponent } from "./pages/registro/registro.component";
import { HeaderComponent } from "./pages/header/header.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavComponent, HomeComponent, RegistroComponent, HeaderComponent]
})
export class AppComponent {
  title = 'sala-de-juegos';
}
