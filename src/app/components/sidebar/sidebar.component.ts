import { Component, effect, inject } from '@angular/core';
import { ConfigService } from '../../services/configService';
import { LanguageSwitcherComponent } from "../language-switcher/language-switcher.component";
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sidebar',
  imports: [LanguageSwitcherComponent, RouterLink, CommonModule, MatIconModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  private configService = inject(ConfigService);
  sidebarConfig = this.configService.sidebarConfig;
  menuConfig = this.configService.menuConfig;
  expanded = this.configService.sidebarExpanded;
  currentPage = this.configService.currentPage;  

  formatRoute(name: string): string {
    return name.toLowerCase().replace(/\s+/g, '-');
  }

  constructor() {
    effect(() => {
      if (this.sidebarConfig()) {
      }
    });
  }
}
