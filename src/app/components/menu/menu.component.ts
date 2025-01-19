import { Component, OnInit, effect, inject, signal } from '@angular/core';
import { ConfigService } from '../../configService';
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
  sidebarExpanded = signal(false);

  constructor() {
    effect(() => {
      if (this.menuConfig()) {
        // console.log(' actualizat:', this.menuConfig());
      }
    });
  }

  toggleSidebar() {
    this.sidebarExpanded.set(!this.sidebarExpanded());
    this.configService.sidebarExpanded.set(this.sidebarExpanded());
  }
}
