import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <nav>
      <a routerLink="/" routerLinkActive="active">Home</a>
      <a routerLink="/about-us" routerLinkActive="active">About Us</a>
      <a routerLink="/services" routerLinkActive="active">Services</a>
      <a routerLink="/contact" routerLinkActive="active">Contact</a>
    </nav>
    <hr />
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
