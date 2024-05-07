import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthServise } from '../../services/auth.service.';
import { CommonModule } from '@angular/common';
import { NavComponent } from "../nav/nav.component";
import { AboutComponent } from "../about/about.component";
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [RouterLink, CommonModule, NavComponent, AboutComponent, HeaderComponent]
})
export class HomeComponent {
    
}
