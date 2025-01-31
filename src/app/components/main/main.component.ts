import { Component, effect, inject } from '@angular/core';
import { ConfigService } from '../../services/configService';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  configService = inject(ConfigService);
  menuConfig = this.configService.menuConfig;
  sidebarConfig = this.configService.sidebarConfig;
  footerConfig = this.configService.footerConfig;
  languageConfig = this.configService.languageSwitcherConfig;

  constructor() {
    effect(() => {
      console.log('menuConfig:', this.menuConfig());
      console.log('sidebarConfig:', this.sidebarConfig());
      console.log('footerConfig:', this.footerConfig());
      console.log('languageConfig:', this.languageConfig());
    });
  }
}
