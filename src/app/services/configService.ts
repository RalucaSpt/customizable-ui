import { Injectable, inject, Signal, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { BehaviorSubject, catchError, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private http = inject(HttpClient);

  private configUrls = {
    footer: 'assets/footer.json',
    languageSwitcher: 'assets/languageSwitcher.json',
    menu: 'assets/menu.json',
    sidebar: 'assets/sidebar.json',
  };

  footerConfig: Signal<any>;
  languageSwitcherConfig: Signal<any>;
  menuConfig: Signal<any>;
  sidebarConfig: Signal<any>;
  private translationUrl = 'assets/translations/';
  currentTranslation: Signal<any> = signal(null);
  languageCode$ = new BehaviorSubject<string>('en');
  currentPage = signal('Home');
  sidebarExpanded = signal(false);

  constructor() {
    this.footerConfig = this.loadConfig('footer');
    this.languageSwitcherConfig = this.loadConfig('languageSwitcher');
    this.menuConfig = this.loadConfig('menu');
    this.sidebarConfig = this.loadConfig('sidebar');
  }

  private loadConfig(key: keyof typeof this.configUrls): Signal<any> {
    return toSignal(
      this.http.get(this.configUrls[key]).pipe(
        catchError((err) => {
          console.error(`Error while loading ${key} configuration:`, err);
          return of(null);
        })
      )
    );
    this.currentTranslation = toSignal(
      this.languageCode$.pipe(
        switchMap((lang) =>
          this.http.get(this.translationUrl + lang + '.json').pipe(
            catchError((err) => {
              console.error('Error while loading translation:', err);
              return of({});
            })
          )
        )
      ),
      { initialValue: {} } // Prevents undefined issues
    );
}

public loadTranslation(langCode: string) {
  this.languageCode$.next(langCode);
   }

  public translateTag(tag: string) {
    return this.currentTranslation().hasOwnProperty(tag)
      ? this.currentTranslation()[tag]
      : tag;
  }
}
