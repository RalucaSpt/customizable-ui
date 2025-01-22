import { Injectable, inject, Signal, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of } from 'rxjs';

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

  currentPage = signal('home');
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
  }
}
