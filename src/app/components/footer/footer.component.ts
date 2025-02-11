import { Component, effect, inject, OnInit } from '@angular/core';
import { ConfigService } from '../../services/configService';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  imports: [CommonModule, MatIconModule]
})
export class FooterComponent{
  configService = inject(ConfigService); 
  translationService = inject(TranslationService);

  footerConfig = this.configService.footerConfig;

  constructor() {
    effect(() => {
      if (this.footerConfig()) {
        console.log(' actualizat:', this.footerConfig());
      }
    });
  }
}
