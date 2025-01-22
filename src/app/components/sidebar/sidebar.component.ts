import { Component, effect, inject } from '@angular/core';
import { ConfigService } from '../../services/configService';
import { LanguageSwitcherComponent } from "../language-switcher/language-switcher.component";

@Component({
  selector: 'app-sidebar',
  imports: [LanguageSwitcherComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  // private configService = inject(ConfigService);
  // // sidebarConfig = this.configService.config;
  // expanded = this.configService.sidebarExpanded;
  // currentPage = this.configService.currentPage;

  // constructor(){
  //   effect(() => {
  //     // if (this.sidebarConfig()) {
  //       // console.log(' actualizat:', this.expanded());
  //     }
  //   });
  // }
}
