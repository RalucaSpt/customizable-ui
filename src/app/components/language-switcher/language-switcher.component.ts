import { Component, effect, inject } from '@angular/core';
import { ConfigService } from '../../services/configService';
@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.css'],
})
export class LanguageSwitcherComponent {
  private configService = inject(ConfigService);

  languageConfig = this.configService.languageSwitcherConfig;
  enabledLanguages: { code: string; name: string }[] = [];

  constructor() {
    effect(() => {
      if (this.languageConfig()) {
        console.log(this.languageConfig());
      }
    });
  }
}
