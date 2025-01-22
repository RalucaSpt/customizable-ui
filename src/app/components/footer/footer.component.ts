import { Component, effect, inject, OnInit } from '@angular/core';
import { ConfigService } from '../../services/configService';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  imports: [CommonModule]
})
export class FooterComponent{
  configService = inject(ConfigService); 

  footerConfig = this.configService.footerConfig;

  constructor() {
    effect(() => {
      if (this.footerConfig()) {
        console.log(' actualizat:', this.footerConfig());
      }
    });
  }
}
