import { Component } from '@angular/core';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from "./components/footer/footer.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { MainComponent } from "./components/main/main.component";

@Component({
  selector: 'app-root',
  imports: [MenuComponent, FooterComponent, SidebarComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
