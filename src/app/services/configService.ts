import { Injectable, inject, Signal, signal, WritableSignal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { BehaviorSubject, catchError, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private http = inject(HttpClient);
  private configUrl = 'assets/config.json';
  private translationUrl = 'assets/translations/';
  config: Signal<any> = signal(null);
  currentTranslation: Signal<any> = signal(null);
  languageCode$ = new BehaviorSubject<string>('en');
  sidebarExpanded = signal(false);
  currentPage = signal('Home');

  constructor() {
    this.loadConfig();
  }

  private loadConfig() {
    this.config = toSignal(
      this.http.get(this.configUrl).pipe(
        catchError((err) => {
          console.error('Error while loading configuration:', err);
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
