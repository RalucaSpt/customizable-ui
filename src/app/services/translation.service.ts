import { inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private translate = inject(TranslateService);

  constructor() {
    this.translate.setDefaultLang('en');
    this.loadLanguage();
  }

  setLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }

  getLanguage(): string {
    return this.translate.currentLang;
  }

  private loadLanguage() {
    const savedLang = localStorage.getItem('lang') || 'en';
    this.translate.use(savedLang);
  }

  translateKey(key: string): string {
    return this.translate.instant(key);
  }
}
