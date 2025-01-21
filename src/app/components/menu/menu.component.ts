import { Component, OnInit, effect, inject, signal } from '@angular/core';
import { ConfigService } from '../../services/configService';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  imports: [CommonModule, MatIconModule]
})
export class MenuComponent {
  private configService = inject(ConfigService); 
  menuConfig = this.configService.config;
  sidebarExpanded = this.configService.sidebarExpanded;
  currentPage = this.configService.currentPage;

  constructor() {
    effect(() => {
      if (this.menuConfig()) {
        // console.log(' actualizat:', this.menuConfig());
      }
    });
  }

  toggleSidebar() {
    this.sidebarExpanded.set(!this.sidebarExpanded());
    console.log('sidebarExpanded:', this.sidebarExpanded());
  }

  onMenuItemClick(item: string) {
    this.currentPage.set(item);
    console.log('currentPage:', this.currentPage());
  }
}
