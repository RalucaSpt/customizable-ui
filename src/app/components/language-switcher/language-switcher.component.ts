import { Component, effect, inject, signal } from '@angular/core';
import { ConfigService } from '../../services/configService';
import { TranslationService } from '../../services/translation.service';
@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.css'],
})
export class LanguageSwitcherComponent {
  private configService = inject(ConfigService);
  private translationService = inject(TranslationService);
  languageConfig = this.configService.languageSwitcherConfig;
  enabledLanguages = signal<{ code: string; name: string }[]>([]);
  
  constructor() {
    effect(() => {
      if (this.languageConfig()) {
        this.enabledLanguages.set(
          this.languageConfig().languageSwitcher.languages.filter((lang: { enabled: any; }) => lang.enabled)
        );
      }
    });
  }

  updateLanguage(code: string) {
    this.translationService.setLanguage(code);
  }
}
