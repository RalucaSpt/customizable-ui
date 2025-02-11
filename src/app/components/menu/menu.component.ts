import { Component, OnInit, effect, inject, signal } from '@angular/core';
import { ConfigService } from '../../services/configService';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { LanguageSwitcherComponent } from "../language-switcher/language-switcher.component";
import { TranslationService } from '../../services/translation.service'; // Import TranslationService

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  imports: [CommonModule, MatIconModule, RouterLink, LanguageSwitcherComponent]
})
export class MenuComponent {
  configService = inject(ConfigService);
  menuConfig = this.configService.menuConfig;
  sidebarConfig = this.configService.sidebarConfig;
  sidebarExpanded = this.configService.sidebarExpanded;
  currentPage = this.configService.currentPage;
  translation = this.configService.currentTranslation;

  translationService = inject(TranslationService);

  constructor() {
    effect(() => {
      if (this.menuConfig()) {
        // console.log('Menu Config Updated:', this.menuConfig());
      }
    });
  }

  toggleSidebar() {
    this.sidebarExpanded.set(!this.sidebarExpanded());
    console.log('sidebarExpanded:', this.sidebarExpanded());
  }

  onClickItem(item: any) {
    this.currentPage.set(item);
    console.log('currentPage:', this.currentPage());
  }

  formatRoute(name: string): string {
    return name.toLowerCase().replace(/\s+/g, '-');
  }
}
